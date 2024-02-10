import React, { useEffect, useState } from "react";
import HeroSlider, { Slide } from "hero-slider";
// const image_1 = "https://ids.hvrd.art/ids/view/497504678?width=535";
// const image_2 = "https://harvardartmuseums.org/assets/images/pages/hero-art-study-center-1500.jpg";

//   const imageUrl =
//   "https://harvardartmuseums.org/assets/images/pages/hero-support-1500.jpg"; //yellow image
// const imageUrl = "https://s3.amazonaws.com/media.harvardartmuseums.org/production/uploaded_files/tour_builder/o_1gk6cqr011madunj3c4c831qdv4t.jpg?height=675"
// const imageUrl = "https://harvardartmuseums.org/assets/images/pages/makeagift-675-440.jpg"
// const imageUrl = "https://harvardartmuseums.org/assets/images/pages/members-675-440.jpg"
// const imageUrl = "https://harvardartmuseums.org/assets/images/pages/fellows-675-440.jpg"
// const imageUrl = "https://harvardartmuseums.org/assets/images/pages/corporate-675-440.jpg"
// const imageUrl = "https://s3.amazonaws.com/media.harvardartmuseums.org/production/uploaded_files/tour_builder/o_1gk64be9fmch1cn41nufba5rh2h.jpg"
// const imageUrl = "https://s3.amazonaws.com/media.harvardartmuseums.org/production/uploaded_files/tour_builder/o_1gkobg5nb76717s1c7vo111gaj10.jpg?height=675"

// App = BasicSlider
const Slider = () => {
  const [exhibition, setExhibition] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.artic.edu/api/v1/exhibitions/4568?fields=id,title,image_id,alt_image_ids"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data.alt_image_ids);
        setExhibition(json.data.alt_image_ids);
      });
  }, []);

  const imgApi = "https://www.artic.edu/iiif/2/";
  const imgSize = "/full/843,/0/default.jpg";

  // const imageUrl = imgApi + exhibition.image_id + imgSize;
  return (
    <HeroSlider
      className="container"
      SlidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)",
        marginBottom: "35px",
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "80vh",
      }}
    >
        {exhibition.map((exhibition) => (
            <Slide
            key={exhibition}
            background={{
              backgroundImageSrc: imgApi + exhibition + imgSize,
              backgroundAttachment: "fixed",
            }}
          />
        ))}
      {/* <Slide
        background={{
          // backgroundImageSrc: image_1,
          backgroundAttachment: "fixed",
        }}
      /> */}
      {/* <Slide background={{
                // backgroundImageSrc: image_2,
                backgroundAttachment: "fixed",

            }}/> */}
    </HeroSlider>
  );
};
export default Slider;
