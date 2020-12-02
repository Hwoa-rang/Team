<template>
  <div class="advice d-flex justify-center align-center pa-16">
    <p>
      {{ advice }}
    </p>
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
  background: rgba($color: #000, $alpha: 0.6);
  border-radius: 4px;
  text-align: center;
  p {
    margin: 0;
  }
}
</style>
