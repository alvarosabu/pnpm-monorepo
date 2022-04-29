<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss">
.btn {
  padding: 0.2rem;
  font-style: bold;
  border-radius: 0.2rem;
  background-color: teal;
  color: white;
  border: none;
  outline: none;
}
</style>
