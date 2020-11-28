<template>
  <div class="main">
    <v-container class="wrapper px-6" fluid>
      <v-row>
        <!-- <v-col class="content-top-left" cols="12" md="4">
          <wth-card-add></wth-card-add>
        </v-col> -->
        <v-col cols="12" md="8">
          <Advice></Advice>
        </v-col>
      </v-row>
    </v-container>
    <div class="content-bottom" cols="12">
      <wth-card-df class="wth-info"></wth-card-df>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    WthCardDf: () => import('@/components/main/WthCardDf.vue'),
    // WthCardAdd: () => import('@/components/main/WthCardAdd.vue'),
    Advice: () => import('@/components/main/Advice.vue'),
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  background: #222;
  color: rgba($color: #fff, $alpha: 0.85);
  height: 100vh;
  .content-bottom {
    position: absolute;
    z-index: 99;
    width: 100%;
    bottom: 0;
  }
  .wrapper {
  }
}
</style>
