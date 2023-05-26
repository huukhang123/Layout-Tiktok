//layout
import { HeaderOnly } from '../components/Layout'

//page
import Home from '~/pages/Home'
import Folingwing from '~/pages/Follingwing'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
//public routes

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/follingwing', component: Folingwing },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
]

const privateRoutes = [
]

export { publicRoutes, privateRoutes }