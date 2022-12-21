<template>
  <div class="posts">
    <Post v-for="post of posts" key="post.id" :post="post" :show-name="true"/>
  </div>
</template>

<script>
import Post from "../components/Post.vue";

export default {
  components: {Post},
  data() {
    return {
      posts: [],
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
          // console.log(value)
          this.posts = value
        })
  },

}
</script>

<style>
.posts {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
