<template>
  <div v-if="user" class="user">
    <p>{{ user.name }}</p>
    <p>{{ user.username }}</p>
    <p>{{ user.email }}</p>
  </div>
</template>

<script>

export default {
  data(){
    return{
      posts:[],
    }
  },
  props: ['user'],
  created() {

  }
}
</script>

<style scoped>
  .user{
    width: 200px;
    height: 250px;
    box-shadow: 0px 0px 22px -11px rgba(0,0,0,0.75);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>
