# Tabs

## Styles 

```html
  <Tabs :routes='[
    { label: "Default Route 1", name: "home" },
    { label: "Default Route 2", name: "about" },
    { label: "Default Route 3", name: "about" }
  ]' />
  <Tabs flat :routes='[
    { label: "Flat Route 1", path: "/" },
    { label: "Flat Route 2", path: "/about" },
    { label: "Flat Route 3", path: "/settings" }
  ]' />
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| flat | Boolean | false | Active line animation, transparent idle bg |

## Props 

```html
  <Tabs :routes='[
    { label: "Route 1", name: "Route 1" },
    { label: "Route 2", name: "Route 2" }
  ]' />
  <Tabs disabled :routes='[
    { label: "Disabled Route 1", name: "Route 1" },
    { label: "Disabled Route 2", name: "Route 2" }
  ]' />
  <Tabs flat invert :routes='[
    { label: "Invert Route 1", name: "Route 1" },
    { label: "Invert Route 2", name: "Route 2" }
  ]' />
  <Tabs flat delay="2000ms" :routes='[
    { label: "Delay Route 1", path: "/" },
    { label: "Delay Route 2", path: "/Route2" }
  ]' />
  <Tabs flat duration="1000ms" :routes='[
    { label: "Duration Route 1", path: "/" },
    { label: "Duration Route 2", path: "/Route2" }
  ]' />
  <Tabs flat 
    timing="cubic-bezier(0.9, 0.04, 0.52, 0.96)" 
    :routes='[
      { label: "Timing Route 1", path: "/" },
      { label: "Timing Route 2", path: "/Route2" }
    ]' 
  />
  <Tabs emit-to-parent :routes='[
    { label: "Emit Route 1", path: "/" },
    { label: "Emit Route 2", path: "/Route2" }
  ]' />
  <Tabs dummy :routes='[
    { label: "Dummy Route 1", path: "/" },
    { label: "Dummy Route 2", path: "/Route2" }
  ]' />
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| routes | Array | [ ] | Array of items with Router paths/names |
| disabled | Boolean | false | If true, prevents all mouse events |
| invert | Boolean | false | If true active line appears above tab |
| delay | String | 20ms | Any valid CSS transition delay |
| duration | String | 200ms | Any valid CSS transition duration |
| timing | String | var(--quad) | Any valid CSS transition timing |
| dummy | Boolean | false | If true, does not push new route |
| emit-to-parent | Boolean | false | Sends relative route to parent if in iframe |

## Events 

```html
  <Tabs 
    dummy 
    @click="testClick"
    :routes='[
      { label: "Click Route 1", path: "/" },
      { label: "Click Route 2", path: "/about" }
    ]' 
  />
  <Tabs 
    dummy 
    @update="showUpdate"
    :routes='[
      { label: "Update Route 1", path: "/home" },
      { label: "Update Route 2", path: "/about" }
    ]' 
  />
```

| Event | Arguments | Description |
|:---|:---| ---:|
| @click | callback() | Method to execute on native click event |
| @update | callback( item ) | Returns the new active item after any change |

