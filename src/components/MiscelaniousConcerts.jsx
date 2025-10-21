import PhotoGrid from "./PhotoGrid";

const photos = [
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Cradle_Of_Filth/cradle_fman_1_dupe.jpg",
    alt: "professional photograph of Cradle of Filth front man perfoming, screaming into a mic on the Screaming of the Valkeries tour",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Cradle_Of_Filth/cradle_fman_close.jpg",
    alt: "professional close up photograph of Cradle of Filth front man performing on the Screaming of the Valkyries tour",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Cradle_Of_Filth/cradle_gtar_1.jpg",
    alt: "Concert photograph of Cradle of Filth guitarist performing on the Screaming of the Valkyries tour",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Dir+En+Grey/dir-en-grey-fman-close-alt.jpg",
    alt: "Close Up cinematic concert Photograph of Japanese Heavy Metal band Dir En Grey frontman with dramatic backgrop of drummer cymbals behind him",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Dir+En+Grey/dir-en-greay-fman-close-color.jpg",
    alt: "professional Close Up Photograph of Japanese Heavy Metal band Dir En Grey frontman performing in Denver, Colorado",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/Dir+En+Grey/dir-en-greay-gtar.jpg",
    alt: "professional Concert Photograph of Japanese Heavy Metal band Dir En Grey Guitarist with dreamy hair cut",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/BrockHampton/BHMPTN+-+light+whole+band.jpg",
    alt: "On-Stage Concert Photograph of BROCKHAMPTON's very first concert on tour, performing at Globe Hall in Denver, Colorado for their Jennifer's Tour",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/BrockHampton/BHMPTN+-+colorful+merlin.jpg",
    alt: "Photograph of BROCKHAMPTON's Merlyn Wood performing at Globe Hall in Denver, Colorado for the first stop on The Jennifer's Tour",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/BrockHampton/BHMPTN+-+Ian+reaching.jpg",
    alt: "Concert Photograph of BROCKHAMPTON frontman Kevin Abstract in an action pose, pointing to the adoring crowd",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/BrockHampton/BHMPTN+-+dark+merlin.jpg",
    alt: "Dramatic Photograph of BROCKHAMPTON frontman Merlyn Wood, performing at Denver's Globe Hall, their first concert on tour",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/BrockHampton/BHMPTN+-+water.jpg",
    alt: "Action Shot of BROCKHAMPTON X-Member Ameer Vann at their first show in Denver, Colorado on the Jennifer's Tour",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/photos/BrockHampton/BHMPTN+-+baker.jpg",
    alt: "Professional photograph of BROCKHAMPTON X-Member Ameer Vann performing on BROCKHAMPTON's Jennifer's Tour",
  },
];

export default function FkaTwigsPhotographs() {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-6">Misc. Concert Photographs</h2>
      <PhotoGrid photos={photos} />
    </div>
  );
}
