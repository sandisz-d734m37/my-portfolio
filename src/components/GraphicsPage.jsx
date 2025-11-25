const photos = [
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/Theater.svg",
    alt: "Theater cursive SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/PBA_sticker_alt.svg",
    alt: "Puppet NBA Test Graphic SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/Feel_Something.svg",
    alt: "Feel Something Test Graphic",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/stars_sticker.svg",
    alt: "Military inspired Star Sticker Made SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/SUSPENSION_sticker.svg",
    alt: "Suspension of Disbelief Sticker Made SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/pngs/SPRPTNT.png",
    alt: "Cursive Spraypaint Treated Puppet Theater logo used on tags and bags PNG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/Souuund.svg",
    alt: "Soooound graphic used on Octane Cap",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/SharpP.svg",
    alt: "Puppet Theater Sharp P graphic SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/suspension.svg",
    alt: "Suspension of Disbelief Test Graphic SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/Chotic.svg",
    alt: "Puppet Theater Chotic graphic SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/TheaterLady.svg",
    alt: "Test Cursive Theater plus music and Itilian woman graphic SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/StopFightingptch.svg",
    alt: "Test patch-like graphic stop fighting supporting peace peace is easy graphic SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/TOTAL_CONTROL_g.svg",
    alt: "Test tech or security company graphic offering TOTAL CONTROL in elegent Green SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/TOTAL_CONTROL_r_alt.svg",
    alt: "Test elevated tech or security company, or luxury brand graphic, offering TOTAL CONTROL in secure Red SVG",
  },
];

export default function PhotographyHomePage() {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-6">Graphics</h2>
      <div class="columns-2 gap-2 space-y-2">
        {[...photos]
          .sort(() => Math.random() - 0.5)
          .map((photo, index) => (
            <img
              key={index}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="p-3 w-full mx-auto h-aut max-h-[95vh]"
            />
          ))}
      </div>
    </div>
  );
}
