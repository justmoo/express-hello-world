const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT||3000, process.env.IP, () => console.log(`Example app listening on port ${port}!`))