// Set VITE_SITE_URL to the public HTTPS origin before building a deployment.
const configuredOrigin = import.meta.env["VITE_SITE_URL"]?.trim();
function publicOrigin(value: string | undefined) {
  if (!value) return undefined;
  const url = new URL(value);
  if (url.protocol !== "https:" || /^(localhost|127\.|\[::1\])/.test(url.hostname)) {
    throw new Error("VITE_SITE_URL must be a public HTTPS website address.");
  }
  return url.origin;
}
export const siteOrigin = publicOrigin(configuredOrigin);
export function socialMeta(path: string) {
  const image = siteOrigin ? `${siteOrigin}/social/jc-accounting-preview.jpg` : undefined;
  return [
    { property: "og:site_name", content: "JC Accounting & Tax Help Services LLC" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    ...(image
      ? [
          { property: "og:url", content: `${siteOrigin}${path}` },
          { property: "og:image", content: image },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
          { property: "og:image:type", content: "image/jpeg" },
          {
            property: "og:image:alt",
            content:
              "JC Accounting & Tax Help Services LLC — Accounting you can count on, with Yessica Martinez.",
          },
          { name: "twitter:image", content: image },
          {
            name: "twitter:image:alt",
            content:
              "JC Accounting & Tax Help Services LLC — Accounting you can count on, with Yessica Martinez.",
          },
        ]
      : []),
  ];
}
