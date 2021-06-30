const { lyricsBaseUrl } = require("./endpoints");
const request = require("./request");
/**
 * Format Song Response
 * @param {JSON} resp json response
 * @param {boolean} lyrics true or false
 * @returns Data in formatted form
 */
const songResponse = async (resp, lyrics) => {
  let sendResp = JSON.parse(JSON.stringify(resp));
  sendResp["media_preview_url"] = resp.media_preview_url.replace(
    "_96_p.mp4",
    "_160_.mp4"
  );
  sendResp["primary_artists"] = formatData(resp["primary_artists"]);
  sendResp["singers"] = formatData(resp["singers"]);
  sendResp["starring"] = formatData(resp["starring"]);

  if (lyrics == true && resp.has_lyrics == "true") {
    const lyr = await request(lyricsBaseUrl + resp.id);
    sendResp.lyricsData = lyr;
    return sendResp;
  } else {
    return sendResp;
  }
};

/**
 * Format Album Response
 * @param {JSON} resp json response
 * @param {boolean} lyrics true or false
 * @returns Data in formatted form
 */
const albumResponse = async (resp, lyrics) => {
  let sendResp = JSON.parse(JSON.stringify(resp));

  sendResp["image"] = sendResp["image"].replace("150x150", "500x500");
  sendResp["primary_artists"] = formatData(sendResp["primary_artists"]);
  sendResp["songs"] = await Promise.all(
    resp["songs"].map(async (song) => {
      let data = await songFormatAsync(song, lyrics);
      return data;
    })
  );

  return sendResp;
};
/**
 * Format Playlist Response
 * @param {JSON} resp json response
 * @param {boolean} lyrics true or false
 * @returns Data in formatted form
 */
const playListResponse = async (resp, lyrics) => {
  let sendResp = JSON.parse(JSON.stringify(resp));
  // console.log(sendResp);
  sendResp["songs"] = await Promise.all(
    resp["songs"].map(async (song) => {
      let data = await songFormatAsync(song, lyrics);
      return data;
    })
  );

  return sendResp;
};
/**
 * Format response async
 * @param {JSON} resp json response
 * @param {boolean} lyrics true or false
 * @returns Data in formatted form
 */
const songFormatAsync = async (resp, lyrics) => {
  let sendResp = resp;
  sendResp["media_preview_url"] = resp.media_preview_url.replace(
    "_96_p.mp4",
    "_160_.mp4"
  );
  sendResp["primary_artists"] = formatData(resp["primary_artists"]);

  sendResp["singers"] = formatData(resp["singers"]);
  sendResp["starring"] = formatData(resp["starring"]);
  if (lyrics == true && resp.has_lyrics == "true") {
    const lyr = await request(lyricsBaseUrl + resp.id);
    sendResp.lyricsData = lyr;
    return sendResp;
  } else {
    return sendResp;
  }
};
/**
 *
 * @param {string} str give string to convert it into Array
 * @returns returns array
 */
const formatData = (str) =>
  str.replace("&amp;", "&").replace("&#039;", "'").split(",");

module.exports = {
  songResponse,
  albumResponse,
  playListResponse,
};
