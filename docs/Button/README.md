# Button

## Tooltips 

```html
  <Anno>Positioning Test</Anno>
  <Button-Group grid>
      <Button block tooltip="Default">Default tooltip</Button>
      <Button block no-bold tooltip="Default">No bold tooltip</Button>
      <Button block tooltip="Only opacity transition" no-slide
          >Adding no-slide prop</Button
      >
  </Button-Group>
  <Button-Group grid>
      <Button block left tooltip="Aligned to left"
          >Left prop on button also aligns tooltip</Button
      >
      <Button block right tooltip="Adding the top prop" top
          >Right and top props</Button
      >
  </Button-Group>
  <div class="divider" />
  <Anno>Timing</Anno>
  <Button-Group grid>
      <Button block left
          tooltip="cubic-bezier(0.48, 0.04, 0.52, 0.96)"
          timing="var(--quad)"
          >Quad timing</Button
      >
      <Button block
          tooltip="cubic-bezier(0.76, 0, 0.24, 1)"
          timing="cubic-bezier(0.76, 0, 0.24, 1)"
          >Custom timing</Button
      >
      <Button block right
          tooltip="cubic-bezier(0.84, 0, 0.16, 1)"
          timing="var(--quint)"
          >Quint timing</Button
      >
      </Button-Group>
      <Button-Group grid>
      <Button block left
          tooltip="I'm slow to animate"
          duration="1000ms"
          >Custom duration</Button
      >
      <Button block 
          tooltip="I'm slow to respond" 
          delay="1000ms"
          >Custom delay</Button
      >
  </Button-Group>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| tooltip | String |  | Text to display, no tooltip if none |
| top | Boolean | false | Aligns tooltips above button |
| delay | String | 0.4s | Any valid CSS transition delay |
| duration | String | 160ms | Any valid CSS transition duration |
| timing | String | var(--quint) | Any valid CSS transition timing |
| no-slide | Boolean | false | If true, only use opacity to transition |
| no-bold | Boolean | false | If true, set font-weight to regular |

## Styles 

```html
  <Row>
    <Button label="Default" />
    <Button primary>Primary</Button>
    <Button flat label="Flat" />
    <Button filled label="Filled" />
    <Button disabled>Disabled</Button>
    <Button>
        <Icon name="account-circle" />
        <div>With Slot content</div>
    </Button>
    <Button label="Tall" tall />
    <Button toolbar>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" style="width: 22px">
        <path 
            d="M19,11l-8,8L3,11a5.15,5.15,0,0,1,7.28-7.28l.74.75.74-.75A5.15,5.15,0,0,1,19,11Z" />
        </svg>
    </Button>
  </Row>
  <Button block label="Block button (fill horizontal space)"/>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| primary | Boolean | false | Sharp border and active state |
| flat | Boolean | false | Subtle appearance and active state |
| filled | Boolean | false | Primary button with no idle border |
| disabled | Boolean | false | Prevent all mouse events |
| tall | Boolean | false | Add extra padding and min-height |
| toolbar | Boolean | false | Fixed proportional size |
| block | Boolean | false | Greedy space fill alone, flexible in Button-Group |

## Props 

```html
  <Row>
    <Button label="Label" />
    <Button bg="#46a0f2">Custom bg</Button>
    <Button color="#46a0f2" label='Custom color' />
    <Button label='MDI icon' icon="mdi-account" />
    <Button label='Prefix icon' prefix-icon="mdi-account" />
    <Button icon="mdi-settings" icon-size="10px" label='Icon size' />
    <Button tooltip="I'm a tooltip">With tooltip</Button>
    <Button uppercase label="uppercase" />
    <Button goto="https://battleaxe.co" label='Launch URL on click'/>
    <Button evalScript="someJSXFunction()" label='evalScript on click'/>
    <Button copy="Copy this text on click" label='Copy text on click'/>
    <Button block left>block left</Button>
    <Button block right>block right</Button>				
  </Row>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| label | String |  | Text inside button |
| bg | String | var(--button) | Background of button |
| color | String | var(--button-color) | Color for text or icons |
| icon | String |  | Any valid Material Design icon name |
| prefix-icon | String |  | Requires label prop, sets icon before |
| suffix-icon | String |  | Requires label prop, sets icon after |
| icon-size | Boolean | 16px | Size of icon inside button |
| uppercase | Boolean | false | Sets transform-text to uppercase |
| goto | String |  | URL to launch on click | functional |
| evalScript | String |  | async evalScript to execute on click | functional |
| copy | String |  | Text to copy on clicking the element | functional |
| left | Boolean | false | Aligns button content and tooltip left |
| right | Boolean | false | Aligns button content and tooltip right |

## Events 

```html
  <Button-Group grid column>
    <Button @click="testClick" label='@click' />
    <Button evalScript="testEvalScript()" @evalScript="reportEval" label='@evalScript' />
    <Button 
      :evalScript="`testEvalScript('${ JSON.stringify({ msg: 'data' }) }')`" 
      @evalScript="reportEval" label='template literal evalScript' />
    <Button 
      copy="Copy this text on click" 
      label='@clipboard'
      @clipboard="reportClipboardSuccess"
    />
  </Button-Group>
```

| Event | Arguments | Description |
|:---|:---| ---:|
| @click | callback() | Method to execute on native click event |
| @evalScript | callback( value ) | Returns auto-parsed JSON value of evalScript prop |
| @clipboard | callback( Bool ) | Returns confirmation of copy prop |

