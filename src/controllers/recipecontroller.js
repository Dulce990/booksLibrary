import clientDAO from "../dao/recipedao.js";

export const allRecipes = (req, res) => {
    clientDAO.allRecipes()
        .then(books => res.render('../src/views/index', { books })) // Pasar los libros como 'books'
        .catch(err => res.json({ status: "Error 404" }));
}

export const oneRecipe = (req, res) => {
    clientDAO.oneRecipe(req.params.code)
        .then(recipes => {
        !recipes ? res.json({
                message: "Libro no encontrado..."
            }) : res.render('../src/views/edit', { recipes });
        })
        .catch(err => res.json({
            status: "error 404"
        })
        );
}

export const insertRecipe = (req, res) => {
    clientDAO.insertRecipe(req.body)
        .then(result => res.redirect('/book/'))
        .catch(err => res.json({ status: "Error 404" }));
}

export const updateRecipe = (req, res) => {
    clientDAO.updateRecipe(req.params.code, req.body)
        .then(recipes => res.redirect('/book/'))
        .catch(err => res.json({ status: "Error 404" }));
}

export const deleteRecipe=(req,res)=>{
    clientDAO.deleteRecipe(req.params.code)
    .then(result=>{
        !result ? res.json({
            message:"Receta no encontrada"
        }): res.redirect('/book/');
    })
    .catch(err => res.json({ status: "Error 404" }));
}


