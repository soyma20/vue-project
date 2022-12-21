<template>
  <div v-if="comment" class="comment">
    <h2>{{comment.name}}</h2>
    <p>{{comment.body}}</p>
    <p>{{comment.email}}</p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props:['comment'],
  data(){
    return{

    }
  },
}
</script>

<style scoped>
.comment {
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 0px 0px 22px -11px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  margin: 15px 0;
}
</style>
