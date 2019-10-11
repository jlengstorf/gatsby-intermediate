# Intermediate/Advanced Gatsby

A Frontend Masters workshop.

## Plan

- Two sites (simple marketing)
- Create a theme for adding docs
  - MDX
  - Create a ToC from the filesystem
  - Live editable components
- Install on both sites
- Show the power of theme-ui to auto-inherit
- Shadow on one to show how that works
- Add a second theme for FAQs

## Part I: Create a Docs Theme

- Set up Yarn workspaces
- Create a site for theme dev
- Create the `packages/gatsby-theme-docs` folder
  - `yarn init`
  - Create `index.js` (`// boop`)
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

## Part II: Build a Negroni Fan Site

- 

### What’s already in the repo?

1. Negroni Appreciation
  - All `content`
  - All `src/images`
  - Content in `pages`, but not images

1. Honkify
  - `src/pages/index.mdx` with all content
  - `docs` content, but without the `react-live` code snippets
  - MDX plugin

### Site One Workflow

1. Set up MDX for the home page
