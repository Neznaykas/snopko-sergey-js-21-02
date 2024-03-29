"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.work3 = void 0;
function work3() {
    //3. Реализовать страницу с таблицей.
    // Таблица должна содержать инфрмацию, полученную по API https://swapi.dev/api/people/ (массив объектов в свойстве "results").
    // А именно росте, весе и поле персонажей (поля "name", "height", "mass" и "gender" соответственно).
    var swapi = {
        getMain: function (callback, errorCallback) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: // Получение основной информации
                        return [4 /*yield*/, fetch('https://swapi.dev/api/people/')
                                .then(function (response) {
                                console.log(response.status);
                                return response;
                            })
                                .then(function (response) {
                                // response.text() // Возвращает промисс с телом ответа в виде строки
                                return response.json(); // Возвращает промисс с телом ответа в виде JSON. Нельзя использовать один метод после другого
                            })
                                .then(callback) // Коллбек для результата
                                .catch(function (err) { return errorCallback("SWAPI getMain \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0441\u044F \u043E\u0448\u0438\u0431\u043A\u043E\u0439: " + err); })]; // Обработка ошибки в коллбеке для ошибки
                        case 1:
                            _a.sent(); // Обработка ошибки в коллбеке для ошибки
                            return [2 /*return*/];
                    }
                });
            });
        }
    };
    function printTable(obj) {
        var table = document.createElement('table');
        var head = table.createTHead();
        var hrow = head.insertRow(0);
        hrow.insertCell(0).innerText = 'Имя';
        hrow.insertCell(1).innerText = 'Рост';
        hrow.insertCell(2).innerText = 'Вес';
        hrow.insertCell(3).innerText = 'Пол';
        var body = table.createTBody();
        Object().values(obj.results).forEach(function (value) {
            var row = body.insertRow();
            row.insertCell(0).innerHTML = value.name;
            row.insertCell(1).innerHTML = value.height;
            row.insertCell(2).innerHTML = value.mass;
            row.insertCell(3).innerHTML = value.gender;
            document.body.append(table);
        });
    }
    swapi.getMain(printTable, console.error).then(function (r) { return console.log('end'); });
}
exports.work3 = work3;
