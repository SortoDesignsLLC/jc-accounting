# Sharing preview and icons

The share artwork is `public/social/jc-accounting-preview-v2.jpg` (1200 × 630). The versioned filename refreshes cached previews after artwork changes. Created with the built-in OpenAI image-generation tool using the existing logo and Yessica's portrait. The favicon is a simplified native SVG JC emblem, rendered to PNG and a genuine multi-size ICO.

## Public URL configuration

Set `VITE_SITE_URL` to the real public HTTPS website origin in the hosting provider's build environment, then rebuild. For local configuration, put this setting in `.env.local` (ignored by Git) and restart Vite. Do not use the GitHub repository address or a localhost URL. On Vercel, the build automatically uses VERCEL_PROJECT_PRODUCTION_URL when no explicit VITE_SITE_URL is supplied. Outside Vercel, until configured, image and og:url tags are intentionally omitted rather than publishing invalid sharing URLs. The artwork and icons can still be inspected locally.

Verify the deployed home and nested-page HTML includes absolute `og:image` and `twitter:image` URLs, and that those URLs load without authentication. Existing cached previews may need refreshing through the relevant platform. No deployment or test message was sent.

Metadata uses TanStack Router's native head mechanism: https://tanstack.com/router/latest/docs/guide/document-head-management

## Final artwork prompt

Create a finished premium website link-preview banner for JC Accounting and Tax Services. Canvas landscape exactly 1200x630 or same 1.90476 aspect ratio. Input 1 is exact brand logo: preserve lettering, design, red and navy colors and proportions. Input 2 is authentic portrait of Yessica: preserve her facial identity, hair, gray suit and pose exactly. Composition: clean white left 60% with prominent horizontal logo in upper-middle and one short supporting line below in large elegant bold navy sans-serif, exact text 'Accounting you can count on.' on two lines. Right 40% contains a beautifully lit waist-up crop of the provided portrait on its original pale gray background, clean rectangular photo plane edge to edge, no arch. Restrained navy strip along bottom with a fine red upper rule, no extra text. Keep logo and headline 7% inside canvas edges. Clear brand and friendly human focal point at thumbnail size. Professional typical established accounting firm, colors white #ffffff, navy #14235b, red #c51e36. No extra claims, no decorative SVG-like art, no badges, no buttons, no fake browser chrome, no watermark, no invented text. Finished graphic design, not a mockup.
