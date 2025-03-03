## Use .js for custom hooks (useSomething.js) since they are just JavaScript functions and don’t render UI.

## Use .jsx for components that return JSX.

## Best practice:

```javascript

/src
  /hooks
    useFetch.js   ✅ (Recommended)
    useTheme.js   ✅
    useFetch.jsx  ❌ (Not recommended)
  /components
    Header.jsx    ✅ (Component returns JSX)
    Footer.jsx    ✅


```

## Remember

```javascript

It's not necessary to use .js while creating custom hooks; you can use .jsx as well. However, the convention is to use .js (or .ts if using TypeScript) because custom hooks typically do not return JSX—they return values, functions, or state.


```
