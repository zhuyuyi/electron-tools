import {httpGet} from '@/utils/http';

export function ceshiApi(params = {}) {
    return httpGet(
        'https://fe.che300.com/easymock/mock/5d2f06cb3add267074f69c24/api/ceshi',
        params
    );
}
