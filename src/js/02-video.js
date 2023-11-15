import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';

const getCurrentTime = currentTime => {
  const seconds = currentTime.seconds;
  localStorage.setItem(localStorageKey, JSON.stringify(seconds));
};
