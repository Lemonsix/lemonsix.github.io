import type { ContributionDay } from "../types/portfolio";
import {
  buildContributionData,
  type ContributionData,
} from "./contributions-core";

export {
  contributionLevel,
  filterLastYear,
  groupDaysByWeek,
  type ContributionData,
  type WeekColumn,
} from "./contributions-core";

const GITHUB_USERNAME = "lemonsix";

const CONTRIBUTIONS_QUERY = `
  query ($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

interface GraphQLWeek {
  contributionDays: { date: string; contributionCount: number }[];
}

interface GraphQLResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: GraphQLWeek[];
        };
      };
    };
  };
}

interface FallbackContribution {
  date: string;
  count: number;
}

interface FallbackResponse {
  contributions?: FallbackContribution[];
}

function flattenWeeks(weeks: GraphQLWeek[]): ContributionDay[] {
  return weeks.flatMap((week) =>
    week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
    })),
  );
}

async function fetchFromGraphQL(
  username: string,
  token: string,
): Promise<ContributionDay[] | null> {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: CONTRIBUTIONS_QUERY,
      variables: { userName: username },
    }),
  });

  if (!response.ok) return null;

  const json = (await response.json()) as GraphQLResponse;
  const calendar =
    json.data?.user?.contributionsCollection?.contributionCalendar;

  if (!calendar) return null;

  return flattenWeeks(calendar.weeks);
}

async function fetchFromFallback(
  username: string,
): Promise<ContributionDay[] | null> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}`,
  );

  if (!response.ok) return null;

  const json = (await response.json()) as FallbackResponse;
  const contributions = json.contributions;

  if (!contributions?.length) return null;

  return contributions.map((entry) => ({
    date: entry.date,
    count: entry.count,
  }));
}

export async function getContributions(
  username: string = GITHUB_USERNAME,
): Promise<ContributionData | null> {
  const token = import.meta.env.GITHUB_TOKEN;

  let days: ContributionDay[] | null = null;

  if (token) {
    try {
      days = await fetchFromGraphQL(username, token);
    } catch {
      days = null;
    }
  }

  if (!days) {
    try {
      days = await fetchFromFallback(username);
    } catch {
      days = null;
    }
  }

  if (!days) return null;

  return buildContributionData(days);
}
