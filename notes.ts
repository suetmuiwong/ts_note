import { number } from 'prop-types';

// typescript为了编写代码更规范，有利于维护 , 增加了类型校验.

// 1、数据类型
//    布尔类型 boolean
//    数字类型 number
//    字符串类型  string
//    数组类型 array
//    元组类型 tuple
//    枚举类型 enum
//   任意类型 any
//   null 和 undefined
//   void类型
//   never类型
// 2、函数
//     函数的定义
//     可选参数
//     默认参数
//     剩余参数
//     函数重载
//     箭头函数
//     es6
// 3、类
//     类的定义
//     继承
//     类里面的修饰符
//     静态属性
//     静态方法
//     抽象类
//     继承
//     多态
// 4、接口
//     接口的作用：面向对象编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用，接口定义了某一批类所需要遵守的规范，
//     接口不关心这批类的内部状态数据，也不关心这批类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类可以满足实际需要。
//     typescript中的接口类似于java ，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
//     属性类接口
//     函数类型接口
//     可索引接口
//     类类型接口
//     接口扩展
// 5、泛型
//    泛型，软件工程中，我们不仅要创建一致的定义良好的;
//    API, 同时也要考虑可复用性，组件不仅您呢个够支持当前的数据类型，同事也能支持未来的数据类型，这在创建大型系统时可以提供十分灵活的功能。
//    在像C#和java这样的语言中，可以使用泛型类创建可重用的组件，一个组件可以支持多种类型的数据，这样用户就可以以自己的数据类型来使用组件。
//    通俗理解：泛型就是解决类、接口、方法的复用性，以及对不特定数据类型的支持。
//     泛型的定义
//     泛型函数
//     泛型类
//     泛型接口
// 6、接口、泛型、泛型类的综合使用
// 7、模块
//   模块的概念
//   模块在其自身的作用域里执行，而不是在全局作用域里 ，需要用export；导出模块外部才能引用，引用的模块需要，import 导入才能使用。
//   内部模块：命名空间；外部模块：模块。
//   模块导出的几种方法：
//   export 导出声明
//   export 导出语句 import { xxx } from '/path' module.export的一个实例
//   export default 默认导出，一个模块只能用一个
//   module.export  import xxx from '/path'  xxx.test
//   import 导入模块
//   模块化封装;
// 8、命名空间
//     在代码量较大的情况下，为了避免各种变量命名冲突，可将相似功能的函数、类、接口放置道命名空间内。
//     同java的包、.net的命名空间一样，typescript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。命名空间内的对象通过export导出。
//     命名空间和模块的区别：
//         命名空间：内部模块，主要用于组织代码，避免命名冲突。
//         模块：ts的外部模块的简称，侧重于代码的复用，一个模块里可以能会有多个命名空间。
//         namespace A {
//         }
// 9、装饰器;
//    装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为。
//    通俗来讲装饰器就是一个方法，可以注入到类、方法、属性参数上类扩展类、方法、参数的功能。
//    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器。
//    装饰器的写法：普通装饰器（无法修饰）、装饰器工厂（可传参）
//    es7的标准特性之一;
//    类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于构造函数，可以用来监视，修改或替换类定义。传入一个参数。
//       类装饰器
//       属性装饰器
//       方法装饰器
//       方法参数装饰器
//       装饰器执行顺序
//        属性>方法>方法参数>类
//        如果有多个同样的装饰器，它会先执行后面的装饰器。



//布尔类型 boolean
status:boolean = true;

//数字类型 number
let num: number = 123;
let num: number = 12.3;

//字符串类型 string
let str: string = 'string';

//数组类型 array  (两种定义方式)
let arr: number[] = [1, 2, 3];
let arr: string[] = ['str1', 'str2', 'str3'];
let arr: any[] = ['str1', 123, 'str3'];

let arr: Array<number> = [1, 2, 3];
let arr: Array<string> = ['str1', 'str2', 'str3'];

//元组类型 tuple （属于数组的一种）
let arr: [string, number, boolean] = ['str', 1, true];

//枚举类型 enum (词达意， 例如：status  0 未支付 1已支付)
enum Status { unpaid = 0, paid = 1}

let status: Status = Status.Unpaid; //0    =>赋值的情况

enum Color {red, blue}

