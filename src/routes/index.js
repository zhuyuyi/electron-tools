import HomePage from '@/pages/HomePage';
import TinyMceEditor from '@/pages/Editor';
import CkEditor from '@/pages/CkEditor';
import HomePage2 from '@/pages/HomePage2';

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/editor',
        component: TinyMceEditor,
    },
    {
        path: '/ckeditor',
        component: CkEditor,
    },
    {
        path:'/',
        component: HomePage2
    }
];

export default routes;
