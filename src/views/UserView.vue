<template>
  <div>
    <User v-if="user" :user="user"/>
  </div>
  <div v-if="posts" class="posts">
    <Post v-for="post of posts" key="post.id" :post="post" :show-name="false"/>
  </div>
</template>

<script>
import User from "../components/User.vue";
import Post from "../components/Post.vue";

export default {
  components: {User, Post},
  data() {
    return {
      user: {},
      id: '',
      posts: []
    }
  },
  created() {
    this.id = this.$route.params.id
    fetch('https://jsonplaceholder.typicode.com/users/' + this.id)
        .then(value => value.json())
        .then(value => {
          console.log(value)
          this.user = value
        })
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + this.id)
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
