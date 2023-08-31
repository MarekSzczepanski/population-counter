# Population Counter
### About
This app counts average population of chosen regions of chosen countries in chosen time period. I am the only author of this app.

### Usage

##### Webpage
This app is hosted on...
##### Instalation
`git clone 'https://github.com/MarekSzczepanski/population-counter.git'`

`cd population-counter`

`npm install`

`npm start`

### Purpose
This app was created mostly for learning React + Redux in practise.

## Stack Used
React + TypeScript, Redux, ESLint (Google preset) + Prettier, MUI, Styled Components

#### React:
I used React because it's popular and it's my favourite tool to make SPAs.

##### Some of single Page Application (SPA) advantages useful for this app:
* High speed
* No page refresh
* Wonderful state management
* Overall development comfort

#### TypeScript:
Overall, TypeScript is a more powerful and versatile language than JavaScript. In serious projects it's necessary for developing high-quality code.
#### Redux:
In this project there is quite much state data that is useful in many components. That's why I've chosen Redux with it's **single source of truth (SSOT)** pattern, instead of passing the state up to the highest component and then down to lower components.
#### ESLint:
ESLint helps to write consistent and error-free code. It can be used to enforce coding style rules, detect potential errors, and improve the readability of the code.
##### ESLint's Google Preset
The Google Preset is a set of rules that follow the Google JavaScript style guide. It is a good choice for project teams that want to follow a serious and well known style guide.
##### Prettier
Prettier is a code formatter that helps in establishing consistent code. It's very handy together with ESLint.
#### Material UI (MUI):
Material UI is a popular React UI library that provides a wide range of pre-built components. It helps to build pretty, responsive, and accessible user interfaces **faster**.
#### Styled Components:
Here are some specific advantages of using styled components over regular CSS:

**Scoped styles**: Styled components create unique class names for their styles, which helps to prevent style conflicts.

**Functional styling**: Styled components are written as functions, which makes them more modular and easier to test.

**Composition**: Styled components can be composed together to create more complex styles.

**Themes**: Styled components can be used to create themes, which makes it easy to change the look and feel of your application.
## Conventions
#### Semantic commits:
Benefits of using semantic commits:
* They make it easier to understand the history of your project.
* They help to automate tasks such as generating changelogs and determining semantic version bumps.
* They help to communicate changes to the team members and other stakeholders.
* They help to write more meaningful commit messages.
## License
[MIT](https://github.com/MarekSzczepanski/population-counter/blob/main/LICENSE "Go to license")
