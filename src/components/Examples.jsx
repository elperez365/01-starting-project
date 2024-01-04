import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const tabButtons = Object.keys(EXAMPLES).map((example) => (
    <TabButton
      tabSelected={selectedTab}
      key={example}
      onClick={(e) => setSelectedTab(e.target.textContent.toLowerCase())}
    >
      {example}
    </TabButton>
  ));

  const tabContent = !selectedTab ? (
    <p>Please select a tab</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTab]?.title}</h3>
      <p>{EXAMPLES[selectedTab]?.description}</p>
      <pre>
        <code>{EXAMPLES[selectedTab]?.code}</code>
      </pre>
    </div>
  );
  return (
    <>
      <Section id="examples" title="Examples">
        <Tabs buttons={tabButtons}>{tabContent}</Tabs>
      </Section>
    </>
  );
};

export default Examples;
