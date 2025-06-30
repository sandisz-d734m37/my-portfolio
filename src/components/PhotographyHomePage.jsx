import PhotoGrid from "./PhotoGrid";

const photos = [
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7683.jpg",
    alt: "Photograph of FKA Twigs performing during her Magdelene tour at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7508-2.jpg",
    alt: "Proffesional photograph of FKA Twigs and her dancers performing her Magdelene album in black & white on tour at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7516-2.jpg",
    alt: "Dreamy proffesional photograph of FKA Twigs and her dancers performing her Magdelene album on tour at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7556.jpg",
    alt: "Dreamy proffesional photograph of FKA Twigs and her dancers performing her Magdelene album on tour at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7560-2.jpg",
    alt: "Dreamy proffesional photograph of FKA Twigs and her dancers performing her Magdelene album on tour at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7563.jpg",
    alt: "Dreamy proffesional photograph of FKA Twigs and her dancers performing her Magdelene album on tour at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7599-2.jpg",
    alt: "Dreamy proffesional photograph of FKA Twigs and her dancers performing her Magdelene album on tour at the Mission Ballroom in Denver, Colorado",
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
