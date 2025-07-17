# Zustand Todo List

Это проект на базе [Next.js](https://nextjs.org), созданный с помощью [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Приложение представляет собой список задач (Todo List) с использованием библиотеки [Zustand](https://github.com/pmndrs/zustand) для управления состоянием.

## Функциональность

- Добавление новых задач.
- Редактирование существующих задач.
- Удаление задач.
- Управление состоянием с помощью Zustand.
- Использование TailwindCSS для стилизации компонентов.

## Структура проекта

- **`src/app/page.tsx`**: Главная страница приложения, отображающая компонент `TodoList`.
- **`src/components/TodoList.tsx`**: Основной компонент для отображения и управления списком задач.
- **`src/store/`**: Хранилище Zustand для управления состоянием задач.

## Установка и запуск

### Установка зависимостей
```bash
npm install
# или
yarn install
# или
pnpm install
```

### Запуск в режиме разработки
```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть приложение.

### Сборка для продакшена
```bash
npm run build
```

### Запуск собранного приложения
```bash
npm run start
```

## Технологии

- **Next.js**: Фреймворк для серверного рендеринга и создания React-приложений.
- **React**: Библиотека для создания пользовательских интерфейсов.
- **Zustand**: Легковесная библиотека для управления состоянием.
- **TailwindCSS**: Утилитарный CSS-фреймворк для стилизации.
- **TypeScript**: Статическая типизация для JavaScript.

## Развертывание

Приложение можно развернуть на платформе [Vercel](https://vercel.com). Ознакомьтесь с [документацией по развертыванию Next.js](https://nextjs.org/docs/app/building-your-application/deploying) для получения дополнительной информации.

## Дополнительные ресурсы

- [Документация Next.js](https://nextjs.org/docs)
- [Руководство по Next.js](https://nextjs.org/learn)
- [Репозиторий Zustand](https://github.com/pmndrs/zustand)
- [Документация TailwindCSS](https://tailwindcss.com/docs)

## Лицензия

Этот проект является приватным и не предназначен для публичного использования.