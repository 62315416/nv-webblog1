const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const BlogController = require('./controllers/BlogControllers')
const CommentController = require('./controllers/CommentController')

module.exports = (app) => {
  app.post('/user',UserController.create)
  app.put('/user/:userId',UserController.put)
  app.delete('/user/:userId',UserController.remove)
  app.get('/user/:userId',UserController.show)
  app.get('/users',isAuthenController, UserController.index)
  app.post('/login',UserAuthenController.login)
  
  app.post('/blog',BlogController.create)
  app.put('/blog/:blogId',BlogController.put)
  app.delete('/blog/:blogId',BlogController.remove)
  app.get('/blog/:blogId',BlogController.show)
  app.get('/blogs',BlogController.index)

  app.post('/comment',CommentController.create)
  app.put('/comment/:commentId',CommentController.put)
  app.delete('/comment/:commentId',CommentController.remove)
  app.get('/comment/:commentId',CommentController.show)
  app.get('/comments',CommentController.index)
  
}