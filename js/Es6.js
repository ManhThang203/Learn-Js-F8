//================Let , Const================
//1.Var / Let,const:Scope(phạm vi),Hosting(lưu lượng)
//2.Const / var, Let: Assignment(Phân công)
//Note: 
//+)điểm giống nhau của var, Let, Const
// điều dùng biến để gán giá trị như nhau 
//+) điềm khách nhau của var,Let, Const
// var phạm vi truy cập người scope của nó 
// còn let , const chỉ truy cập trong scope cảu nó thôi
// chỉ có var đc hosting (var a = 1);
// const: Assigment: thì không gán lại đc
// còn Var , Let thì gán lại đc

//Cách sử dụng
//code thuần: var
//Babel: Const, Let
// -Khi định nghĩa biến và không gán lại biến đó: Const
// -Khi cần gán lại giá trị cho biến : Let

//===============Template literals================

// const a ='Javascript';
// const b ='Php';
// // ${a} nội suy
// const c = `${a} /n ${b}`;
// console.log(c);

//===============Arrow function===================
//Declaration Function
// function logger(log){
//     console.log(log);
// }
// // logger('message...')
// //Expression Function
// const logger = function(log){
//     console.log(log);
// }
// logger('message...')
//Arrow function

// const logger = (log) =>{
//     console.log(log);
// }
// logger('Message...');
// const sum = (a,b) => ({a:a,b:b});
// console.log(sum(2,3));
// const courses = {
//     name:' php',
//     getName: function(){
//         //con nếu bỏ function thành => thì this không phải contxt
//         return this.name;// context
//     }
// };
// console.log(courses.getName());

// const courses = function(name,age){
//     this.name  = name;
//     this.age  = age;
// }
// const jscourses = new courses('thang',21);
// console.log(jscourses);

// //===========================Classes===========================

// class Item {
//    constructor(name,age){
//       this.name = name;
//       this.age = age;
//    }
// }
// const Name = new Item('thang',30);
// console.log(Name);

// //=============Default parameter values=============
// function logger(log, type = 'log'){
//     console[type](log);
// }

// console.log('message...');

//=============Enhanced object literals============
//1.Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3. Định nghĩa key cho object dưới dạng biến

// var name = 'php';
// var price = 'Giá';

// var Item = {
//     name,
//     price,
//     // getName() :function() {
        
//     // }
//     getName(){
//         return this.name;
//     }
// };
// const Items = {
//     [name]:'học lập trình',
//     [price]:'2000',
//     getName(){
//        return Items[name];
//     }
// }
// console.log(Item.getName());
// console.log(Items.getName());

//===================Destructuring, Rest=====================
//Note:
// Cách phân biết ba dấu chấm (...) khi nào là Rest và khi nào là Spread
// toán tử Rest khi ta dùng Destructuring,
// var array = ['Javascrip','PHP', 'Ruby'];
// // array là mảng và sẽ gán   các phần tử vào a,b,c
// var [a,b, ...rest] = array;
// console.log(a);
// console.log(rest);

// var courses = {
//     name: 'Thang',
//     age:20,
//     Item:'tggdj-dhhd',
//     children: {
//         name:'reactJS'
//     }
// }

// var {name:parentname,children:{name:children}} = courses;
// console.log(parentname);
// console.log(children);

// function logger(...params){
//     // số lượng tham số cuyền vào khi sử dụng toán tử rest làm tham số thì sẽ chuyển thành dạnh mảng
//     console.log(params);
// }
// console.log(logger(1,2,3,4,5,6));

//=======================Spread===============================

// var array1 = ['Javascrip', 'Ruby'];
// var array2 = ['Javascrip', 'C++'];
// var array3 = [...array1,...array2];
// console.log(array3);


// var array =['Javascrip', 'Ruby','C++'];
// // chuyen tham so 
// function logger(...rest){
//    for(var i =0;i<rest.length;i++){
//       console.log(rest[i]);
//    }
// }
// //chuyen doi so
// logger(...array);

//=======================tagged template literals=======================
// distructuring
// var highlight = function([first,...string], ...values){
//       // redue lap qua phan tu va xoa phan tu do luon 
//       // acc la gái trị chuyền vào 
//       // curr là gí trị hiện tại của mảng values
//       // shift là xóa đi phần tử đầu tiên
//       return values.reduce((acc,curr) => [...acc,`<span>${curr}</span>`,string.shift()],
//       [first]
//     );
// }
// const brand = 'F8';
// const courses = "Javascrip";

// var htmls =  highlight `Học lập trình ${courses} tại ${brand} !`;
// console.log(htmls);
// var html = htmls.join('');
//  var course = document.getElementById('courses');
//  course.innerHTML = html;

//========================Modules=========================
// Import / Export

import {TYPE_LOG} from './constants.js'
function logger(log, type = TYPE_LOG){
    console[type](log);
}   
// export default  chỉ sử dụng cho 1 module 
export default logger;

//==================Optional chaining (?.)================


const obj = {
    name:'Alice',
    cat:
    {
        name:'Dinah',
        cat2:{
            name:'Dinah2',
            cat3:{
              name:'Dinah3'
            }
        }
    }
};
// console.log(obj.cat.name);

if(
    // obj.cat && 
    // obj.cat.cat2 &&
    // obj.cat.cat2.cat3
    obj?.cat?.cat2?.cat3
){
    console.log(obj.cat.cat2.cat3.name);
}
// cách viết theo Enhanced object literals
const objs = {
    getName(value){
       console.log(value);
    }  
}
objs.getName?.(123);









