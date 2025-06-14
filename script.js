
const categories = {
    Work: [
        "What drained you most this week at work?",
        "What’s one win at work you want to celebrate?",
        "If you could change one thing about your job, what would it be?"
    ],
    Relationships: [
        "Who made you feel seen this week?",
        "What conversation do you wish you'd handled differently?",
        "How can you better support someone you care about?",
        "Who are you most inspired by? Why?",
        "Who would you love to meet? What would you ask?",
        "Think of a person you truly admire. What qualities do you like about that person.",
        "Who would you like to connect (or reconnect) with? Why?",
        "What qualities do you admire in others?"
    ],
    Dreams: [
        "What recurring dream or thought has stuck with you?",
        "Describe a version of your life you’d love to live.",
        "What dream have you set aside that deserves attention?",
        "What does your ideal day look like?",
        "What did you want to be when you were younger?",
        "Pretend money is no object. What would you do?",
        "Imagine you’re in your 90’s. What memories would you like to have? What stories do you want to tell?",
        "If life stopped today, what would you regret not doing?"
    ],
    Hobbies: [
        "What activity makes you lose track of time?",
        "What’s a hobby you wish you had more time for?",
        "Describe your ideal creative afternoon.",
        "How do you like to relax?",
        "What is your favorite book/movie/song? Why?",
        "What excites you?"
    ],
    Gratitude: [
        "Name one tiny thing today that brought you joy.",
        "Who are you thankful for, and why?",
        "What’s something hard that helped you grow?",
        "What do you love to do for, or give to others?",
        "If you could make one change in the world, what would it be?"
    ],
    Growth: [
        "What habit would you most like to break? What habit would you most like to start?",
        "Let’s jump forward a year. What would you like to have achieved in the past year?",
        "What area of your life, right now, makes you feel the best? Why?",
        "What piece of advice would you give to five year old you?",
        "How do you want to be remembered in life?"
    ],
    Thoughts: [
        "What are you most proud of",
        "What are you most afraid of?",
        "When was the last time you did something you were afraid of?",
        "What practical skills do you wish you had?",
        "What do you wish you did more of?"
    ]
};

const categoryContainer = document.getElementById('categories');
const promptSection = document.getElementById('prompt-section');
const promptList = document.getElementById('prompt-list');
const refreshBtn = document.getElementById('refresh-btn');

let currentCategory = "";
let surpriseMode = false;

function shuffle(array) {
    let a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function showPrompts(category, isSurprise = false) {
    currentCategory = category;
    surpriseMode = isSurprise;
    const sourceArray = isSurprise ? Object.values(categories).flat() : categories[category];
    const prompts = shuffle(sourceArray).slice(0, 2);
    promptList.innerHTML = "";
    prompts.forEach(prompt => {
        const li = document.createElement("li");
        li.textContent = prompt;
        promptList.appendChild(li);
    });
    promptSection.classList.remove("hidden");
}

Object.keys(categories).forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.textContent = cat;
    btn.onclick = () => showPrompts(cat);
    categoryContainer.appendChild(btn);
});

// Surprise Me Button
const surpriseBtn = document.createElement("button");
surpriseBtn.className = "category-btn";
surpriseBtn.textContent = "🎲 Surprise Me";
surpriseBtn.onclick = () => showPrompts("Surprise", true);
categoryContainer.appendChild(surpriseBtn);

refreshBtn.onclick = () => {
    if (surpriseMode) {
        showPrompts("Surprise", true);
    } else {
        showPrompts(currentCategory);
    }
};
