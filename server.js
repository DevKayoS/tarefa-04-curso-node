const express = require('express')
const exphbs =  require('express-handlebars')

const app =  express()
const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

const products = [
  {
    id: 1,
    title: "Testando primeiro item",
    description: "Esse é um teste sobre como vou passar os dados para view da home"
  },
  {
    id: 2,
    title: "Testando segundo item",
    description: "Esse é um teste sobre como vou passar os dados para view da home"
  }
]

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/', (req,res)=>{
 
  res.render('home',{products})
})

app.get('/products/:id', (req,res)=>{
  const id = req.params.id
  console.log(id)

  const productId1 = products[0]
  
  res.render('productsId', {productId1})
})

app.listen(1234, ()=>{
  console.log('Server running 🐱‍🏍')
})