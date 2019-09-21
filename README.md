## REST API ( Mock ) for K-Play
---
Hosted on heroku: https://k-play-api.herokuapp.com

| REST API Endpoints: |                   |
| ------------------- | ----------------- |
| /                   | All data          |
| /audio/             | Only Audio        |
| /audio/:id          | Audio + id        |
| /video/             | Only Video        |
| /video/:id          | Video + id        |
| /id/:id             | Data + id         |
| /search/:query      | Search Taggs      |
| /media/:id          | Search media_id   |
| /category/:category | Filter categories |

Example: Heroku CLI / Heroku GIT
```
git add .
git commit -am "make it better"
git push heroku master
```