# Simon Says - Memory Game 🧠

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A classic "Simon Says" style memory game built with vanilla HTML, CSS, and JavaScript. The game challenges players to remember and repeat a sequence of flashing colors, with multiple difficulty levels to test their memory[^6][^7]. It is fully responsive and offers a clean, modern user interface.

---

## ✨ Demo

**[➡️ View Live Demo](https://adrishikharchowdhury.github.io/Simon-Says/)**

---

## 🚀 Features

-   **Classic Memory Game Logic**: The game generates a random pattern of glowing boxes, and the player must repeat the sequence correctly to win[^6].
-   **Multiple Difficulty Levels**: Players can choose between Easy (5 steps), Medium (10 steps), and Hard (15 steps) to adjust the challenge[^8].
-   **Interactive Visual Feedback**: Boxes glow to show the pattern, and flash green for a correct user input or red for an incorrect one, providing immediate feedback[^3].
-   **Persistent Score Tracking**: The game keeps a running count of wins for each difficulty level, which can be reset at any time[^1][^4].
-   **Responsive Design**: A fluid layout that seamlessly adapts to desktops, tablets, and mobile phones using CSS media queries[^2].
-   **Modern JavaScript**: Built with modern ES6+ features, including `async/await` to manage the game sequence timing gracefully and create clean, readable asynchronous code[^4].
-   **Clean UI**: A visually appealing interface styled with CSS variables for easy theme management[^3].

---

## 🛠️ Technologies Used

-   **HTML5**: For the structure and semantic markup of the game[^1].
-   **CSS3**: For styling, layout, and animations[^3].
    -   **Flexbox**: For creating responsive and flexible layouts.
    -   **CSS Variables**: For maintainable and clean color theming.
    -   **Media Queries**: To adapt the UI for different screen sizes[^2].
-   **JavaScript (ES6+)**: For all game logic, DOM manipulation, and event handling[^4].
    -   **`async/await`**: To manage the timing of the pattern sequence.

---

## ⚙️ How to Run

This is a front-end project and requires no special backend setup.

1.  **Clone the repository:**
    ```
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```
    cd your-repo-name
    ```
3.  **Open the `index.html` file in your browser.**
    -   It is recommended to use a live server extension (like "Live Server" in VS Code) for the best experience.

---

## 📂 File Structure

```

memory-game/
├── index.html       \# The main HTML structure
├── style.css        \# Core styles for the desktop layout
├── mobilestyle.css  \# Responsive styles for tablet and mobile
└── script.js        \# All game logic and interactivity

```

---

## 🧠 How It Works

The game operates on a state-based model managed by global JavaScript variables[^4]:

-   **State Variables**: `pattern`, `gameInProgress`, `userStep`, and `level` track the current state of the game.
-   **Difficulty Selection**: Clicking a difficulty button updates the `level` state variable and applies a 'glow' class for visual feedback.
-   **Game Start**: When the "Start Game" button is clicked:
    1.  The game state is reset (`userStep = 0`).
    2.  A new sequence is generated by `patternMaker(level)`.
    3.  An `async` function loops through the pattern, glowing each box with a delay between them using `await`.
    4.  The `gameInProgress` flag is set to `true`, allowing the user to begin playing.
-   **User Input**: A single event listener on each box checks for clicks.
    1.  If `gameInProgress` is `true`, it compares the clicked box's index to the expected step in the `pattern`.
    2.  If correct, it flashes green, and the `userStep` counter increments. If the user completes the pattern, they win, and the score is updated.
    3.  If incorrect, it flashes red, and the game ends.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

<div style="text-align: center">⁂</div>

[^1]: index.html

[^2]: mobilestyle.css

[^3]: style.css

[^4]: script.js

[^5]: https://www.youtube.com/watch?v=xWdkt6KSirw

[^6]: https://github.com/RamitVishwakarma/Simon-Says-Game/blob/main/README.md

[^7]: https://foobar123.com/create-memory-game-with-javascript-a53b0059f0d

[^8]: https://github.com/doragrishaeva/react-memory-game

[^9]: https://marina-ferreira.github.io/tutorials/js/memory-game/

[^10]: https://github.com/optimistanoop/memory-game/blob/master/README.md

[^11]: https://github.com/sandraisrael/Memory-Game-fend/blob/master/README.md

[^12]: https://gitlab.com/maheshsrisailam/memory-game/-/blob/main/README.md

[^13]: https://gitlab.lnu.se/1dv025/content/exercises/module-b/exercise-memory-game/-/blob/solution/README.md

[^14]: https://github.com/sparkfun/Simon-Says/blob/master/README.md

