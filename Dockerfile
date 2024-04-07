# Базовый образ
FROM node:18.18-alpine

# Установка рабочей директории в контейнере
WORKDIR /app

# Копирование файлов проекта в контейнер
COPY . .

# Установка зависимостей проекта
RUN npm install

# Сборка приложения
RUN npm run build

# Глобальная установка Angular CLI
RUN npm install -g @angular/cli

# Запуск приложения на порту 80
CMD ng serve --host 0.0.0.0 --port 80
