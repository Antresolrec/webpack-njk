# 1. Описание шаблона
## Требования
Сборка создавалась с следующими версиями  
node v12.19.0  
yarn v1.22.10

## Технологии:
1. Webpack  
2. Yarn
3. Scss
4. nunjucks - шаблонизатор html
5. Prettier - Отвечает за визуальное форматирование кода
6. Eslint - Отвечает за правильность написания кода

## Контроль качества кода:
Контроль качества кода производится при помощи Prettier и Eslint.
За основу конфигураций (.eslintrc.js, .prettierrc.js) был взят **Style Guide Airbnb** + включенные настройки плагина **eslint-plugin-vue**.

# 2. Инструкция по развертыванию
1. Клонируйте репозиторий  
2. Установите командой **yarn** зависимости проекта

# 4. Описание команд
**yarn build** - Билд проекта prod версии
**yarn dev** - Запуск проекта в dev режиме
**yarn lint** - Запуск линтинга всего проекта и автоматического исправления. Линтер сможет исправить только некоторые проблемы

# 5. Для форматирования кода используется Prettier.
Для быстрого форматирования кода под локальную конфигурация проекта требуется установить плагин в вашу IDE.