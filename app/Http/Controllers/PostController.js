'use strict'

class PostController {
  index({ view }){
    const pageTitle = 'Posts'
    return view.render('post.index',{pageTitle})

  }
}

module.exports = PostController
