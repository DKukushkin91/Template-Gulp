## Шаблон для вёрстки проектов, сборка на Gulp

Что в себе содержит:
```bash
Изображения:
- Оптимизация изображений с почти не заметной потерей качества.
- Конвертация jpg, png в webp
- Сборка svg sprite из нескольких svg файлов
- Конвертация нужных svg в background для css

Шрифты:
- Конвертация шрифтов из ttf в woff && woff2 форматы
- Подключение шрифтов в scss файл

JavaScript:
- Сборка JS в 1 файл (ES5+, Jquery)
- Сборка в отдельный файл скриптов библиотек.
- Source map JS для разработки
- Компиляция JS с Babel для продакшна 
- Минификация JS для продакшна

Стили:
- Сборка SCSS / SASS файлов в 1 css
- Сборка CSS файлов от библиотек в 1 с минификацией
- Source map стилей для разработки
- Растановка необходимых префексов в стилях для продакшна
- Минификация стилей для продакшна 

Верстка:
- Компиляция PUG в HTML файлы.
- Шаблоны для верстки
- Миксины для верстки

Общее:
- Наблюдатель за изменениями в файлах
- Локальный сервер
```


Установка модульных зависимостей:
```bash
npm i
```

Запуск Development сборки с source map и локальным сервером. 
<br>Отслеживание изменений в файлах.
```bash
npm start
```

Production сборка проекта без source map с минификацией кода и Babel для JS:
```bash
npm run build
```
