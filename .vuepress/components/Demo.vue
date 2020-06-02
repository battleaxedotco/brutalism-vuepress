<template>
  <div class="demos">
    <div class="main-demo desktop">
      <iframe
        style="overflow: scroll;"
        width="500"
        height="710"
        seamless
        frameborder="0"
        scrolling="yes"
        src="https://brutalism.netlify.app/#/"
      ></iframe>
    </div>
    <div class="main-demo landscape">
      <iframe
        style="overflow: scroll;"
        width="500"
        height="320"
        seamless
        frameborder="0"
        scrolling="yes"
        src="https://brutalism.netlify.app/#/"
      ></iframe>
    </div>
    <div class="main-demo mobile">
      <iframe
        style="overflow: scroll; 
            width: 100vw;
            padding: 0px;
            margin: 0px;"
        width="380"
        height="620"
        seamless
        frameborder="0"
        scrolling="yes"
        src="https://brutalism.netlify.app/#/"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo"
};
</script>

<style>
.home-title {
  padding-top: 14px;
  z-index: 1;
}
.markdown-wrapper {
  margin: 0px;
}

.home-anno {
  padding: 0px 20px;
  z-index: 0;
}

.demos {
  width: 100%;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .desktop {
    display: none;
  }
  .landscape {
    display: none;
  }
  .home-title {
    padding-top: 50px;
    z-index: 1;
  }
  .markdown-content {
    margin: 0;
  }
}

@media screen and (min-width: 601px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: none;
  }

  .home-title {
    padding-top: 50px;
    z-index: 1;
  }
  .markdown-content {
    margin: 0;
  }
}

@media screen and (min-width: 951px) {
  .home-title {
    /* padding-top: 90px; */
    z-index: 1;
  }
  .home-anno {
    padding: 0px;
  }
  .desktop {
    display: block;
  }
  .landscape {
    display: none;
  }
  .mobile {
    display: none;
  }
}
</style>