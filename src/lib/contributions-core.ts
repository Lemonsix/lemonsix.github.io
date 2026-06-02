import type { ContributionDay } from "../types/portfolio";

export const YEAR_WINDOW_DAYS = 365;

export type WeekColumn = (ContributionDay | null)[];

export interface ContributionData {
  days: ContributionDay[];
  weeks: WeekColumn[];
  total: number;
}

function toDateString(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function filterLastYear(days: ContributionDay[]): ContributionDay[] {
  const today = new Date();
  today.setHours(12, 0, 0, 0);

  const start = new Date(today);
  start.setDate(start.getDate() - (YEAR_WINDOW_DAYS - 1));

  const startStr = toDateString(start);
  const endStr = toDateString(today);

  return days
    .filter((day) => day.date >= startStr && day.date <= endStr)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function sumContributions(days: ContributionDay[]): number {
  return days.reduce((sum, day) => sum + day.count, 0);
}

export function contributionLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 7) return 2;
  if (count <= 14) return 3;
  return 4;
}

export function groupDaysByWeek(days: ContributionDay[]): WeekColumn[] {
  if (days.length === 0) return [];

  const sorted = [...days].sort((a, b) => a.date.localeCompare(b.date));
  const first = new Date(sorted[0].date + "T12:00:00");
  const startPad = first.getDay();

  const padded: (ContributionDay | null)[] = [
    ...Array<null>(startPad).fill(null),
    ...sorted,
  ];

  while (padded.length % 7 !== 0) {
    padded.push(null);
  }

  const weeks: WeekColumn[] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }

  return weeks;
}

export function formatPopover(date: string, count: number): string {
  const label = count === 1 ? "1 commit" : `${count} commits`;
  const formatted = new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return `${label} · ${formatted}`;
}

export function buildContributionData(days: ContributionDay[]): ContributionData | null {
  const filtered = filterLastYear(days);
  if (filtered.length === 0) return null;

  return {
    days: filtered,
    weeks: groupDaysByWeek(filtered),
    total: sumContributions(filtered),
  };
}
