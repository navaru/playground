# Implementing a styled Switch component

For styling, we use Panda CSS, which is the most complete solution of a modern Design System library.
Panda's documentation outlines the most important aspects of the library: [The new era of CSS-in-JS](https://panda-css.com/docs/overview/why-panda#the-new-era-of-css-in-js).

When implementing a component we'll use [Panda's concept of a recipe](https://panda-css.com/docs/concepts/recipes). In our example, the recipe is implemented in `Switch.styles.ts`.

The slots define the parts of the component. In our example the component is split into 4 parts:

- `Switch` – the root, which provides all the functionality required by the component
- `SwitchControl` – the control handles the state of the component
- `SwitchLabel` – the label displays a contextual description
- `SwitchThumb` – the thumb is a visual respresentation of the component's state

Each slot from the recipe provides the required style for the above component parts.

The `createStyledContext` function from `~/styled` is an utility that creates a context provider and consumer that makes it simple to map slot styles to component parts.

#### What is the difference between `useSwitch` and `useSwitchApi`?

- `useSwitchApi` is the "headless" part of the component, it takes in the required `props` from the `<Switch>` component and returns the `api` that will be used by `Switch` and all its subcomponent parts.
- `useSwitch` is a context consumer, and has the role of providing the `api` to all its subcomponents.

#### Why is this structure usedul?

In `~/views/SwitchDemo.tsx` there are two versions of the switch component, one with default styles and one customized. The current structure makes it easy to extend the component, either by changing its appearance or by adding custom functionality.
