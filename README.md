# Sprint 5 Module 2 Project

## Introduction

Welcome to Module 2 Project! In this project, you will practice using "vanilla" JavaScript to manipulate the DOM without any frameworks. Your goal is to build a game using only JavaScript.

By the time you finish this project, you will have gained the foundation to build games such as Minesweeper, Connect-Four, Battleship, or any grid-based game you wish to create.

To complete this project, you will use the following technical skills:

1. **Select elements** and groups of elements from the DOM.
1. **Loop** over arrays and lists of DOM elements.
1. **Manipulate class names and inline styles** of elements.
1. **Manipulate text** contents of elements.
1. **Traverse the DOM** using properties of the DOM nodes.
1. **Create listeners** for click events and keyboard events.

In addition to these technical skills, the following soft skills will significantly impact your performance:

1. Attention to detail. Make sure there isn't a single character out of place!
1. Perseverance. Keep trying until you figure it out!
1. Patience. Make sure to read the entire README for important information.

## Instructions

You have received a take-home coding assessment for a Web Developer position as part of the hiring process. Your task is to complete a game using only JavaScript.

You can find a [fully-functional mock](https://bloominstituteoftechnology.github.io/W_U2_S5M2_module_project/) showing the desired end result.

Good luck!

### 💾 Setup

**Here are the steps to set up this project:**

1. **Clone this repository** to your computer, allowing you to run the software locally for development purposes.

1. Within your terminal, navigate to the project folder **and execute `npm install`**.

1. After successful installation **execute `npm start`** in your terminal.

1. You will load the app in Chrome by **navigating the browser to `http://localhost:3003`**.

1. If you haven't already, install the [Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode.

### 🥷 Tasks

**Here are guidelines for completing your tasks:**

- If you look inside the `frontend` folder you will notice it contains, among other assets, an `index.js` file. If you inspect the head element of the `index.html` document, you will find the script being loaded there.

- You will complete your tasks inside the `frontend/index.js` file. Do not modify any other files. Detailed instructions for each task can be found below.

- As you make progress, the behavior of the game will start matching that of the [mock](https://bloominstituteoftechnology.github.io/W_U2_S5M2_module_project/).

- Have fun, and check out the Solution Video for this project if you need help!

#### 👉 TASK 1 - Understand the existing code

<details>
  <summary>Click to read</summary>

  ---

Read the whole script, line by line! If you don't understand the existing code, it won't be easy to work on it.

Use a `console.log` if you have any doubts about a particular variable's value. Research any syntax that looks foreign. Read the comments carefully!

**In its current state, the script is performing the following DOM manipulations:**

1. Setting up a footer dynamically so that the year number is always correct.
1. Populating the `div#grid` with five children `div.row`.
1. Populating each `div.row` with five children `div.square`.
1. Adding a class name of `targeted` to one of the squares to highlight it.
1. Building a helper function to get five random indices in the range 0-24 inclusive.
1. Populating 5 random squares, using the indices above, with live mosquitoes.

**The script also declares several useful variables and helpers:**

1. A `startTime` variable and a `getTimeElapsed` function to create the Game Over message.
1. A `getAllSquares` helper function to grab all the `div.square` elements from the DOM.
1. A `keys` dictionary of the keyboard's keys used in the game. Keyboard events will contain which key was pressed.

  ---

</details>

#### 👉 TASK 2 - Use a click event to highlight a new square

<details>
  <summary>Click to read</summary>

  ---

Your game should respond when a user clicks on a square. Clicking on a non-highlighted square should remove the highlighting from the old square and apply it to the new one. Clicking on the highlighted square has no effect.

The game highlights the square with an extra class name (you can find the new class name in your code or by inspecting the mock). When clicking on a new square, the old square must have its class name removed (or from _all_ squares for a more "brute-force" approach) and added to the clicked square.

You will find the event listener function already scaffolded in its proper place; all you have to do is implement it.

  ---

</details>

#### 👉 TASK 3 - Use the arrow keys to highlight a new square

<details>
  <summary>Click to read</summary>

  ---

You will now add the ability to select a square using arrow keys. Note that you must stay within the bounds of the grid. Clicking the "up" arrow when the target is already at the top row should have no effect, and so on.

Once again, the event listener function is already scaffolded. It's up to you to make it work! Here are a few hints:

1. You can find out which key the user pressed by inspecting the event's `key` property and comparing it against the `keys` dictionary at the top of the script.

1. You can determine which square is currently targeted by searching for the `div.square` element that [contains](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) the class name responsible for highlighting.

1. To make your work easier, you should take advantage of the following properties of DOM elements:

   - `.children` gives you the list of squares inside a row element.
   - `.parentElement` gives you the row containing a particular square element.
   - `.nextElementSibling` gives you the following square or row, if any.
   - `.previousElementSibling` gives you the preceding square or row, if any.
   - `.firstChild` gives you the mosquito inside a square, if any.

1. These properties can be chained together to quickly traverse the DOM. For example: `square.parentElement.children[2].classList.add('a-cousin-of-square')`.

1. Pseudo code for "up" (SPOILER ALERT ❗):

```js
// If the key is the up key:
//   The current square is the square with the class name that enables highlighting
//   If the parent of the current square (row x) has a sibling element before it (row y):
//     Get the index `i` of the current square within row x
//     Remove the class name that enables highlighting from the current square
//     Apply the class name to the square within row y at index `i`
```

  ---

</details>

#### 👉 TASK 4 - Use the space bar to exterminate a mosquito

<details>
  <summary>Click to read</summary>

  ---

Now that you can select a square, it's time to code the space bar to squash a targeted mosquito.

Note that hitting the space bar while on an empty square or a square holding a dead mosquito has no effect.

If the square contains a live mosquito, you must [edit a data attribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) on the mosquito to mark it as dead (inspect the DOM in the mock to see the data attribute on the mosquito). The data attribute determines whether a given mosquito is dead or alive.

After marking the mosquito as dead, you must change the background color of the square to red using an inline style. Once the background is red, it remains red.

  ---

</details>

#### 👉 TASK 5 - End the game

<details>
  <summary>Click to read</summary>

  ---

Once the player exterminates all mosquitoes, you must render any end-game changes.

Whenever you squash a mosquito, use `querySelectorAll` to determine how many _live_ mosquitoes remain. Game over is determined by all mosquitoes being dead as per their data attribute. You can select elements by their data attribute [using an attribute selector](https://css-tricks.com/almanac/selectors/a/attribute/).

One change you need to implement on game's end is that the text of `p.info` is updated to `Extermination completed in <time elapsed> seconds!`. You can use the helper function at the top of the script to determine the time elapsed since the script was loaded.

The other change is the appearance of a Restart button inside `header h2`. This button lets the player restart the game by forcibly reloading the page within a click listener.

If you are unsure how to force a browser window to reload using JavaScript, you can ask ChatGPT by saying **"How can I force a browser window reload using JavaScript?"**, or you can search on Google using the query **"force page reload with javascript site:stackoverflow.com"**.

For extra practice, instead of reloading the browser, you can utilize your DOM manipulation skills to reset the DOM and reposition the mosquitoes.

It would be nice to move the focus of the window to the Restart button upon Game Over, for easier restarting, but this is optional.

  ---

</details>

## FAQ

<details>
  <summary>Are there automated tests in this project?</summary>

No. All testing will be manual testing performed by the developer - you! Make sure the app behaves just like the mock. In a real team, the QA specialist or the Product Designer will easily spot the differences between the design and the implementation.

</details>

<details>
  <summary>I am getting errors when I run npm install or npm start. What is going on?</summary>

This project requires Node to be correctly installed on your computer to work. Your learning materials should have covered the installation of Node. Sometimes Node can be installed but misconfigured. You can try executing `npm run fixit` (check `package.json` to see what this does), but if Node errors are recurrent, it indicates something is wrong with your machine or configuration, so you should request assistance from Staff.

</details>

<details>
  <summary>Do I need to install libraries or add scripts to the HTML?</summary>

No. Everything you need should be installed already.

</details>

<details>
  <summary>Why am I not allowed to edit the CSS file?</summary>

The CSS is the domain of a different team, and in this particular project we're not supposed to touch it. Do not use inline styles to get around this limitation.

</details>

<details>
  <summary>Why am I not allowed to edit the HTML file?</summary>

This part of the product is a Single Page Application, so the HTML is mostly empty, and Javascript automatically generates the page. Building a large grid using only HTML would be extremely tedious!

</details>

<details>
  <summary>My page does not work! How do I debug it?</summary>

Save your changes and reload the site in Chrome. If your code has a syntax problem, the app will print error messages in the console. Focus on the first message. Place console logs right before the crash site (errors usually inform of the line number where the problem originates) and see if your variables contain the data you think they do.

Suppose there are no errors, but the page is not doing what it should. In that case, the debugging technique is similar: put console logs to ensure that the code you are working on is executing and check that all variables in the area hold the correct data.

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

Do NOT delete your repository from GitHub! Instead, commit frequently as you work. Make a commit whenever you achieve anything and the app isn't crashing in Chrome. This in practice creates restore points you can use should you wreak havoc with your app. If you find yourself in a mess, use git reset --hard to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well, but it is advised that you request assistance from a learner assistant.

</details>

<details>
  <summary>Why are there so many files in this project?</summary>

Although a small, "old-fashioned" website might be made of just HTML, CSS and JS files, these days we mostly manage projects with Node and its package manager, NPM. Node apps typically have a `package.json` file and several other configuration files placed at the root of the project. This project also includes automated tests and a web server, which adds a little bit of extra complexity and files.

</details>

<details>
  <summary>Is this how web projects are normally organized?</summary>

Web projects can be organized in many ways and there aren't many standards. Some developers like the freedom, while others prefer to use opinionated frameworks, which can do a lot of magic but require folders and files be structured and named just so.

</details>

<details>
  <summary>Why is all code inside index.js wrapped inside a function?</summary>

This way we can easily import your code as a single function should we want to run it through automated tests.

</details>

<details>
  <summary>What are the package.json and package-lock.json files?</summary>

The `package.json` file contains meta-information about the project like its version number, scripts that the developer can execute, and a list of the dependencies that are downloaded when you execute `npm install`. There can be some wiggle room to allow newer versions of the dependencies to be installed, so the `package-lock.json` file, when present, makes sure the exact same versions of everything are used every time the project is installed from scratch.

</details>

<details>
  <summary>What is the .eslintrc.js file?</summary>

This file works in combination with the Eslint extension for VSCode to highlight syntax errors and problems in your code. By editing this file you can customize your linting rules.

</details>
