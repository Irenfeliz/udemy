/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (
            personalMovieDB.count == "" ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)
        ) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const nameMovie = prompt("Один из последних просмотренных фильмов?", ""),
                rangeMovie = prompt("На сколько оцените его?", "");

            if (
                nameMovie != null &&
                nameMovie.length < 50 &&
                nameMovie.length > 0 &&
                rangeMovie != null &&
                rangeMovie.length < 50 &&
                rangeMovie.length > 0
            ) {
                personalMovieDB.movies[nameMovie] = rangeMovie;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Да вы киноман!");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let n = 1; n < 4; n++) {
            personalMovieDB.genres[n - 1] = prompt(
                `Ваш любимый жанр под номером ${n}?`
            );

            if (
                personalMovieDB.genres == "" ||
                personalMovieDB.genres == null
            ) {
                console.log('Вы ввели некорректные данные');
                n--;
            } else {
                personalMovieDB.genres[n - 1];
            }
            personalMovieDB.genres.forEach(() => {
                console.log(`Любимый жанр #${n} - это ${personalMovieDB.genres[n - 1]}`);
            });
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};

personalMovieDB.writeYourGenres();
console.log(personalMovieDB);
