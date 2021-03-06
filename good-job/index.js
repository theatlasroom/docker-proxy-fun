const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, function () {
  console.log(`GOOD-JOB app listening on port ${port}!`)
})
