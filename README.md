## Stacks

React, Webpack + TS ( Electron Forge Template), React Router Dom, TailwindCSS, Mantine UI, react query, zod
react hook form, react i18
React Flow, Konva, openCV

## Tool - Electron Forge

https://www.electronforge.io/guides/framework-integration/react-with-typescript

## CLI

`yarn create electron-app woohoo --template=webpack-typescript`

`yarn` ( make sure to create `.yarnrc.yml` and add `nodeLinker: node-modules` if you don't see node_modules )

`yarn add react react-dom`

`yarn add -D @types/react @types/react-dom`

make sure to update `tsconfig.json`
`"jsx": "react-jsx”`

`webpack.main.config.ts`
update the entry to `./src/main.ts`

https://tailwindcss.com/docs/installation/using-postcss

`yarn add -D tailwindcss postcss autoprefixer postcss-loader`

`yarn tailwindcss init`

`yarn start`

Add this in `webpack.rules.ts`

```jsx
 {
    test: /\.css$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        },
      },
    ],
  },
```

## Mantine UI

https://mantine.dev/getting-started/
`yarn add @mantine/core @mantine/hooks @mantine/notifications @mantine/dropzone @mantine/modals`
`yarn add --dev postcss-preset-mantine postcss-simple-vars`

react hook form
`yarn add react-hook-form` for resolver need to add resolver library! TO DO

## i18n

https://github.com/shawnbanasick/electron-react-i18n-boilerplate

`yarn add react-i18next i18next i18next-browser-languagedetector i18next-electron-fs-backend i18next-fs-backend i18next-resources-to-backend`

`i18next-electron-fs-backend i18next-fs-backend` might not need these ?

set up locales inside `src`

in `i18n.ts`

```
  .use(
    resourcesToBackend(
      (language, namespace) =>
        import(`../locales/${language}/${namespace}.json`)
    )
  )
```

remember to import i18n.ts in `index.tsx`
