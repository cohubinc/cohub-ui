# Cohub UI

Sharable UI components for react web apps

## Development

### Get the app running locally

1. Clone and `cd` into the repo

```bash
> git clone https://github.com/cohubinc/cohub-ui.git && cd cohub-ui
```

2. Install the dependencies

```bash
> yarn install
```

3. Start the build process

> watches for changes in the `./src` directory and builds the app bundle into `./dist`

```bash
> yarn watch
```

## Adding new components or updating existing ones

There are two options for developing components. You can use the Storybook server or the development-playground server to see what your working on in the browser

> Components live in `./src/components/`

### Starting the dev playground server

1. Move into the **development-playground** directory and get those dependencies

```bash
> cd development-playground
> yarn install
```

2. Start the playground server

```bash
> yarn start
```

3. Add your new component then import and use it in `development-playground/index.tsx`

4. Save the file and after the build completes the browser should update automatically

### Adding a Storybook story

Story's are written in [**MDX**](https://mdxjs.com/) and should generally be co-located in the root of the component dir

1. Add a `__stories__` dir to the root of the components folder

2. Create the `*.stories.mdx` file. For example: `> touch src/components/Avatar/__stories__/Avatar.stories.mdx`

3. Reference the already created stories for examples on how these should be written

4. From the project root start the Storybook server and open the stories in your browser @ http://localhost:6007
   > Make sure your project build process is running in a separate tab (yarn watch)

```bash
> yarn storybook
```
