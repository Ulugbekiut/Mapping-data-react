import React from "react";

import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emojiterm) {
  return (
    <Entry
      key={emojiterm.id}
      emoji={emojiterm.emoji}
      name={emojiterm.name}
      meaning={emojiterm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="dictionary">{emojipedia.map(createEntry)}</div>
    </div>
  );
}

export default App;
