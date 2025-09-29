import PhotoGrid from "./PhotoGrid";

const photos = [
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7683.jpg",
    alt: "FKA Twigs - Photograph of FKA Twigs performing during her Magdelene tour at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/puppet_theater/DSC04563.jpg",
    alt: "slaughterhouse tee - professional ecommerce photograph of female model in high-end tank top garment with screenprinted graphic",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7556.jpg",
    alt: "FKA Twigs - Dreamy proffesional photograph of FKA Twigs and her dancers performing her Magdelene album on tour at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/puppet_theater/DSC04889.jpg",
    alt: "hat - sneak peak professional high contrast editorial fashion photograph of streetwear dad cap with heavy embroidery",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/puppet_theater/pantses2.jpg",
    alt: "pants - Proffesional ecommerce flatlay photograph of 3 uniquely styled pants, one cargo pant, one dress pant, and one sweat pant.",
  },
];

export default function PhotographyHomePage() {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-6">Photography</h2>
      <PhotoGrid photos={photos} />
    </div>
  );
}
