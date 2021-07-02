/* tslint:disable:no-string-literal */

import { lyricsBaseUrl } from './endpoints';
import requestToUrl from './request';

/**
 * Format Song Response
 * @param {JSON} resp json response
 * @param {boolean} lyrics true or false
 * @returns Data in formatted form
 */
interface IResponse {
  id: string;
  media_preview_url: string;
  primary_artists: string;
  singers: string;
  starring: string;
  has_lyrics: string;
}
const songResponse = async (resp: IResponse, lyrics: boolean) => {
  const sendResp = JSON.parse(JSON.stringify(resp));
  sendResp['media_preview_url'] = resp.media_preview_url.replace('_96_p.mp4', '_160_.mp4');
  sendResp['primary_artists'] = formatData(resp['primary_artists']);
  sendResp['singers'] = formatData(resp['singers']);
  sendResp['starring'] = formatData(resp['starring']);

  if (lyrics === true && resp.has_lyrics === 'true') {
    const lyr = await requestToUrl(lyricsBaseUrl + resp.id);
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
interface IResponseAlbum {
  id?: string;
  image?: string;
  primary_artists?: string;
  songs?: IResponse[];
}
const albumResponse = async (resp: IResponseAlbum, lyrics: boolean) => {
  const sendResp = JSON.parse(JSON.stringify(resp));

  sendResp['image'] = sendResp['image'].replace('150x150', '500x500');
  sendResp['primary_artists'] = formatData(sendResp['primary_artists']);
  if (resp.songs !== undefined) {
    sendResp['songs'] = await Promise.all(
      resp['songs'].map(async (song: any) => {
        const data = await songFormatAsync(song, lyrics);
        return data;
      }),
    );
    return sendResp;
  } else {
    return sendResp;
  }
};
/**
 * Format Playlist Response
 * @param {JSON} resp json response
 * @param {boolean} lyrics true or false
 * @returns Data in formatted form
 */
interface IResponsePlaylist {
  listid?: string;
  listname: string;
  songs: IResponse[];
}
const playListResponse = async (resp: IResponsePlaylist, lyrics: boolean) => {
  const sendResp = JSON.parse(JSON.stringify(resp));
  // console.log(sendResp);
  sendResp['songs'] = await Promise.all(
    resp['songs'].map(async (song) => {
      const data = await songFormatAsync(song, lyrics);
      return data;
    }),
  );

  return sendResp;
};
/**
 * Format response async
 * @param {JSON} resp json response
 * @param {boolean} lyrics true or false
 * @returns Data in formatted form
 */
const songFormatAsync = async (resp: IResponse, lyrics: boolean) => {
  const sendResp = JSON.parse(JSON.stringify(resp));
  sendResp['media_preview_url'] = resp.media_preview_url.replace('_96_p.mp4', '_160_.mp4');
  sendResp['primary_artists'] = formatData(resp['primary_artists']);

  sendResp['singers'] = formatData(resp['singers']);
  sendResp['starring'] = formatData(resp['starring']);
  if (lyrics === true && resp.has_lyrics === 'true') {
    const lyr = await requestToUrl(lyricsBaseUrl + resp.id);
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
const formatData = (str: string) => str.replace('&amp;', '&').replace('&#039;', "'").split(',');
const sm = {
  songResponse,
  albumResponse,
  playListResponse,
};
export default sm;
