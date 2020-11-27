# tailwindcss-with-vuejs

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Set up Tailwind CSS

### Install dependencies
```
npm install tailwindcss postcss autoprefixer

- Note: if see error like `Error: PostCSS plugin tailwindcss requires PostCSS 8.`,
  uninstall Tailwind and re-install using the compatibility build instead:

npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

### Set up tailwind.config and postcss.config files
```
npx tailwindcss init -p   

- Note: if see error like `Cannot find module 'autoprefixer'`,
  try above:

npx tailwindcss init -p 
```

### Create tailwind.css
```
e.g. create the tailwind.css file under /assets/css directory

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Import tailwind.css to main.js
```
import "./assets/css/tailwind.css";
```


## Optimizing for Production with Purgecss

### Install dependency
```
npm install -D @fullhuman/postcss-purgecss
```

### Config postcss
```
Update tailwind.config.js file, provide an array of paths to all of your template files using the purge option:

// tailwind.config.js

module.exports = {
  purge: ["./src/**/*.vue", "./public/index.html"],
  ...
};
```

- Now whenever you compile your CSS with NODE_ENV set to production,
Tailwind will automatically purge unused styles from your CSS.
