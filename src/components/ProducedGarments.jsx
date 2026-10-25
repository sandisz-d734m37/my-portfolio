import GarmentTechpack from "./GarmentTechpack";
import LoadingImage from "./LoadingImage";

const garments = [
  {
    garmentPhoto: {
      src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/KumriReEdition/IMG_4187.jpeg",
      alt: "Professional On Model Ecom Photograph for Denver based elevated streetwear brand Puppet Theater",
    },
    techpackPhotos: [
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/KumriReEdition/Kumri-Re-Edition-Final-p1.jpg",
        alt: "Kumri Re-Edition Technical Pack and Designer's work",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/KumriReEdition/Kumri-Re-Edition-Final-p2.jpg",
        alt: "Kumri Re-Edition Technical Pack and Designer's work",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/KumriReEdition/Kumri-Re-Edition-Final-p3.jpg",
        alt: "Kumri Re-Edition Technical Pack and Designer's work",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/KumriReEdition/Kumri-Re-Edition-Final-p4.jpg",
        alt: "Kumri Re-Edition Technical Pack and Designer's work",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/KumriReEdition/Kumri-Re-Edition-Final-p5.jpg",
        alt: "Kumri Re-Edition Technical Pack and Designer's work",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/KumriReEdition/Kumri-Re-Edition-Final-p6.jpg",
        alt: "Kumri Re-Edition Technical Pack and Designer's work",
      },
    ],
  },
  {
    garmentPhoto: {
      src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/OctaneCap/DSC04902.jpg",
      alt: "Professional Editorial Photograph of Puppet Theater's Octane Cap",
    },
    techpackPhotos: [
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/OctaneCap/octane_cap_p1.jpg",
        alt: "Octane Cap Technical Pack and Designer's work",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/OctaneCap/octane_cap_p2.jpg",
        alt: "Octane Cap Technical Pack and Designer's work",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/OctaneCap/octane_cap_ogclwy_p1.jpg",
        alt: "Octane Cap Technical Pack and Designer's work",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/OctaneCap/octane_cap_ogclwy_p4.jpg",
        alt: "Octane Cap Technical Pack and Designer's work",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/OctaneCap/octane_cap_ogclwy_p2.jpg",
        alt: "Octane Cap Technical Pack and Designer's work",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/OctaneCap/octane_cap_ogclwy_p3.jpg",
        alt: "Octane Cap Technical Pack and Designer's work",
      },
    ],
  },
  {
    garmentPhoto: {
      src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/DBLSWEAT/Model-DblSwt.jpg",
      alt: "Professional On Model Ecom Photograph for Denver based elevated streetwear brand Puppet Theater",
    },
    techpackPhotos: [
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/DBLSWEAT/DblSweatPg1.jpg",
        alt: "Professional Technical drawing and tech pack for a unique double-waistband sweatpant",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/DBLSWEAT/DblSweatPg2.jpg",
        alt: "Professional Technical drawing and tech pack for a unique double-waistband sweatpant",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/DBLSWEAT/DblSweatPg3.jpg",
        alt: "Professional Technical drawing and tech pack for a unique double-waistband sweatpant",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/DBLSWEAT/DblSweatPg4.jpg",
        alt: "Professional Technical drawing and tech pack for a unique double-waistband sweatpant",
      },
    ],
  },
  {
    garmentPhoto: {
      src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/multi-act+Lookbook+RE-EDITED/DSC03369.jpg",
      alt: "Professional editorial lookbook fashion photograph Denver based elevated streetwear brand Puppet Theater",
    },
    techpackPhotos: [
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/ReHoodie/Patch-Hoodie_p1.jpg",
        alt: "Professional Clothing Designer's Tech Pack for a hoodie",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/ReHoodie/Patch-Hoodie_p2.jpg",
        alt: "Professional Clothing Designer's Tech Pack for a hoodie",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/ReHoodie/Patch-Hoodie_p5.jpg",
        alt: "Professional Clothing Designer's Tech Pack for a hoodie",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/ReHoodie/Patch-Hoodie_p6.jpg",
        alt: "Professional Clothing Designer's Tech Pack for a hoodie",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/ReHoodie/Patch-Hoodie_p3.jpg",
        alt: "Professional Clothing Designer's Tech Pack for a hoodie",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/ReHoodie/Patch-Hoodie_p4.jpg",
        alt: "Professional Clothing Designer's Tech Pack for a hoodie",
      },
    ],
  },
  {
    garmentPhoto: {
      src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/multi-act+Lookbook+RE-EDITED/DSC03611.jpg",
      alt: "Professional On Model Ecom Photograph for Denver based elevated streetwear brand Puppet Theater",
    },
    techpackPhotos: [
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/TrackJacket/track-jacket-p1.jpg",
        alt: "Professional Technical drawing and tech pack for a track jacket",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/TrackJacket/track-jacket-p2.jpg",
        alt: "Professional Technical drawing and tech pack for a track jacket",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/TrackJacket/track-jacket-p3.jpg",
        alt: "Professional Technical drawing and tech pack for a track jacket",
      },
      // {
      //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/TrackJacket/track-jacket-p4.jpg",
      //   alt: "Professional Technical drawing and tech pack for a track jacket",
      // },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/TrackJacket/track-jacket-p5.jpg",
        alt: "Professional Technical drawing and tech pack for a track jacket",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/TrackJacket/track-jacket-p6.jpg",
        alt: "Professional Technical drawing and tech pack for a track jacket",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/TrackJacket/track-jacket-p7.jpg",
        alt: "Professional Technical drawing and tech pack for a track jacket",
      },
    ],
  },
  {
    garmentPhoto: {
      src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/OnModelEcom/multi-act+Lookbook+RE-EDITED/DSC04086.jpg",
      alt: "Professional On Model Ecom Photograph for Denver based elevated streetwear brand Puppet Theater",
    },
    techpackPhotos: [
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/HeavyProcessWorkShirt/heavy_process_workshirt_p1.jpg",
        alt: "Professional Technical drawing and tech pack for a distressed workshirt",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/HeavyProcessWorkShirt/heavy_process_workshirt_p2.jpg",
        alt: "Professional Technical drawing and tech pack for a distressed workshirt",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/HeavyProcessWorkShirt/heavy_process_workshirt_p3.jpg",
        alt: "Professional Technical drawing and tech pack for a distressed workshirt",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/HeavyProcessWorkShirt/heavy_process_workshirt_p4.jpg",
        alt: "Professional Technical drawing and tech pack for a distressed workshirt",
      },
      {
        src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/HeavyProcessWorkShirt/heavy_process_workshirt_p5.jpg",
        alt: "Professional Technical drawing and tech pack for a distressed workshirt",
      },
    ],
  },
  // add more garments here...
];

