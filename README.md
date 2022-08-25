## REST API ( Mock ) for K-Play
---

| REST API Endpoints:  |                   | Examples:           |
| -------------------- | ----------------- | ------------------- |
| /                    | All data          | /                   |
| /audio/              | Only Audio        | /audio              |
| /audio/:id           | Audio + id        | /audio/99           |
| /video/              | Only Video        | /video              |
| /video/:id           | Video + id        | /video/129          |
| /id/:id              | Data + id         | /id/128             |
| /search/:query       | Search Taggs      | /search/Scenkonst   |
| /media/:id           | Search media_id   | /media/Nmf2V55mlgw  |
| /category/:category  | Filter categories | /category/musik     |
| /playlists/:playlist | Filter playlists  | /playlists/Poddcast |
| /tags/:tag           | Search for tags   | /tags/scenkonst     |

Example: Heroku CLI / Heroku GIT
```
git add .
git commit -am "make it better"
git push heroku master
```

Example Push to GitHub
```
git push origin master
```
