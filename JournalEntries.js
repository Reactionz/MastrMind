const express = require('express')
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.sendFile('Users/adara/Documents/Project box/plsstop/src/Models/JournalEntries.js' + '/index.html')
})