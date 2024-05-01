// ====Object constructor====

//ham tao theo expression 
//  var User =  function(firtName, lastname, avatar){
    //thuoc tính
//    this.firtName = firtName;
//    this.lastname = lastname;
//    this.avatar = avatar;
//    // tao phuong thuc this.getName
//    this.getName = function (){
//     return `${this.firtName} ${this.lastname}`;
//    }
// }
// //doi tuong 
// var author = new User('Dong', 'thang','hinh');
// //doi tuong
// var Users = new User('Dong', 'Hai','hinh01');
// // them thuoc tinh vao ham tao 
// author.title = 'Thang dep trai';
// Users.comment = 'Thang dep xau trai';
// // in ra
// console.log(author);
// console.log(Users);

//===== Object Prototype =======
// tao expression funcsion
// var User = function(firtName,lastName,avatar){
//     this.firtName = firtName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }
// //=====them puong thuc và thuoc tinh bang prototype
// // them thuoc tinh 
// User.prototype.Name='F8';
// // them phuong thuc
// User.prototype.getName = function(){
//     return `${this.firtName} ${this.lastName}`;
// }
// // doi tuong 
// var author = new User('dong','thang','hay');
// var Users = new User('dong','thang','ha1');
// // in ra man hinh
// console.log(author.Name);
// console.log(Users.getName());

//============ Date ==========
// doi tuong
// var date  = new Date();
// // phuong thuc
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDay();
// console.log(`${day}/${month}/${year}`);

//========== Math ==========
// var random = Math.floor(Math.random() * 5);

// // tao mang
// var coin = [
//     'coin-1',
//     'coin-2',
//     'coin-3',
//     'coin-4',
//     'coin-5',
//     'coin-6',
// ];
// console.log(coin[random]);

//========== For In ==========
// var myInfo = [
//     thang='Thang',
//     lơp='Lop',
// ];
// for(var key in myInfo){
//     console.log( key);
// }
// var myInfo = {
//      name: 'thang',
//      lop: 'a2',
// };
// // cach 1
// // console.log(Object.keys(myInfo));
// // for(var value of Object.keys(myInfo)){
// //     console.log(myInfo[value]);
// // }
// // cach 2
// console.log(Object.values(myInfo));
// for(var value of Object.values(myInfo)){
//     console.log(value);
// }

// ==== Đệ Quy ======
// 1. xác định điểm dừng
// 2. Logic handle => Tạo ra điểm dừng
// function kk(num){
//     if(num > 0){
//         console.log(num);
//         return kk(num -1);
//     }
//     return num;
// }

// kk(3);
// bai toan 3*2*1 = 
// function kk(number){
//     var output = 1;
//     for(var i = number; i > 0 ;i--){
//         output = output *i;
//     }
//     return output;
// }
// console.log(kk(3));

//=========== Array methods: =========
/*
            ForEach(): duyệt qua từng phần tử của mảng
            Every(): kiểm tra tất cả các phần từ của mảng phải thỏa mãn cùng 1 điều kiện gì đó
            Some(): kiểm tra tất cả các phần từ của mảng phải thỏa mãn 1 điều kiện gì đó
            Find(): tìm kiếm 1  phần tử
            Filter(): tìm kiếm và trà về tất cả các phần từ 
            Map(): lặp qua các phần tử trà về từng phần từ thông qua function
            Reduce(): 
*/
// tạo 1 Array
var courses = [
     {
          id: 1,
          name:'Thang',
          coin: 100
     },
     {
        id: 2,
        name:'Hai',
        coin: 200
     },
     {
      id: 2,
      name:'Hai',
      coin: 300
     },
     {
        id: 3,
        name:'Binh',
        coin: 400
      },
      {
        id: 4,
        name:'Vinh',
        coin: 500
       },
];
// FoEach
// courses.ForEach(function(course,index) {
//     console.log(index,course);
// });//callback 
//nó sẽ lặp qua từng phần tử và cái hàm ta chuyền vào function sẽ đc gọi lại và trả về cho chúng ta từng phần tử
// var course = courses.filter(function(course,index){
//       console.log(index);
//       return course.name === 'Hai';
// });
// console.log(course);
// phuong thuc map() sẽ trả về cho ta 1 cho ta 1 mảng mới
// map() trong  () của map phải có đối số chuyền vào và đối số là 1 function
// function courseHandler(course) {
//     console.log(course);
// };
// var newcourses = courses.map(courseHandler);
// index là key cua các phần tử
// var newcourses = courses.map(function(course, index){
//    //   return {
//    //       id : course.id,
//    //       name: `dong: ${course.name}`,
//    //       coin: course.coin,
//    //       coinText: `Gia: ${course.coin}`,
//    //       index: index
//    //   }
//    //return course.name;
//    return `<h2>${course.name}</h2>`;
// });
// console.log(newcourses.join(''));
// bien luu trữ 
// var totalCoin = 0;
// //lặp qua ca phan tu
// for(var course of courses){
//    // thuc hien luu trữ
//    totalCoin += course.coin;
// }
// console.log(totalCoin);

