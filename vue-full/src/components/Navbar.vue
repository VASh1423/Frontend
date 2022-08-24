<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/posts')">Posts</MyButton>
      <MyButton @click="$router.push('/about')">About</MyButton>
      <MyButton @click="$router.push('/store')">Store</MyButton>
      <MyButton @click="$router.push('/composition')">Composition</MyButton>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .navbar{
    height: 50px;
    border-color: teal;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .navbar__btns{
    margin-left: auto;
  }
</style>