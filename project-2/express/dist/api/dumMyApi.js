"use strict";
const fetch = require('node-fetch');

Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsList = exports.getUsersList = void 0;
const dumMyApi_1 = require("../constants/dumMyApi");
const getUsersList = (page, limit, callback, errorCallback) => fetch(dumMyApi_1.USERS_URL + '?' + [dumMyApi_1.PAGE_FIELD] + '=' + page.toString() + '&' + [dumMyApi_1.LIMIT_FIELD] + '=' + limit.toString(), {
    method: 'GET',
    headers: {
        [dumMyApi_1.APP_ID_FIELD]: dumMyApi_1.APP_ID_VALUE,
        //[PAGE_FIELD]: page.toString(),
        //[LIMIT_FIELD]: limit.toString(),
    },
}).then((response) => response.json())
    .then((response) => callback(response))
    .catch(errorCallback);
exports.getUsersList = getUsersList;
const getPostsList = (page, limit, callback, errorCallback) => fetch(dumMyApi_1.POSTS_URL + '?' + [dumMyApi_1.PAGE_FIELD] + '=' + page.toString() + '&' + [dumMyApi_1.LIMIT_FIELD] + '=' + limit.toString(), {
    method: 'GET',
    headers: {
        [dumMyApi_1.APP_ID_FIELD]: dumMyApi_1.APP_ID_VALUE,
        //[PAGE_FIELD]: page.toString(),
        //[LIMIT_FIELD]: limit.toString(),
    },
}).then((response) => response.json())
    .then((response) => callback(response))
    .catch(errorCallback);
exports.getPostsList = getPostsList;
//# sourceMappingURL=dumMyApi.js.map