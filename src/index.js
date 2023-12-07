require('dotenv').config()

const PORT = process.env.PORT;

const express = require('express');

const kegiatanRoutes = require('./routes/kegiatan')
const userRoutes = require('./routes/users')
const galeryRoutes = require('./routes/galery')
const middlewareLogRequest = require('./middleware/logs')




const app = express();


app.use(middlewareLogRequest)
app.use(express.json())
app.use('assets',express.static('public/images'))

app.use('/kegiatan', kegiatanRoutes);
app.use('/users', userRoutes);
app.use('/galery', galeryRoutes);


app.listen(PORT, () => {
    console.log(`server berhasil berjalan di port ${PORT}`);
})