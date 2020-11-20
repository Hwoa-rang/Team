<template>
  <div class="time-timer pa-4">
    <div class="canvas-wrap">
      <canvas id="canvas" :width="size" :height="size"></canvas>
      <v-btn
        v-if="!isTimer"
        class="btn-control"
        icon
        @click="runTimer"
        style="color:#222"
      >
        START
      </v-btn>
      <v-btn
        v-else
        class="btn-control"
        icon
        @click="stopTimer"
        style="color:red"
      >
        STOP
      </v-btn>
    </div>

    <v-btn @click="reTimer">RESET</v-btn>
  </div>
</template>

<script>
export default {
  name: 'TimeTimer',
  data() {
    return {
      isTimer: false,
      canvasWrap: Number,
      canvas: null,
      ctx: null,
      elapsed: 0,
      timer: null,
    };
  },
  computed: {
    size() {
      return this.canvasWrap;
    },
    center() {
      return this.canvasWrap / 2;
    },
  },
  watch: {
    elapsed(newValue) {
      if (newValue > 360) {
        // window.requestAnimationFrame은 다른 스레드로 요청을 하고 60프레임 기준이라서 과부하를 피할 수 있다(?)
        clearInterval(this.timer);
        this.isTimer = false;
        this.timer = null;
        this.elapsed = 0;
        this.ctx.clearRect(0, 0, this.canvasWrap, this.canvasWrap);
      }
    },
  },
  methods: {
    runTimer() {
      this.isTimer = true;
      this.timer = setInterval(() => {
        this.elapsed += 1;
        this.ctx.beginPath();
        this.ctx.moveTo(this.center, this.center);
        //360도 × π/180 = 6.283라디안
        this.ctx.arc(
          this.center,
          this.center,
          this.center,
          0,
          (this.elapsed * Math.PI) / 180
        );
        this.ctx.fillStyle = '#f0f0f0';
        this.ctx.fill();
      }, 100);
    },
    stopTimer() {
      this.isTimer = false;
      clearInterval(this.timer);
      this.timer = null;
    },
    reTimer() {
      this.ctx.clearRect(0, 0, this.canvasWrap, this.canvasWrap);
      this.elapsed = 0;
    },
  },
  mounted() {
    this.canvasWrap = document.querySelector('.canvas-wrap').clientWidth;
    window.addEventListener('resize', () => {
      this.canvasWrap = document.querySelector('.canvas-wrap').clientWidth;
    });
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
  },
};
</script>

<style lang="scss" scoped>
.portfolio-parent {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}
.here {
  scroll-snap-align: start;
}

.time-timer {
  background: #fff;
  border-radius: 4px;
  .canvas-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-90deg);
    width: 100%;
    border-radius: 50%;
    background: #ff0000;
    .btn-control {
      transform: rotate(90deg);
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
