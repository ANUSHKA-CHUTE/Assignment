
let currentMood = ''; 
let currentIndex = 0;

const moodStyles = {
  happy: {
    background: "linear-gradient(to right,rgb(236, 243, 244),rgb(223, 254, 223))",
    color: "#333",
    footer: "linear-gradient(to right, rgb(231, 239, 240),rgb(221, 228, 225))"
  },
  sad: {
    background: "linear-gradient(to right, #cfd9df, #e2ebf0)",
    color: "#2c3e50",
    footer: "linear-gradient(to right, #d7e1ec, #f0f3f7)" 
  },
  curious: {
    background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
    color: "#2c3e50",
    footer: "linear-gradient(to right, #e8d9f5, #deeafd)"
  },
  bored: {
    background: "linear-gradient(to right,rgb(244, 205, 223),rgb(225, 199, 246))",
    color: "#2c3e50",
    footer: "linear-gradient(to right,rgb(238, 237, 238),rgb(241, 207, 248))"
  }
};

const moodFlashcards = {
  happy: [
    new Flashcard("What’s something that always makes people smile?", "Puppies and free pizza!"),
    new Flashcard("Why don’t we ever tell secrets on a farm?", "Because the potatoes have eyes! "),
    new Flashcard("Tell me a fun fact!", "Sea otters hold hands when they sleep "),
    new Flashcard("Why did the cookie go to the hospital?", "Because it felt crummy "),
    new Flashcard("Why are teddy bears never hungry?", "They’re always stuffed "),
    new Flashcard("What lights up a room and doesn’t need electricity?", "Your smile "),
    new Flashcard("What's the best day to go to the beach?", "Sun-day "),
  ],

  sad: [
    new Flashcard("Feeling low?", "Even the moon goes through phases. You'll shine again "),
    new Flashcard("Want a hug?", "This flashcard is sending one "),
    new Flashcard("One small reason to smile?", "Someone out there is happy you exist "),
    new Flashcard("Why do we fall?", "So we can learn how to rise again"),
    new Flashcard("A gentle reminder?", "You’ve made it through 100% of your hard days "),
    new Flashcard("Need a laugh?", "Parallel lines have so much in common… it's a shame they'll never meet"),
    new Flashcard("Feeling lost?", "Not all those who wander are lost"),
  ],

  curious: [
    new Flashcard("Why is the sky blue?", "Because of Rayleigh scattering"),
    new Flashcard("Do fish sleep?", "Yes! Some hide in rocks to rest"),
    new Flashcard("What happens inside a black hole?", "Not even light escapes. Still a mystery"),
    new Flashcard("Can plants hear?", "Not exactly, but they respond to sound vibrations"),
    new Flashcard("Why do cats purr?", "Usually for comfort or communication"),
    new Flashcard("What’s inside a raindrop?", "Tiny bits of dust, water, and maybe dinosaur pee"),
    new Flashcard("Can time travel exist?", "Theoretically yes, thanks to Einstein’s relativity "),
  ],
 
  bored: [
    new Flashcard("Wanna play a game?", "Try counting how many 'e's are in this app"),
    new Flashcard("Did you know?", "Bananas are berries. Strawberries aren't!"),
    new Flashcard("Feeling lazy?", "Perfect! That’s how great ideas are born "),
    new Flashcard("Why don’t skeletons fight each other?", "They don’t have the guts "),
    new Flashcard("What’s a computer’s favorite snack?", "Computer chips"),
    new Flashcard("What do you call cheese that isn’t yours?", "Nacho cheese"),
    new Flashcard("Why do cows wear bells?", "Because their horns don’t work "),
  ]

};

function loadMood() {
  const selected = document.getElementById("moodSelector").value;
  if (!selected) return;

  currentMood = selected;
  currentIndex = 0;

  // Apply body background and text color
  document.body.style.background = moodStyles[selected].background;
  document.body.style.color = moodStyles[selected].color;

  // Apply footer styling
  const footer = document.querySelector(".mood-footer");
  footer.style.background = moodStyles[selected].footer;
  footer.style.color = moodStyles[selected].color;

  updateFlashcard();
  updateQuote();
}

function updateFlashcard() {
  if (currentMood && moodFlashcards[currentMood]) {
    const card = moodFlashcards[currentMood][currentIndex];
    document.getElementById("question").textContent = card.question;
    document.getElementById("answer").textContent = card.answer;
  }
}

function flipCard() {
  const flashcard = document.getElementById("flashcard");
  flashcard.classList.toggle("flipped");

  // Set a timeout to flip the card back after 2 seconds
  setTimeout(() => {
    flashcard.classList.toggle("flipped");
  }, 2000); // 2000 milliseconds = 2 seconds
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    updateFlashcard();
  }
}

function nextCard() {
  if (currentIndex < moodFlashcards[currentMood].length - 1) {
    currentIndex++;
    updateFlashcard();
  }
}

function updateQuote() {
  const moodQuote = {
    happy: "Keep smiling, and the world will smile with you!",
    sad: "It’s okay to not be okay.",
    curious: "Stay curious, and never stop learning!",
    bored: "Boredom is the birthplace of creativity."
  };
  document.getElementById("moodQuote").textContent = moodQuote[currentMood];
}

// Constructor for Flashcards
function Flashcard(question, answer) {
  this.question = question;
  this.answer = answer;
}