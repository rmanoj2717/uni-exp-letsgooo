const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Normalize pathname for nav active state (basePath + trailing slashes). */
export function normalizePath(path: string): string {
  let p = path || "/";
  if (basePath && p.startsWith(basePath)) {
    p = p.slice(basePath.length) || "/";
  }
  if (p.length > 1 && p.endsWith("/")) {
    p = p.slice(0, -1);
  }
  return p || "/";
}

export function isNavActive(pathname: string, href: string): boolean {
  return normalizePath(pathname) === normalizePath(href);
}
