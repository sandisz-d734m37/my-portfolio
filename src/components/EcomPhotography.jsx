import PhotoGallery from "./PhotoGallery";

const actIIEcomPhotos = [
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Black+B+Knee+F.jpg",
    alt: "Black Puppet Theater Knit SkullCap Beanie",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Purp+B+Knee+F.jpg",
    alt: "Purple Puppet Theater Knit SkullCap Beanie",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/B+Knees.jpg",
    alt: "Set of 2 Puppet Theater Knit SkullCap Beanies, one inside out",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Kumri+F.jpg",
    alt: "Professional ecommerce photography of high end designer red communist or socialist Russia inspired, uniquely constructed sweater/thermal piece",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Kumri+B.jpg",
    alt: "Professional flatlay photograph of red sweatshirt longsleeve hybrid",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/BlueHoodie+F+ReShoot.jpg",
    alt: "Professional ecommerce photography of blue high end designer hoodie from Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/BlueHoodie+B+ReShoot.jpg",
    alt: "Professional flatlay photograph of blue elevated streetwear hoodie from Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Black+Tracky+F.jpg",
    alt: "Professional flatlay of designer black track jacket - ecommerce photography",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Black+Tracky+F+2.jpg",
    alt: "Ecommerce photograph of Sport Top designer black track jacket with white stripe",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Black+Tracky+F+3.jpg",
    alt: "Ecommerce photograph of Sport Top black elevated streetwear track jacket",
  },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Black+Tracky+B.jpg",
  //   alt: "Professional Ecommerce photography of Puppet Theater Sport Top black high fashion elevated streetwear track jacket back",
  // },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/LS+T+F.jpg",
  //   alt: "Professional ecommerce photography of black designer boxy long sleeve graphic tee",
  // },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/LS+T+B.jpg",
  //   alt: "Professional flatlay photograph of black graphic long sleeve tee with unique boxy cut",
  // },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Knit+W+F.jpg",
  //   alt: "Professional ecommerce photography of high end designer white knit striped zip up",
  // },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Knit+W+B.jpg",
  //   alt: "Professional flatlay photograph of white knit zip up sweater",
  // },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Knit+B+F.jpg",
  //   alt: "Professional ecommerce photography of high end designer black knit striped zip up",
  // },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Knit+B+B.jpg",
  //   alt: "Professional flatlay photograph of black knit zip up sweater",
  // },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Flannel+F.jpg",
    alt: "Professional ecommerce photography of high end designer flannel",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Flannel+F+2.jpg",
    alt: "Professional flatlay photograph of multicolor, uniquely constructed elevated streetwear flannel from Puppet Theater",
  },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Flannel+B.jpg",
  //   alt: "Professional ecommerce photography of high end designer flannel from Puppet Theater",
  // },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Bomber+F.jpg",
    alt: "Ecommerce photography of military inspired bomber jacket from Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Bomber+F+3.jpg",
    alt: "Professional flatlay photograph of high end streetwear military inspired bomber jacket from Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Bomber+F+2.jpg",
    alt: "Professional Ecommerce photograph of high fashion military inspired bomber jacket from Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Bomber+B.jpg",
    alt: "Professional flatlay photograph of designer olive bomber jacker from Puppet Theater",
  },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/S+Glass+Tracky+F.jpg",
  //   alt: "Professional Ecommerce photography of Puppet Teater of brown pinstripe dress pant flatlay with white background",
  // },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/S+Glass+Tracky+F+2.jpg",
  //   alt: "Professional ecommerce photograph of brown pinstripe dress pant back with perfect background",
  // },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/S+Glass+Tracky+B.jpg",
  //   alt: "Professional ecommerce photograph of brown pinstripe dress pant back with perfect background",
  // },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Brown+Dress+P+F.jpg",
    alt: "Professional Ecommerce photography of Puppet Teater of brown pinstripe dress pant flatlay with white background",
  },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Brown+Dress+P+B.jpg",
  //   alt: "Professional ecommerce photograph of brown pinstripe dress pant back with perfect background",
  // },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Grey+Dress+P+F.jpg",
    alt: "Professional Ecommerce photography of Puppet Teater of grey technicalist dress pant flatlay with white background",
  },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Grey+Dress+P+B.jpg",
  //   alt: "Professional ecommerce photograph of grey formal cargo pant back with perfect background",
  // },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Camo+Cargo+F.jpg",
    alt: "Professional Ecommerce photography of Puppet Teater 8 pocket flared cargo pant flatlay with white background",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Camo+Cargo+B+2.jpg",
    alt: "Professional Ecommerce photograph of workwear inspired camo cargo pant with big metal zipper",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Black+Cargo+F.jpg",
    alt: "Professional Ecommerce photography of Puppet Teater 8 pocket flared cargo pant flatlay with white background",
  },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/ecommerce/Black+Cargo+B.jpg",
  //   alt: "Professional flatlay photograph of flared cargo pant back with perfect background",
  // },
];

const onModelShots = [
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04563.jpg",
    alt: "professional high end streetwear photography for Puppet Theater",
  },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04565.jpg",
  //   alt: "professional high end streetwear ecommerce photography for denver based fashion brand Puppet Theater",
  // },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04575.jpg",
    alt: "professional high end ecommerce photography for denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04591.jpg",
    alt: "professional high end fashion photography for denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04592.jpg",
    alt: "professional fashion photography for denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04613-3.jpg",
    alt: "professional fashion ecommerce photography for denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04432.jpg",
    alt: "Professional On Model Ecom Photograph for Denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04463.jpg",
    alt: "On body Ecommerce Photograph for Denver based elevated streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04533.jpg",
    alt: "professional streetwear photography for Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04537.jpg",
    alt: "professional ecommerce photography for high end streetwear Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04482.jpg",
    alt: "high fashion ecommerce photography for streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04473-2.jpg",
    alt: "Ecommerce Photography for Denver based high fashion and streetwear brand Puppet Theater",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04513-2.jpg",
    alt: "professional on model photography for streetwear brand Puppet Theater",
  },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/DSC04489.jpg",
  //   alt: "professional on model photography for streetwear brand Puppet Theater",
  // },
];

export default function EcomPhotographs() {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-6">E-Commerce Photography</h2>

      <h4 className="text-xl font-semibold mb-4">On-Body</h4>
      <PhotoGallery photos={onModelShots} />

      <h4 className="text-xl font-semibold mb-4">Flatlay</h4>
      <PhotoGallery photos={actIIEcomPhotos} />
    </div>
  );
}
