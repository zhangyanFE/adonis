'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.resource('posts','PostController')

// Route.get('/index',function(request,response){
//   response.send('网站首页')
//
// }).middleware('auth')
// Route.get('/sub',function(request,response){
//   response.send('网站首页2')
//
// })
// Route.get('/users/:id/edit',function(request,response){
//   const id=request.param('id')
//   response.send(`我得到了一个动态ID:${id}`)
//
// })
//
// Route.get('/~/*', function * (request, response) {
//   const media = request.param(0)
//   response.send(`哟~ 这个${media}文件, 不给你哦~`)
// })
