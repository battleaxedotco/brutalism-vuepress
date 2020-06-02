# Panelify

## Styles

```html
<Panelify
  name="brutalism-basic"
  app="ILST"
  theme="darkest"
  url="https://frosty-mcclintock-6929d0.netlify.app/"
/>
<Panelify
  name="brutalism-router"
  app="AEFT"
  theme="gradient"
  :gradient="0"
  url="https://keen-mcnulty-28a063.netlify.app/#"
  route="/"
/>
```

## Props

| Property | Type   | Default |                                           Description |
| :------- | :----- | :------ | ----------------------------------------------------: |
| name     | String |         |                           Text to appear in panel tab |
| app      | String | ILST    |                    App ID of host application to mock |
| theme    | String | darkest | starlette: darkest, dark, lightest, light or gradient |
| gradient | Number | null    |           If AEFT/AUDT/PPRO, 0 - 100 as dark to light |
| url      | String |         |                 The URL to a web version of the panel |
| route    | String | /       |                            Subroute of the iframe URL |
| height   | String | 100%    |                      CSS height value for the wrapper |
| width    | String | 100%    |                       CSS width value for the wrapper |
