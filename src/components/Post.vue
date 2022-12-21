<template>
  <div v-if="post && userName" class="post">
    <RouterLink v-if="showName" :to="`user/${post.userId}`">{{ userName }}</RouterLink>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <button @click="showComments=!showComments">Comments</button>
    <div>
      <Comments v-if="showComments" :id="post.id"/>
    </div>
  </div>

</template>

<script>
import Comments from "./Comments.vue";
export default {
  components: {Comments},
  props: ['post', 'showName'],
  data() {
    return {
      userName: '',
      showComments: false
    }
  },
  created() {

      fetch('https://jsonplaceholder.typicode.com/users/' + this.post.userId)
          .then(value => value.json())
          .then(value => {
            // console.log(value)
            this.userName = value.username
          })
  },
}
</script>

<style scoped>
.post {
  width: 100%;
  padding: 10px;
  box-shadow: 0px 0px 22px -11px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
}
</style>
