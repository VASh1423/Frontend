import { computed, ref } from "vue"

export default function useSortedAndSearchPosts(sortedPosts) {
  const searchQuery = ref('')
  const sortedAndSearchPosts = computed(() => {
    return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })

  return {
    searchQuery, sortedAndSearchPosts
  }
}