# jota.one website

## Install
### Install Zola
Follow instructions on [getzola.org](https://www.getzola.org/documentation/getting-started/installation/)

### Install the frontend (svelte + postcss + tailwind-ready)
```bash
$ cd frontend
$ npm install
```

## Run the project
You have to run two commands concurrently:
```bash
# From the project root
$ zola serve
```
```bash
# From the 'frontend' folder
$ npm run dev
```

The frontend is written in the `static/assets` folder in both `dev` and `build` mode, the latter optimizes the generated js and css bundles for production.

## Build the project
Build the frontend first:
```bash
$ cd frontend
$ npm run build
```

To build the website:
```bash
# from the project root 
$ zola build
```


## Project setup
The project structure is the result of running the command
```bash
$ zola init .
```

The frontend has been installed (in the dedicated `frontend` directory) following the [Installing Svelte & Integrating Tailwind CSS (and PostCSS)](https://dev.to/jackabox/installing-svelte-integrating-tailwind-css-and-postcss-1163) tutorial.
