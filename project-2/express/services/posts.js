const format = require('string-format');
const logger = require('../logger/logger');
const { postService: messages } = require('../constants/logger');
const {getPostsList} = require("../dist/api/dumMyApi");

class postService {
    // Здесь происходит запросы и обработки данных, валидация запроса и и.д.

    list(req, res) {
        logger.info(format(messages.GET_LIST_PARAMS, JSON.stringify(req.params)));

        if (Number.isNaN(Number(req.params.page)) || Number.isNaN(Number(req.params.limit))) {
            res.status(490).send('Не верные входящие параметры page или limit');
            // после отправки ответа, код продолжает выполнятся... что есть плохо!
        }
        if (req.params.page < 0) {
            res.status(490).send('Не верные входящие параметры. page меньше 0');
        }
        if (req.params.limit < 5 || req.params.limit > 50) {
            res.status(490).send('Не верные входящие параметры. limit может быть в пределах от 5 до 50');
        }

        return getPostsList(res.params.page, res.params.limit,(response) =>
        {
            logger.info(format(messages.GET_LIST_SUCCESS, JSON.stringify(req.params)));
            res.status(200).send(response);
        });
    }
}

module.exports = new postService();
