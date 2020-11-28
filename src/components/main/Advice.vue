<template>
  <div class="advice">
    <span>
      {{ advice }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'advice',
  data() {
    return {
      advice: '',
    };
  },
  beforeMount() {
    this.$http.get('//api.adviceslip.com/advice').then((adSlip) => {
      this.advice = adSlip.data.slip.advice;
    });
  },
};
</script>

<style lang="scss" scoped>
.advice {
}
</style>
