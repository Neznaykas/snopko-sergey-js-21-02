(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
document.getElementById('button').addEventListener('click', () => {
    (0, module_1.work3)();
});
},{"./module":2}],2:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.work3 = void 0;
function work3() {
    //3. Реализовать страницу с таблицей.
    // Таблица должна содержать инфрмацию, полученную по API https://swapi.dev/api/people/ (массив объектов в свойстве "results").
    // А именно росте, весе и поле персонажей (поля "name", "height", "mass" и "gender" соответственно).
    const swapi = {
        getMain(callback, errorCallback) {
            return __awaiter(this, void 0, void 0, function* () {
                yield fetch('https://swapi.dev/api/people/')
                    .then(response => {
                    console.log(response.status);
                    return response;
                })
                    .then(response => {
                    // response.text() // Возвращает промисс с телом ответа в виде строки
                    return response.json(); // Возвращает промисс с телом ответа в виде JSON. Нельзя использовать один метод после другого
                })
                    .then(callback) // Коллбек для результата
                    .catch(err => errorCallback(`SWAPI getMain завершился ошибкой: ${err}`)); // Обработка ошибки в коллбеке для ошибки
            });
        }
    };
    function printTable(obj) {
        const table = document.createElement('table');
        const head = table.createTHead();
        const hrow = head.insertRow(0);
        hrow.insertCell(0).innerText = 'Имя';
        hrow.insertCell(1).innerText = 'Рост';
        hrow.insertCell(2).innerText = 'Вес';
        hrow.insertCell(3).innerText = 'Пол';
        const body = table.createTBody();
        Object.keys(obj.results).map(function (key) {
            console.log(obj.results[key]);
            return obj.results[key];
        }).forEach((value) => {
            let row = body.insertRow();
            row.insertCell(0).innerHTML = value.name;
            row.insertCell(1).innerHTML = value.height;
            row.insertCell(2).innerHTML = value.mass;
            row.insertCell(3).innerHTML = value.gender;
            document.body.append(table);
        });
    }
    swapi.getMain(printTable, console.error).then(r => console.log('end'));
}
exports.work3 = work3;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyIsInNyYy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLHFDQUErQjtBQUUvQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFFN0QsSUFBQSxjQUFLLEdBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ0xILFNBQWdCLEtBQUs7SUFFakIscUNBQXFDO0lBQ3JDLDhIQUE4SDtJQUM5SCxvR0FBb0c7SUFFcEcsTUFBTSxLQUFLLEdBQUc7UUFDSCxPQUFPLENBQUMsUUFBYSxFQUFFLGFBQWtCOztnQkFDNUMsTUFBTSxLQUFLLENBQUMsK0JBQStCLENBQUM7cUJBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDNUIsT0FBTyxRQUFRLENBQUE7Z0JBQ25CLENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2IscUVBQXFFO29CQUNyRSxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLDhGQUE4RjtnQkFDMUgsQ0FBQyxDQUFDO3FCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyx5QkFBeUI7cUJBQ3hDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQ0FBcUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMseUNBQXlDO1lBQzFILENBQUM7U0FBQTtLQUNKLENBQUE7SUFFRCxTQUFTLFVBQVUsQ0FBQyxHQUFRO1FBRXhCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXJDLE1BQU0sSUFBSSxHQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFHO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFzRSxFQUFFLEVBQUU7WUFFbEYsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRTNCLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDekMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUMzQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3pDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFFM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMzRSxDQUFDO0FBcERELHNCQW9EQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7d29yazN9IGZyb20gXCIuL21vZHVsZVwiO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cclxue1xyXG4gICAgd29yazMoKTtcclxufSk7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiB3b3JrMygpXHJcbntcclxuICAgIC8vMy4g0KDQtdCw0LvQuNC30L7QstCw0YLRjCDRgdGC0YDQsNC90LjRhtGDINGBINGC0LDQsdC70LjRhtC10LkuXHJcbiAgICAvLyDQotCw0LHQu9C40YbQsCDQtNC+0LvQttC90LAg0YHQvtC00LXRgNC20LDRgtGMINC40L3RhNGA0LzQsNGG0LjRjiwg0L/QvtC70YPRh9C10L3QvdGD0Y4g0L/QviBBUEkgaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3Blb3BsZS8gKNC80LDRgdGB0LjQsiDQvtCx0YrQtdC60YLQvtCyINCyINGB0LLQvtC50YHRgtCy0LUgXCJyZXN1bHRzXCIpLlxyXG4gICAgLy8g0JAg0LjQvNC10L3QvdC+INGA0L7RgdGC0LUsINCy0LXRgdC1INC4INC/0L7Qu9C1INC/0LXRgNGB0L7QvdCw0LbQtdC5ICjQv9C+0LvRjyBcIm5hbWVcIiwgXCJoZWlnaHRcIiwgXCJtYXNzXCIg0LggXCJnZW5kZXJcIiDRgdC+0L7RgtCy0LXRgtGB0YLQstC10L3QvdC+KS5cclxuXHJcbiAgICBjb25zdCBzd2FwaSA9IHsgLy8g0J7QsdGK0LXQutGCINC00LvRjyDQsdGA0LDRidC10L3QuNGPINC6IEFQSVxyXG4gICAgICAgICBhc3luYyBnZXRNYWluKGNhbGxiYWNrOiBhbnksIGVycm9yQ2FsbGJhY2s6IGFueSkgeyAvLyDQn9C+0LvRg9GH0LXQvdC40LUg0L7RgdC90L7QstC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuFxyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zd2FwaS5kZXYvYXBpL3Blb3BsZS8nKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzcG9uc2UudGV4dCgpIC8vINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0YDQvtC80LjRgdGBINGBINGC0LXQu9C+0Lwg0L7RgtCy0LXRgtCwINCyINCy0LjQtNC1INGB0YLRgNC+0LrQuFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0YDQvtC80LjRgdGBINGBINGC0LXQu9C+0Lwg0L7RgtCy0LXRgtCwINCyINCy0LjQtNC1IEpTT04uINCd0LXQu9GM0LfRjyDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0L7QtNC40L0g0LzQtdGC0L7QtCDQv9C+0YHQu9C1INC00YDRg9Cz0L7Qs9C+XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oY2FsbGJhY2spIC8vINCa0L7Qu9C70LHQtdC6INC00LvRjyDRgNC10LfRg9C70YzRgtCw0YLQsFxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBlcnJvckNhbGxiYWNrKGBTV0FQSSBnZXRNYWluINC30LDQstC10YDRiNC40LvRgdGPINC+0YjQuNCx0LrQvtC5OiAke2Vycn1gKSkgLy8g0J7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0LrQuCDQsiDQutC+0LvQu9Cx0LXQutC1INC00LvRjyDQvtGI0LjQsdC60LhcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJpbnRUYWJsZShvYmo6IGFueSlcclxuICAgIHtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZCA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XHJcbiAgICAgICAgY29uc3QgaHJvdyA9IGhlYWQuaW5zZXJ0Um93KDApO1xyXG5cclxuICAgICAgICBocm93Lmluc2VydENlbGwoMCkuaW5uZXJUZXh0ID0gJ9CY0LzRjyc7XHJcbiAgICAgICAgaHJvdy5pbnNlcnRDZWxsKDEpLmlubmVyVGV4dCA9ICfQoNC+0YHRgic7XHJcbiAgICAgICAgaHJvdy5pbnNlcnRDZWxsKDIpLmlubmVyVGV4dCA9ICfQktC10YEnO1xyXG4gICAgICAgIGhyb3cuaW5zZXJ0Q2VsbCgzKS5pbm5lclRleHQgPSAn0J/QvtC7JztcclxuXHJcbiAgICAgICAgY29uc3QgYm9keT0gdGFibGUuY3JlYXRlVEJvZHkoKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMob2JqLnJlc3VsdHMpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob2JqLnJlc3VsdHNba2V5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmoucmVzdWx0c1trZXldO1xyXG4gICAgICAgIH0pLmZvckVhY2goKHZhbHVlOiB7IG5hbWU6IHN0cmluZzsgaGVpZ2h0OiBzdHJpbmc7IG1hc3M6IHN0cmluZzsgZ2VuZGVyOiBzdHJpbmc7IH0pID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gYm9keS5pbnNlcnRSb3coKTtcclxuXHJcbiAgICAgICAgICAgIHJvdy5pbnNlcnRDZWxsKDApLmlubmVySFRNTCA9IHZhbHVlLm5hbWU7XHJcbiAgICAgICAgICAgIHJvdy5pbnNlcnRDZWxsKDEpLmlubmVySFRNTCA9IHZhbHVlLmhlaWdodDtcclxuICAgICAgICAgICAgcm93Lmluc2VydENlbGwoMikuaW5uZXJIVE1MID0gdmFsdWUubWFzcztcclxuICAgICAgICAgICAgcm93Lmluc2VydENlbGwoMykuaW5uZXJIVE1MID0gdmFsdWUuZ2VuZGVyO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGFibGUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dhcGkuZ2V0TWFpbihwcmludFRhYmxlLCBjb25zb2xlLmVycm9yKS50aGVuKHIgPT4gY29uc29sZS5sb2coJ2VuZCcpKTtcclxufSJdfQ==
