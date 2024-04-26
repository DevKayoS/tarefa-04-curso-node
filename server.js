const express = require('express')
const exphbs =  require('express-handlebars')
//fazendo as configurações iniciais
const app =  express()
const hbs = exphbs.create({
  partialsDir: ['views/partials']
})
//configurando o express para receber um arquivo estatico
app.use(express.static('public'))

//lista de produtos que eu quero mostrar
const products = [
  {
    id: 1,
    title: "Curso de Node",
    description: "Esse é um curso de Node no qual vamos aprender muitas coisas do ecossistema node",
    price: 24.99
  },
  {
    id: 2,
    title: "Curso de PHP",
    description: "Esse é um curso de PHP no qual vamos aprender muitas coisas sobre o ecossistema PHP",
    price: 32.99
  },
  {
    "id": 3,
    "title": "Curso de Python",
    "description": "Este é um curso de Python onde vamos explorar a programação em nível iniciante a avançado.",
    "price": 45.99
  },
  {
    "id": 4,
    "title": "Curso de JavaScript",
    "description": "Curso introdutório de JavaScript para aprender sobre desenvolvimento web.",
    "price": 29.99
  },
  {
    "id": 5,
    "title": "Curso de Java",
    "description": "Aprenda a programar em Java, cobrindo conceitos fundamentais e avançados.",
    "price": 49.99
  },
  {
    "id": 6,
    "title": "Curso de C#",
    "description": "Um curso completo de C# com foco em desenvolvimento de software empresarial.",
    "price": 39.99
  },
  {
    "id": 7,
    "title": "Curso de Ruby",
    "description": "Saiba mais sobre o framework Ruby on Rails e seu ecossistema.",
    "price": 34.99
  },
  {
    "id": 8,
    "title": "Curso de Swift",
    "description": "Aprenda Swift para desenvolvimento de aplicativos para iOS e macOS.",
    "price": 59.99
  },
  {
    "id": 9,
    "title": "Curso de C++",
    "description": "Curso abrangente de C++ para quem deseja aprender conceitos avançados de programação.",
    "price": 52.99
  },
  {
    "id": 10,
    "title": "Curso de HTML e CSS",
    "description": "Um curso prático para criar websites usando HTML e CSS.",
    "price": 25.99
  },
  {
    "id": 11,
    "title": "Curso de SQL",
    "description": "Entenda a manipulação de bancos de dados relacionais usando SQL.",
    "price": 27.99
  },
  {
    "id": 12,
    "title": "Curso de DevOps",
    "description": "Curso introdutório de DevOps para aprender sobre processos e ferramentas.",
    "price": 55.99
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

  const product = products[id - 1]
  
  res.render('productsId', {product})
})

app.listen(1234, ()=>{
  console.log('Server running 🐱‍🏍')
})