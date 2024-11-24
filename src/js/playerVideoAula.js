import Plyr from 'plyr';

const player = new Plyr('#player', {
    controls: ['play-large', 'play', 'progress', 'volume', 'fullscreen'],
    autoplay: false,
});