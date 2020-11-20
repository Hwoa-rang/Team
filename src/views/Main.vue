<template>
  <div class="main">
    <v-container class="wrapper px-6" fluid>
      <v-row>
        <!-- <v-col class="content-top-left" cols="12" md="4">
          <wth-card-add></wth-card-add>
        </v-col> -->
        <!-- <v-col class="content-bottom" cols="12">
          <wth-card-df class="wth-info"></wth-card-df>
        </v-col> -->
        <v-col cols="12" md="8">
          <v-card>asdf</v-card>
        </v-col>
        <v-col cols="12" md="4"><TimeTimer></TimeTimer></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    // WthCardDf: () => import('@/components/main/WthCardDf.vue'),
    // WthCardAdd: () => import('@/components/main/WthCardAdd.vue'),
    TimeTimer: () => import('@/components/main/TimeTimer.vue'),
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: #222;
  color: rgba($color: #fff, $alpha: 0.85);
  height: 100vh;
  .wrapper {
    .content-left {
      .wth-info {
      }
    }
    .content-right {
    }
  }
}
</style>
