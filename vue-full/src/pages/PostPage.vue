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
        @create="createPost"
      />
    </MyDialog>
    <PostList 
      :posts="sortedAndSearchPosts" 
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка</div>
    <div v-intersection="loadMorePosts" class="observe"></div>
    <!-- <div class="page__wrapper">
      <div 
        v-for="pageNumber in totalPage" 
        :key="pageNumber" 
        class="page"
        :class="{
          'current-page': pageNumber === page
        }"
        @click="changePage(pageNumber)"
      >{{ pageNumber }}</div>
    </div> -->
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
        posts: [],
        dialogVisible: false,
        isPostsLoading: false,
        searchQuery: '',
        selectedSort: '',
        page: 1,
        limit: 10,
        totalPage: 0,
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'},
        ]
      }
    },
    methods:{
      createPost(post){
        this.posts.push(post)
        this.dialogVisible = false
      },
      removePost(post){
        this.posts = this.posts.filter(p => p.id !== post.id)
      },
      showDialog(){
        this.dialogVisible = true
      },
      async fetchPosts(){
        try {
          this.isPostsLoading = true
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          })
          this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = response.data
        } catch (error) {
          alert('Ошибка')
        } finally {
          this.isPostsLoading = false
        }
      },
      async loadMorePosts(){
        try {
          this.page += 1
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          })
          this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = [...this.posts, ...response.data]
        } catch (error) {
          alert('Ошибка')
        }
      },
      // changePage(pageNumber){
      //   this.page = pageNumber
      // }
    },
    mounted(){
      this.fetchPosts()
    },
    computed: {
      sortedPosts() {
        return [...this.posts].sort((post1, post2) => {
          return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
        })
      },
      sortedAndSearchPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },
    watch: {
      // page() {
      //   this.fetchPosts()
      // }
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