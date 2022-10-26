# Getting Started
1. Install nodejs LTS [https://nodejs.org/en/]
2. install yarn [https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable]
3. add ssh key to gitlab
4. clone project from gitlab git clone git@gitlab.betconstruct.int:bc-all-inn/allinn_frontend.git.

## Checkount to the feature branch
git checkout [branchName]

After checkout run command `yarn` in the root of the project to actualize all packages

## Available Scripts

In the project directory, you can run:

### `yarn`

Install all dependencies

In the any of `packages` directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn icon`

Re-build icon's font for using in code.
Just put new icon svg file in `services/icons/src/icons/fonts`.
Use `<Icon name="NAME" />` where NAME.svg.
On `yarn start` icons generated automatically.


### `yarn icon:dev`

Generate icon's font for viewing all icons in one page on dev.
Open [http://localhost:3000/fonts/fronticon/fronticon.html](http://localhost:3000/fonts/fronticon/fronticon.html) 
to view all icons in the browser.


# Translation tool

1. Export actual data from https://tt-tool.betconstruct.com/
2. Copy data to the `alreadyTranslated.json`

## Run `node index.js`

Result will be stored to the `untranslated` dir. 
It is a diff between already translated and fallback keys in csv format divided by language

Add service for project  -- lerna add @monorepo/icons --scope=@monorepo/front

