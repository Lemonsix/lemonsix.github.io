const BASE = import.meta.env.BASE_URL;

function isAbsolute(path: string): boolean {
  return /^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(path);
}

export function withBase(path = "/"): string {
  if (isAbsolute(path)) return path;
  const base = BASE.replace(/\/+$/, "");
  const rel = path.startsWith("/") ? path : `/${path}`;
  return `${base}${rel}`;
}

export function absoluteUrl(
  path: string,
  site: URL | string | undefined,
): string {
  if (isAbsolute(path)) return new URL(path).toString();
  return new URL(withBase(path), site).toString();
}