let color: Color = Color.red; //0   =>不赋值的情况输出下标值，其中有赋值的，在上一个基础上加一

//任意类型 any
let pay: any = 123;
pay = 'str';

//null 和 undefined
let num: number | null;  //=>定义没有赋值就是 null
let num: number | undefined;  //=>定义没有赋值就是 undefined
let num: number | null | undefined;  //=>可能是 number 类型 null undefined

//void类型 : typescript 中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值
function run(): void {
  console.log('run');
}

run();

//never 类型 :其他类型（包括 null 和 undefined）的子类型，代表从不会出现的值  =>这意味着声明 never 的变量只能被 never 类型所赋值
let a: never;
//a=123 //错误的写法
a(() => {
  throw  new Error('错误');
});


//函数的定义
function run(): string {
  return 'string';
}

let run = function(): number {
  return 123;
};

//定义方法传参
function getInfo(name: string, age: number): string {
  return `${name}:${age}`;
}

getInfo('张三', 24);

//可选参数:可选参数必须配置到参数的最后面
function getInfo(name: string, age?: number): string {
  return `${name}:${age}`;
}

getInfo('张三');
getInfo('张三', 24);

//默认参数
function getInfo(name: string, age: number = 20): string {
  return `${name}:${age}`;
}

getInfo('张三', 24);

//剩余参数 rest ...
function sum(...result: number[]): number {
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return sum;
}

sum(1, 2, 3, 4, 5, 6, 7);

function sum(a: number, b: number, ...result: number[]): number {
  let sum = a + b;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return sum;
}

sum(1, 2, 3, 4, 5, 6, 7, 9);

//函数重载
// java 中方法的重载，重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重置的情况
// typescript 中的重载，通过为同一个函数提供多个函数类型定义来实现多重功能的目的
// ts 与 java 的重载有区别
function getInfo(name: string): string;
function getInfo(name: string, age: number = 20): string;
function getInfo(name: any, age?: any): any {
  return `${name}:${age}`;
}

getInfo('张三');
getInfo('张三', 24);

//箭头函数 es6  this =>指向函数上下文

let sum = () => 123;


// es5 中的类

//1.最简单的类
function Person() {
  this.name = '张三';
  this.age = 20;
}

var person = new Person();
console.log(person.name);

//2.构造函数和原型链里面增加方法
function Person() {
  this.name = '张三';
  this.age = 20;
  this.run = function() {
    console.log(this.name + '在跑步');
  };
}

//原型链上的属性会被多个实例共享 构造函数不会
Person.prototype.sex = '男';
Person.prototype.work = function() {
  console.log(this.name + '在工作');
};
var person = new Person();
console.log(person.name, person.run());

//3.类里的静态方法
function Person() {
  this.name = '张三';
  this.age = 20;
  this.run = function() {  //实例方法，只能通过 new 调用
    console.log(this.name + '在跑步');
  };
}

Person.getInfo = function() {
  console.log('我是静态方法');
};
//原型链上的属性会被多个实例共享 构造函数不会
Person.prototype.sex = '男';
Person.prototype.work = function() {
  console.log(this.name + '在工作');
};
var person = new Person();
console.log(person.name, person.run());

Person.getInfo(); // 调用静态方法

//4.类的继承

//对象冒充实现继承 => (对象冒充可以继承构造函数里面的属性和方法，但是没法继承原型链上面的属性和方法)
function Person() {
  this.name = '张三';
  this.age = 20;
  this.run = function() {
    console.log(this.name + '在跑步');
  };
}

Person.prototype.sex = '男';
Person.prototype.work = function() {
  console.log(this.name + '在工作');
};

// Web类继承 Person类 原型链+对象冒充的组合继承模式
function Web() {
  Person.call(this); //对象冒充实现继承
}

var web = new Web();
console.log(web.name, web.run(), web.work());

//原型链实现继承 =>(可以继承构造函数里面的属性和方法，也可以继承原型链上的属性和方法,但实例化之类的时候没发给父类传参)
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.run = function() {
    console.log(this.name + '在跑步');
  };
}

Person.prototype.sex = '男';
Person.prototype.work = function() {
  console.log(this.name + '在工作');
};

// Web类继承 Person类 原型链+对象冒充的组合继承模式
function Web(name, age) {
}

