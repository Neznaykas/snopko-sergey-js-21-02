import {
    APP_ID_FIELD, APP_ID_VALUE, USERS_URL, LIMIT_FIELD, PAGE_FIELD, POSTS_URL,
} from '../constants/dumMyApi';

import {PostListResponse, PostsListResponse} from '../types/dumMyApiResponses';

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

export const getPostsList = (
    page: number,
    limit: number,
   //callback: (resp: PostsListResponse) => void,
    //errorCallback?: (resp: any) => void,
) => fetch(POSTS_URL + '?' + [PAGE_FIELD] + '=' + page.toString() + '&' + [LIMIT_FIELD] + '=' + limit.toString(), {
    method: 'GET',
    headers: new Headers({
        [APP_ID_FIELD]: APP_ID_VALUE,
        //[PAGE_FIELD]: page.toString(),
        //[LIMIT_FIELD]: limit.toString(),
    }),
}).then((response) => response.json())
    //.then((response: PostsListResponse) => callback(response))
    //.catch(errorCallback);