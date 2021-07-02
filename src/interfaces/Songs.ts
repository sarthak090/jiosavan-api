export type SongDetails = {
  id: string;
  type: string;
  song: string;
  album: string;
  year: string;
  music: string;
  music_id: string;
  primary_artists: [string];
  primary_artists_id: string;
  featured_artists: string;
  featured_artists_id: string;
  singers: [string];
  starring: string;
  image: string;
  label: string;
  albumid: string;
  language: string;
  origin: string;
  play_count: number;
  copyright_text: string;
  '320kbps': string;
  is_dolby_content: false;
  explicit_content: number;
  has_lyrics: string;
  lyrics_snippet: string;
  encrypted_media_url: string;
  encrypted_media_path: string;
  media_preview_url: string;
  perma_url: string;
  album_url: string;
  duration: string;
  rights: {
    code: 0;
    reason: '';
    cacheable: true;
    delete_cached_object: false;
  };
  cache_state: string;
  starred: string;
  artistMap: {
    [key: string]: string;
  };
  release_date: string;
  triller_available: boolean;
  label_url: string;
};

export type Lyrics = {
  lyrics: string;
  script_tracking_url: string;
  lyrics_copyright: string;
  snippet: string;
};

export type Album = {
  title: string;
  name: string;
  year: string;
  release_date: string;
  primary_artists: string;
  primary_artists_id: string;
  albumid: string;
  perma_url: string;
  image: string;
  songs: SongDetails[];
};

export type Playlist = {
  listid: string;
  listname: string;
  perma_url: string;
  follower_count: string;
  uid: string;
  last_updated: string;
  username: string;
  firstname: string;
  lastname: string;
  is_followed: null | string;
  isFY: boolean;
  image: string;
  share: string;
  songs: SongDetails[];
  type: string;
  list_count: string;
  fan_count: number;
  H2: null | string;
  is_dolby_playlist: boolean;
  subheading: null | string;
  sub_types: [string];
  images: [string];
  video_available: boolean;
  video_count: number;
};
