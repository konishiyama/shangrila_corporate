import firebaseConfig from "./config"

class Firebase {
  constructor(app) {
    if (!firebaseInstance && app.apps.length < 1) {
      app.initializeApp(firebaseConfig)

      this.auth = app.auth()
      this.db = app.firestore()
      this.functions = app.functions()
      this.storage = app.storage()
    }
  }

  async postArticle({ title, content, cover, date, articleNum }) {
    return this.db.collection("articles").doc().set({
      content: content,
      thumnail: cover,
      date: date,
      articleNum: articleNum,
      title: title,
    })
  }

  async getArticleNumbers() {
    return this.db.collection("articles").get()
  }

  async subscribeToArticles({ onSnapshot }) {
    return this.db.collection("articles").onSnapshot(onSnapshot)
  }
}

let firebaseInstance

function getFirebaseInstance(app) {
  if (!firebaseInstance && app) {
    firebaseInstance = new Firebase(app)
    //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/new 及びhttps://www.sejuku.net/blog/24383を参照
    return firebaseInstance
  } else if (firebaseInstance) {
    return firebaseInstance
  } else {
    return null
  }
}

export default getFirebaseInstance
