"use strict";
// *
// ?
// !
// [A-Z]
// [a-z]
// [0-9]
// Створення регулярки
const regExp1 = new RegExp("\\br", "i");
const regExp2 = /\br/gi;
const testString = "rkjsjf rkjnjk lkjklsfsdfrrrr";
// regexp.test(string) => boolean
console.log(regExp1.test(testString));
console.log(testString.match(regExp2));
// Межі -------------------------------------------------------
// ^ - початок рядка
// $ - кінець рядка
// \b - границя слова (a-zA-Z0-9_)
// \B - не межа слова
// . - один будь-який символ
// Квантифікатори
// {8} - строго 8 символів         ( .{8} )
// {1,10} - від 1 до 10            ( 1{3,5} -  111 1111 11111)
// {1,} - від 1 до нескінченності
// * - {0,} - від 0 до нескінченності
// ? - {0,1} - від 0 до 1
// + - {1,} - від 1 до нескінченності
// Перевірити, чи відповідає рядок "ім'я прізвище" (4-10 8-20)
const string1 = "Test Testovych";
const reg1 = /^.{4,10} .{8,20}$/g;
console.log(string1.match(reg1));
// Task: Перевірити, що введений рядок email 1-10@1-20.2-4
// f@f.com +
// @dsfsdf.dfg -
const email = "rffftyjgdf@mail.com";
const reg2 = /^.{1,10}@.{1,20}\..{2,4}$/;
console.log(email.match(reg2));
// Знайти в тексті dog/dogs
const text = "I have a dog and my friens has many dogs. I like hotdogs";
const regDog = /\bdogs?\b/g;
console.log(text.match(regDog));
// Альтернативні символи / один з групи символів ---------------------
// [0123456789ABCDEF]
// \d = [0123456789] = [0-9]
// \D = ^\d
// [a-z]
// [A-Z]
// [a-zA-Z]
// \w [a-zA-Z0-9_] - символи слова
// \W = ^\w
// \s - space
// \S = ^\s
// Перевірити ім'я Aa, Aaaa (2-32)
const name = "Ivo";
const nameReg = /^[A-Z][a-z]{1,31}$/;
console.log(name.match(nameReg));