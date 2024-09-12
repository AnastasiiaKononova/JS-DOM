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

const button = document.querySelector('button');

function clicker(){
    alert('hello, user');
}

/*
У відповідь на клік мишею на параграф тексту, вивести в консоль "ха-ха, попався! на текст клацати не можна"
*/

const p = document.querySelector('p');

p.addEventListener('click', function() {
    console.log("ха-ха, попався! на текст клацати не можна")
})
