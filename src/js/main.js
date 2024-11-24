import './menuMobile.js';
import './accordion.js';
import './swiper.js';
import './player.js'
import 'video.js/dist/video-js.css';


import Plyr from 'plyr';

const player = new Plyr('#player', {
    controls: ['play-large', 'play', 'progress', 'volume', 'fullscreen'],
    autoplay: false,
});