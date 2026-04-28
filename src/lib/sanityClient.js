import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2023-10-01";
const useCdn = import.meta.env.VITE_SANITY_USE_CDN !== "false";

export function hasSanityConfig() {
  return Boolean(projectId && dataset);
}

export function getSanityClient() {
  if (!hasSanityConfig()) return null;

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  });
}
