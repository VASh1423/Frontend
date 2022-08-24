<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInput
      v-model="searchQuery"
      placeholder="Поиск..."
      v-focus
    />
    <div class="app__btns">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm
      />
    </MyDialog>
    <PostList 
      :posts="sortedAndSearchPosts" 
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка</div>
  </div>
</template>

<script>
  import PostForm from '@/components/PostForm.vue'
  import PostList from '@/components/PostList.vue'
import MyDialog from '@/components/UI/MyDialog.vue'
import MyButton from '@/components/UI/MyButton.vue'
import axios from 'axios'
import MySelect from '@/components/UI/MySelect.vue'
import MyInput from '@/components/UI/MyInput.vue'
import { ref } from 'vue'
import {usePosts} from '@/hook/usePosts'
import useSortedPosts from '@/hook/useSortedPosts'
import useSortedAndSearchPosts from '@/hook/useSortedAndSearchPosts'

  export default {
    components:{
    PostForm,
    PostList,
    MyDialog,
    MyButton,
    MyButton,
    MySelect,
    MyInput
},
    data(){
      return{
        dialogVisible: false,
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'},
        ]
      }
    },
    setup(props){
      const { isPostsLoading, posts, totalPage } = usePosts(10)
      const { sortedPosts, selectedSort } = useSortedPosts(posts)
      const { searchQuery, sortedAndSearchPosts } = useSortedAndSearchPosts(sortedPosts)

      return {
        posts,
        totalPage,
        isPostsLoading,
        sortedPosts,
        selectedSort,
        searchQuery,
        sortedAndSearchPosts
      }
    }
  } 
</script>

<style scoped>

  .app__btns{
    display: flex;
    justify-content: space-between;
  }

  .page__wrapper{
    display: flex;
    margin-top: 15px;
  }

  .page{
    border: 1px solid black;
    padding: 10px;
  }

  .current-page{
    border: 2px solid teal;
  }

  .observe{
    height: 30px;
    background: green;
  }
</style>