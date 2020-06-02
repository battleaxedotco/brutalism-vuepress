<template>
  <div class="landing-header">
    <div class="landing-container">
      <div class="logo">
        <div class="logo-wrapper-title">
          <a href="https://battleaxe.co" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 106 106"
              class="svg-wrapper-title"
            >
              <g>
                <circle class="battleaxe-logo-2" cx="7.75" cy="53" r="5" />
                <circle class="battleaxe-logo-2" cx="30.37" cy="30.37" r="5" />
                <circle class="battleaxe-logo-2" cx="53" cy="7.75" r="5" />
                <circle class="battleaxe-logo-2" cx="30.37" cy="75.63" r="5" />
                <circle class="battleaxe-logo-2" cx="53" cy="53" r="5" />
                <circle class="battleaxe-logo-2" cx="75.63" cy="30.37" r="5" />
                <circle class="battleaxe-logo-2" cx="53" cy="98.25" r="5" />
                <circle class="battleaxe-logo-2" cx="75.63" cy="75.63" r="5" />
                <circle class="battleaxe-logo-2" cx="98.25" cy="53" r="5" />
                <polyline
                  class="battleaxe-logo-1"
                  points="75.63 75.63 7.75 53 75.63 30.37 53 7.75 53 98.25 30.37 75.63 98.25 53 30.37 30.37"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="landing-title">brutalism</div>
      <div class="landing-anno-wrapper">
        <h3 class="landing-anno">
          <div class="landing-line">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106 106" class="svg-mini-title">
              <g>
                <circle class="battleaxe-logo-2" cx="7.75" cy="53" r="5" />
                <circle class="battleaxe-logo-2" cx="30.37" cy="30.37" r="5" />
                <circle class="battleaxe-logo-2" cx="53" cy="7.75" r="5" />
                <circle class="battleaxe-logo-2" cx="30.37" cy="75.63" r="5" />
                <circle class="battleaxe-logo-2" cx="53" cy="53" r="5" />
                <circle class="battleaxe-logo-2" cx="75.63" cy="30.37" r="5" />
                <circle class="battleaxe-logo-2" cx="53" cy="98.25" r="5" />
                <circle class="battleaxe-logo-2" cx="75.63" cy="75.63" r="5" />
                <circle class="battleaxe-logo-2" cx="98.25" cy="53" r="5" />
                <polyline
                  class="battleaxe-logo-1"
                  points="75.63 75.63 7.75 53 75.63 30.37 53 7.75 53 98.25 30.37 75.63 98.25 53 30.37 30.37"
                />
              </g>
            </svg>
            <span>battleaxe approved</span>
          </div>
          <div v-for="(line, i) in lines" :key="i" class="landing-line">
            <!-- <Icon :name="line.icon" /> -->
            <span>{{line.text}}</span>
          </div>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    width: 50,
    lines: [
      {
        icon: "vuejs",
        text: "built with Vue"
      },
      {
        icon: "pencil",
        text: "minimalist design"
      },
      {
        icon: "auto-fix",
        text: "wizard magic"
      },
      {
        icon: "xml",
        text: "component library"
      },
      { icon: "adobe", text: "any host app" }
    ]
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Space+Mono&display=swap");

.landing-title {
  font-family: "Space Mono", monospace;
  margin-top: 40px;
  font-size: 48px;
  padding-bottom: 30px;
  font-weight: 600;
  user-select: none;
  cursor: default;
  text-align: center;
}

.landing-line {
  display: flex;
  align-items: center;
  height: 36px;
}

.landing-header {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  flex-direction: column;
  align-items: center;
}

.svg-wrapper-title {
  margin-top: 30px;
  width: 200px;
}

.svg-mini-title {
  width: 24px;
  margin-left: 10px;
}

.landing-anno {
  display: flex;
  flex-direction: column;
}

.landing-anno span {
  font-family: "Space Mono", monospace;
  margin-left: 10px;
  font-weight: 500;
}

.battleaxe-logo-1,
.battleaxe-logo-2 {
  fill: none;
}
.battleaxe-logo-1 {
  stroke: #2c3e50;
  stroke-miterlimit: 10;
  stroke-width: 3px;
}
.battleaxe-logo-2 {
  fill: #2c3e50;
}
.logo-wrapper-title {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

/* Mobile portrait */
@media screen and (max-width: 600px) {
  .svg-wrapper-title {
    margin-top: 10px;
    width: 100px;
  }
  .landing-title {
    margin-top: 20px;
    font-size: 30px;
    padding-bottom: 20px;
  }
  .landing-header {
    margin-bottom: 10px;
  }
}

/* Mobile landscape */
@media screen and (min-width: 601px) {
  .svg-wrapper-title {
    margin-top: 10px;
    width: 100px;
  }
  .landing-title {
    margin-top: 20px;
    font-size: 30px;
    padding-bottom: 20px;
  }
  .landing-header {
    margin-bottom: 10px;
  }
}

/* Desktop */
@media screen and (min-width: 951px) {
  .svg-wrapper {
    width: 30px;
  }
  .logo-wrapper {
    padding-top: 5px;
    padding-left: 0px;
  }
  .landing-title {
    font-family: "Space Mono", monospace;
    margin-top: 40px;
    font-size: 48px;
    padding-bottom: 30px;
  }
  .svg-wrapper-title {
    margin-top: 30px;
    width: 200px;
  }
}
</style>
