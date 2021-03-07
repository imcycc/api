import KoaRouter from 'koa-router'
import controllers from '../controllers'

const router = new KoaRouter()

export default router
  // .all('/upload', controllers.upload)

  .post('/auth/login', controllers.auth.Login)
  .get('/auth/check', controllers.auth.Check)

  // 游戏
  .get('/public/api/tadpole-ranking', controllers.apiGame.FindTadpoleRanking)
  .post('/public/api/tadpole-ranking', controllers.apiGame.CreateTadpoleRanking)

  // 博客
  .get('/public/articles', controllers.apiBlog.FindAllArticle)
  .get('/public/article', controllers.apiBlog.FindArticle)
  .get('/public/tags', controllers.apiBlog.FindAllTag)


  .get('/articles', controllers.apiBlog.FindAllArticle)
  .get('/article', controllers.apiBlog.FindArticle)
  .post('/article', controllers.apiBlog.CreateArticle)
  .del('/article', controllers.apiBlog.DeleteArticle)
  .put('/article', controllers.apiBlog.UpdateArticle)
  .get('/tags', controllers.apiBlog.FindAllTag)
  .post('/tag', controllers.apiBlog.CreateTag)
  .del('/tag', controllers.apiBlog.DeleteTag)
  .put('/tag', controllers.apiBlog.UpdateTag)



