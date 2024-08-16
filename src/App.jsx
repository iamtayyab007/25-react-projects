import { useState } from "react";

import { Accordian } from "./Components/Accordian";
import { RandomColor } from "./Components/Random-color";
import StarRating from "./Components/Star-rating/StarRating";
import { ImageSlider } from "./Components/Image-slider";
import { LoadMore } from "./Components/Load-more-data";
import { TreeView } from "./Components/Tree-view";
import { menus } from "./Components/Tree-view/data";
import { QrCodeGenerator } from "./Components/qr-code-generator";

function App() {
  return (
    <>
      {/*<Accordian />
      <RandomColor />
      
      <StarRating numberOfStars={star} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"}
      />
      

      <LoadMore />

      
      <TreeView menus={menus} />
      */}
      <QrCodeGenerator />
    </>
  );
}

export default App;