Web.prototype = new Person(); //原型链实现继承

var web = new Web('王五', 24);
console.log(web.name, web.run(), web.work());

//原型链+构造函数的组合继承模式

//第一种写法
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.run = function() {
    console.log(this.name + '在跑步');
  };
}

Person.prototype.sex = '男';
Person.prototype.work = function() {
  console.log(this.name + '在工作');
};

// Web类继承 Person类 原型链+对象冒充的组合继承模式
function Web(name, age) {
  Person.call(this, name, age); //对象冒充实现继承 实例化之类可以给父类传参
}

Web.prototype = new Person(); //原型链实现继承 （两种不同的写法的区别）

var web = new Web('王五', 24);
console.log(web.name, web.run(), web.work());

//第二种写法
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.run = function() {
    console.log(this.name + '在跑步');
  };
}

Person.prototype.sex = '男';
Person.prototype.work = function() {
  console.log(this.name + '在工作');
};

// Web类继承 Person类 原型链+对象冒充的组合继承模式
function Web(name, age) {
  Person.call(this, name, age); //对象冒充实现继承 实例化之类可以给父类传参
}

Web.prototype = Person.prototype; //原型链实现继承 （两种不同的写法的区别）

var web = new Web('王五', 24);
console.log(web.name, web.run(), web.work());

//typescript 中的类

//1.类的定义
class Person {
  name: string;  //属性 前面省略了 public 关键词
  constructor(name: string) { //构造函数 实例化类的时候触发的方法
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setName(name): void {
    this.name = name;
  }
}

let person = new Person('张三');
person.getName();
person.setName('李四');

//2.继承 extends supper =>(父类的方法和子类的方法一致时,调用子类的方法)
class Person {
  name: string;  //属性 前面省略了 public 关键词
  constructor(name: string) { //构造函数 实例化类的时候触发的方法
    this.name = name;
  }

  run(): string {
    return `${this.name}`;
  }
}

class Web extends Person {
  constructor(name: string) {
    super(name); //初始化父类的构造函数
  }

  work(): void {
    console.log(`${this.name}`);
  }
}

let web = new Web('李四');

//3、类里面的修饰符  typescript 里面定义属性的时候提供了三种修饰符 属性如果不加修饰符默认为 public

//public    ：公有       在类里面、子类、类外面都可以访问
//protected ：保护类型   在类里面、子类里面都可以访问，在类外部没法访问
//private   ：私有       在类里面可以访问，子类、类外部都没法访问


//静态属性 静态方法
class Person {
  public name: string;
  static sex = '男'; //静态属性
  constructor(name: string) { //构造函数 实例化类的时候触发的方法
    this.name = name;
  }

  run(): string { //实例方法
    return `${this.name}`;
  }

  static print() { //静态方法  =>(静态方法里没法直接调用类里的属性，只能调用静态属性)
    console.log('print方法', this.sex);
  }
}

Person.print();

//4.抽象类 继承 多态

//多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
//多态属于继承
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void { //具体吃什么不知道，具体吃什么，继承它的子类去实现，每一个子类的表现不一样
    console.log('吃的方法');
  }
}

class Dog extends Animal {
  constructor(name: string) {
    this.name = name;
  }

  eat(): string {
    return this.name + '吃肉';
  }
}

class Cat extends Animal {
  constructor(name: string) {
    this.name = name;
  }

  eat(): string {
    return this.name + '吃老鼠';
  }
}

// typescript 中的抽象类，它是提供其他类继承的基类,不能直接被实例化。
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
// abstract 抽象方法只能放在抽象类里面

// 抽象类和抽象方法用来定义标准 ，标准:Animal 这个类要求它的子类必须包含eat 方法
abstract class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract eat(): any; //抽象方法不包含具体实现并且必须在派生类中实现
  run(): void {
    console.log('其他方法可以不实现');
  }
}

class Dog extends Animal {
  constructor(name: string) {
    this.name = name;
  }

  //抽象类的子类必须实现抽象类的抽象方法
  eat() {
    console.log(this.name + '吃肉');
  }
}

let dog = new Dog();
dog.eat();

//typescript 中的接口=>(接口：行为和动作的规范，对批量方法进行约束)

