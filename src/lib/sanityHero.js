const SANITY_API_VERSION = "v2023-10-01";

function hasSanityConfig() {
  return Boolean(
    import.meta.env.VITE_SANITY_PROJECT_ID &&
      import.meta.env.VITE_SANITY_DATASET,
  );
}

function normalizeLink(link) {
  if (typeof link !== "string") return null;
  const trimmed = link.trim();
  return trimmed.length ? trimmed : null;
}

function normalizeHeroData(raw) {
  if (!raw || typeof raw !== "object" || raw.isActive !== true) return null;

  return {
    page: raw.page,
    desktopImageUrl: raw.desktopImageUrl || null,
    mobileImageUrl: raw.mobileImageUrl || raw.desktopImageUrl || null,
    alt: raw.alt || null,
    primaryCtaLink: normalizeLink(raw.primaryCtaLink),
    secondaryCtaLink: normalizeLink(raw.secondaryCtaLink),
    eyebrowOverride: raw.eyebrowOverride || null,
    isActive: true,
    order: typeof raw.order === "number" ? raw.order : null,
  };
}

export async function fetchHeroSection(page) {
  if (!hasSanityConfig()) return null;
  if (page !== "home" && page !== "about") return null;

  const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
  const dataset = import.meta.env.VITE_SANITY_DATASET;
  const useCdn = import.meta.env.VITE_SANITY_USE_CDN !== "false";
  const host = useCdn ? "apicdn.sanity.io" : "api.sanity.io";

  const query =
    '*[_type == "heroSection" && page == $page && isActive == true] | order(order asc, _updatedAt desc)[0]{page, "desktopImageUrl": desktopImage.asset->url, "mobileImageUrl": mobileImage.asset->url, alt, primaryCtaLink, secondaryCtaLink, eyebrowOverride, isActive, order}';

  const url = new URL(
    `https://${projectId}.${host}/${SANITY_API_VERSION}/data/query/${dataset}`,
  );
  url.searchParams.set("query", query);
  url.searchParams.set("$page", JSON.stringify(page));

  try {
    const response = await fetch(url.toString(), { method: "GET" });
    if (!response.ok) return null;

    const payload = await response.json();
    return normalizeHeroData(payload?.result ?? null);
  } catch {
    return null;
  }
}
