const CLOUDFRONT_URL = "https://dzzfx63u0gkln.cloudfront.net";
const SOURCE_BUCKET = "sthieme-portfolio-assets"; // your S3 bucket name

export function buildImageUrl(key, options = {}) {
  const edits = {};

  if (options.width)
    edits.resize = { ...(edits.resize || {}), width: options.width };
  if (options.height)
    edits.resize = { ...(edits.resize || {}), height: options.height };
  if (options.quality) edits.jpeg = { quality: options.quality };

  const request = {
    bucket: SOURCE_BUCKET,
    key, // raw key: "photos/ecommerce/Black B Knee F.jpg"
    edits: Object.keys(edits).length ? { edits } : {},
  };

  const encoded = btoa(JSON.stringify(request));
  return `${CLOUDFRONT_URL}/${encoded}`;
}
