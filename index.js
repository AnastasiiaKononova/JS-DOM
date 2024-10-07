const button = document.querySelector('button');

// button.addEventListener('click', function() {
//     console.log('FOREVER LOOP')
//     while(true){}
//     console.log('button clicked')
// });

/*
JS однопоточний - одна задача за один раз
Асинхронний JavaScript
*/

button.addEventListener('click', function() {
        
    console.log('button clicked')
});

console.log('Javascript working');


    /// EventLoop - цикл подій - це программа, частина браузера, яка є диспетчером асинхронних процесів
    /*
    до асинхронних задач належать:
        - обробники подій
        - запити на сервер
        - відкладені у часі задачі (timeout, interval)
    */

        /*
 setTimeout, setInterval
Задачі, відкладені у часі
*/

/*
setTimeout(fn, time) - приймає посилання на функцію і через вказаний час запускає її на виконання
Час отстрочки - МІНІМАЛЬНИЙ ЧАС, оскільки через цей вказаний проміжок часу задача буде переміщена у чергу коллбеків і буде чекати на виконання, коли стек буде пустим. 
*/

function tick() {
    console.log('tick');
    //// важкі обчислення, які займають час
}

setTimeout(tick, 0);

function cons() {
    console.log('КОНСООООЛЬ')
}

cons();

/*
Чи виконаєтья setTimeout/setInterval з 0 затримкою одразу?

1. Будь-яка асинхронна задача ОБОВ'ЯЗКОВО проходить шлях WebApi -> callback queue -> event loop -> stack
(якщо за цей час в стеку є задачі - очікуємо їхнього виконання)

2. У браузерів є т.зв. "мінімальна затримка", через яку задача піде з webApi до черги.
це може бути 4-5ms (у кожного браузера вона може бути своя)
*/