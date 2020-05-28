"use strict";
//Задание1
let num1 = Number(prompt("Введите число от 0 до 999"));

function calc(num1) {
  if (Number.isInteger(num1) && num1 > 0 && num1 < 999) {
    return {
        units1: num1 % 10,
        hundreds1: Math.floor(num1 / 100),
        tens1: Math.floor(num1 / 10) % 10
  } 
  }
      else {
 alert("Вы ввели неверный тип числа");
          return{}
    }
}
   calc(num1);

//Задание 1.1 ES5

Product.prototype.make25PercentDiscount = function (discount) {
    this.price = this.price - (this.price / 100 * discount);
}

function Product(name, price) {
    this.name = name;
    this.price = price;
}

let products = [new Product("Sony", 1000),
                 new Product("Toshiba", 600),
                 new Product("Samsung", 800),
]

for (let product of products) {
    product.make25PercentDiscount(25);
}

//Задание 1.1 ES6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(discount) {
        this.price = this.price - (this.price / 100 * discount);
    }
}

let products = [new Product("Sony", 1000),
                 new Product("Toshiba", 600),
                 new Product("Samsung", 800),
]

for (let product of products) {
    product.make25PercentDiscount(25);
}

//Задание 1.2 ES5
function Post(author, text, date) {
    this.author = author;
    this.text = text; 
    this.date = date;    
}
Post.prototype.edit = function(text) {
    this.text = text;
};

let Post1 = new Post ("John", "Hello", "21.10.88");
console.log(Post1)

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;    
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
};

let AttachedPost1 = new AttachedPost("Rob", "Bye", "18.07.16");
AttachedPost1.makeTextHighlighted();
console.log(AttachedPost1)

//Задание 1.2 ES6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

    let Post1 = new Post("John", "Hello", "21.10.88");
    Post1.edit("World");

    class AttachedPost extends Post {
        constructor(author, text, date) {
            super(author, text, date);
            this.highlight = false;
        }
        makeTextHighlighted() {
            this.highlighted = true;
        }
}
    let AttachedPost1 = new AttachedPost("Rob", "Bye", "18.07.16");
    AttachedPost1.edit("World");
    AttachedPost1.makeTextHighlighted();
    console.log(AttachedPost1)

