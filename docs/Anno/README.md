# Anno

## Styles

```html
<Anno>Default</Anno>
<Anno bold>bold</Anno>
<Anno italic>italic</Anno>
<Anno underline>underline</Anno>
<Anno overline>overline</Anno>
<Anno strikethrough>strikethrough</Anno>
```

| Property     | Type    | Default |                         Description |
| :----------- | :------ | :------ | ----------------------------------: |
| bold         | Boolean | false   |       Sets text to font-weight: 600 |
| italic       | Boolean | false   |                  Italicizes content |
| underline    | Boolean | false   |     Sets text-decoration: underline |
| overline     | Boolean | false   |      Sets text-decoration: overline |
| strikethough | Boolean | false   | Sets text-decoration: strikethrough |

## Props

```html
<Anno text='text="Text here"' />
<Anno size="20px">size="20px"</Anno>
<Anno uppercase>uppercase</Anno>
<Anno color="#46a0f5">color="#46a0f5"</Anno>
<Anno weight="100">weight="100"</Anno>
<Anno weight="400">weight="400"</Anno>
<Anno weight="600">weight="600"</Anno>
<Anno weight="900">weight="900"</Anno>
<Anno letter-spacing=".5ch">letter-spacing=".5ch"</Anno>
<Anno text-decoration="underline">
  text-decoration="underline"
</Anno>
```

| Property        | Type    | Default              |                      Description |
| :-------------- | :------ | :------------------- | -------------------------------: |
| text            | String  |                      |     Inner text if not using slot |
| color           | String  | var(--default-color) | Valid CSS color value of content |
| uppercase       | Boolean | false                |   Sets text-transform: uppercase |
| size            | String  | 14px                 |             Font size of content |
| weight          | String  | 500                  |           Font-weight of content |
| letter-spacing  | String  | normal               |      Spacing between each letter |
| word-spacing    | String  | normal               |        Spacing between each word |
| margin          | String  | 0px 0px 1ch 0px      |        Margin value of component |
| text-decoration | String  | none                 |    Sets text decoration to value |
