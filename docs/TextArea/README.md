# TextArea

## Styles 

```html
  <TextArea
    value="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris."
    label="default"
  />
  <TextArea
    value="Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus."
    flat
    label="flat"
  />
  <TextArea
    value="The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
    filled
    label="filled"
  />
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| flat | Boolean | false | No background and animation on focus |
| filled | Boolean | false | Default with focus border and dark background |

## Props 

```html
  <TextArea label='I am a label' />
  <TextArea
    label='placeholder="Display if no value"'
    placeholder="Display if no value"
  />
  <TextArea placeholder="auto-save" prefs-id="textAreaProps" value="I autosave on update" />
  <TextArea placeholder="disabled" disabled />
  <TextArea value='custom color' color="red" flat />
  <TextArea 
    value="This text is automatically selected on focus" 
    label="auto-select" 
    auto-select 
  />
  <Input value="Warn of mispelings" label='spellcheck' :spellcheck="true" />
  <TextArea placeholder='custom row count' :rows="5" />
  <TextArea placeholder="truncate" value='Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.' color="red" />
  <TextArea
    placeholder='underline size and direction'
    underline-size="2px"
    flat
    left
  />
  <TextArea
    filled
    prepend-icon="magnify"
    placeholder='prepend icon'
  />
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| value | String |  | Current text within input |
| v-model | String |  | Two-way binding of the value prop |
| prefs-id | String |  | Autosave value in localStorage |
| label | String |  | Persistent text to display above input |
| placeholder | String |  | Text to display when value is null |
| auto-select | Boolean | false | Select contents on focus |
| uppercase | Boolean | false | Text content is always uppercase |
| disabled | Boolean | false | If true, input cannot be focused |
| truncate | Boolean | false | Display ellipses on content overflow |
| left | Boolean | false | Flat line animation starts at left |
| right | Boolean | false | Flat line animation starts at right |
| uppercase | Boolean | false | Sets transform-text to uppercase |
| prepend-icon | String |  | Material icon to prepend inside input |

## Events 

```html
  <TextArea value="@change" @change="message" />
  <TextArea value="@update" @update="message" />
  <TextArea value="@submit" @submit="message" />
  <TextArea value="@prefs" @prefs="testPrefs" prefs-id="exampleTextAreaEvent" />
  <TextArea
    value="@focus/blur"
    @focus="message('Focused!')"
    @blur="message('Blur!')"
  />
```

| Event | Arguments | Description |
|:---|:---| ---:|
| @change | callback( value ) | Fires for every keypress |
| @update | callback( value ) | Fires after blur event but only if a change in value |
| @prefs | callback( item ) | Returns on component mount with prefs value |
| @submit | callback( value ) | Fires on form submission and control + enter key |
| @focus | callback() | Fires on focus event of element |
| @blur | callback() | Fires on blur event of element |

