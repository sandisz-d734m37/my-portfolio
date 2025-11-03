import PhotoGrid from "./PhotoGrid";

const photos = [
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/puppet_theater/DSC04889.jpg",
    alt: "hat - sneak peak professional high contrast editorial fashion photograph of streetwear dad cap with heavy embroidery",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/puppet_theater/pantses2.jpg",
    alt: "pants - professional ecommerce flatlay photograph of 3 uniquely styled pants, one cargo pant, one dress pant, and one sweat pant.",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/multi-act+Lookbook+RE-EDITED/DSC03857.jpg",
    alt: "Act IV - editorial fashion photograph for denver based streetwear brand Puppet Theater's act 4 lookbook",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/multi-act+Lookbook+RE-EDITED/DSC04120.jpg",
    alt: "Act IV - editorial fashion photograph for denver based streetwear brand Puppet Theater's act 4 lookbook",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/multi-act+Lookbook+RE-EDITED/DSC03702.jpg",
    alt: "Act IV - editorial fashion photograph for denver based streetwear brand Puppet Theater's act 4 lookbook",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC02972.jpg",
    alt: "Act II Advertising - Advertorial imagery for denver based fashion brand puppet theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC03042.jpg",
    alt: "Act II Advertising - Advertorial imagery for denver based fashion brand puppet theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC04871-2.jpg",
    alt: "Octane Cap - editorial streetwear photography for denver based fashion brand puppet theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC04950.jpg",
    alt: "Octane Cap - editorial streetwear photography for denver based fashion brand puppet theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC07504.jpg",
    alt: "Knit Editorial - professional minimal fashion photograph",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08247.jpg",
    alt: "Knit Editorial - professional editorial fashion photograph",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08468.jpg",
    alt: "Jennifer - Professional photograph of my beautiful girlfriend wearing denver based brand Saint Destiny",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08519.jpg",
    alt: "Jennifer - Professional photograph of my beautiful girlfriend wearing denver based brand Saint Destiny",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08550.jpg",
    alt: "Jennifer - Professional photograph of my beautiful girlfriend wearing denver based brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08662.jpg",
    alt: "Jennifer - Professional photograph of my beautiful girlfriend wearing denver based brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08819.jpg",
    alt: "Jennifer - Professional photograph of my beautiful girlfriend wearing denver based brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08953.jpg",
    alt: "Knit Editorial - Editorial photograph in a soccer field for Denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC09037.jpg",
    alt: "Knit Editorial - Editorial photograph in a soccer field for Denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC09096.jpg",
    alt: "Knit Editorial - Editorial photograph in a soccer field for Denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7599-2.jpg",
    alt: "professional photograph of FKA Twigs back up dancers at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/BrockHampton/BHMPTN+-+dark+merlin.jpg",
    alt: "Dramatic Photograph of BROCKHAMPTON frontman Merlyn Wood, performing at Denver's Globe Hall, their first concert on tour",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7556.jpg",
    alt: "professional digital black and white exciting photograph of FKA Twigs dancing with lots of movement fog and lights",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Dir+En+Grey/dir-en-grey-fman-close-alt.jpg",
    alt: "Close Up cinematic concert Photograph of Japanese Heavy Metal band Dir En Grey frontman with dramatic backgrop of drummer cymbals behind him",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/FKA_TWIGS/DSCF7683.jpg",
    alt: "Dreamy photograph of FKA Twigs performing during her Magdalene tour at the Mission Ballroom in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Holly/11.jpg",
    alt: "Professional Pet Photography of a Pomeranian-Husky American Eskimo dog wearing Clot official ComplexCon dog clothing",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Holly/23.jpg",
    alt: "Professional Pet Photography of an American Eskimo puppy wearing dog clothing by Clot",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Holly/24.jpg",
    alt: "Professional Pet Photography of a puppy wearing dog clothing",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Holly/26.jpg",
    alt: "Professional dog Photography of a Pomesky American Eskimo dog wearing Clot dog clothing",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Holly/28.jpg",
    alt: "Pet Photography of a Pomsky Eskimo dog breed in dog clothing from Clot and ComplexCon",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Holly/4.jpg",
    alt: "Professional Pet Photography of a Pomeranian-Husky Eskimo dog breed wearing dog clothing",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Holly/6.jpg",
    alt: "Professional Pet Photography of a Pomky Eskimo puppy wearing ComplexCon exclusive dog clothing from Clot",
  },
];

export default function PhotographyHomePage() {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-6">Misc. Photography</h2>
      <PhotoGrid photos={photos} />
    </div>
  );
}
