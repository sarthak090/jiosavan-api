const endpoints = require("../utils/endpoints");
const formatter = require("../utils/formatter");
const request = require("../utils/request");

/**
 *
 * @param {string} id id of the song
 * @param {boolean} lyrics true or false
 * @returns songs data with lyrics
 */
const getSong = async (id, lyrics) => {
  try {
    const song = await request(endpoints.songDetailsBaseUrl + id);

    return formatter.songResponse(song[id], lyrics);
  } catch (err) {
    return err;
  }
};
/**
 *
 * @param {string} id id of the song
 * @returns lyrics of the song
 */
const getLyrics = async (id) => {
  try {
    return await request(endpoints.lyricsBaseUrl + id);
  } catch (err) {
    return err;
  }
};

/**
 *
 * @param {string} id id of the album
 * @param {boolean} lyrics true or false
 * @returns album data
 */
const getAlbum = async (id, lyrics) => {
  try {
    const albumData = await request(endpoints.albumDetailsBaseUrl + id);
    return formatter.albumResponse(albumData, lyrics);
  } catch (err) {
    return err;
  }
};
/**
 *
 * @param {string} id  id of the playlist
 * @param {boolean} lyrics true or false
 * @returns  playlist data
 */
const getPlaylist = async (id, lyrics) => {
  try {
    const albumData = await request(endpoints.playlistDetailsBaseUrl + id);

    return formatter.playListResponse(albumData, lyrics);
  } catch (err) {
    return err;
  }
};
module.exports = {
  getSong,
  getLyrics,
  getAlbum,
  getPlaylist,
};
