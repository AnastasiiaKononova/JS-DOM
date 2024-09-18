
// /*
// Таска:
// за натиснення на div - збільшувати рахунок і виводити його в article
// за натиснення на батьківський section -  зменшувати рахунок
// Зробити це одним обробником події
// */

const section = document.querySelector('section');
const article = document.querySelector('article');




class Game {
    constructor(scoreElement) {
       this.count = 0;
        this.scoreElement = scoreElement
    }

    get count() {
        return this._count
    }

    set count(v) {
        this._count = v;
    }

    increment() {
        ++this.count;
        this.rerender();
        return this.count;
    }

    decrement() {
        --this.count;
        this.rerender();
        return this.count;
    }

    rerender(){
        this.scoreElement.textContent = this.count;
    }
}

/*

section.addEventListener('click', handler);
const game = new Game(article);

// function handler(event) {
//     if(event.target === event.currentTarget) {
//         game.decrement(); 
//     } else {
//         game.increment();
//     }
}


/*
За натиснення в батьківському елементі в article замість лічильника вивести координати натиснення
X: 64
Y: 25
*/

// section.addEventListener('click', function(event){
//     article.textContent = `X: ${event.clientX}, Y: ${event.clientY}`
// })


/*
 За натиснення на батьківський перемістити div за місцем кліка
*/

section.addEventListener('click', function(event){
    if (event.target === event.currentTarget) {
        const div = event.target.children.box;
        const x = event.clientX - (div.offsetWidth / 2);
        const y = event.clientY - (div.offsetHeight / 2);
        div.style.top = `${y}px`;
        div.style.left = `${x}px`;
    }


});




