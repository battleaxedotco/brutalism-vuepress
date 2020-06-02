# Button-Group

## Styles 

```html
  <Button-Group label="default">
      <Button icon="github-circle" />
      <Button icon="slack" />
      <Button icon="twitter" />
      <Button icon="facebook" />
  </Button-Group>
  <Button-Group grid label="grid">
      <Button block>block default</Button>
      <Button block left>block left</Button>
      <Button block right>block right</Button>
  </Button-Group>
  <Button-Group exclusive label="exclusive" :active="3">
      <Button 
          v-for="index in 7" 
          :key="index" 
          :icon="`brightness-${index}`"
      />
  </Button-Group>
  <Button-Group multiselect :active="[0, 1]" label="multiselect">
      <Button primary icon="format-bold" />
      <Button primary icon="format-color-text" />
      <Button primary icon="format-color-highlight" />
      <Button primary icon="format-paint" />
      <Button primary icon="format-size" />
      <Button primary icon="format-strikethrough" />
  </Button-Group>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| grid | Boolean | false | Transform contents to a CSS grid |
| exclusive | Boolean | false | Allow only one active item within |
| multiselect | Boolean | false | Allow an array of active items |

## Props 

```html
  <div style="display: flex; flex-wrap: nowrap">
      <Button-Group label='left (default)' left width="33vw">
          <Button icon="github-circle" />
          <Button icon="slack" />
      </Button-Group>
      <Button-Group label='center' center grid width="33vw">
          <Button icon="github-circle" />
          <Button icon="slack" />
      </Button-Group>
      <Button-Group label='right' right width="33vw">
          <Button icon="github-circle" />
          <Button icon="slack" />
      </Button-Group>
  </div>
  <Button-Group label='grid template="1fr 4fr"' grid template="1fr 4fr">
      <Button icon="github-circle" />
      <Button icon="slack" />
  </Button-Group>
  <Button-Group label='grid gap="50px"' grid gap="50px">
      <Button icon="github-circle" />
      <Button icon="slack" />
  </Button-Group>
  <Button-Group label='column' grid column width="60px">
      <Button icon="github-circle" />
      <Button icon="slack" />
      <Button icon="facebook" />
  </Button-Group>
  <Button-Group label='exclusive :active="1"' exclusive :active="[1]" >
      <Button icon="vector-point" />
      <Button icon="vector-line" />
      <Button icon="vector-rectangle" />
      <Button icon="vector-circle" />
      <Button icon="vector-triangle" />
      <Button icon="vector-polygon" />
  </Button-Group>
  <Button-Group 
      label='multiselect :active="[0, 1]"'
      multiselect 
      :active="[0, 1]" 
  >
      <Button icon="chess-king" />
      <Button icon="chess-queen" />
      <Button icon="chess-bishop" />
      <Button icon="chess-knight" />
      <Button icon="chess-rook" />
      <Button icon="chess-pawn" />
  </Button-Group>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| label | String |  | Text for annotation next group |
| left | Boolean | true | Align buttons and label to left |
| center | Boolean | false | Label to left, but container aligned to center |
| right | Boolean | false | Align buttons and label to right |
| template | String | repeat([length], 1fr) | Requires grid prop, any grid template value |
| gap | String | 4px | Requires grid prop, space between grid items |
| row | Boolean | true | Align items horizontally |
| column | Boolean | false | Align items vertically |
| active | Number | Array | null | Index or indices of active buttons within |
| label-margin | String | 12px | Margin between label and first button |

## Events 

```html
  <Button-Group 
      label='exclusive @update' 
      exclusive 
      :active="tool" 
      @update="reportActive"
  >
      <Button icon="vector-point"/>
      <Button icon="vector-line"/>
      <Button icon="vector-rectangle"/>
      <Button icon="vector-circle"/>
      <Button icon="vector-triangle"/>
      <Button icon="vector-polygon"/>
  </Button-Group>
  <Button-Group 
      label='multiselect @update' 
      multiselect 
      :active="[0, 1]" 
      @update="reportActive"
  >
      <Button icon="chess-king" />
      <Button icon="chess-queen" />
      <Button icon="chess-bishop" />
      <Button icon="chess-knight" />
      <Button icon="chess-rook" />
      <Button icon="chess-pawn" />
  </Button-Group>
  <Button-Group 
      label='exclusive @update' 
      exclusive 
      :active="tool" 
      @update="val => tool = val"
  >
      <Button icon="vector-point" :color="tool == 0 ? '#59e' : ''" />
      <Button icon="vector-line" :color="tool == 1 ? '#59e' : ''" />
      <Button icon="vector-rectangle" :color="tool == 2 ? '#59e' : ''" />
      <Button icon="vector-circle" :color="tool == 3 ? '#59e' : ''" />
      <Button icon="vector-triangle" :color="tool == 4 ? '#59e' : ''" />
      <Button icon="vector-polygon" :color="tool == 5 ? '#59e' : ''" />
  </Button-Group>
  <Button-Group label="default should use @click or :goto on children">
      <Button icon="github-circle" goto="https://www.github.com" />
      <Button icon="slack" goto="https://www.slack.com" />
      <Button icon="twitter" goto="https://www.twitter.com" />
      <Button icon="facebook" goto="https://www.facebook.com" />
  </Button-Group>
```

| Event | Arguments | Description |
|:---|:---| ---:|
| @update | callback( Number | Array ) | Returns the current :active prop on click |

