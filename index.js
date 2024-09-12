// // DOM

// /*
// Document
// Object
// Model
// (Об'єктна модель документа) - це представлення документу як набору елементів-об'єктів, інтерфейс для взаємодії з документом.
// Вхідна точка DOM - document
// */

// console.log(1);

// const p = document.getElementById('super-par');
// console.log(p);
// p.style="color: green";


// const paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs)  /// HTMLCollection - псевдо-масив (ітерована колекція, яка не є екземпляром Array)

// for (const element of paragraphs) {
//     element.style = 'color: violet';
// }

// const array = [...paragraphs]; // перетворюємо її на звичайний масив, що дає нам можливість використовувати методи масива



// const redClassP = document.getElementsByClassName('red-text');

// console.log(redClassP);

// /*
// Два важливих принципи:
// 1. Все, що нас оточує - це об'єкти.



// Доступ до елементів

console.log(document);
console.log(document.head);
console.log(document.body);

// document.querySelector(<selector>)
// document.querySelectorAll(<selector>)
// document.getElementById(<id>)
// document.getElementsByClassName(<class>)
// document.getElementsByTagName(<tag>)

const rootEl = document.getElementById('root');
console.log('rootEl :>> ', rootEl);
console.dir(rootEl);

const divEls = document.getElementsByTagName('div');
console.log('divEls :>> ', divEls);

const divRoot2 = divEls[0];

const contentDivs = document.getElementsByClassName('content');
console.log('contentDivs :>> ', contentDivs);

const rootEl3 = document.querySelector('#root');
console.log('rootEl3 :>> ', rootEl3);

const divEls1 = document.querySelectorAll('div');
console.log('divEls1 :>> ', divEls1);

// Отримати список елементів з класом content
const contentEls = document.querySelectorAll('.content');
console.log(contentEls);