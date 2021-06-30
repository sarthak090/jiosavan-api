const endpoints = require("../utils/endpoints");
const request = require("../utils/request");

/**
 * Get Full Search Data including albums,songs,playlist,artist ,e.t.c
 * @param {string} query : Search string such as name of the song
 * @returns {Promise} Returns object with the property: albums,  songs,playlists,artists
 */
const search = async (query) => {
  try {
    const searchResult = await request(endpoints.searchBaseUrl + query);
    return searchResult;
  } catch (err) {
    return err;
  }
};
/**
 * Get Full Search Data of songs
 * @param {string} query : Search string such as name of the song
 * @returns {Promise} Returns  array of songs
 */
const searchSongs = async (query) => {
  try {
    const searchResult = await request(endpoints.searchBaseUrl + query);
    return searchResult.songs.data;
  } catch (err) {
    return err;
  }
};
/**
 * Get  Search Data of albums
 * @param {string} query : Search string such as name of the album
 * @returns {Promise} Returns  array of songs
 *
 */
const searchAlbums = async (query) => {
  try {
    const searchResult = await request(endpoints.searchBaseUrl + query);
    return searchResult.albums.data;
  } catch (err) {
    return err;
  }
};

/**
 * Get  Search Data of Playlists
 * @param {string} required query : Search string such as name of the album
 * @returns {Promise} Returns  array of playlists
 *
 */
const searchPlaylists = async (query) => {
  try {
    const searchResult = await request(endpoints.searchBaseUrl + query);
    return searchResult.playlists.data;
  } catch (err) {
    return err;
  }
};

/**
 * Get  Search Data of Artists
 * @param {string} query : Search string such as name of the artist
 * @returns {Promise} Returns  array of artists
 *
 */
const searchArtist = async (query) => {
  try {
    const searchResult = await request(endpoints.searchBaseUrl + query);
    return searchResult.artists.data;
  } catch (err) {
    return err;
  }
};

module.exports = {
  searchSongs,
  searchAlbums,
  searchArtist,
  searchPlaylists,
  search,
};
