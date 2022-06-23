import Oceans8 from "../images/ocean's8.jpg";
import Creed2 from "../images/creed2.jpg";
import GoneGirl from "../images/gonegirl.jpg";
import Inception from "../images/inception.jpg";
import Indestructibles2 from "../images/indestructibles2.jpg";
import MidnightSun from "../images/midnightsun.jpg";
import PulpFiction  from "../images/pulpfiction.jpg";
import SansUnBruit from "../images/sansunbruit.jpg";
import Seven from "../images/seven.jpg";
import {
  FiLinkedin,
  FiFacebook,
  FiTwitter,
  FiYoutube
} from 'react-icons/fi';

export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/company/particeep',
  },
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/Particeep',
  },
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com/particeep',
  },
  {
    icon: <FiYoutube />,
    href: 'https://www.youtube.com/c/particeep',
  },
]



const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    image: Oceans8
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    image: MidnightSun
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    image: Indestructibles2
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    image: SansUnBruit
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    image: Creed2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    image: PulpFiction
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    image: PulpFiction
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    image: Seven
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    image: Inception
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    image: GoneGirl
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
