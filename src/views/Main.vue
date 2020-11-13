<template>
  <div class="main">
    <wth-card-df></wth-card-df>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    WthCardDf: () => import('@/components/main/WthCardDf.vue'),
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: #222;
  color: rgba($color: #fff, $alpha: 0.85);
  height: 100vh;
}
</style>
