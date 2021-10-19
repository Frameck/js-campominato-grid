// const difficultyLevel = document.getElementById('difficulty-select')
const playButton = document.getElementById('play-button')
const boxContainer = document.querySelector('.box-container')
const difficultySelect = document.getElementById('difficulty-select')


playButton.addEventListener('click', () => {
    // al momento del click leggo il livello di difficoltà inserito dall'utente
    const difficultyLevel = difficultySelect.value

    // passo il livello di difficoltà come parametro nella funzione che genera il layout
    generateGridLayout(difficultyLevel)
})



/**
 * Funzione che calcola il numero totale di box da inserire in base al livello di difficoltà e poi li inserisce nel DOM
 * @param {number} difficultyLevel Livello di difficoltà scelto dall'utente tramite il select
 */
function generateGridLayout(difficultyLevel) {

    // reset del contenuto del 'box-container'
    boxContainer.innerHTML = ''

    difficultyLevel = parseInt(difficultyLevel)

    let totalBoxNumber

    // in base alla difficoltà scelta dall'utente, imposto il corretto numero di box
    switch (difficultyLevel) {
        case 1:
            totalBoxNumber = 100
            break;
        case 2:
            totalBoxNumber = 81
            break;
        case 3:
            totalBoxNumber = 49
            break;
    }

    // calcolo le dimensioni del box in base al 'totalBoxNumber'
    const boxWidth = 100 / Math.sqrt(totalBoxNumber)
    
    // creo ed inserisco i box nel DOM
    for (let i = 1; i < totalBoxNumber + 1; i++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.textContent = i
        box.style.width = boxWidth + '%'
        box.style.height = boxWidth + '%'

        box.addEventListener('click', () => {
            this.classList.toggle("box-active")
            console.log(this)
        })

        // box.addEventListener("click", onSingleCellClick)
        
        boxContainer.appendChild(box)
    }
}



// function onSingleCellClick() {
//     this.classList.toggle("box-active");
// }