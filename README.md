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

- Set up Yarn workspaces
- Create a site for theme dev
- Create the `packages/gatsby-theme-docs` folder
  - `yarn init`
  - Create `index.js` (`// boop`)
- Install the docs theme
  - `yarn workspace negronis add "gatsby-theme-docs@*"` (quotes for Windows)
  - Add default config to `gatsby-config.js`
- Make sure the content directory exists (`onPreBootstrap`)
  - `yarn add mkdirp`
  - Validate that this works by starting the `theme-dev` site in `develop` mode
- Define the docs data type (`createSchemaCustomization`)
  - Show this data type in GraphiQL
  - Run a query to show it returning an empty array
- Create docs nodes from MDX files (`onCreateNode`)
  - Only get the docs, not all MDX files
- Define a custom resolver to get the MDX `body` content (`createResolvers`)
  - Write a passthrough resolver (hat tip to @christopherbiscardi for the original work to figure out how these work)
- Create the required React components to display a docs page
  - Create a `Layout` component (`src/components/layout.js`)
  - Create a `DocsPage` component (`src/components/docs-page.js`)
    - Set up `MDXRenderer`
  - Create a `DocsPageTemplate` component (`src/templates/docs-page-template.js`)
    - Write the GraphQL query in GraphiQL first
    - Use the Code Exporter to get started
- Create pages from the docs nodes (`createPages`)
  - Write a GraphQL query in GraphiQL first
- Add Theme UI
  - `yarn workspace gatsby-theme-docs add theme-ui gatsby-plugin-theme-ui @emotion/core @mdx-js/react`
  - Update `gatsby-config.js`
  - Add a theme file (`src/gatsby-plugin-theme-ui/index.js`)
  - Update `Layout` to use Theme UI
  - Update `DocsPage` to use Theme UI
- Create a `TableOfContents` component (`src/components/table-of-contents.js`)
  - Write a `useDocs` hook (`src/hooks/use-docs.js`)
- Add support for syntax highlighted code
  - `yarn workspace gatsby-theme-docs add mdx-utils prism-react-renderer`
  - Create a `Code` component (`src/components/code.js`)
  - Shadow the MDX components in Theme UI to use `Code` (`src/gatsby-plugin-theme-ui/components.js`)
  - Insert a fenced code block (use `src/components/docs-page.js`) into `docs/index.mdx`
- Add support for live editing code blocks
  - `yarn workspace gatsby-theme-docs add react-live`
  - Add a scope file for easy shadowing
  - Update `Code` to use `react-live`

## Part II: Honkify

- Install the docs theme
  - `yarn workspace negronis add "gatsby-theme-docs@*"` (quotes for Windows)
  - Update `gatsby-config.js` with custom basePath and disable theme MDX
  - The existing theme from the Honkify site will automatically override the docs Theme UI config
  - Shadow the `Layout` component
- Create a `Button` component (`src/components/button.js`)
  - Shadow the `scope.js` file to add `Button`
  - Add the `Button` component in a live-editable code block in the docs
  - Show it interacting with Honkify

## Part III: Build a Negroni Fan Site

- Add Theme UI
  - `yarn workspace negronis add theme-ui gatsby-plugin-theme-ui @emotion/core @mdx-js/react`
  - Add a preset (`yarn workspace negronis add @theme-ui/presets`)
  - Create a theme file (`src/gatsby-plugin-theme-ui/index.js`)
- Create a `Layout` component (`src/components/layout.js`)
  - Update `src/pages/index.js` to use the `Layout`
  - Update `src/pages/history.js` to use the `Layout`
  - Add styles for a hollow button
- Add image support
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
- Install the docs theme
  - Recipes are a kind of documentation! :)
  - `yarn workspace negronis add "gatsby-theme-docs@*"` (quotes for Windows)
  - Add modified config to `gatsby-config.js`
    - `basePath: '/recipes'`
    - `contentPath: 'content/recipes'`
- Update `src/pages/index.js` to link to `/recipes`
  - Add styles for a primary button
- Shadow the `Layout` component in the docs theme
- Shadow the `TableOfContents` component in the docs theme
- Install the events theme
  - `yarn workspace negronis add @jlengstorf/gatsby-theme-events`
  - This was built as part of this free course on authoring Gatsby themes: https://egghead.io/courses/gatsby-theme-authoring
  - Update `gatsby-config.js` with a custom basePath and contentPath
  - Shadow the `Layout` component in the events theme

## Part IV: Rick & Morty Lookup App

- Add support for client-side GraphQL queries
  - `yarn workspace lookup add gatsby-plugin-apollo @apollo/react-common @apollo/react-hooks graphql-tag`
  - Update `gatsby-config.js` to use `gatsby-plugin-apollo`
  - Point Apollo at the Rick & Morty API (https://rickandmortyapi.com/graphql/)
- Create pages
  - `src/pages/index.js`
  - `src/pages/search.js`
- Add support for client-only routes
  - `gatsby-node.js` (`onCreatePage`/`matchPath`)
  - Add a redirect `netlify.toml`
  - Test using `netlify dev`
- Create a search form
  - React hooks
  - Programmatic navigation
  - Add a submit handler
- Create a results component
  - Query based on the current search string
- Figure out the search string from state or URL
  - `location`

