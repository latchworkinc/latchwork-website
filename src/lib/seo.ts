import type { Metadata } from "next";

const SITE_NAME = "Latchwork Inc";

const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Latchwork Inc — Business Operations & Back-Office Efficiency Consulting",
};

export function pageMetadata(title: string, description: string): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    openGraph: {
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
