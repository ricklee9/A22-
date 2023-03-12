const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

// 设置路由处理程序
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('index', { page: 'about' })
})

app.get('/portfolio', (req, res) => {
  res.render('index', { page: 'portfolio' })
})

app.get('/contact', (req, res) => {
  res.render('index', { page: 'contact' })
})

// 在响应时重定向URL
app.post('/about', (req, res) => {
  res.redirect('/about')
})

app.post('/portfolio', (req, res) => {
  res.redirect('/portfolio')
})

app.post('/contact', (req, res) => {
  res.redirect('/contact')
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
