<script setup>

</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
<!--          <RouterLink to="/users">Users</RouterLink>-->
          <RouterLink to="/posts">Posts</RouterLink>
<!--          <RouterLink to="/comments">Comments</RouterLink>-->
          <RouterLink to="/about">About us</RouterLink>
        </nav>
      </div>
    </header>
  </div>
  <RouterView/>
</template>

<style scoped>
  nav {
    background: #2c3e50;
    color: aliceblue;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  RouterLink {
    margin: 10px;
  }
</style>
