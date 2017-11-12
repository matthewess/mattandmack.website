<template lang="pug">
#gallery
  .columns.is-multiline
    template(v-for='image in images')
      .column.is-half(v-if='image.wide')
        img(:src='image.src')
      .column.is-one-quarter(v-else)
        img(:src='image.src')
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      images: [
        { src: '/src/assets/2-opt.png', wide: false },
        { src: '/src/assets/3-opt.png', wide: true },
        { src: '/src/assets/4-opt.png', wide: false },
        { src: '/src/assets/5-opt.png', wide: false },
        { src: '/src/assets/8-opt.png', wide: false },
        { src: '/src/assets/6-opt.png', wide: true },
        { src: '/src/assets/9-opt.png', wide: false },
        { src: '/src/assets/14-opt.png', wide: true },
        { src: '/src/assets/11-opt.png', wide: false },
        { src: '/src/assets/1-opt.png', wide: false },
        { src: '/src/assets/13-opt.png', wide: false },
        { src: '/src/assets/10-opt.png', wide: true },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
img
  height: 333.5px
#gallery
  margin-bottom: 30px
</style>
