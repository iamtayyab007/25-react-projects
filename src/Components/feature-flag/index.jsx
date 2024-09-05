import React, { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import { Accordian } from "../Accordian";
import { RandomColor } from "../Random-color";
import StarRating from "../Star-rating/StarRating";
import { ImageSlider } from "../Image-slider";
import { LoadMore } from "../Load-more-data";
import { TreeView } from "../Tree-view";
import { menus } from "../Tree-view/data";
import { QrCodeGenerator } from "../qr-code-generator";
import { ThemeSwitch } from "../light-dark-mode";
import { ScrollIndicator } from "../Scroll-indicator";
import { TabsIndex } from "../custom-tabs/TabsIndex";
import { TabsTest } from "../custom-tabs/tabsTest";
import { ModalText } from "../Modal Popup/ModalText";
import { GithubProfileFinder } from "../github-profile-finder";
import { SearchAutoComplete } from "../Search-Autocomplete-Api";
import { TicTacToe } from "../Tic-Tac-Toe";

export const FeatureFlags = () => {
  const { loading, enableFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    { key: "showLightAndDarkMode", component: <ThemeSwitch /> },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <TabsTest />,
    },
  ];
  function checkEnabledFlags(getCurrentKey) {
    return enableFlags[getCurrentKey];
  }
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((items) =>
        checkEnabledFlags(items.key) ? items.component : null
      )}
    </div>
  );
};
