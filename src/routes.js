import ImagesPage from './pages/ImagesPage';
import ImagePage from './pages/ImagePage';

const routes = [
    {
        'path': '/',
        'page': ImagesPage
    },
    {
        'path': '/:id',
        'page': ImagePage
    }
];

export default routes;