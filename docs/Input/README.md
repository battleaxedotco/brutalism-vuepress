# Input

## Styles 

```html
  <Input label="Default" value="value" />
  <Input label="Flat" value="value" flat />
  <Input label="Filled" value="value" filled />
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| flat | Boolean | false | No background and animation on focus |
| filled | Boolean | false | Default with focus border and dark background |

## Props 

```html
  <Input label="I am a label" />
  <Input v-model="twoWayBinding" :label="twoWayBinding" />
  <Input
    label='placeholder="Display if no value"'
    placeholder="Display if no value"
  />
  <Input prefs-id="exampleInput" label="autosave value" value="I autosave my own value" />
  <Input placeholder="disabled" disabled />
  <Input placeholder='Custom color' color="red" flat />
  <Input 
    value="This text is automatically selected on focus" 
    label="auto-select" 
    auto-select 
  />
  <Input value="This text is always uppercase" label="uppercase" uppercase />
  <Input value="Warn of mispelings" label='spellcheck' spellcheck="true" />
  <Input
    label="truncate" truncate 
    value="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris."
  />
  <Input
    label="copy-content" copy-content 
    value="I'm automatically copied on click"
  />
  <Input
    placeholder='underline size and direction'
    underline-size="2px"
    flat
    left
  />
  <Input
    filled
    prepend-icon="magnify"
    placeholder='prepend icon'
  />
  <Input
    filled
    append-icon="find-replace"
    placeholder='append icon'
  />
  <Input
    filled
    prepend-outer-icon="magnify"
    placeholder='prepend outer icon'
  />
  <Input
    filled
    append-outer-icon="find-replace"
    placeholder='append outer icon'
  />
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| label | String |  | Persistent text to display above input |
| v-model | String |  | Two-way binding of value prop |
| value | String |  | Current text within input |
| prefs-id | String |  | Autosave value in localStorage |
| placeholder | String |  | Text to display when value is null |
| auto-select | Boolean | false | Select contents on focus |
| uppercase | Boolean | false | Text content is always uppercase |
| disabled | Boolean | false | If true, input cannot be focused |
| truncate | Boolean | false | Display ellipses on content overflow |
| copy-content | Boolean | false | Copies value with append-outer-icon |
| left | Boolean | false | Flat line animation starts at left |
| right | Boolean | false | Flat line animation starts at right |
| uppercase | Boolean | false | Sets transform-text to uppercase |
| prepend-icon | String |  | Material icon to prepend inside input |
| prepend-outer-icon | String |  | Material icon to prepend before input |
| append-icon | String |  | Material icon to append inside input |
| append-outer-icon | String |  | Material icon to append after input |

## Events 

```html
  <Input value="@change" @change="message" />
  <Input value="@update" @update="message" />
  <Input value="@submit" @submit="message" />
  <Input value="@prefs" @prefs="message" prefs-id="inputEventExample" />
  <Input
    value="@focus/blur"
    @focus="message('Focused!')"
    @blur="message('Blur!')"
  />
  <Input 
    value="@append-outer-click" 
    append-outer-icon="find-replace" 
    @append-outer-click="message" 
  />
  <Input 
    value="@clipboard"
    copy-content
    @clipboard="message" 
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
| @clipboard | callback( Bool ) | Returns confirmation of copy-content prop |

