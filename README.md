# react_boilerplate

This is a template to quickly start SPA development using React.

## Installation

### Install Node.js

We utilize Volta as a version management tool for Node.js and npm. Please install it by checking the official documentation.

[Volta documents](https://docs.volta.sh/guide/)

- Node.js v18.18.2 (LTS as of 2023/10/15)
- npm (version bundled with the above Node.js)

### Start the Development Server

```sh
npm install # package install
npm run dev # start dev server
```

### Production Build and Server Start

```sh
npm run build # build
npm run start # start production server
```

## Custom theme

We are using the custom theme feature of Chakra UI and making our own settings.

Please refer to the source code in `/src/theme` for target source code.

[Chakra UI](https://chakra-ui.com/)

### colors

Manage the colors across the entire application.

[Customizing theme tokens](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-theme-tokens)

### components

Manage the styles of global components.

[Customizing global styles](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-single-components)

### styles

Manage global styles.

[Customizing global styles](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-global-styles)

### storybook

You can check the Chakra UI component on StoryBook.

[Chakra UI + Storybook](https://chakra-ui.com/getting-started/with-storybook)

## Features Directory

In this template, the `src/features` directory divides directories for each feature (feature).

A single feature is concerned only with its own responsibilities and not with those of other features.

### When depend on a single feature

If you create a component, hook, or util that depends on a single feature, create it in `features/xxx/`.

For example: `features/auth/components/SomeComponent`, `features/auth/hooks/useSomeHook`, etc.

### global components

Components that exist under `src/components` are intended for global use.

There are several types of global components, each with a different role.

#### elements

Generic components in `src/components/elements/`.

This is the case when the component is not dependent on any features and is responsible only for building the UI.

Component granularity does not matter under `elements/`, so `Button` with a single element, `Dialog` with multiple elements, etc. will be aligned in parallel.

#### layouts

Components for building layouts in `src/components/layouts/`.

They are not complete by themselves, but are responsible for building the framework.

Must be passed `child` as props.

#### providers

Components for building contexts in `src/components/providers/`.

It is responsible for constructing contexts containing arbitrary states and propagating them down the tree.

#### shares

Components for sharing between features in `src/components/shares/`.

Basically, features are not involved with each other, but there are cases when you want to share components between features.

In such cases, shared components can be used.

※ In such cases, there is a clear difference from `elements` components in that they depend on features.

## Plop

File creation from the CLI is possible with Plop.js.

For detailed settings, please check the following files:

- `plop-templates` - Template files
- `plopfile.js` - Configuration file

[Plop.js](https://plopjs.com/)
