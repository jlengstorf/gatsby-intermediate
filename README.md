# Intermediate/Advanced Gatsby

A Frontend Masters workshop.

## Setup

Clone this repo locally:

```
git clone git@github.com:jlengstorf/gatsby-intermediate.git
```

Make sure you’re on the `start` branch:

```
git checkout start
```

## Part I: Create a Docs Theme

### Set up the workspace

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/20843e9...d50445f

- Create the `packages/gatsby-theme-docs` folder
  - `yarn init`
  - Create `index.js` (`// boop`)
- Create a site for theme dev
  - Create folder
  - `yarn init`
  - `yarn add gatsby react react-dom`
- Set up Yarn workspaces
  - Create a `package.json` in the workspace root
  - `yarn workspaces info`
- Install the docs theme
  - `yarn workspace theme-dev add "gatsby-theme-docs@*"` (quotes for Windows)
  - Add default config to `gatsby-config.js`

### Pre-bootstrap

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/635492f...23e3a02

- Add a utility helper to ensure default options are set
  - `utils/default-options.js`
- Make sure the content directory exists (`onPreBootstrap`)
  - `yarn workspace gatsby-theme-docs add mkdirp`
  - Validate that this works by starting the `theme-dev` site in `develop` mode

### Load MDX files

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/23e3a02...ff5e90a

- `yarn workspace gatsby-theme-docs add gatsby-source-filesystem gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react`
- Create a default layout for MDX files `src/components/layout.js`
- Create a `gatsby-config.js` to accept theme options with defaults
- Configure `gatsby-source-filesystem`
- Configure `gatsby-plugin-mdx`
- Add an MDX file to the `theme-dev` site
- `yarn workspace theme-dev develop`
- See MDX file at http://localhost:8000/___graphql

### Schema customization

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/ff5e90a...f73b333

- Define the docs data type (`createSchemaCustomization`)
  - Show this data type in GraphiQL
  - Run a query to show it returning an empty array
- Create docs nodes from MDX files (`onCreateNode`)
  - Only get the docs, not all MDX files
