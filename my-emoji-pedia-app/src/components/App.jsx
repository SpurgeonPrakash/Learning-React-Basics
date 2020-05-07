import React from "react";
import Entry from "../components/Entry.jsx";
import emojipedia from "../emojipedia.js";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojiCard) => (
          <Entry
            key={emojiCard.id}
            emoji={emojiCard.emoji}
            name={emojiCard.name}
            meaning={emojiCard.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
