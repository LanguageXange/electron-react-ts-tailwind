Electron Forge
https://www.electronforge.io/guides/framework-integration/react-with-typescript

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
