import Recipe from "../models/recipemodel.js";

const recipeDAO = {};

recipeDAO.allRecipes = async () => {
    const recipes = await Recipe.find();
    return recipes;
}

recipeDAO.oneRecipe = async (code) => {
    const recipe = await Recipe.findOne({ code: code});
    return recipe;
}

recipeDAO.insertRecipe = async (recipe) => {
    return await Recipe.create(recipe);
}

recipeDAO.updateRecipe = async (code, recipe) => {
    return await Recipe.findOneAndUpdate({ code: code }, recipe);
}

recipeDAO.deleteRecipe = async (code) => {
    return await Recipe.findOneAndDelete({ code: code });
}

export default recipeDAO;
