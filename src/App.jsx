import { useState } from "react";

import { Accordian } from "./Components/Accordian";
import { RandomColor } from "./Components/Random-color";
import StarRating from "./Components/Star-rating/StarRating";
import { ImageSlider } from "./Components/Image-slider";

function App() {
  const star = 5;
  return (
    <>
      {/*<Accordian />
      <RandomColor />
      
      <StarRating numberOfStars={star} />*/}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"}
      />
    </>
  );
}

export default App;
