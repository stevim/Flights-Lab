import { Meal } from "../models/meal.js"

function newMeal(req, res) {
  console.log(req.body)  
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Add Meal',
      meals,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/meals')
  })
}

function create(req, res) {
  console.log(req.body)  
  Meal.create(req.body)
  .then(meal => {
    res.redirect('/meals/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/meals/new')
  })
}

export {
  newMeal as new,
  create
}