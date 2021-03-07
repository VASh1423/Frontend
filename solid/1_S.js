//Single Responsibility Principle

class News{
  constructor(title, text){
    this.title = title
    this.text = text
    this.modified = false
  }

  addNews(title, text){
    this.title = title
    this.text = text
    this.modified = true
  }
}

class print{
  constructor(news){
    this.news = news
  }

  html(){
    return`
    <div>
      <title>${this.news.title}</title>
      <p>${this.news.text}</p>
    </div>
    `
  }

  json(){
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text
    }, null, 2)
  }
}

console.log(new print(new News('News', 'Context')).html())
console.log(new print(new News('News', 'Context')).json())