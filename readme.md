# Jio Savan

```bash
npm i jiosavan
    or 
yarn add jiosavan
```
**Common Js**

```javascript
const jiosavan = require('jiosavan')
```

**ES6 Import**

```javascript
import jiosavan from "jiosavan"
```

**Async/Await**

```javascript
 const songDetail = await jiosavan.getSong(id,lyrics)
```

**.then() Prmoise**
```javascript
  jiosavan
    .getSong(id,lyrics)
    .then((resp)=>console.log(resp))
```
## Important Methods


**For Song,Album,Playlist,Lyrics**



To Get The song Details

```javascript
   const id = "FKUE0Xj4"
   const lyrics= true
   const songDetail = await jiosavan.getSong(id,lyrics)
```

To Get the Album details

```javascript
   const id = "1148073"
   const lyrics= true
   const albumDetail = await jiosavan.getAlbum(id,lyrics)
```

To Get the Playlist details

```javascript
   const id = "50808"
   const lyrics= true
   const playListDetail = await jiosavan.getPlaylist(id,lyrics)
```


To Get the Lyrics

```javascript
   const id = "FKUE0Xj4"
   const songLyrics = await jiosavan.getLyrics(id)
```

**For Searching**

To search All data

```javascript
   const query = "Jai+ho"
   const songLyrics = await jiosavan.search(query)
```

To search songs

```javascript
   const query = "Jai+ho"
   const songLyrics = await jiosavan.searchSongs(query)
```

To search Albums

```javascript
   const query = "Jai+ho"
   const songLyrics = await jiosavan.searchAlbums(query)
```

To search Artist

```javascript
   const query = "Arijit+Singh"
   const songLyrics = await jiosavan.searchArtist(query)
```


To search Playlist

```javascript
   const query = "Jai+Ho"
   const songLyrics = await jiosavan.searchPlaylists(query)
```