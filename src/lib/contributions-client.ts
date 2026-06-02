import {
  buildContributionData,
  contributionLevel,
  formatPopover,
  type ContributionData,
} from "./contributions-core";
import type { ContributionDay } from "../types/portfolio";

interface FallbackContribution {
  date: string;
  count: number;
}

interface FallbackResponse {
  contributions?: FallbackContribution[];
}

async function fetchContributions(
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

function renderGraph(data: ContributionData): string {
  const weeksHtml = data.weeks
    .map((week) => {
      const cells = week
        .map((day) => {
          if (!day) {
            return '<span class="contrib-cell contrib-empty" aria-hidden="true"></span>';
          }

          const level = contributionLevel(day.count);
          const popover = formatPopover(day.date, day.count);

          return `<span class="contrib-cell level-${level}" tabindex="0"><span class="contrib-popover">${popover}</span></span>`;
        })
        .join("");

      return `<div class="contrib-week">${cells}</div>`;
    })
    .join("");

  return `
    <p class="contrib-stats">TOTAL_CONTRIBUTIONS (last year): ${data.total}</p>
    <div class="contrib-wrap">
      <div class="contrib-grid" role="img" aria-label="GitHub contribution calendar">
        ${weeksHtml}
      </div>
    </div>
    <div class="contrib-legend">
      <span>less</span>
      <span class="contrib-cell level-0"></span>
      <span class="contrib-cell level-1"></span>
      <span class="contrib-cell level-2"></span>
      <span class="contrib-cell level-3"></span>
      <span class="contrib-cell level-4"></span>
      <span>more</span>
    </div>
  `;
}

export async function loadContributions(root: HTMLElement): Promise<void> {
  const username = root.dataset.username ?? "lemonsix";
  const loading = root.querySelector<HTMLElement>(".contrib-loading");
  const content = root.querySelector<HTMLElement>(".contrib-content");

  if (!loading || !content) return;

  try {
    const days = await fetchContributions(username);
    const data = days ? buildContributionData(days) : null;

    if (!data) {
      content.innerHTML =
        '<p class="contrib-error">&gt; ERROR: unable to load activity graph</p>';
    } else {
      content.innerHTML = renderGraph(data);
    }
  } catch {
    content.innerHTML =
      '<p class="contrib-error">&gt; ERROR: unable to load activity graph</p>';
  } finally {
    loading.hidden = true;
    content.hidden = false;
  }
}
