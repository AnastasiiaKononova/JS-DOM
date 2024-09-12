//  ПОДІЇ

/*
Два важливих принципи:

У об'єктів є властивості та методи.
Об'єкти можуть ділитися властивостями та методами зі своїми нащадками за допомогою прототипного наслідування
2. На сторінці стаються події

Подія - (англ. event) - це певна дія (зміна чогось), що може відбутись на сторінці.
Події можуть бути: 
    - згенерованими користувачем (рухи мишею, клацання, набір тексту на клавіатурі)
    - станом сторінки
    - у відповідь на запити на сервер
Реакція на подію наз. обробкою події.


Для того, щоби пояснити браузеру, що ми очікуємо певної події, ми на неї "підписуємось"
*/

const nlistBtn = document.querySelectorAll('button');


for (const btn of nlistBtn) {
    btn.addEventListener('click', clicker);
}



function clicker(event){   /* Функція eventHandler - обробник події  */
    console.dir(event.target);
    // const para = event.target.parentElement.children[0];
    const par = document.querySelector('#par-text')
    par.style.color = 'violet';
}


/* Таска:
Створити три кнопки. На першій написано "red", на другій "green",  на третій "blue".
За натиснення на кнопку фоновий колір цієї кнопки має стати таким, як на кнопці написано
*/


