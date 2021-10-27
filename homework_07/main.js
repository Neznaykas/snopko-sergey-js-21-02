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
    },
    rename (new_name)
    {
        const regex = /^([А-ЯЁа-яё]|\s|-)+$/g;
        if (regex.test(new_name)){
            this.name = new_name;
        }
        else{
            console.log('Кличка должна содержать только кирилические символы, пробелы или символ "-"');
        }
    }
}

Object.defineProperties(animal, {
    eat: { configurable: false, enumerable: false, writable: false},
    say: { configurable: false, enumerable: false, writable: true},
    rename: { configurable: false, enumerable: false, writable: false}
});

console.log(animal);
animal.eat();
animal.say();
animal.rename('всё ещё Джюля');
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
function F_animal(name = 'Джюля') {

    this.name = name;

    this.eat = function () {
        console.log(this.name + ' ест');
    };

    this.say = function () {
        console.log('неизвестное животное молчит');
    }

    this.rename = function (new_name)
    {
        const regex = /^([А-ЯЁа-яё]|\s|-)+$/g;
        if (regex.test(new_name)){
            this.name = new_name;
        }
        else{
            console.log('Кличка должна содержать только кирилические символы, пробелы или символ "-"');
        }
    }

    Object.defineProperties(this, {
        eat: { configurable: false, enumerable: false, writable: false},
        say: { configurable: false, enumerable: false, writable: true},
        rename: { configurable: false, enumerable: false, writable: false}
    });
}

function F_cat(name) {
    this.name = name;
    F_animal.call(this, name);

    this.say = function () {
        console.log('Кот молчит');
    }

    Object.defineProperty(this, "say", {
        configurable: false,
        enumerable: false,
        writable: true
    });
}

function F_dog(name)
{
    this.name = name;
    F_animal.call(this, name);

    this.say = function () {
        console.log('Собака молчит');
    }

    Object.defineProperty(this, "say", {
        configurable: false,
        enumerable: false,
        writable: true
    });
}

function F_popuga(name)
{
    this.name = name;
    F_animal.call(this, name);

    this.say = function () {
        console.log('Попугай молчит');
    }

    Object.defineProperty(this, "say", {
        configurable: false,
        enumerable: false,
        writable: true
    });
}

const f_a = new F_animal();
const f_cat = new F_cat('Функциональная Джюля');
const f_dog = new F_dog('Функциональный Барсик');

f_a.eat();
f_a.say();

f_cat.say();
f_cat.eat();

f_cat.rename('Тузя');
f_cat.eat();

f_dog.say();
f_dog.eat();

//Классы
class c_animal
{
    #name
    constructor(name = 'Джюля') {
        this.#name = name;
    }

    get name () {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    eat () {
        console.log(`${this.#name} ест`);
    }

    #say () {
        console.log('неизвестное животное молчит');
    }

    get say () {
        this.#say();
    }

    rename(new_name)
    {
        const regex = /^([А-ЯЁа-яё]|\s|-)+$/g;
        if (regex.test(new_name)){
            this.name = new_name;
        }
        else{
            console.log('Кличка должна содержать только кирилические символы, пробелы или символ "-"');
        }
    }

}

class c_cat extends c_animal {

    #say () {
        console.log('кот молчит как партизан');
    };

    get say() {
        this.#say();
    };

    #hunt (){
        console.log(`${this.name} охотится`);
    };
    get hunt(){
        this.#hunt();
    }
}

class c_dog extends c_animal {
    #say () {
        console.log('собака тоже молчит как партизан');
    };

    get say(){
        this.#say();
    };
    #hunt (){
        console.log(`${this.name} охотится`);
    };
    get hunt(){
        this.#hunt();
    }
}

class c_popuga extends c_animal {

    #say () {
        console.log('Попугай молчит повторяя вас');
    };
    get say(){
        this.#say();
    };
    #hunt (){
        console.log(`${this.name} охотится`);
    };
    get hunt(){
        this.#hunt();
    }
}


const c_a = new c_animal();

console.log(c_a.name);
c_a.eat();
c_a.rename('Классовая Джюля');
c_a.eat();

const class_cat = new c_cat();
class_cat.say;
class_cat.hunt;

const cpopuga = new c_popuga();
cpopuga.rename('Кеша хороший')
cpopuga.hunt;



