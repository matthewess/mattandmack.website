<template lang="pug">
#hero
  section.hero.is-fullheight.is-primary.hero-img
    .hero-body
      .container.has-text-centered.has-text-primary
        h1.title mackenzie mcdonald <br>
          | + <br>
          | matthew ess
        br
        h2.subtitle july 27th, 2018
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style lang="sass" scoped>
.hero-img
  background: url(assets/6.png)center center
  background-size: cover
</style>
