import React from "react";
import { TabsIndex } from "./TabsIndex";

{
  /*

export const TabsTest = () => {
  const tabs = [
    {
      label: "tab 1",
      content: "This is Tab 1",
    },
    {
      label: "tab 2",
      content: "This is Tab 2",
    },
    {
      label: "tab 3",
      content: "This is Tab 3",
    },
  ];

  return <TabsIndex Tabscontent={tabs} />;
};
*/
}

function someRandomComponent() {
  return <h1>Some Random Content</h1>;
}

export const TabsTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: someRandomComponent(),
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }
  return <TabsIndex tabsContent={tabs} onChange={handleChange} />;
};
