<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 15px;
  border: 1px solid #ECECEC;
  background-color: #FFF;
  border-radius: 4px;
  transition: .2s box-shadow ease;

  &:hover {
    box-shadow: 0 0 5px -2px rgb(0 0 0 / 50%)
  }
}
</style>
