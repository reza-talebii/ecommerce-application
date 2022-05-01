import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

export const client = new SanityClient({
  projectId: "omzd836g",
  dataset: "production",
  apiVersion: "2022-04-01",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
