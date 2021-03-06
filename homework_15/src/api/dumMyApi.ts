import {
    APP_ID_FIELD, APP_ID_VALUE, USERS_URL, LIMIT_FIELD, PAGE_FIELD,
} from '../constants/dumMyApi';
import { UsersType, PostListResponse } from '../types/dumMyApiResponses';

export const getUsersList = (
    page: number,
    limit: number,
    callback: (resp: PostListResponse) => void,
    errorCallback?: (resp: any) => void,
) => fetch(USERS_URL + '?' + [PAGE_FIELD] + '=' + page.toString() + '&' + [LIMIT_FIELD] + '=' + limit.toString(), {
    method: 'GET',
    headers: new Headers({
        [APP_ID_FIELD]: APP_ID_VALUE,
        //[PAGE_FIELD]: page.toString(),
        //[LIMIT_FIELD]: limit.toString(),
    }),
}).then((response) => response.json())
    .then((response: PostListResponse) => callback(response))
    .catch(errorCallback);