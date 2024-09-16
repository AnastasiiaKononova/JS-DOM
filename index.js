
/*
Таска:
за натиснення на div - збільшувати рахунок і виводити його в article
за натиснення на батьківський section -  зменшувати рахунок
Зробити це одним обробником події
*/

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

section.addEventListener('click', handler);
const game = new Game(article);

function handler(event) {
    if(event.target === event.currentTarget) {
        game.decrement(); 
    } else {
        game.increment();
    }
}