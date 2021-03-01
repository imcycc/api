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
  .post('/api/article', controllers.apiBlog.CreateArticle)
  .del('/api/article', controllers.apiBlog.DeleteArticle)
  .put('/api/article', controllers.apiBlog.UpdateArticle)
  .get('/api/article', controllers.apiBlog.FindArticle)
  .get('/api/articles', controllers.apiBlog.FindAllArticle)


