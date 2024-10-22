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

// Перевірити, що вказано номер телефона у форматі: +380-2цифри-3цифри-4цифри
const tel = "+380-12-345-6789";
// const tel= '+380-12-345-6789';
const telReg = /^\+380-?\d{2}-?\d{3}-?\d{4}$/;
console.log(tel.match(telReg));
// Знайти в рядку цілі числа (як мінімум одна) // 1, 0, -5555
const intText = "YUGjydf 555 dsvfsd 56165 kmkl4";
const intReg = /\b-?\d+\b/g;
console.log(intText.match(intReg));
// Перевірити, чи є число дійсним (з крапкою-роздільником) -465465.5555
const num = "-349.399";
const regNum = /^-?\d+(\.\d+)?$/g;
console.log(num.match(regNum));
// Перевірити, чи є рядок номером паспорту (AA000000)
const passportNumber = "AA123456";
const regPas = /^[A-Z]{2}\d{6}$/;
console.log(passportNumber.match(regPas));
// Альтернативні слова
// [123] = (1|2|3)
// (hrn|usd|eur)
// Знайти в тексті назви pets
const petText = "I have a dog. But my sister have a parrot.";
const petReg = /\b(dog|cat|parrot)\b/g;
console.log(petText.match(petReg));
const pets = ["dog", "cat", "parrot"];
const petReg2 = new RegExp(`\\b(${pets.join("|")})\\b`, "g");
console.log(petText.match(petReg2));
// Перевірити, що вказано номер телефона у форматі: +380-2цифри-3цифри-2цифри-2цифри
// (Допустимі коди - 097 098 099 ...)
const telNum = "+380-97-027-49-58";
const regTel2 = /^\+380-(97|98|99)-\d{3}(-\d{2}){2}$/;
console.log(telNum.match(regTel2));
// Групування ()
// Aaaaa-Aaaaaa (2-32 2-32)
const lastName = "Karpenko-Kariy";
const regLastName = /^[A-Z][a-z]{1,31}(-[A-Z][a-z]{1,31})?$/;
console.log(lastName.match(regLastName));
// ? переводе квантифікатор з жадібного режима в лінивий --------------------------
// Знайти цитати
console.log("I say 'yes', but think and say 'no'".match(/'.*?'/g));
// Знайти масиви в коді
const codeText = "const a = [1,0,2,3]; const b = 10; const c = [{a:10}];";
const codeReg = /\[.*?\]/g;
console.log(codeText.match(codeReg));
const regCodeText = /\b[.+?]$/;
// Позитивна випереджаюча перевірка / positive lookahead
console.log("I bought 10 apple by 155$".match(/\d+(?=\$)/g));
// Є також:
// Негативна випереджаюча перевірка / negative lookahead
// Позитивна ретроспективна перевірка / positive lookbehind
// Негативна ретроспективна перевірка / negative lookbehind
// Для перевірки пароля
// довжина: 8-16, мають бути букви верхнього і нижнього регістру, цифри, спец. символи
// Qq1.gggg
console.log(
  "Aq1gd?sf.sdqqy".match(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&.]).{8,16}$/
  )
);
// Методи з використанням регулярок
// replace - замінити частину рядка за критерієм
const str1 = "Fkjhjk       jsdjfs dsfsdf   dsfsfd    sdfsdfsf"; // s -> a
const resultStr1 = str1.replace(/\s{2,}/g, " ");
console.log(resultStr1);
// Task: Прибрати ненормативну лексику з повідомлень (fuck, ass, asshole) => ###
const str2 = "Fuck you. )))) You are asshole"; // '### you. )))) You are ###'
const newStr2 = str2.replace(/\b(fuck|ass|asshole)\b/gi, "###");
console.log(newStr2);
// const str3 =
//   "Fuck you dude! AAAAAASSHOLE!! FuCCCKKK Fuck Fuck Fuck Fuck Fuck!!!";
// const str3Result = str3.replace(/(f+u+c+k+|a+s{2,}h+o+l+e+)/gi, "####");
// console.log(str3Result);
// split - розділення на масив за вказаним роздільником
// Отримати масив слів з рядка
const str4 = "Fkjhjk       jsdjfs dsfsdf   dsfsfd    sdfsdfsf";
const resultStr4 = str4.split(/\s+/);
console.log(resultStr4);
// Task: Отримати масив з рядка дати з роком, місяцем, датою
// '1999-01-01' => ['1999', '01', '01']
// '1999/01/01' => ['1999', '01', '01']
// '1999.01.01' => ['1999', '01', '01']
const dateStr = "1999-01-01";
const dateArr = dateStr.split(/[-/.]/);
console.log(dateArr);