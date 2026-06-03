import { siteConfig } from "@/site.config";

const dateFormat = new Intl.DateTimeFormat(
  siteConfig.date.locale,
  siteConfig.date.options,
);

const railFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export function getFormattedDate(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions,
): string {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(siteConfig.date.locale, {
      ...(siteConfig.date.options as Intl.DateTimeFormatOptions),
      ...options,
    });
  }

  return dateFormat.format(new Date(date));
}

export function formatRailDate(date: Date): string {
  return railFormatter.format(date);
}

export function parseYearMonth(value: string): Date {
  const [year, month] = value.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

export function formatExperiencePeriod(
  start: string,
  end: string | "present",
): string {
  const startLabel = formatRailDate(parseYearMonth(start));
  if (end === "present") return `${startLabel} — present`;
  return `${startLabel} — ${formatRailDate(parseYearMonth(end))}`;
}
