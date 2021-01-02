document.addEventListener('DOMContentLoaded', () => {
    //since we put our js file in the head of html, we make sure to run the js file after all the html and
    // css content was loaded.

    const grid = document.querySelector('.grid');
    const doodler = document.createElement('div');
    let doodlerLeftSpace = 50;
    let doodlerBottomSpace = 150;
    let isGameOver =  false;
    let platformNumber = 5;

    function createDoodler() {
        doodler.classList.add('doodler');
        grid.appendChild(doodler);
        doodler.style.left = doodlerLeftSpace + 'px';
        doodler.style.bottom = doodlerBottomSpace + 'px';
    }

    class Platform {
        constructor(bottomSpace) {
            this.bottom = bottomSpace;
            this.left = Math.random() * 315;
            this.createPlat = document.createElement('div');
            const createPlat = this.createPlat; //saved newly created element in a variable
            createPlat.classList.add('platform');
            createPlat.style.left = this.left + 'px';
            createPlat.style.bottom = this.bottom + 'px';
            grid.appendChild(createPlat);

        }
    }

    function makePlatforms() {
        for (let i = 0; i < platformNumber; i++) {
            let platformGap = 600 / platformNumber;
            let newPlatBottom = 100 + i * platformGap;
            let newPlatform = new Platform(newPlatBottom);

        }

    }

    function startGame() {
        if(!isGameOver) {
            createDoodler();
            makePlatforms();
        }
    }

     //must attach this to a button
    startGame();

})