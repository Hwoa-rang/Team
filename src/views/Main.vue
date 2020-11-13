<template>
  <div class="main">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <wth-card-df></wth-card-df>
        </v-col>
      </v-row>
    </v-container>
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
