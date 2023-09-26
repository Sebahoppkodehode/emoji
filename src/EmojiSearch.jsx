import React, { useState } from "react";
import "./EmojiSearch.css";

const emojiWithNames = [
  { emoji: "✌", name: "Peace Sign" },
  { emoji: "😂", name: "Face with Tears of Joy" },
  { emoji: "😝", name: "Squinting Face with Tongue" },
  { emoji: "😁", name: "Grinning Face with Smiling Eyes" },
  { emoji: "😱", name: "Face Screaming in Fear" },
  { emoji: "👉", name: "Backhand Index Pointing Right" },
  { emoji: "🙌", name: "Raising Hands" },
  { emoji: "🍻", name: "Clinking Beer Mugs" },
  { emoji: "🔥", name: "Fire" },
  { emoji: "🌈", name: "Rainbow" },
  { emoji: "☀", name: "Sun" },
  { emoji: "🎈", name: "Balloon" },
  { emoji: "🌹", name: "Rose" },
  { emoji: "💄", name: "Lipstick" },
  { emoji: "🎀", name: "Ribbon" },
  { emoji: "⚽", name: "Soccer Ball" },
  { emoji: "🎾", name: "Tennis Ball" },
  { emoji: "🏁", name: "Chequered Flag" },
  { emoji: "😡", name: "Pouting Face" },
  { emoji: "👿", name: "Angry Face with Horns" },
  { emoji: "🐻", name: "Bear" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🐬", name: "Dolphin" },
  { emoji: "🐟", name: "Fish" },
  { emoji: "🍀", name: "Four Leaf Clover" },
  { emoji: "👀", name: "Eyes" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍎", name: "Red Apple" },
  { emoji: "💝", name: "Heart with Ribbon" },
  { emoji: "💙", name: "Blue Heart" },
  { emoji: "👌", name: "OK Hand" },
  { emoji: "❤", name: "Red Heart" },
  { emoji: "😍", name: "Heart Eyes" },
  { emoji: "😉", name: "Winking Face" },
  { emoji: "😓", name: "Cold Sweat" },
  { emoji: "😳", name: "Flushed Face" },
  { emoji: "💪", name: "Flexed Biceps" },
  { emoji: "💩", name: "Pile of Poo" },
  { emoji: "🍸", name: "Cocktail Glass" },
  { emoji: "🔑", name: "Key" },
  { emoji: "💖", name: "Sparkling Heart" },
  { emoji: "🌟", name: "Glowing Star" },
  { emoji: "🎉", name: "Party Popper" },
  { emoji: "🌺", name: "Hibiscus" },
  { emoji: "🎶", name: "Musical Notes" },
  { emoji: "👠", name: "High-Heeled Shoe" },
  { emoji: "🏈", name: "American Football" },
  { emoji: "⚾", name: "Baseball" },
  { emoji: "🏆", name: "Trophy" },
  { emoji: "👽", name: "Alien" },
  { emoji: "💀", name: "Skull" },
  { emoji: "🐵", name: "Monkey Face" },
  { emoji: "🐮", name: "Cow Face" },
  { emoji: "🐩", name: "Poodle" },
  { emoji: "🐎", name: "Horse" },
  { emoji: "💣", name: "Bomb" },
  { emoji: "👃", name: "Nose" },
  { emoji: "👂", name: "Ear" },
  { emoji: "🍓", name: "Strawberry" },
  { emoji: "💘", name: "Heart with Arrow" },
  { emoji: "💜", name: "Purple Heart" },
  { emoji: "👊", name: "Oncoming Fist" },
  { emoji: "💋", name: "Kiss Mark" },
  { emoji: "😘", name: "Face Blowing a Kiss" },
  { emoji: "😜", name: "Winking Face with Tongue" },
  { emoji: "😵", name: "Dizzy Face" },
  { emoji: "🙏", name: "Folded Hands" },
  { emoji: "👋", name: "Waving Hand" },
  { emoji: "🚽", name: "Toilet" },
  { emoji: "💃", name: "Woman Dancing" },
  { emoji: "💎", name: "Gem Stone" },
  { emoji: "🚀", name: "Rocket" },
  { emoji: "🌙", name: "Crescent Moon" },
  { emoji: "🎁", name: "Wrapped Gift" },
  { emoji: "⛄", name: "Snowman" },
  { emoji: "🌊", name: "Water Wave" },
  { emoji: "⛵", name: "Sailboat" },
  { emoji: "🏀", name: "Basketball" },
  { emoji: "🎱", name: "Billiards" },
  { emoji: "💰", name: "Money Bag" },
  { emoji: "👶", name: "Baby" },
  { emoji: "👸", name: "Princess" },
  { emoji: "🐰", name: "Rabbit Face" },
  { emoji: "🐷", name: "Pig Face" },
  { emoji: "🐍", name: "Snake" },
  { emoji: "🐫", name: "Two-Hump Camel" },
  { emoji: "🔫", name: "Pistol" },
  { emoji: "👄", name: "Mouth" },
  { emoji: "🚲", name: "Bicycle" },
  { emoji: "🍉", name: "Watermelon" },
  { emoji: "💛", name: "Yellow Heart" },
  { emoji: "💚", name: "Green Heart" },
];

function EmojiSearch() {
  const [query, setQuery] = useState("");
  const [filteredEmoji, setFilteredEmoji] = useState(emojiWithNames);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    const filtered = emojiWithNames.filter((emoji) =>
      emoji.name.toLowerCase().includes(searchTerm)
    );

    setFilteredEmoji(filtered);
  };

  return (
    <div className="emoji-search-container">
      <h1>Emoji Search</h1>
      <input
        type="text"
        className="emoji-search-input"
        placeholder="Search for emojis..."
        value={query}
        onChange={handleSearch}
      />
      <div className="emoji-list">
        {filteredEmoji.map((emoji, index) => (
          <div key={index} className="emoji-item">
            <span className="emoji-icon">{emoji.emoji}</span> {emoji.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmojiSearch;
