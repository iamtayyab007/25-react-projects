import { useState } from "react";
import "./App.css";

import { Accordian } from "./Components/Accordian";
import { RandomColor } from "./Components/Random-color";
import StarRating from "./Components/Star-rating/StarRating";
import { ImageSlider } from "./Components/Image-slider";
import { LoadMore } from "./Components/Load-more-data";
import { TreeView } from "./Components/Tree-view";
import { menus } from "./Components/Tree-view/data";
import { QrCodeGenerator } from "./Components/qr-code-generator";
import { ThemeSwitch } from "./Components/light-dark-mode";
import { ScrollIndicator } from "./Components/Scroll-indicator";
import { TabsIndex } from "./Components/custom-tabs/TabsIndex";
import { TabsTest } from "./Components/custom-tabs/tabsTest";
import { ModalText } from "./Components/Modal Popup/ModalText";
import { GithubProfileFinder } from "./Components/github-profile-finder";
import { SearchAutoComplete } from "./Components/Search-Autocomplete-Api";
import { TicTacToe } from "./Components/Tic-Tac-Toe";
import { FeatureFlags } from "./Components/feature-flag";
import FeatureFlagGlobalState from "./Components/feature-flag/context";
import { TestData } from "./Components/Use-Fetch-Hook/TestData";
import { UseOnClickOutsideTest } from "./Components/use-outside-click";
import { Test } from "./Components/use-window-resize/test";

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
   
      <QrCodeGenerator />

       

      <ThemeSwitch />
       

      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />

     

      <TabsTest />

        

      <ModalText />
      

      <GithubProfileFinder />
   

      <SearchAutoComplete />
         

      <TicTacToe />
    

      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
       

      <TestData />
       

      <UseOnClickOutsideTest />
      */}

      <Test />
    </>
  );
}

export default App;
