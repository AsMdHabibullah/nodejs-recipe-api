const routers = require("express").Router();

const { recipeViews, recipeCreate, recipeUpdate, recipeDelete, recipeCommentCreate } = require("../controllers/recipes");


// Recipe Routers
routers.get("/recipes", recipeViews);
routers.post("/recipe/create", recipeCreate);
routers.put("/recipe/update/:id", recipeUpdate);
routers.delete("/recipe/delete/:id", recipeDelete);
routers.post("/recipe/:id/comment", recipeCommentCreate);

module.exports = routers;