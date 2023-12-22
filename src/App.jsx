import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  const handleClick = (e) => {
    const selectedButton = e.target.textContent.toLowerCase();
    setSelectedTab(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept, i) => (
              <CoreConcept key={"concepts" + i} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((example, i) => (
              <TabButton key={"example" + i} onSelect={handleClick}>
                {example}
              </TabButton>
            ))}
          </menu>
          {!selectedTab ? (
            <p>Please select a tab</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab]?.title}</h3>
              <p>{EXAMPLES[selectedTab]?.description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab]?.code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
