<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <MyInput 
      v-focus
      v-model="post.title"
      type="text" 
      placeholder="Название" 
    />
    <MyInput 
      v-model="post.body" 
      type="text" 
      placeholder="Описание" 
    />
    <MyButton  
      @click="createPost"
      style="align-self: flex-end; margin-top: 15px"
    >Создать</MyButton>
  </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: "",
                body: ""
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: ""
            };
        }
    },
}
</script>

<style scoped>
  form{
    display: flex;
    flex-direction: column;
  }
</style>