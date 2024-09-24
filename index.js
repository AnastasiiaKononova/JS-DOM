"use strict";
const user = {
  firstName: "Test1",
  lastName: "Testovich1",
  age: 28,
  photoSrc: "https://sigc.edu/sigc/ad-sigc/datas/images/userimg.jpg",
};

// 1 + Створити елемент
// 3 ~ Задати значення атрибутам
// 4 ~ Додати класи
// 5 ~ Додати контент
// 6 ~ додати обробник на подію
// 2 + Вбудувати на потрібне місце

    const userCardEl = document.createElement("article");
userCardEl.classList.add("userCard");
document.body.append(userCardEl);

const userImg = document.createElement("img");
userImg.src = user.photoSrc;
userImg.alt = `${user.firstName} ${user.lastName}`;
userImg.classList.add("userImg");
userCardEl.append(userImg);

const userInfoEl = document.createElement("div");
userInfoEl.classList.add("userInfo");
userCardEl.append(userInfoEl);

const userNameEl = document.createElement("p");
userNameEl.classList.add("userName");
userNameEl.textContent = `${user.firstName} ${user.lastName}`;
userInfoEl.append(userNameEl);

const userAgeEl = document.createElement("span");
userAgeEl.classList.add("userAge");
userAgeEl.textContent = user.age;
userInfoEl.append(userAgeEl);

const trashIcon = document.createElement("i");
trashIcon.classList.add("fa-solid");
trashIcon.classList.add("fa-trash");
trashIcon.classList.add("trashIcon");

function deleteUser(e) {
  // userCardEl.remove();
  // e.target.parentElement.remove();
  e.target.closest(".userCard").remove();
}
trashIcon.onclick = deleteUser;
userCardEl.append(trashIcon);
