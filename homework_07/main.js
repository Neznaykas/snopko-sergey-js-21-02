//  Реализовать объект animal, с полем клички, методом eat, выводящим сообщение "/*кличка*/ ест" и методом say, выводящим фразу, "неизвестное животное молчит
//путём прототипного наследования создать объекты кота, собаки и попугая. Переопределить в них метод say, в зависимости от типа животного.

//Для кота добавить новый метод hunt, выводящий сообщение "/*кличка*/ охотится". Все перечисленные методы и свойства должны быть защищены от удаления и перезаписи.
// Методы должны быть неперечисляемыми. Разработать метод rename, для смены клички животного.
//
// Новая кличка должна содержать только кирилические символы, пробелы или символ "-". В
//
// выполнить то же самое использую функции конструкторы.
// Выполнить то же самое, используя классы.

//Обьекты
const animal = {
    name: 'Джюля',
    eat () {
        console.log(this.name + ' ест');
    },
    say () {
        console.log('неизвестное животное молчит');
    }
}

console.log(animal);
animal.eat();
animal.say();

let cat = {
    __proto__: animal,
    hunt() {
        console.log(this.name + ' охотится')
    },
    say() {
        console.log('Кот молчит');
    }
}

let dog = {
    __proto__: animal,
    hunt() {
        console.log(this.name + ' охотится')
    },
    say() {
        console.log('Собака молчит');
    }
}

let popuga = {
    __proto__: animal,
    hunt() {
        console.log(this.name + ' охотится')
    },
    say() {
        console.log('Попуга молчит');
    }
}

cat.say();
cat.hunt();

//Функции
function F_animal() {

    this.name = 'Джюля';

    this.eat = function () {
        console.log(this.name + ' ест');
    };

    this.say = function () {
        console.log('неизвестное животное молчит');
    }

    Object.defineProperty(this, "eat", {
        configurable: false,
        enumerable: false,
        writable: false
    });
    Object.defineProperty(this, "say", {
        configurable: false,
        enumerable: false,
        writable: true
    });
}

function F_cat() {
    this.name = 'Барсик'

    F_animal.call(this);

}

const a = new F_animal();
const b = new F_cat();

console.log(a);
a.eat();
a.say();

b.say();


//Классы





