const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'ma-man.html'))
})

app.listen(port, function () {
  console.log(`MA-MAN app listening on port ${port}!`)
})