//1.属性接口 对批量方法传入参数进行约束
interface FullName {
  firstName: string;  //注意;结束
  secondName?: string;
}

function printName(name: FullName) {
  console.log(name.firstName, name.secondName);
}

//2.函数类型接口 : 对方法传入的参数以及返回值进行约束 批量约束
interface encrypt {
  (key: string, value: string): string
}

let md5: encrypt = function(key: string, value: string): string {
  return key + value;
};
console.log(md5('name', 'zhangsan'));

//3.可索引接口:数组、对象的约束（不常用）

interface UserArr {
  [index: number]: string
}

let arr: UserArr = ['aaa', 'bbb'];
console.log(arr[0]);

interface UserObj {
  [index: string]: string
}

let obj: UserObj = { name: '张三' };

//4.类类型接口:对类的约束 和抽象类有点相似
interface Animal {
  name: string;

  eat(str: string): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(food: string): void {
    console.log(this.name + '吃肉');
  }
}

let dog = new Dog('小黑');
dog.eat();

//5.接口扩展,接口可以继承接口

//简单
interface Animal {
  eat(): void;
}

interface Cat extends Animal {
  work(): void
}

class Web implements Cat {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(this.name, '喜欢馒头');
  }

  work() {
    console.log(this.name, '在工作');
  }
}

//复杂
interface Animal {
  eat(): void;
}

interface Dog extends Animal {
  work(): void
}

class Programmer {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  coding(code: string) {
    console.log(this.name + code);
  }

}

class Web extends Programmer implements Dog {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(this.name, '喜欢馒头');
  }

  work() {
    console.log(this.name, '在工作');
  }
}

//typescript 中的泛型
//1.泛型的定义 =>(可以支持不特定的数据类型，能满足传入的参数和返回的参数一致)
function getData<T>(value: T): T {
  return value;
}

getData<number>(123); //参数与要求的一致：number

//2.泛型函数

//3.泛型类
class MinClass<T> {
  public list: T[] = [];

  add(value: T): void {
    this.list.push(value);
  }

  min(): T {
    var minNum = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}

var m1 = new MinClass<number>(); //实例化类，并且制定了类的 T 代表的类型时 number
m1.add(2);
m1.add(23);
m1.add(9);
var m2 = new MinClass<string>(); //实例化类，并且制定了类的 T 代表的类型时 string
m2.add('a');
m2.add('t');
m2.add('p');

//4.泛型接口
//第一种写法
interface ConfigFn {
  <T>(value: T): T;
}

var getData: ConfigFn = function <T>(value: T): T {
  return value;
};
getData<sting>('张三');

//第二种写法

interface ConfigFn<T> {
  (value: T): T;
}

function getData<T>(value: T): T {
  return value;
}

var myGetData: ConfigFn<string> = getData;
myGetData('20');

//5.类当做参数的泛类型 把类作为参数来约束数据传入类型
class MysqlDb<T> {
  add(info: T): boolean {
    return true;
  }
}

class ArticleCate {
  title: string | undefined;
  desc: string | undefined;
  status: number | undefined;

  constructor(params: {
    title: string | undefined;
    desc: string | undefined;
    status?: number | undefined;
  }) {
    this.title = params.title;
    this.desc = params.desc;
    this.status = params.status;
  }
}

var a = new ArticleCate({
  title: '分类',
  desc: '111',
  status: 1,
});
var db = new MysqlDb<ArticleCate>();
db.add(a);

//6.typescript类型、接口、类 泛型综合使用 =>(要实现泛型接口，这个类也应该是一个泛型类)
interface DBI<T> {
  add(info: T): boolean;

  update(info: T, id: number): boolean;

  delete(id: number): boolean;

  get(id: number): any[];
}

class MysqlDb<T> implements DBI<T> {
  constructor() {

  }

  add(info: T): boolean {
    throw new Error('测试');
  }

  update(info: T, id: number): boolean {
    throw new Error('测试');
  }

  delete(id: number): boolean {
    throw new Error('测试');
  }

  get(id: number): any[] {
    throw new Error('测试');
  }
}

class User {
  username: string | undefined;
  password: string | undefined;
}

var u = new User();
u.username = '张三';
u.password = '123456';
var oMysql = new MysqlDb<User>(); //类作为参数来约束数据传入的类型
oMysql.add(u);

// 命名空间
namespace A {
  interface Animal {
    name: string;

