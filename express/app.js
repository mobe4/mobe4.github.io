const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/calculate', (req, res) => {
  const num1 = Number(req.body.num1)
  const num2 = Number(req.body.num2)
  const operator = req.body.operator
  let result = 0

  switch (operator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      result = num1 / num2
      break
  }

  res.render('result', { result: result })
})

app.listen(3000, () => {
  console.log('Calculator app listening on port 3000!')
})
