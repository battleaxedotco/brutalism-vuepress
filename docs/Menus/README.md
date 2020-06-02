# Menus

## Props 

```html
  <!-- Anywhere inside your project -->
  <Menus debug refresh
    :context="[
        {
          label: 'This is a disabled menu item',
          enabled: false
        },
        {
          label: 'Toggle value of this.data.something',
          checkable: true,
          checked: something,
          callback: (item, index, value) => (something = value)
        },
        {
          label: 'This activates a method within this file on clicking this item',
          enabled: true,
          callback: this.localMethod
        }
    ]"
  />
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| refresh | Boolean | false | Append a "Refresh panel" to both context and flyout menus |
| debug | Boolean | false | Append a "Copy debug URL" option for current debugging port |
| context | Array | [ ] | An Array of Objects to construct the context menu |
| flyout | Array | [ ] | An Array of Objects to construct the flyout menu |
| switchTheme | Boolean | false | Always true in Animate, to handle switch to dark/light theme variant |

