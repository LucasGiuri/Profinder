# PROFINDER PROJECT !

## How to use

Install it and run:

```bash
npm install
npm run dev
```

if you want to access, the deploy is in localhost:3000

## Run Jest tests

```bash
npm run test
```

## Run Storybook

```bash
npm run storybook
```

if you want to access, the deploy is in localhost:6006

## The structure of the App

```
|
|-- apis/                         APIs
|-- assets/                       assets (images, fonts, etc...)
|-- components/                   dumb components
|-- config/                       Jest configuration files
|-- pages/                        server pages using Next.js
|   |-- _app.js                   Root Component
|   |-- index.js                  root
|-- scss/                         global SCSS files
|-- store/                        global store
|-- utils/                        util libs
|   |-- Rules/                    rules to calculate the total price of concepts
|   |-- Offers/                   offers of the app
|-- .storybook                    storybook configuration
|-- .babelrc                      Babel configuration
|-- next.config.js                Next.js configuration file
|-- package.json                  npm configuration and dependencies
|-- package-lock.json             npm fixed version dependencies
|-- README.md                     Your are looking it
```

## Why this architecture?

- I decided to work with next js, so this lib needs a "pages/" folder to knwo all the posible urls (it can be change with the config).
- There are a scss globaly to knkow the colors, breakpoints and general styles,
- The "pages" are more intelligents than the components, so in this case, it has the connection with redux and set the operations and properties that the components will use.
- The "pages" are containers so they dont need a css.
- I think that all the selectors always be public, so in the "store/" folder there is a "selectors.js", and this files includes all the selectors of the app, in this case i've just 1 but in the future this file will be really important, because you can access to all the selectors and you can know the naming and what state will use. So all the containers will call this file regardless of which redux selector it belongs (with the operations the same thing happens).
- "utils/" folder has the rules and offers so there are really important in this exam. I created a rules folder, in this file the total of the concepts will be calculated according to their respective offers. In the future probably there are more offers so this file is scalable and you can import a new offer and add in the function.
In "offers/" folder you can see all the offers separaed from type, like "mugOffers", "voucherOffers", etc. So this is scalable, if you want to create another type, you can create a new folder like "jeansOffers" and add import it in offers.js, also you can create a transversal offers and then apply that into a rules.js


## Components

All the components has the same structure:

```
|-- components/                   dumb components
|   |-- Button/                   Button component
|   |   |-- __snapshots__/        Button snapshots
|   |   |-- Button.js             Button
|   |   |-- Button.scss           Button styles
|   |   |-- Button.test.js        Button tests
|   |   |-- Button.storybook.js   Button storybooks
```

- The goal of this structure is to centralize each aspects of component in the same place.
  So if you want to create or find some test you can access easily

- All the components are using hooks like useState, useEffect, instead of class component, this is 
  the better way to render components

- If some component recives props i decided to work wih proptypes to set default and required props

- All the scss of the component work like BEM architecture

## Libraries

### Redux

It is a webapp state manager and i think that all the platform can use it to work with centralized data.

### Storybook

It is a library to check all the components and their states renders, this allows to see clearly if there are similar components or repeated, and in the future, if it is necessary design checks,
i think that this lib facilitates communication with that team.

### Next JS

It is a library to create SSR pages, it is the tracking solution on web pages with react. In the other hand, this lib can separate the server to the client and this allows to charge the base html from the server.

## Conclusion

I've been working on that around 7 hours, first of all i created a structure with this technologies, then i think about the scalability of the process, the basic components, etc. And on the last time i decided to code with TDD. I used differents design patters about the project, in react and redux like function components, destructuring, Merge destructured props with other values, Layout components, div as children, State hoisting, Higher-order component (redux connect), Container component (pages in this case like container), Controlled input (with proptypes lib), Add/Edit/Remove objects in an array (Redux Patterns)

## The future of the app

### Next JS implementation

I decided to use next js to create a good base for the future, because now the app has only 1 page,
but if you want to know "what is the most used service?", "how many boxes surpass 100 euros?",
"What is the combo that has the most changes?", etc. You need to get tracking of each action, and the
new pages are provided from the server, so the page will be rendered faster and the user experience are better.


### Lokalise or some i18n lib

In the future the app could be global so the translations are really important, in this case i think this implementation is not relevant to the test. Lokalise is a great lib to generate and maange the 
translations of the app, because it has a great graphic enviroment.

### Axios

In this case the services are mocked so the app does not connect with external endpoints, but in the
future probably this situation changes so in "apis/" module we need to work with axios lib or similar
and the config will be in this folder too