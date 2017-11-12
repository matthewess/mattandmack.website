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
        { src: require('./assets/2-opt.png'), wide: false },
        { src: require('./assets/3-opt.png'), wide: true },
        { src: require('./assets/4-opt.png'), wide: false },
        { src: require('./assets/5-opt.png'), wide: false },
        { src: require('./assets/8-opt.png'), wide: false },
        { src: require('./assets/6-opt.png'), wide: true },
        { src: require('./assets/9-opt.png'), wide: false },
        { src: require('./assets/14-opt.png'), wide: true },
        { src: require('./assets/11-opt.png'), wide: false },
        { src: require('./assets/1-opt.png'), wide: false },
        { src: require('./assets/13-opt.png'), wide: false },
        { src: require('./assets/10-opt.png'), wide: true },
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
