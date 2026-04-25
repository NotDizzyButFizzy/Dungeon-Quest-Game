# Dungeon Quest Game

A browser-based dungeon adventure game built with HTML, CSS, and JavaScript, where the player explores connected rooms, collects items, defeats enemies, and unlocks the final treasure. This project was created as a small interactive game and is now being organised and documented as a team-friendly GitHub repository so that new contributors can quickly understand how it works and where improvements can be made.

![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Game_Logic-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-In_Progress-2ea043?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Web-121013?style=for-the-badge)

**Tags:** HTML, CSS, JavaScript, browser game, dungeon game, text adventure, beginner project, DOM manipulation, GitHub Pages

---

## Introduction

Dungeon Quest is a simple web-based dungeon exploration game. The player moves through rooms, collects useful items, fights enemies, and eventually unlocks access to the treasure room. The game is designed around DOM manipulation and basic game-state management in JavaScript, making it a good project for practising front-end fundamentals and interactive logic.

This repository is written and structured so that someone new joining the project can understand:
- what the project does,
- how the files are organised,
- how the game flow works,
- what has already been built,
- and what can be improved next.

---

## Technologies Used

This project uses:

- **HTML5** for the structure of the game page
- **CSS3** for layout, colours, and button styling
- **JavaScript** for game logic, room navigation, item collection, combat, and inventory handling
- **GitHub** for version control and project hosting
- **GitHub Pages** as the intended deployment platform for the live version

---

## Features

- Room-based dungeon exploration
- Interactive movement buttons based on available exits
- Inventory system
- Item collection
- Locked chest interaction
- Monster and boss fights
- Treasure room unlock mechanic
- Win condition when the final treasure is reached
- Simple browser-based interface with no extra frameworks required

---

### Planned keyboard controls
These are good candidates for future improvement:

- `I` — Open inventory
- `L` — Look around current room
- `Q` — Quit game
- Arrow keys or `W A S D` — Movement
- `E` — Interact / pick up item
- `F` — Fight enemy

If keyboard support is added later, this section should be updated to match the implemented controls.

---

## The Process

The project started as a simple dungeon game concept built using only core front-end technologies. The aim was to create a playable game loop without relying on external libraries or frameworks.

The main development process followed these steps:

1. **Created the base page structure in HTML**
   - Added the game title
   - Created a display area for game text
   - Added containers for movement, items, and actions

2. **Styled the game with CSS**
   - Designed a dark dungeon-themed interface
   - Added button styling for player interaction
   - Created a scrollable game output area

3. **Built the game logic in JavaScript**
   - Defined the dungeon rooms as objects
   - Added movement between rooms
   - Added items and inventory
   - Added enemy and boss encounters
   - Added room locking and unlock progression
   - Added a win condition

4. **Prepared the project for GitHub**
   - Split concerns into separate files
   - Connected HTML, CSS, and JavaScript properly
   - Began documenting the project for maintainability and collaboration

---

## What I Learnt

This project helped reinforce several important front-end development concepts:

- How to separate structure, styling, and logic into different files
- How to connect HTML, CSS, and JavaScript correctly
- How to use JavaScript objects to model game data
- How to update the DOM dynamically based on game state
- How to manage player inventory and conditional progression
- How small logic issues, such as file naming mismatches or repeated item collection, can affect the whole user experience
- How important documentation is when preparing a personal project for public GitHub use

It also showed the value of writing projects in a way that other developers can understand, not just the original creator.

---

## How It Can Be Improved

There are several ways this project could be expanded and improved:

- Add keyboard controls
- Add health, damage, and combat stats
- Add sound effects and background music
- Add images or icons for rooms, enemies, and items
- Improve the visual UI with cards, animations, and status panels
- Add restart functionality
- Add save/load support
- Prevent duplicate reward collection more consistently
- Add multiple levels or branching dungeon paths
- Add unit tests for core game logic
- Refactor JavaScript into smaller, reusable functions for better maintainability

For team development, another strong improvement would be separating the game data from the gameplay engine, for example by moving room definitions into a dedicated file or data structure.

---

## How to Run the Project

### Option 1: Run locally
1. Clone the repository:
   ```bash
   git clone https://github.com/NotDizzyButFizzy/Dungeon-Quest-Game.git
   ```

2. Open the project folder

3. Make sure the main files are present:
   - `index.html`
   - `Dungeon.css`
   - `Dungeon.js`

4. Open `index.html` in your browser

### Option 2: Run with VS Code Live Server
1. Open the project in Visual Studio Code
2. Install the **Live Server** extension
3. Right-click `index.html`
4. Select **Open with Live Server**

### Option 3: Deploy with GitHub Pages
1. Push the project to GitHub
2. Go to **Settings**
3. Open **Pages**
4. Set the branch to `main`
5. Set the folder to `/root`
6. Save and wait for deployment

---

## Project Structure

```text
Dungeon-Quest-Game/
├── index.html
├── Dungeon.css
├── Dungeon.js
└── README.md
```

---

## Notes for Contributors

If you are new to this project, start by reading the files in this order:

1. `index.html` — page structure and linked assets
2. `Dungeon.css` — visual styling
3. `Dungeon.js` — game logic and room system

When making changes:
- keep file names consistent with the references in `index.html`
- test the game after every change
- document any new feature clearly in this README
- keep code readable and beginner-friendly where possible
