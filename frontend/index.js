// 👉 TASK 1 - Understand the existing code 👈
function moduleProject2() {
  // 👇 WORK WORK BELOW THIS LINE 👇
  let startTime = new Date().getTime() // Record start time

  function getTimeElapsed() { // To be used at end of game to get elapsed time
    let currentTime = new Date().getTime()
    return currentTime - startTime
  }

  // Setting up the footer content
  let footer = document.querySelector('footer')
  let currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let keys = { // To easily check `event.key` on keyboard events
    space: ' ',
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    left: 'ArrowLeft',
  }

  // Helper function to grab all squares
  const getAllSquares = () => document.querySelectorAll('.square')

  // Populating the grid with rows and squares
  for (let n = 0; n < 5; n++) {
    // Creating the rows
    let row = document.createElement('div')
    document.querySelector('#grid').appendChild(row)
    row.classList.add('row')
    // Creating the squares
    for (let m = 0; m < 5; m++) {
      let square = document.createElement('div')
      square.classList.add('square')
      row.appendChild(square)
      square.addEventListener('click', (event) => {
        // 👉 TASK 2 - Use a click handler to target a square 👈
        const highlightedSquare = document.querySelector('.targeted');
        // if it's a mosquito, move to the square and check to see if it's targeted
        // if the square is not targeted, move there and unhighlight the current square
        // if the square is targeted, do nothing
        if (event.target.nodeName === 'IMG') {
          if (!event.target.parentElement.classList.contains('targeted')) {
            highlightedSquare.classList.remove('targeted');
            event.target.parentElement.classList.add('targeted');
          }
        } else if (event.target.classList.contains('square')) {
          if (!event.target.classList.contains('targeted')) {
            highlightedSquare.classList.remove('targeted');
            event.target.classList.add('targeted');
          }
        }
      })
    }
  }
  document.querySelector('.row:nth-child(3)')
    .children[2].classList.add('targeted') // Initial square being targeted

  // Helper function to obtain 5 random indices (0-24) to put mosquitoes in
  function generateRandomIntegers() {
    let randomInts = []
    while (randomInts.length < 5) {
      let randomInt = Math.floor(Math.random() * 25)
      if (!randomInts.includes(randomInt)) {
        randomInts.push(randomInt)
      }
    }
    return randomInts
  }
  let allSquares = getAllSquares()
  generateRandomIntegers().forEach(randomInt => { // Puts live mosquitoes in 5 random squares
    let mosquito = document.createElement('img')
    mosquito.src = './mosquito.png'
    mosquito.style.transform = `rotate(${Math.floor(Math.random() * 359)}deg) scale(${Math.random() * 0.4 + 0.8})`
    mosquito.dataset.status = 'alive'
    allSquares[randomInt].appendChild(mosquito)
  })

  document.addEventListener('keydown', evt => {
    // 👉 TASK 3 - Use the arrow keys to highlight a new square 👈
    const highlightedSquare = document.querySelector('div.square.targeted');
    const rowWithHighlightedSquare = highlightedSquare.parentElement;

    if (evt.key === keys.up) {
      if (rowWithHighlightedSquare.previousElementSibling) {
        for (let i = 0; i < rowWithHighlightedSquare.children.length; i++) {
          if (rowWithHighlightedSquare.children[i] === highlightedSquare) {
            highlightedSquare.classList.remove('targeted');
            rowWithHighlightedSquare.previousElementSibling.children[i].classList.add('targeted');
          }
        }
      }
    } else if (evt.key === keys.right) {
      if (highlightedSquare.nextElementSibling) {
        highlightedSquare.classList.remove('targeted');
        highlightedSquare.nextElementSibling.classList.add('targeted');
      }
    } else if (evt.key === keys.down) {
      if (rowWithHighlightedSquare.nextElementSibling) {
        for (let i = 0; i < rowWithHighlightedSquare.children.length; i++) {
          if (rowWithHighlightedSquare.children[i] === highlightedSquare) {
            highlightedSquare.classList.remove('targeted');
            rowWithHighlightedSquare.nextElementSibling.children[i].classList.add('targeted');
          }
        }
      }
    } else if (evt.key === keys.left) {
      if (!(rowWithHighlightedSquare.firstChild === highlightedSquare)) {
        highlightedSquare.classList.remove('targeted');
        highlightedSquare.previousElementSibling.classList.add('targeted');
      }
    }
    // 👉 TASK 4 - Use the space bar to exterminate a mosquito 👈
    if (evt.key === keys.space) {
      if (highlightedSquare.firstChild && (highlightedSquare.firstChild.dataset.status === "alive")) {
        highlightedSquare.firstChild.dataset.status = "dead";
        highlightedSquare.style.backgroundColor = "red";
        const aliveMosquitos = document.querySelectorAll('img[data-status="alive"]');

        if (!aliveMosquitos.length) {
          const paraInfo = document.querySelector('p.info');
          paraInfo.textContent = `Extermination completed in ${getTimeElapsed() / 1000} seconds!`
          const headerH2 = document.querySelector('h2');
          const restartButton = document.createElement('button');
          restartButton.textContent = "Restart";
          headerH2.appendChild(restartButton);
          restartButton.focus();

          restartButton.addEventListener('click', () => {
            // Resetting the DOM
            startTime = new Date().getTime() // restart time
            highlightedSquare.classList.remove('targeted');
            document.querySelector('.row:nth-child(3)')
              .children[2].classList.add('targeted')
            allSquares.forEach(sqEle => {
              sqEle.style.backgroundColor = '';
              if (sqEle.firstChild) { sqEle.firstChild.remove(); };
            })
            generateRandomIntegers().forEach(randomInt => { // Puts live mosquitoes in 5 random squares
              let mosquito = document.createElement('img')
              mosquito.src = './mosquito.png'
              mosquito.style.transform = `rotate(${Math.floor(Math.random() * 359)}deg) scale(${Math.random() * 0.4 + 0.8})`
              mosquito.dataset.status = 'alive'
              allSquares[randomInt].appendChild(mosquito)
              paraInfo.textContent = "Use arrow keys or mouse clicks to target, space bar to exterminate!";
            })
            restartButton.remove();
          })
        }
      }
    }
    // 👉 TASK 5 - End the game 👈
  })
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT MODIFY THE CODE BELOW
// ❗ DO NOT MODIFY THE CODE BELOW
// ❗ DO NOT MODIFY THE CODE BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject2 }
else moduleProject2()