/** ========== Reduce ========== */
// accumulator là biên luu tru
// var i = 0;
// function coinHandler(accumulator,currentValue,currentIndex, originArray) {
//   i++;
//   var total = accumulator + currentValue.coin;
//   console.table({
//       'Luot chay ': i,
//       'Biến tích trữ ': accumulator,
//       'Giá Khóa học': currentValue.coin,
//       'Tích trữ được': total
//   });
//   return total;
// }
// // o là gia tri khỏi tao và se gán vào biến lưu trữ 
// var totalCoin = courses.reduce(coinHandler,0);
// console.log(totalCoin);
// var totalCoin = courses.reduce(function(accumulator,currentValue){
//         return accumulator + currentValue.coin;
// },0)
// console.log(totalCoin);
// function getTotalGold(Array){
//    var tong = Array.reduce(function(accumulator,currentValue){
//          return accumulator + currentValue.coin;
//    },0)
//    return tong;
// }
// console.log(getTotalGold(courses));
// var totalCoin = courses.reduce(function(total, course){
//      return total + course.coin;
// },0);// initial value
// console.log(totalCoin);
// Bài Tập
// fat - "Làm phẳng" mảng từ Depth array - "mảng sâu"
// var depthArray = [1,2,[3,4],5,6,[7,8,9]];
// var flatArray = depthArray.reduce(function(flatoutput,depItem){
//    // concat noi mang
//       return flatoutput.concat(depItem);
// }, []);
// console.log(flatArray);

// bai 2 Lấy ra các khóa học và đưa vào mảng mới
// var toppics = [
//    {
//       topic: "Front-end",
//       courses: [
//           {
//             id:1,
//             title: "HTML, CSS"
//           },
//           {
//             id:2,
//             title: "Javascript"
//           }
//       ]
//    },
//    {
//       topic: "Back-end",
//       courses: [
//          {
//             id: 1,
//             title: "PHP"
//          },
//          {
//             id: 2,
//             title: "NodeJS"
//          },
//       ]
//    }
// ];
// var listcourse = toppics.reduce(function(course, topic){
//     return course.concat(topic.courses);
// },[]);
// // console.log(listcourse);
// var list = listcourse.map(function(courses,index){
//    return `<h2>${courses.title}</h2>`;
// });
// console.log(list.join(''));
// tao reduece
// function nhân 2 đối số 
// prototype là thêm thuộc tính và phuong thức
// Array.prototype.reduce2 = function(callback,result){
//    //let i = 0;
//    // arguments xác định số lượng tham số được chyền vào 
//    if(arguments.length < 2){
//       i=1;
//       var result = this[0];
//    }
//      // this. length là trỏ về number (number.length)
//       for(; i < this.length; i++){
//          // callback = function((total, number)=>{return total += number;}
//          // result là biến tích chữ = total 
//          // this[i] là currentValue = number là phần tử hiện tại lặp qua
//          // this = number ([1,2,3,4,5])
//            result = callback(result,this[i],i, this)
//       }
//       return result;
// }
// const number = [1,2,3,4,5];
// const result = number.reduce2((total, number,index,array)=>{
//    console.log(total, number,index,array);
//    return total += number;
// },);// initinal 
// console.log(result);

// String/Array includes() method
// var course = ['javascrip','php','C#'];
// console.log(course.includes('javascrip',-3));
