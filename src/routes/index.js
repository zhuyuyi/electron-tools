import HomePage from '@/pages/HomePage';
import TinyMceEditor from '@/pages/Editor';
import CkEditor from '@/pages/CkEditor';

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
];

export default routes;
