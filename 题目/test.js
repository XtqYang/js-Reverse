// 构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 在 Person 的 prototype 上添加一个方法
Person.prototype.greet = function() {
    console.log(`${this.name} ------ ${this.age}`);
};

// 使用构造函数创建两个 Person 实例
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

// 调用这些实例上的 greet 方法
person1.greet(); // 输出：Hello, my name is Alice and I am 30 years old.
person2.greet(); // 输出：Hello, my name is Bob and I am 25 years old.

