import type { ImageLoaderProps } from "next/image";

/**
 * Strapi + Cloudinary URLs use https://res.cloudinary.com/.../image/upload/...
 *
 * We prepend Cloudinary resize/quality transforms so the browser loads the CDN
 * directly. That avoids Next's image optimizer (server-side fetch), which fails when
 * Node cannot verify TLS to remote HTTPS origins on some networks.
 */
export default function portfolioImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const q = quality ?? 75;

  if (src.startsWith("https://res.cloudinary.com/") && src.includes("/image/upload/")) {
    const qIndex = src.indexOf("?");
    const path = qIndex === -1 ? src : src.slice(0, qIndex);
    const search = qIndex === -1 ? "" : src.slice(qIndex);
    const transformed = path.replace(
      /\/image\/upload\//,
      `/image/upload/w_${width},q_${q},c_limit,f_auto/`,
    );
    return transformed + search;
  }

  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${q}`;
}
