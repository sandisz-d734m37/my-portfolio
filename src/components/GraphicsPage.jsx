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
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/LIVEFREE.svg",
    alt: "Sparkly covered or obscured punk style graphic that reads live free and die trying SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/Lern2Fly.svg",
    alt: "Graphic ribbon that reads Fall in Love and Learn to Fly SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/d734m.svg",
    alt: "Graphic or Logo reading D734M37 with star and sparkle overtop SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/BLOCKs.svg",
    alt: "Graphic design reading PPPT in 3d block letters SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/wreath_iguess.svg",
    alt: "Military inspired antique wreath like graphic for Puppet Theater SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/ribbon.svg",
    alt: "Puppet Theater staple Ribbon graphic initiated in Act 4 SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/shieldblue.svg",
    alt: "Puppet Theater staple Shield graphic in Blue, initiated in Act 4 SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/longpt.svg",
    alt: "Puppet Theater PT 2 letter long rendition of staple Cursive Signature logo SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/cursivo.svg",
    alt: "Puppet Theater staple cursive signature logo, found on all tags starting in Act 4 SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/roundpt.svg",
    alt: "Puppet Theater staple cursive PT logo, used where staple cursive is too long starting in Act 4 SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/f-corp.svg",
    alt: "Puppet Theater Fantasy Corp. graphic found throughout Act 4 SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/big_u.svg",
    alt: "Puppet Theater University Logo concept SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/too-tough.svg",
    alt: "Puppet Theater The Puppets Too Tough To Die graphic concept SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/heep_hope_alive.svg",
    alt: "Puppet Theater Keep Hope Alive graphic concept SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/adultsonly.svg",
    alt: "Puppet Theater Adults Only graphic concept in my signature Cracked Up style SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/total_effing_p.svg",
    alt: "Puppet Theater Total Fucking Puppet graphic with Death as a Jester in the background SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/fucker-crackup.svg",
    alt: "Personal Fucker, in my signature cracked up style SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/winner.svg",
    alt: "Personal winner patch graphic SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/freedom.svg",
    alt: "Personal freedom patch graphic SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/wannabe.svg",
    alt: "sometimes i'm gonna have to lose SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/AHoles.svg",
    alt: "I knew it I'm surrounded by Assholes... Keep firing assholes!",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/bebrave.svg",
    alt: "BE BRAVE svg",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/big_high_wall.svg",
    alt: "Woody Guthry lyric from This Land Was Made For You And Me, symbolizing what that song is really about",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/Haiti.svg",
    alt: "American Flag with SCMT Have No Fear staple graphic and outiline of Haiti in the flag",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/calltoday.svg",
    alt: "Don't be an asshole CALL TODAY",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/Sandiszworld.svg",
    alt: "The flag of Sandiszworld featuring the SCMT star logo",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/diefighting.svg",
    alt: "You either die fighting! Or you die crying! It's your choice!",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/havetolose.svg",
    alt: "patch that reads I wanna be surrounded by assholes in american flag SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/pngs/kumri_graphic.png",
    alt: "Graphic featuring Kumri Akhmedova, Hero of Socialist Labor",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/pngs/i_love_radio.png",
    alt: "Jacket concept featuring Puppet Theater signature cursive logo and I Love The Radio patches",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/pngs/canttakeit.png",
    alt: "T Shirt concept featuring American Flag, a true statement, and some children laughing at the ones who don't think the statement is true",
  },
  // {
  //   src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/pngs/give_me_back.png",
  //   alt: "Graphic concept featuring a gun and phrase give me back my bullets in my signature cracked up style, inspired by vintage Entombed tee",
  // },
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
