# Fold

## Styles 

```html
  <Fold label="Default">
    <Fold label="Nested Default">
      <Button label="Slot content" />
    </Fold>
  </Fold>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
|  |  |  |  |

## Props 

```html
  <Fold label='mount as open' :open="true">
    <Button label="Slot content" />
  </Fold>
  <Fold prefs-id="exampleID" label="auto-save state">
    <Button label="Slot content" />
  </Fold>
  <Fold label='persistent' :persistent="false">
    <Button label="Slot content" />
  </Fold>
  <Fold label='inner-padding' inner-padding="30px">
    <Button label="Slot content" />
  </Fold>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| label | String |  | Text to appear before folding icon |
| open | Boolean | false | Reactive prop to open and shut component |
| prefs-id | String |  | Autosave value in localStorage |
| persistent | Boolean | true | If false, contents are destroyed when shut |
| inner-padding | String |  | Padding assigned between parent and slot |

## Events 

```html
  <Fold label='@click' :open="true" @click="testClick">
    <Button label="Slot content" />
  </Fold>
  <Fold label='@prefs' :open="true" prefs-id="foldExampleEvent" @prefs="testPrefs">
    <Button label="Slot content" />
  </Fold>
```

| Event | Arguments | Description |
|:---|:---| ---:|
| @click | callback() | Method to execute on native click event |
| @prefs | callback( item ) | Returns on component mount with prefs value |

