# Dropzone

## Styles 

```html
  <!-- Sorry! Full-screen is not shown, is the same as left for entire panel -->
  <Grid height="300px">
    <Dropzone :fullscreen="false" />
    <Dropzone :fullscreen="false">
      <template v-slot:prompt>
        <div class="placeholder">v-slot:prompt not dragging</div>
      </template>
      <template v-slot:overlay>
        <div class="placeholder">v-slot:overlay while dragging</div>
      </template>
    </Dropzone>
  </Grid>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| fullscreen | Boolean | true | True overlays panel body, false inherits size |
| < slot:prompt > | HTML | null | HTML to show when user is not dragging |
| < slot:overlay > | HTML | null | HTML to show when user is dragging |

## Props 

```html
  <Grid height="400px" column>
    <Grid>
      <Dropzone :fullscreen="false" color="red" />
      <Dropzone :fullscreen="false" auto-read />
      <Dropzone :fullscreen="false" single />
    </Grid>
    <Grid>
      <Dropzone :fullscreen="false" :accepts="[ '.jpg' ]" />
      <Dropzone :fullscreen="false" read-folders />
      <Dropzone :fullscreen="false" flatten />
    </Grid>
    <Grid>
      <Dropzone :fullscreen="false" pure-svg />
      <Dropzone :fullscreen="false" auto-parse />
      <Dropzone :fullscreen="false" no-border />
    </Grid>
  </Grid>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| color | String | var(--color-selection) | CSS value for indicator border |
| auto-read | Boolean | false | Whether to return file content as text |
| single | Boolean | false | When true only accept a single drop object |
| accepts | Array | String | .* | Regex to validate dropped files |
| read-folders | Boolean | false | Whether to return content of dropped folders |
| flatten | Boolean | false | Returns a single array instead of multiple |
| pure-svg | Boolean | false | In ILST, return SVG of dropped content from app |
| auto-parse | Boolean | false | Auto-parse JSONs before emitting @read event |
| no-border | Boolean | false | Hide the indicator border on dragover |
| html | Boolean | false | Read dropped HTML instead of files | true |

## Events 

```html
  <Grid column height="400px">
    <Dropzone 
      :fullscreen="false" 
      @dragover="msg('dragover')" 
      @dragleave="msg('dragleave')" 
    />
    <Dropzone :fullscreen="false" @drop="testDrop" />
    <Dropzone :fullscreen="false" @read="testRead" />
    <Dropzone :fullscreen="false" auto-read @read="testRead" />
  </Grid>
```

| Event | Arguments | Description |
|:---|:---| ---:|
| @dragover | callback( ) | Fires on element dragover event |
| @dragleave | callback( ) | Fires on element dragleave event |
| @drop | callback( value ) | Returns data transfer File List Array |
| @read | callback( value ) | Returns String or Array of result |

