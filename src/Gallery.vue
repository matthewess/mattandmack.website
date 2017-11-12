<template lang="pug">
#gallery
  .columns.is-multiline
    template(v-for='image in images')
      .column.is-half(v-if='image.wide')
        img.image.is-1by2.wide(:src='image.src')
      .column.is-one-quarter(v-else)
        img.image.is-3by1.narrow(:src='image.src')
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      images: [
        { src: require('./assets/2-opt.jpg'), wide: false },
        { src: require('./assets/3-opt.jpg'), wide: true },
        { src: require('./assets/4-opt.jpg'), wide: false },
        { src: require('./assets/5-opt.jpg'), wide: false },
        { src: require('./assets/8-opt.jpg'), wide: false },
        { src: require('./assets/6-opt.jpg'), wide: true },
        { src: require('./assets/9-opt.jpg'), wide: false },
        { src: require('./assets/14-opt.jpg'), wide: true },
        { src: require('./assets/11-opt.jpg'), wide: false },
        { src: require('./assets/1-opt.jpg'), wide: false },
        { src: require('./assets/13-opt.jpg'), wide: false },
        { src: require('./assets/10-opt.jpg'), wide: true },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
img.narrow
  clip-path: inset(0px 0px 13px 0px)
#gallery
  margin-bottom: 30px
</style>
