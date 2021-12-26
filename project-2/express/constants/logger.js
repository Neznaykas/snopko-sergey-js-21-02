module.exports = {
    // ----------------USER------------------------------------------------------------------------
    userService: {
        GET_LIST_PARAMS: '[userService.list] params={}',
        GET_LIST_SUCCESS: '[userService.list] status={} result={}',
        GET_LIST_ERROR: '[userService.list] success status={} response={}',

    },

    // --------POST---------------------------------------------------------------------------------

    postService: {
        GET_LIST_PARAMS: '[postService.list] params={}',
    },

    postRepository: {
        LIST_INVOKE: '[postRepository.list] invoke page={}, limit={}',
    },

    postApi: {
        GET: '[postApi.loadFile] url={}',
        GET_FAIL: '[postApi.loadFile] fail id={}, error={}',
        GET_SUCCESS: '[postApi.loadFile] success id={}, content={}',
    },
};
