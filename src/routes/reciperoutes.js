import express from 'express';
import { allRecipes, oneRecipe, insertRecipe, updateRecipe, deleteRecipe } from '../controllers/recipecontroller.js';

const router = express.Router();

router.get('/', allRecipes);
router.get('/:code', oneRecipe);
router.post('/', insertRecipe);
router.post('/:code', updateRecipe);
router.get('/d/:code', deleteRecipe); 

export default router;
