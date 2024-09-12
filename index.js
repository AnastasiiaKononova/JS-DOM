/*
Створити пусту сторінку (без елементів).
Динамічно створити секцію, всередині якої параграф і кнопка. В параграфі та кнопці довільний текст
*/

const body = document.body;


const p = document.createElement('p');
p.textContent = 'Довільний текст';

const btn = document.createElement('button');
btn.textContent = 'Клацни мене';

const section = document.createElement('section');
section.append(p, btn);

body.append(section);