- Define a custom resolver to get the MDX `body` content (`createResolvers`)
  - Write a passthrough resolver (hat tip to [Chris Biscardi](https://github.com/christopherbiscardi) for the original work to figure out how these work)
  - Clean, restart, then run a query in GraphiQL to show this working

### Display custom DocsPage nodes on the screen

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/f73b333...33a34f4

- Create the required React components to display a docs page
  - Create a `DocsPage` component (`src/components/docs-page.js`)
    - Set up `MDXRenderer`
  - Create a `DocsPageTemplate` component (`src/templates/docs-page-template.js`)
    - Write the GraphQL query in GraphiQL first
    - Add GraphQL variables
    - Explain how they work in Gatsby (context)
- Create pages from the docs nodes (`createPages`)
  - Write a GraphQL query in GraphiQL first

### Add Theme UI

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/33a34f4...2f39723

- Add Theme UI
  - `yarn workspace gatsby-theme-docs add theme-ui gatsby-plugin-theme-ui @emotion/core @mdx-js/react`
  - Update `gatsby-config.js`
  - Add a theme file (`src/gatsby-plugin-theme-ui/index.js`)
  - Update `Layout` to use Theme UI
  - Update `DocsPage` to use Theme UI

### Create a table of contents

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/2f39723...cfaeac2

- Create a `TableOfContents` component (`src/components/table-of-contents.js`)
  - Write a static query to load docs
  - Add to `DocsPage`
  - Add active styles
- Create another page (`docs/another.mdx`) to verify working

### Add syntax highlighting

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/cfaeac2...c0161a4

- `yarn workspace gatsby-theme-docs add mdx-utils prism-react-renderer`
- Create a `Code` component (`src/components/code.js`)
- Shadow the MDX components in Theme UI to use `Code` (`src/gatsby-plugin-theme-ui/components.js`)
- Insert a fenced code block (use `src/components/docs-page.js`) into `docs/index.mdx`
- Restart to test

### Add live editing support

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/c0161a4...acfb394

- `yarn workspace gatsby-theme-docs add react-live`
- Add a scope file for easy shadowing
- Update `Code` to use `react-live`

## Part II: Honkify

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/acfb394...8ee9afc

- Install the docs theme
  - `yarn workspace negronis add "gatsby-theme-docs@*"` (quotes for Windows)
  - Update `gatsby-config.js` with custom basePath and disable theme MDX
  - The existing theme from the Honkify site will automatically override the docs Theme UI config
  - Start the develop server to show this
- Shadow the `Layout` component
- Add a link to the docs
- Create a `Button` component (`src/components/button.js`)
  - Shadow the `scope.js` file to add `Button`
- Add the `Button` component in a live-editable code block in the docs
- Show it interacting with Honkify

## Part III: Build a Negroni Fan Site

### Add Theme UI

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/a911be0...d9af348

- `yarn workspace negronis add theme-ui gatsby-plugin-theme-ui @emotion/core @mdx-js/react`
- Update `gatsby-config.js`
- Add a preset (`yarn workspace negronis add @theme-ui/presets`)
- Create a theme file (`src/gatsby-plugin-theme-ui/index.js`)
- Create a `Layout` component (`src/components/layout.js`)
- Update `src/pages/index.js` to use the `Layout`
- Update `src/pages/history.js` to use the `Layout`
- Add styles for a hollow button

### Add image support

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/d9af348...b16794b

- `yarn workspace negronis add gatsby-source-filesystem gatsby-transformer-cloudinary gatsby-image`
- Get credentials from Cloudinary
- Add env vars to `.env.development`
- Load env vars in `gatsby-config.js`
- Add plugin config to `gatsby-config.js`
- Query for images
  - Show this in GraphiQL first
- Update `src/pages/index.js` to display an image
  - Quick aside to show transformations with Cloudinary because they’re dope
- Update `src/pages/history.js` to display an image

### Install the docs theme

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/b16794b...939da0d

- Recipes are a kind of documentation! :)
- `yarn workspace negronis add "gatsby-theme-docs@*"` (quotes for Windows)
- Add modified config to `gatsby-config.js`
  - `basePath: '/recipes'`
  - `contentPath: 'content/recipes'`
- Update `src/pages/index.js` to link to `/recipes`
  - Add styles for a primary button
- Shadow the `Layout` component in the docs theme
- Shadow the `TableOfContents` component in the docs theme

### Install the events theme

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/939da0d...83ccc72

- `yarn workspace negronis add @jlengstorf/gatsby-theme-events`
- This was built as part of this free course on authoring Gatsby themes: https://egghead.io/courses/gatsby-theme-authoring
- Update `gatsby-config.js` with a custom basePath and contentPath
- Shadow the `Layout` component in the events theme
- Add a link to the `/events` page on the home page

## Part IV: Rick & Morty Lookup App

### Add support for client-side GraphQL queries

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/83ccc72...f0254aa

- `yarn workspace lookup add gatsby react react-dom`
- Create pages
  - `src/pages/index.js`
  - `src/pages/search.js`
- Add support for client-only routes
  - `gatsby-node.js` (`onCreatePage`/`matchPath`)
  - Add a redirect `netlify.toml`
  - `yarn global add netlify dev`
  - Test using `netlify dev`

### Create a search form

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/f0254aa...dc574e5

- Use React Hooks to track the search input value
- Make the search query URL-friendly
- Use programmatic navigation to redirect to a linkable search results page

### Create a results component

Diff: https://github.com/jlengstorf/gatsby-intermediate/compare/dc574e5...23d35f9

- `yarn workspace lookup add gatsby-plugin-apollo @apollo/react-common @apollo/react-hooks graphql-tag`
- Update `gatsby-config.js` to use `gatsby-plugin-apollo`
- Point Apollo at the Rick & Morty API (https://rickandmortyapi.com/graphql/)
- Query based on the current search string
- Figure out the search string from state or URL
  - `location`

