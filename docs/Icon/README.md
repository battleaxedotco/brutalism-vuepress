# Icon

## Styles 

```html
  <Anno>Currently only supports 
    <Link url="https://materialdesignicons.com/">Material Icons</Link>
  </Anno>
  <Row>
    <Icon name="github-circle" />
    <Icon name="facebook" />
    <Icon name="slack" />
  </Row>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| ba | String |  | Name of Battleaxe icon | true |
| mdi | String |  | The mdi-[name] for Material Design icon | true |
| fa | String |  | The fa-[name] for Font Awesome icon | true |

## Props 

```html
  <Row>
    <Icon name="github-circle" />
    <Icon name="github-circle" color="#46a0f5" />
    <Icon name="github-circle" size="30px" />
    <Icon name="github-circle" url="https://www.github.com" />
  </Row>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| name | String | home | The mdi-[name] for Material Design icon |
| color | String | var(--default-color) | Valid CSS color value of icon |
| size | String | 24px | Size of icon component |
| url | String |  | URL to launch on click |

## Events 

```html
  
```

| Event | Arguments | Description |
|:---|:---| ---:|
| @click | callback() | Fires on all clicks to element |