const alt_garments = [
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/_WARNER/SOAD_White.png",
    alt: "T-Shirt designed by me, alongside the Warner Music Group, for System Of A Down's TOXICITY album 25th Anniversary",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/_WARNER/LIZZO_white.png",
    alt: "T-Shirt designed by me, alongside the Warner Music Group, for Lizzo's 'BITCH' album rollout",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/_WARNER/LIZZO_black.png",
    alt: "T-Shirt designed by me, alongside the Warner Music Group, for Lizzo's 'BITCH' album rollout",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/KumriOriginal/KumriOriginalFlatlay.png",
    alt: "iPhone Photo of Kumri Akhmedova Tribute Sweater I designed laying flat",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/ReHoodie/Patch_Hoodie_Real_F.png",
    alt: "iPhone Photo of Patch ReHoodie I designed laying flat",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/ReHoodie/Patch_Hoodie_Real.png",
    alt: "iPhone Photo of Patch ReHoodie I designed laying flat",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/FinallyCrewneck/FinallyCrewneckFlatlay.png",
    alt: "iPhone Photo of front of Finally Crewneck, featuring cursive script graphic I designed, laying flat",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/Panel+Flannel/PanelFlannelFlatlay.png",
    alt: "iPhone Photo of Panel Flannel I designed laying flat",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/Everything+Tee/EverythingTeeFlatlay.png",
    alt: "iPhone Photo of Everything Tee I designed laying flat",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/Nothing+Lasts+Tee/NothingLastsFlatlayFRONT.png",
    alt: "iPhone Photo of front of Nothing Lasts Tee I designed laying flat",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/Nothing+Lasts+Tee/NothingLastsFlatlay.png",
    alt: "iPhone Photo of back of Nothing Lasts Tee I designed laying flat",
  },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/Harrington/HarringtonFlatlay.png",
  //   alt: "iPhone Photo of Harrington, featuring multiple staple graphics I designed for Puppet Theater, laying flat",
  // },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/produced_garments/Patch+Thermal/PatchThermalFlatlay.png",
    alt: "iPhone Photo of Patch Thermal, featuring 18 unique graphics I designed laying flat",
  },
];
// =====================================================================
// ProducedGarments.jsx — WHAT TO CHANGE
//
// 1) Add this import at the very top of the file (next to GarmentTechpack):
//
//      import LoadingImage from "./LoadingImage";
//
// 2) Leave the `garments` and `alt_garments` arrays exactly as they are.
//
// 3) Replace everything from `export default function ProducedGarments()`
//    to the end of the file with the code below.
// =====================================================================

export default function ProducedGarments() {
  return (
    <div className="px-5 pb-6">
      {/* The section header now shows the "Produced Garments" title,
          so the old <h2> is removed to avoid a duplicate. */}
      <div className="w-full flex justify-center pb-6">
        <LoadingImage
          src="https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/puppet_theater/IMG_9701.jpeg"
          alt="Puppet Theater garment photograph" // was the literal string "garmentPhoto.alt"; replace with real alt text
          className="object-contain max-h-[80vh] border border-black dark:border-white rounded-2xl"
          placeholderClassName="min-h-[50vh] w-[min(90%,500px)] rounded-2xl"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-16 mb-16">
        {alt_garments.map((garment, i) => (
          <LoadingImage
            key={i}
            src={garment.src}
            alt={garment.alt}
            wrapperClassName="w-full"
            placeholderClassName="min-h-[260px]"
            className="w-full h-auto hover:opacity-70"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {garments.map((garment, i) => (
          <GarmentTechpack
            key={i}
            garmentPhoto={garment.garmentPhoto}
            techpackPhotos={garment.techpackPhotos}
          />
        ))}
      </div>
    </div>
  );
}
