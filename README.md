# Список пользователей GitHub

**Реализованный функционал:**

- [x] Поиск пользователей GitHub по заданной подстроке.
- [x] Сортировка по количеству репозиториев.

Данные по пользователям берутся с API GitHub:<br>
[https://developer.github.com/v3/search/#search-users](https://developer.github.com/v3/search/#search-users)

**Для запуска выполните команды:**<br>
`npm id`<br>
`npm run start`

Проект выполнен на React + Typescript.<br>
Для стилизации использована библиотека Styled Components.<br>
Сборка осуществляется Webpack.

**Написаны 3 юнит-теста:**

1. На активную страницу пагинации
2. Запуск функции на нажатие кнопки поиска.
3. Рендер карточки пользователя.
