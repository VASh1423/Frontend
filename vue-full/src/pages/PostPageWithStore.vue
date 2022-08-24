<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInput
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск..."
      v-focus
    />
    <div class="app__btns">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
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
    <div class="page__wrapper">
      <div 
        v-for="pageNumber in totalPage" 
        :key="pageNumber" 
        class="page"
        :class="{
          'current-page': pageNumber === page
        }"
        @click="changePage(pageNumber)"
      >{{ pageNumber }}</div>
    </div>
  </div>
</template>

<script>
  import PostForm from '@/components/PostForm.vue'
  import PostList from '@/components/PostList.vue'
import MyDialog from '@/components/UI/MyDialog.vue'
import MyButton from '@/components/UI/MyButton.vue'
import MySelect from '@/components/UI/MySelect.vue'
import MyInput from '@/components/UI/MyInput.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    components:{
    PostForm,
    PostList,
    MyDialog,
    MyButton,
    MyButton,
    MySelect,
    MyInput,
    MyButton
},
    data(){
      return{
        dialogVisible: false
      }
    },
    methods:{
      ...mapMutations({
        setPage: 'post/setPage',
        setSearchQuery: 'post/setSearchQuery',
        setSelectedSort: 'post/setSelectedSort'
      }),
      ...mapActions({
        loadMorePosts: 'post/loadMorePosts',
        fetchPosts: 'post/fetchPosts'
      }),
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
    },
    mounted(){
      this.fetchPosts()
    },
    computed: {
      ...mapState({
        posts: state => state.post.posts,
        isPostsLoading: state => state.post.isPostsLoading,
        searchQuery: state => state.post.searchQuery,
        selectedSort: state => state.post.selectedSort,
        page: state => state.post.page,
        limit: state => state.post.limit,
        totalPage: state => state.post.totalPage,
        sortOptions: state => state.post.sortOptions
      }),
      ...mapGetters({
        sortedPosts: 'post/sortedPosts',
        sortedAndSearchPosts: 'post/sortedAndSearchPosts'
      })
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