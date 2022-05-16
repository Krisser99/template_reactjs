import { HeaderOnly } from '~/components/Layout';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicPage = [
  {path: '/', component: Home},
  {path: '/following', component: Following},
  {path: '/profile', component: Profile},
  {path: '/upload', component: Upload, layout: HeaderOnly},
]

const privatePage = [

]


export {publicPage, privatePage}