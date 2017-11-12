<template lang="pug">
#bios
  section.columns
    .column.has-text-right
      h1.title matt
      p.notification.is-primary matt studies computer science at purdue university.&nbsp;
        | he plans to take a job with Yelp as a software engineer after graduation.
        | his passions include justice for the poor, occasional ukulele playing,
        | and far too much tv, movies, and music.
    .column
      img(src='./assets/9-opt.jpg')
    .column
      h1.title mackenzie
      p.notification.is-primary mack studies social psychology at purdue university,&nbsp;
        | doing cutting edge research in prejudice and discrimination.
        | she plans to pursue a PhD after graduation so she can continue her research.
        | mack's hobbies include art of many varieties and organizing students at purdue
        | for social justice.
</template>

<script>
export default {
  name: 'Bios',
};
</script>
