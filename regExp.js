// 'use strict';
// const regexp1 = new RegExp('qwerty', 'ig');
// const regexp2 = /qwerty/gi;
// // flags: i - незалежність від регістру
// //        g - глобальний пошук
// const testString = 'qwertyjsndfjkQwertydsnf';
// // const isMatch = regexp2.test(testString);
// // console.log('isMatch :>> ', isMatch);
// // const matchInfo = testString.match(regexp2);
// // console.log('matchInfo :>> ', matchInfo);
// // Межі -------------------------------------------------------
// // ^ - початок рядка
// // $ - кінець рядка
// // \b - границя слова (a-zA-Z0-9_)
// // \B - не межа слова
// const regexp3 = /^qwerty/;
// // console.log('qwertyq'.match(regexp3)); //+
// // console.log('qwertyq'.match(regexp3)); //+
// // console.log('111qwertyq'.match(regexp3)); //-
// const regexp4 = /^qwerty$/;
// // console.log('qwerty'.match(regexp4)); //+
// // console.log('qwerty7'.match(regexp4)); //-
// // Перевірити, чи dog є окремим словом
// // console.log('My dog is cute.'.match(/\bdog\b/));
// // console.log('I have a dog. My dog is cute.'.match(/\bdog\b/g));
// // console.log('I like hotdog.'.match(/\bdog\b/));
// // Чи стоїть на початку рядка окремим словом girl у будь-якому регістрі
// // 'Girl sfssdffdssd' +
// // 'giRl sdfsfsfsdf' +
// // 'girlfriend' -
// // 'she is a girl' -
// // console.log('girl is mine'.match(/^girl\b/i));
// // console.log('Girl sfssdffdssd'.match(/^girl\b/i));
// // console.log('giRl sdfsfsfsdf'.match(/^girl\b/i));
// // console.log('girlfriend'.match(/^girl\b/i));
// // console.log('she is a girl'.match(/^girl\b/i));
// // . - один будь-який символ ---------------------------------------------
// // чи в рядку 3 символи
// // console.log('qww'.match(/^...$/));
// // console.log('abc'.match(/^...$/));
// // console.log('qww1'.match(/^...$/));
// // console.log('qw'.match(/^...$/));
// // чи починається рядок на qw + 4 символи + ty
// // console.log('qwabcdty'.match(/^qw....ty/));
// // console.log('qw    ty'.match(/^qw....ty/));
// // console.log('qwabcty'.match(/^qw....ty/));
// // console.log('qwabcdety'.match(/^qw....ty/));
// // Квантифікатори -----------------------------------------------------
// // {8} - строго 8 символів         ( .{8} )
// // {1,10} - від 1 до 10            ( 1{3,5} -  111 1111 11111)
// // {1,} - від 1 до нескінченності
// // * - {0,} - від 0 до нескінченності
// // ? - {0,1} - від 0 до 1
// // + - {1,} - від 1 до нескінченності
// // Перевирити, що в імейлі мін 3 символи, потім @, потім мін 2 символи
// // console.log('qwe@qw'.match(/^.{3,}@.{2,}$/));
// // console.log('qw@qw'.match(/^.{3,}@.{2,}$/));
// // console.log('qw1@q'.match(/^.{3,}@.{2,}$/));
// // console.log('qw1fdsfsdf@qdsfsdf'.match(/^.{3,}@.{2,}$/));
// // Знайти всі слова, які починаються з R, і складаються з 10 символів
// // 'R123456789' +
// // 'R123' -
// // '11111R1111' -
// // console.log('Ramzes1234'.match(/^R.{9}$/));
// // console.log('Ramzes123'.match(/^R.{9}$/));
// // console.log('Ramzes1234v'.match(/^R.{9}$/));
// // console.log('damzes1234'.match(/^R.{9}$/));
// // Знайти всі dog(s)
// // console.log(
// //   'I love my dogs. My favourite dog is Mike.'.match(/\bdogs{0,1}\b/g)
// // );
// // console.log('I love my dogs. My favourite dog is Mike.'.match(/\bdogs?\b/g));
// // Альтернативні символи / один з групи символів ---------------------
// // \d = [0123456789] = [0-9]
// // \D = ^\d
// // [a-z]
// // [A-Z]
// // [a-zA-Z]
// // \w [a-zA-Z0-9_] - символи слова
// // \W = ^\w
// // \s - space
// // \S
// // console.log('abcdef'.match(/^[a-z]{5,10}$/));
// // console.log('abcd'.match(/^[a-z]{5,10}$/));
// // console.log('abcdefmmmmm'.match(/^[a-z]{5,10}$/));
// // console.log('abc1def'.match(/^[a-z]{5,10}$/));
// // Протестувати, чи ім'я валідне
// // (велика літера, сумарно 2-20 символів, тільки букви)
// // 'Ivo'
// // 'O' -
// // "iiiiii" -
// // console.log('Ivo'.match(/^[A-Z][a-z]{1,19}$/));
// // console.log('I'.match(/^[A-Z][a-z]{1,19}$/));
// // console.log('ivo'.match(/^[A-Z][a-z]{1,19}$/));
// //  Перевірити, чи в рядку тільки цифри (як мінімум одна)
// // '1'+
// // '54654564' +
// // '545f654564' -
// // console.log('1'.match(/^[0-9]+$/));
// // console.log('154445'.match(/^[0-9]+$/));
// // console.log('154445g'.match(/^[0-9]+$/));
// // Перевірити, що вказано номер телефона у форматі: +380-2цифри-3цифри-4цифри
// // console.log('+380-98-765-4321'.match(/^\+380-\d{2}-\d{3}-\d{4}$/));
// // console.log('+380-98-765-432'.match(/^\+380-\d{2}-\d{3}-\d{4}$/));
// // console.log('380-98-765-4321'.match(/^\+380-\d{2}-\d{3}-\d{4}$/));
// // Альтернативні слова --------------------------------------------------
// // [123] = (1|2|3)
// // (cat|dog)
// // dog, dogs, cat, cats, elephant
// // console.log(
// //   'I like my dog. And cats I like too.'.match(/\b((dog|cat)s?|elephant)\b/g)
// // );
// // Групування
// // Перевірка складного імені Aaaa(-Aaaaa)?
// // console.log('Eva-Maria'.match(/^[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?$/));
// // console.log('Eva'.match(/^[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?$/));
// // ? переводе квантифікатор з жадного режима в лінивий --------------------------
// // Знайти цитати
// // console.log("I say 'yes', but think and say 'no'".match(/'.*?'/g));
// // Виокремити речення
// // console.log(
// //   'Adsnfdsfjdsk sdfsdf sdfdsf. Fkjfkdsfsd sdfdsf fdd. Hlkjslf: dfkjdsk kl.'.match(
// //     /[A-Z].*?\./g
// //   )
// // );
// // Позитивна випереджаюча перевірка / positive lookahead
// console.log('I bought 10 apple by 1$'.match(/\d+(?=\$)/g));
// // Є також:
// // Негативна випереджаюча перевірка / negative lookahead
// // Позитивна ретроспективна перевірка / positive lookbehind
// // Негативна ретроспективна перевірка / negative lookbehind
// // Для перевырки пароля
// // довжина: 8-16, мають бути букви верхнього і нижнього регістру, цифри, спец. символи
// // Qq1.gggg
// console.log(
//   'Aq1g.qqy'.match(
//     /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&.].*).{8,16}$/
//   )
// );
// // Методи з використанням регулярок
// // replace - замінити частину рядка за критерієм
// const str1 = 'Fkjhjk       jsdjfs dsfsdf   dsfsfd    sdfsdfsf';
// const srt1Result = str1.replace(/\s{2,}/g, ' ');
// // Task: Прибрати ненормативну лексику з повідомлень (fuck, ass, asshole)
// const str2 = 'Fuck you. )))) You are asshole';
// const str2Result = str2.replace(/(fuck|ass|asshole)\b/gi, '!@#$');
// const str3 =
//   'Fuck you dude! AAAAAASSHOLE!! FuCCCKKK Fuck Fuck Fuck Fuck Fuck!!!';
// const str3Result = str3.replace(/(f+u+c+k+|a+s{2,}h+o+l+e+)/gi, '####');
// // split - розділення на масив за вказаним роздільником
// // Отримати масив слів з рядка
// const str4 = 'Fkjhjk       jsdjfs dsfsdf   dsfsfd    sdfsdfsf';
// const str4Result = str4.split('/s{1,}/g');
// // Task: Отримати масив з рядка дати з роком, місяцем, датою
// // '1999-01-01' => ['1999', '01', '01']
// // '1999/01/01' => ['1999', '01', '01']
// // '1999.01.01' => ['1999', '01', '01']
// const str5 = '1999.01.01';
// const str5Result = str5.split(/-|\/|\./g);
// // const str5Result = str5.split(/\!|@|#|\$|%|\^|-|\.|:/g);



