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

### Set up tailwind config files
```
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
