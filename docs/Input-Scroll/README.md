# Input-Scroll

## Styles 

```html
  <Input-Scroll label="default" />
  <Input-Scroll label="flat" flat />
  <Input-Scroll label="filled" filled />
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| flat | Boolean | false | No background and animation on focus |
| filled | Boolean | false | Default with focus border and dark background |

## Props 

```html
  <Input-Scroll label="default" />
  <Input-Scroll label='set value' :value="100" />
  <Input-Scroll label="auto-save" prefs-id="inputScrollProp" />
  <Input-Scroll
    label='min/max values'
    :min="-100"
    :max="100"
  />
  <Input-Scroll label='custom color' color="red" />
  <Input-Scroll label="disabled" :value="20" disabled />
  <Input-Scroll label='custom value increment' :step="2" />
  <Input-Scroll
    label='custom increments per modifier key'
    :steps="[2, 5, 25]"
  />
  <Input-Scroll
    label='specify decimal point'
    :value="100.125"
    :toFixed="3"
  />
  <Input-Scroll
    label='reset value if empty'
    :value="446"
    :reset-value="100"
  />
  <Input-Scroll label="no validation" lazy :value="29.97" suffix="fps" />
  <Input-Scroll label='suffix' suffix="px" />
  <Input-Scroll label='prefix' prefix="$" />
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| label | String |  | Text to display beside input |
| value | Number | 0 | Current value within input |
| prefs-id | String |  | Autosave value in localStorage |
| min | Number | null | Minimum value allowed |
| max | Number | null | Maximum value allowed |
| color | String | var(--color-selection) | Color on focus |
| disabled | Boolean | false | If true, prevents all mouse events |
| step | Number | 1 | Amount to increment per event |
| steps | Array | [0.1, 1, 10] | Control, default, shift key increment |
| toFixed | Number | null | Strict digits to appear after decimal |
| reset-value | Number | 0 | Value to insert when left empty |
| lazy | Boolean | false | Non-strict, any decimals or value |
| suffix | String |  | Text to append to value |
| prefix | String |  | Text to prepend to value |

## Events 

```html
  <Input-Scroll label="@change" @change="changeVal" />
  <Input-Scroll label="@update" @update="updateVal" />
  <Input-Scroll label="@prefs" @prefs="testPrefs" prefs-id="exampleEvent" />
  <Input-Scroll
    label="@focus/@blur"
    @focus="message('Focus!')"
    @blur="message('Blur!')"
  />
```

| Event | Arguments | Description |
|:---|:---| ---:|
| @change | callback( value ) | Fires for every keypress |
| @update | callback( value ) | Fires after blur event but only if a change in value |
| @prefs | callback( item ) | Returns on component mount with prefs value |
| @submit | callback( value ) | Fires on form submission and enter key |
| @focus | callback() | Fires on focus event of element |
| @blur | callback() | Fires on blur event of element |

