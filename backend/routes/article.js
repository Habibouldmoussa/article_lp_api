// Importation des routes, middleware, controllers et des plugin nécessaire 
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const articleCtrl = require('../controllers/article');
const multer = require('../middleware/multer-config');
// const apicache = require('apicache')
// let cache = apicache.middleware
// On apprlique les méthodes et les middlewares necessaire et les controlleurs pour chaque routes  
router.get('/', articleCtrl.getAllArticle);
router.get('/q/:slug', articleCtrl.getArticleBySlug);
router.post('/', auth, multer, articleCtrl.createArticle);
router.get('/:id', articleCtrl.getOneArticle);
router.put('/:id', auth, multer, articleCtrl.modifyArticle);
router.delete('/:id', auth, articleCtrl.deleteArticle);

module.exports = router;