const express = require('express');
const app = express();
const PORT = 6969;
const path = require('path')

// app.get('/', (req, res) => {
//     res.send('bet')
// })

app.use('/', express.static(path.join(__dirname, '../client')))
app.listen(PORT, () => console.log(`SERVER SERVING AT PORT ${PORT}`))