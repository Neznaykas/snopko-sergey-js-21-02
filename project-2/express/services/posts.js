const format = require('string-format');
const logger = require('../logger/logger');
const { postService: messages } = require('../constants/logger');
const {getPostsList, getUsersList} = require("../dist/api/dumMyApi");

class postService {
    // Здесь происходит запросы и обработки данных, валидация запроса и и.д.

    list(request, resp) {
        logger.info(format(messages.GET_LIST_PARAMS, JSON.stringify(request.params)));

        if (Number.isNaN(Number(request.params.page)) || Number.isNaN(Number(request.params.limit))) {
            resp.status(490).send('Не верные входящие параметры page или limit');
            // после отправки ответа, код продолжает выполнятся... что есть плохо!
        }
        if (request.params.page < 0) {
            resp.status(490).send('Не верные входящие параметры. page меньше 0');
        }
        if (request.params.limit < 5 || request.params.limit > 50) {
            resp.status(490).send('Не верные входящие параметры. limit может быть в пределах от 5 до 50');
        }

        getPostsList(Number(request.params.page), Number(request.params.limit),(response) =>
        {
            logger.info(format(messages.GET_LIST_SUCCESS, JSON.stringify(request.params)));
            resp.status(200).send(response);
        });
    }
}

module.exports = new postService();
