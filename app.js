const express = require("express");
const cors = require('cors');
const app = express();

const audio = require('./responses/audio')
const video = require('./responses/video')
const data = audio.concat(video)

app.use(cors());

app.get('/', (req, res) => {
    res.send(data)
})
  
app.get('/audio/', (req, res) => {
    res.send(audio)
})

app.get('/video/', (req, res) => {
    res.send(video)
})
  
app.get('/audio/:id', (req, res) => {
    const { id } = req.params
    const resource = audio.find(function(obj) {
      return obj.id == id
    })
    if (resource) {
      res.send(resource)
    }
    res.status(404).send('{}')
})
  
app.get('/video/:id', (req, res) => {
    const { id } = req.params
    const resource = video.find(function(obj) {
      return obj.id == id
    })
    if (resource) {
      res.send(resource)
    }
    res.status(404).send('{}')
})
  
app.get('/id/:id', (req, res) => {
    const { id } = req.params
    const resource = data.find(function(obj) {
      return obj.id == id
    })
    if (resource) {
      res.send(resource)
    }
    res.status(404).send('{}')
})
  
app.get('/search/:query', (req, res) => {
    const { query } = req.params
    const objects = data.filter(function(obj) {
      return obj.tags.indexOf(query) >= 0
    })
    if (objects) {
      res.send(objects)
    }
    res.status(404).send('{}')
})

app.get('/playlists/:playlist', (req, res) => {
  const { playlist } = req.params
  const objects = data.filter(function(obj) {
    return obj.playlists.indexOf(playlist) >= 0
  })
  if (objects) {
    res.send(objects)
  }
  res.status(404).send('{}')
})

app.get('/media/:id', (req, res) => {
    const { id } = req.params
    const resource = data.find(function(obj) {
      return obj.media_id == id
    })
    if (resource) {
      res.send(resource)
    }
    res.status(404).send('{}')
})

app.get('/category/:category', (req, res) => {
    const { category } = req.params
    const objects = data.filter(function(obj) {
      return obj.categories.indexOf(category) >= 0
    })
    if (objects) {
      res.send(objects)
    }
    res.status(404).send('{}') 
})

const PORT = process.env.NODE_ENV == 'production' ? process.env.PORT : 2000;
const BOOT = `Express server started and listening on port: ${PORT}`;
app.listen(PORT, () => console.log(BOOT));