    eat(): void;
  }

  export class Cat implements Animal {
    public name: string;

    constructor(name: string) {
      this.name = name;
    }

    eat() {
      console.log(this.name, '喜欢馒头');
    }

    work() {
      console.log(this.name, '在工作');
    }
  }
}
var c = new A.Cat('小花');

//装饰器
// 1.类装饰器
//类装饰器表达式在运行时当作函数被调用，类的构造函数作为其唯一的参数。
//如果类装饰器返回一个值，它会使用提供的构造函数类替换类的声明。

//普通：不可传参
function logClass(params: any) {
  //params 就是当前类
  console.log(params);
  params.prototype.apiUrl = '动态扩展的属性';
  params.prototype.run = function() {
    console.log('我是一个扩展的方法');
  };
}
@logClass
class HttpClient {
  constructor() {

  }

  getData() {

  }
}

var http: any = new HttpClient();

//装饰器工厂：可传参
function logClass(params: string) {
  return function(target:any) {
    console.log(params);
    console.log(target);
    target.prototype.name = params
  }

}
@logClass('hello')
class HttpClient {
  constructor() {
  }

  getData() {
  }
}

var http= new HttpClient();

//类装饰器重载
function logClass(target: any) {
  return class extends target {
    apiUrl:any ='我是修改后的数据'
    getData() {
      this.apiUrl = this.apiUrl +'====='
      console.log(this.apiUrl)
    }
  }

}
@logClass
class HttpClient {
  public  apiUrl :string|undefined;
  constructor() {
    this.apiUrl ='我是构造函数里的 apiUrl'
  }

  getData() {
    console.log(this.apiUrl)
  }
}

var http = new HttpClient();

//2.属性装饰器
//   属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
//     （1）对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
//     （2）成员的名字

function logClass(params: string) {
  return function(target:any) {
    console.log(params);
    console.log(target);
  }

}
function logProperty(params:any) {
  return function(target:any,attr:any) {
    console.log(target);
    console.log(attr);
    target[attr] = params;
  }
}
@logClass('xxx')
class HttpClient {
  @logProperty('http://www.test.com')
  public  url :string|undefined;
  constructor() {
  }

  getData() {
    console.log(this.url)
  }
}

var http = new HttpClient();

//3.方法装饰器
// 它会被应用道方法的属性描述符上，可以用来监视，修改或者替换方法定义。
// 方法装饰器会在运行时传入下列3个参数：
// （1）对于静态成员来说是类的构造函数，对应实例成员是类的原型对象。
// （2）成员的名字。
// （3）成员的属性描述符。
function get(params:any) {
  return function(target:any,methodName:any,desc:any) {
    console.log(target);
    console.log(methodName);
    console.log(desc)
    target.apiUrl ='xxxxx';
    target.run = function() {
      console.log('run')
    }
    //修改装饰器的方法 把装饰器方法里面传入的所有参数改为 string
    //保存当前方法
    var oMethod = desc.value;
    desc.value =function(...args:any[]) {
      args= args.map((value)=>{
        return Sting(value);
      })
      console.log(args)
      oMethod.apply(this,args)
    }
  }
}

class HttpClient {
  public  url :string|undefined;
  constructor() {
  }
  @get('http://www.test.com')
  getData(...args:any) {
    console.log(args)
    console.log('我是 getData 里的方法')
  }
}

var http = new HttpClient();
http.getData(123,'xxx')

//4.方法参数装饰器
// 参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列3个参数：
// （1）对于静态成员来说是类的构造函数，对应实例成员是类的原型对象。
// （2）参数的名字。
// （3）参数在函数参数列表中的索引。
function logParams(params:any) {
  return function(target:any,paramsName:any,paramsIndex:any) {
    console.log(params)
    console.log(target);
    console.log(paramsName);
    console.log(paramsIndex)
  }
}

class HttpClient {
  public  url :string|undefined;
  constructor() {
  }
  getData(@logParams('xxxx') uuid:any) {
    console.log(uuid)
  }
}

var http = new HttpClient();
http.getData(12345)

//5.装饰器执行顺序
// 属性>方法>方法参数>类
// 如果有多个同样的装饰器，它会先执行后面的装饰器。

