import PhotoGrid from "./PhotoGrid";

const photos = [
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/puppet_theater/DSC04563.jpg",
    alt: "slaughterhouse tee - professional ecommerce photograph of female model in high-end tank top garment with screenprinted graphic",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/puppet_theater/DSC04889.jpg",
    alt: "hat - sneak peak professional high contrast editorial fashion photograph of streetwear dad cap with heavy embroidery",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/puppet_theater/pantses2.jpg",
    alt: "pants - professional ecommerce flatlay photograph of 3 uniquely styled pants, one cargo pant, one dress pant, and one sweat pant.",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/multi-act+Lookbook+RE-EDITED/DSC03497.jpg",
    alt: "Act IV - editorial fashion photograph for denver based streetwear brand Puppet Theater's act 4 lookbook",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/multi-act+Lookbook+RE-EDITED/DSC04055.jpg",
    alt: "Act IV - editorial fashion photograph for denver based streetwear brand Puppet Theater's act 4 lookbook",
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
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/multi-act+Lookbook+RE-EDITED/DSC03562.jpg",
    alt: "Act IV - editorial fashion photograph for denver based streetwear brand Puppet Theater's act 4 lookbook",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/multi-act+Lookbook+RE-EDITED/DSC03489.jpg",
    alt: "Act IV - editorial fashion photograph for denver based streetwear brand Puppet Theater's act 4 lookbook",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/multi-act+Lookbook+RE-EDITED/DSC03702.jpg",
    alt: "Act IV - editorial fashion photograph for denver based streetwear brand Puppet Theater's act 4 lookbook",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC02924.jpg",
    alt: "Act II Advertising - Advertorial imagery for denver based fashion brand puppet theater",
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
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC04861.jpg",
    alt: "Octane Cap - editorial streetwear photography for denver based fashion brand puppet theater",
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
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08506.jpg",
    alt: "Jennifer - Professional photograph of my beautiful girlfriend wearing denver based brand Saint Destiny",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08519.jpg",
    alt: "Jennifer - Professional photograph of my beautiful girlfriend wearing denver based brand Saint Destiny",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08537.jpg",
    alt: "Jennifer - Professional photograph of my beautiful girlfriend wearing denver based brand Puppet Theater",
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
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08669.jpg",
    alt: "Jennifer - Professional photograph of my beautiful girlfriend wearing denver based brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08755.jpg",
    alt: "Jennifer - Professional photograph of my beautiful girlfriend wearing denver based brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08819.jpg",
    alt: "Jennifer - Professional photograph of my beautiful girlfriend wearing denver based brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08883.jpg",
    alt: "Knit Editorial - Editorial photograph in a soccer field for Denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08910.jpg",
    alt: "Knit Editorial - Editorial photograph in a soccer field for Denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC08919.jpg",
    alt: "Knit Editorial - Editorial photograph in a soccer field for Denver based elevated streetwear brand Puppet Theater",
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
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC09040.jpg",
    alt: "Knit Editorial - Editorial photograph in a soccer field for Denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC09096.jpg",
    alt: "Knit Editorial - Editorial photograph in a soccer field for Denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC09203.jpg",
    alt: "Knit Editorial - Editorial photograph in a soccer field for Denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/MiscPhotography/October+21+2025/DSC09369.jpg",
    alt: "Knit Editorial - Editorial photograph in a soccer field for Denver based elevated streetwear brand Puppet Theater",
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
