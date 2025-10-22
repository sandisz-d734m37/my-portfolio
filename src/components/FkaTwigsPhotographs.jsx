import PhotoGrid from "./PhotoGrid";

const photos = [
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7683.jpg",
    alt: "Dreamy photograph of FKA Twigs performing during her Magdalene tour at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7508-2.jpg",
    alt: "professional photograph of FKA Twigs and her dancers performing her Magdalene album in black & white on tour at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7516-2.jpg",
    alt: "Dreamy digital photography of FKA Twigs and her dancers performing on stage at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7556.jpg",
    alt: "professional digital black and white exciting photograph of FKA Twigs dancing with lots of movement fog and lights",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7560-2.jpg",
    alt: "professional exciting photograph of FKA Twigs at the Mission Ballroom in Denver, Colorado on her Magdalene tour",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7563.jpg",
    alt: "black and white professional photograph of FKA Twigs on tour performing her Magdalene album",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7599-2.jpg",
    alt: "professional photograph of FKA Twigs back up dancers at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7599.jpg",
    alt: "exciting photograph of FKA Twigs back up dancers on tour",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7601-2.jpg",
    alt: "professional photograph of back up dancers for FKA Twigs on her Madgelene tour at the Mission Ballroom in Denver, Colorado",
  },
];

export default function FkaTwigsPhotographs() {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-6">FKA Twigs in concert</h2>
      <PhotoGrid photos={photos} />
    </div>
  );
}
