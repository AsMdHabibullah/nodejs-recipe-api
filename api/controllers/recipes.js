const Recipe = require("../models/RecipeModels");

module.exports = {

    recipeViews(req, res) {

        Recipe.find({})
            .then(recipes => {
                if (!recipes) {
                    res.status(200).json({
                        message: "Recipe not found..."
                    })
                } else {
                    res.status(200).json({
                        message: "Welcome to your favorit cooking recipe\'s.",
                        recipes
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: "Something wrong...",
                    err
                })
            })
    },
    recipeCreate(req, res) {
        let { name, description } = req.body;
        let recipe = new Recipe({ name, description })
        recipe.save()
            .then(recipe => {
                res.status(200).json({
                    message: "Recipe created successfully!",
                    recipe
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "Server error...",
                })
            })
    },
    recipeUpdate(req, res) {
        let id = req.params.id;
        let { name, description } = req.body;
        Recipe.findByIdAndUpdate(id, { name, description })
            .then(recipe => {
                if (!recipe) {
                    return res.status(404).json({
                        message: "Recipe not found",
                    })
                } else {
                    recipe.save()
                        .then(docs => {
                            return res.status(200).json({
                                message: "Recipe update successfully with the new recipe...",
                                docs
                            })
                        })
                        .catch(err => {
                            res.status(500).json({
                                message: "Server error",
                                err
                            })
                        })
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: "Server error",
                    err
                })
            })
    },
    recipeDelete(req, res) {
        let id = req.params.id;
        Recipe.findByIdAndDelete(id)
            .then(recipe => {
                res.status(200).json({
                    message: `Recipe deleted successfully...`
                })
            })
            .catch(err => res.status(500).json({ message: "Server error" }))
    },
    recipeCommentCreate(req, res) {
        let id = req.params.id;
        let { comment } = req.body;
        Recipe.updateOne({ _id: id }, {
            $push: { comments: { comment: comment } }
        })
            .then(() => res.status(201).json({
                message: "Comment insert successfully...",
            }))
            .catch(err => {
                console.log(err);
            })
    }
}