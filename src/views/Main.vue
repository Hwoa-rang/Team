<template>
  <div class="main">
    <v-container class="wrapper px-6" fluid>
      <v-row>
        <v-col class="content-left" cols="12" md="8">
          <TodoList></TodoList>
        </v-col>
        <v-col class="content-right" cols="12" md="4">
          <Advice></Advice>
          <!-- <wth-card-add></wth-card-add> -->
        </v-col>
      </v-row>
    </v-container>
    <div class="content-bottom" cols="12">
      <WthCardDf class="wth-info"></WthCardDf>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    WthCardDf: () => import('@/components/main/WthCardDf.vue'),
    // WthCardAdd: () => import('@/components/main/WthCardAdd.vue'),
    TodoList: () => import('@/components/main/TodoList.vue'),
    Advice: () => import('@/components/main/Advice.vue'),
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  color: rgba($color: #fff, $alpha: 0.85);
  height: 100vh;
  background: url('../assets/background_mountain.png') no-repeat center bottom /
    cover;
  .content-bottom {
    position: absolute;
    width: 100%;
    bottom: 0;
    .frosted-glass {
      position: absolute;
      top: 0;
    }
  }
  .wrapper {
  }
}
</style>
