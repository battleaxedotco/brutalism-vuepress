# Grid

## Styles 

```html
  <Grid>
    <div class="placeholder">1</div>
    <div class="placeholder">2</div>
    <div class="placeholder">3</div>
  </Grid>
  <Divider />
  <Grid column>
    <div class="placeholder">1</div>
    <div class="placeholder">2</div>
    <div class="placeholder">3</div>
  </Grid>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| column | Boolean | false | If true distribute content vertically |

## Props 

```html
  <Grid template="1fr 3fr 2fr">
    <div class="placeholder">1</div>
    <div class="placeholder">2</div>
    <div class="placeholder">3</div>
  </Grid>
  <Divider />
  <Grid gap="50px">
    <div class="placeholder">1</div>
    <div class="placeholder">2</div>
    <div class="placeholder">3</div>
  </Grid>
  <Divider />
  <Grid height="100px">
    <div class="placeholder">1</div>
    <div class="placeholder">2</div>
    <div class="placeholder">3</div>
  </Grid>
  <Divider />
  <Grid>
    <Grid column>
      <div class="placeholder">A</div>
      <div class="placeholder">B</div>
    </Grid>
    <Grid column>
      <div class="placeholder">C</div>
      <div class="placeholder">D</div>
    </Grid>
  </Grid>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| template | String | repeat(#slots, 1fr) | CSS grid-[direction]-template value |
| gap | String | 4px | Space between grid items |
| height | String | 100% | Height of the grid container |
| grid | String |  | CSS grid shorthand attribute | true |
| grid-area | String |  | CSS grid-area shorthand | true |
| grid-template | String |  | CSS grid-template value | true |

## Events 

```html
  
```

| Event | Arguments | Description |
|:---|:---| ---:|
| @ | callback( ) | Fires on element dragover event |

