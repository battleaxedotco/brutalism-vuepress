# Toggle

## Styles 

```html
  <Toggle label="default" />
  <Toggle label="Radio" radio />
  <Toggle label="Switch" switch />
  <Toggle label="Custom" on-icon="eye" off-icon="eye-off" />
  <Toggle @update="val => slotState = val">
    <div v-if="slotState">Click me! Slot content if true</div>
    <div v-else>Click me! Slot content if false</div>
  </Toggle>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| radio | Boolean | false | Use a radio style control |
| switch | Boolean | false | Use a toggle switch control |

## Props 

```html
  <Row>
    <Toggle on-icon="lock" off-icon="lock-open-variant" />
    <Toggle on-icon="bell" off-icon="bell-off" />
    <Toggle on-icon="account" off-icon="account-off" />
    <Toggle on-icon="video-check" off-icon="video-minus" />
  </Row>
  <Toggle 
    :label='dynamicState' 
    :state="realState" 
    @update="val => realState = val"
  />
  <Toggle label='custom color' color="#46a0f2" />
  <Toggle label='auto-save' prefs-id="togglePropsExample" />
  <Toggle label="disabled" :state="true" disabled />
  <Toggle 
    label='custom on/off icons' 
    on-icon="alarm" 
    off-icon="alarm-off"
  />
  <Toggle label='custom icon size' size="32px" />
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| state | Boolean | false | The checked value of the element |
| prefs-id | String |  | Autosave value in localStorage |
| label | String |  | Text to appear before element |
| on-icon | String |  | Material icon to use as true state |
| off-icon | String |  | Material icon to use as false state |
| color | String | var(--color-icon) | Color of icon and label |
| disabled | Boolean | false | If true prevent all mouse events |
| size | String | 18px | Any valid CSS for size of icon |

## Events 

```html
  <Toggle label="@click" @click="showClick"/>
  <Toggle label='@update' @update="showState" />
  <Toggle label='@prefs' @prefs="testPrefs" prefs-id="toggleEventExample" />
  <Toggle 
    label='@mouseEnter/@mouseExit' 
    @mouseenter="showEnter" 
    @mouseleave="showExit" 
  />
```

| Event | Arguments | Description |
|:---|:---| ---:|
| @click | callback() | Fires on all clicks to element |
| @update | callback( value ) | Fires after any state change and returns new value |
| @prefs | callback( item ) | Returns on component mount with prefs value |
| @mouseEnter | callback() | Fires on mouseEnter event of element |
| @mouseExit | callback() | Fires on mouseExit event of element |

