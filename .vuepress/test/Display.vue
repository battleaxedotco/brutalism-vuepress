<template>
  <div class="brutalism-wrapper">
    <div class="display-header"></div>
    <div class="brutalism-display">
      <Wrapper>
        <slot />
      </Wrapper>
    </div>
    <div class="display-footer"></div>
  </div>
</template>

<script>
export default {
  name: "Display",
};
</script>

<style>
.brutalism-wrapper {
  box-sizing: border-box;
  user-select: none;
  overflow: hidden;
}

.brutalism-wrapper .annotation {
  font-size: 14px;
  margin-bottom: 1ch;
}

.brutalism-wrapper .divider {
  height: 2px;
  background-color: var(--divider-dark);
  opacity: 0.5;
  border-width: 0px;
  padding: 0;
  margin: 10px 0px 15px 0px;
}

.brutalism-display {
  box-sizing: border-box;
  font-size: 12px !important;
  background-color: var(--color-bg) !important;
  color: var(--color-default) !important;
  padding: 10px 20px;
  width: 100%;
}

.display-header {
  background: var(--color-bg);
  height: 6px;
  width: 100%;
  justify-content: flex-end;
  border-style: solid;
  border-color: transparent;
  border-width: 0 0 1.5px 0;
  border-radius: 3px 3px 0 0;
}

.display-footer {
  width: 100%;
  height: 8px;
  border: 2px solid red;
  background: var(--color-header);
  border-style: solid;
  border-color: var(--divider-dark);
  border-width: 1.5px 0 0 0;
}
</style>
