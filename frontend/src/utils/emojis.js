const emojis = [
    "😀", "😂", "😍", "😎", "😭", "😊", "😢", "😡", "🤔", "🙄",
    "😇", "😉", "😜", "🤪", "🤗", "😏", "😴", "🥳", "😱", "😬"
  ];
  
  export function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }