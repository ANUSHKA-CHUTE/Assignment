
function Flashcard(question, answer) 

{
    this.question = question;
    this.answer = answer;
    this.show = function () 
    {
        document.getElementById("question").innerText = this.question;
        document.getElementById("answer").innerText = this.answer;
    };
}

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


let currentMood = "happy";
let currentIndex = 0;
let cards = moodFlashcards[currentMood];

// Show initial card
cards[currentIndex].show();

function loadMood() {
    currentMood = document.getElementById("moodSelector").value;
    cards = moodFlashcards[currentMood];
    currentIndex = 0;
    flipBack();
    cards[currentIndex].show();
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    flipBack();
    cards[currentIndex].show();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    flipBack();
    cards[currentIndex].show();
}

const flashcard = document.getElementById("flashcard");
flashcard.addEventListener("click", function () {
    flashcard.classList.toggle("flipped");
});

function flipBack() {
    flashcard.classList.remove("flipped");
}

