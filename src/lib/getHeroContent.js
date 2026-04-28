import { getSanityClient, hasSanityConfig } from "./sanityClient.js";

const PAGE_KEYS = new Set(["home", "about"]);

function normalizeLink(link) {
  if (typeof link !== "string") return null;
  const trimmed = link.trim();
  return trimmed || null;
}

function normalizeHeroContent(raw) {
  if (!raw || typeof raw !== "object") return null;

  return {
    desktopImage: raw.desktopImage || null,
    mobileImage: raw.mobileImage || raw.desktopImage || null,
    alt: raw.alt || null,
    primaryCtaLink: normalizeLink(raw.primaryCtaLink),
    secondaryCtaLink: normalizeLink(raw.secondaryCtaLink),
    eyebrowOverride: raw.eyebrowOverride || null,
  };
}

const HERO_QUERY =
  '*[_type == "heroSection" && page == $page && isActive == true] | order(order asc, _updatedAt desc)[0]{"desktopImage": desktopImage.asset->url, "mobileImage": mobileImage.asset->url, alt, primaryCtaLink, secondaryCtaLink, eyebrowOverride}';

export async function getHeroContent(page) {
  if (!PAGE_KEYS.has(page)) return null;
  if (!hasSanityConfig()) return null;

  const client = getSanityClient();
  if (!client) return null;

  try {
    const result = await client.fetch(HERO_QUERY, { page });
    return normalizeHeroContent(result);
  } catch {
    return null;
  }
}
