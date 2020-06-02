# Dropdown

## Styles 

```html
  <Dropdown label="Default" :items="['Item 1', 'Item 2']" :active="0" />
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| flat | Boolean | false | No background and animation on focus |
| filled | Boolean | false | Default with focus border and dark background |

## Props 

```html
  <Dropdown 
    label='label-to-left' 
    :items=" [ 'Item 1', 'Item 2' ]" 
    :active="0" 
    label-to-left 
  />
  <Dropdown 
    label='label-to-right' 
    :items=" [ 'Item 1', 'Item 2' ]" 
    :active="0"
    label-to-right 
  />
  <Dropdown 
    label='active="ILST" (targeting item.value)' 
    :items="[
      { value: 'ILST' },
      { value: 'AEFT' }
    ]" 
    active="ILST" 
  />
  <Dropdown 
    label='active="Item 3" (targeting item as string value)' 
    :items=" [ 'Item 1', 'Item 2', 'Item 3' ]" 
    active="Item 3" 
  />
  <Dropdown 
    label=':active="2" (targeting index)' 
    :items="[
      { value: 'ILST' },
      { value: 'AEFT' },
      { value: 'PHXS' }
    ]" 
    :active="2" 
  />
  <Dropdown 
    label='width="200px"' 
    :items=" [ 'Item 1', 'Item 2' ]" 
    :active="0" 
    width="200px" 
  />
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| label | String |  | Text to append to element |
| label-to-left | Boolean | false | Set label to left of element |
| label-to-right | Boolean | false | Set label to right of element |
| items | Array | [] | Menu items contained in dropdown |
| active | String | Number | null | Item to set as active on mount |

## Events 

```html
  <Dropdown 
    label='@update'
    :items=" [ 'Item 1', 'Item 2', 'Item 3' ]" 
    :active="0"
    @update="showUpdate" 
  />
  <Dropdown 
    label='@focus/@blur' 
    :items="[
      { value: 'ILST' },
      { value: 'AEFT' }
    ]" 
    :active="1" 
    @focus="showFocus" 
    @blur="showBlur" 
  />
```

| Event | Arguments | Description |
|:---|:---| ---:|
| @update | callback( value ) | Fires after blur, returns :active value |
| @focus | callback() | Fires on focus event of element |
| @blur | callback() | Fires on blur event of element |

