import PhotoGrid from "./PhotoGrid";

const photos = [
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/Theater.svg",
    alt: "Theater cursive SVG",
  },
];

export default function PhotographyHomePage() {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-6">Graphics</h2>
      <PhotoGrid photos={photos} />
    </div>
  );
}
