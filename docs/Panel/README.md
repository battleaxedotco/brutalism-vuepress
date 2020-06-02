# Panel

## Props 

```html
  <!-- In App.js or any router page -->
  <div id="app">
    <Panel
      script-path="./host/[appName]/host.jsx"
      utils="./host/utils"
    >
      <!-- Content or router-view goes inside Panel as a slot -->
      <router-view />
    </Panel>
  </div>
```

| Property | Type | Default | Description |
|:---|:---|:---| ---:|
| script-path | String | Array | ./src/host/[appName]/host.jsx | .JSX, .JS, or .JSFL files/folders to load via $.evalFile |
| utils | String | Array | ./src/host/universal | Path to folder to preload utility scripts prior to script-path |
| exclude | String | Array |  | Any string name or valid regex pattern to exclude from script-path or utils |
| app | String | ILST | The host app to mock when in a browser context |
| theme | String | Darkest | The starlette theme if browser, one of: darkest, dark, light, lightest, gradient |
| gradient | Number | 0 | If browser and theme is gradient, from 0 (darkest) to 100 (lightest) |

## Examples 

```html
  <Panel :script-path="[
          './host/myFirstScript.jsx', 
          './host/mySecondScript.jsx', 
          './host/myThirdScript.jsx'
        ]"
      >
      <router-view />
    </Panel>
```


