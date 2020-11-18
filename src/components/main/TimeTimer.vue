<template>
  <div class="time-timer pa-4">
    <div class="canvas-wrap">
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeTimer',
  mounted() {
    const canvasWrap = document.querySelector('.canvas-wrap');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = canvasWrap.clientWidth;
    canvas.height = canvasWrap.clientWidth;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.width / 2);
    let i = 0;
    setInterval(() => {
      i += 0.001;
      ctx.arc(
        canvas.width / 2,
        canvas.width / 2,
        canvas.width / 2,
        0,
        i * Math.PI
      );
      ctx.fillStyle = '#ff0000';
      ctx.fill();
    }, 100);
  },
};
</script>

<style lang="scss" scoped>
.time-timer {
  background: #fff;
  border-radius: 4px;
  .canvas-wrap {
    transform: rotate(-90deg);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 50%;
    background: #f0f0f0;
    .btn-control {
      position: absolute;
      width: 35%;
      height: 35%;
      background: #fff;
      border-radius: 50%;
    }
    #canvas {
      display: block;
    }
  }
}
</style>
