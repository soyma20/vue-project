<template>
  <main>
    <Comment v-for="comment of comments" key="comment.id" :comment="comment"/>

  </main>
</template>

<script >
import Comment from "../components/Comment.vue";
export default {
  name: "Comments",
  components: {Comment},
  props:['id'],
  data(){
    return{
      // id:'',
      comments:[],
    }
  },
  created(){

    console.log(this.id)
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + this.id)
        .then(value => value.json())
        .then(value => {
          console.log(value)
          this.comments = value
        })

  }
}
</script>

<style>

</style>
