const App = {
  data(){
    return {
      placeholder: "Введите название заметки",
      title: 'Список заметок',
      inputValue: '',
      notes: ['1', '2']
    }
  },

  methods: {
    addNewNote(){
      if(this.inputValue !== ''){
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    toUpperCase(item){
      return item.toUpperCase()
    },
    removeNote(idx){
      this.notes.splice(idx, 1)
    }
  }
}

const app = Vue.createApp(App)

app.mount('#app')