// Callback?

// Là hàm (function) được truyền qua đối số
// Khi gọi hàm khác

// 1 . Là hàm
// 2. Được truyền qua đối số 
// 3. được gọi lại (trong hàm nhận đối số)

// function myfunction(param){
//     if(typeof param === 'function'){
//         param('Học Lập trình');
//     }
// }
// function mycallback(value){

//     console.log('value: ',value);
// }
// myfunction(mycallback);
Array.prototype.map2 = function(Callback){
    var output = [];
    var arrayLength = this.length;
    // this chính là  courses   
    // console.log(this);
    var arrayLength = this.length;
    for(var i = 0;i<arrayLength;++i){
        // this[i] là chi muc cua mang se lay ra item
        //i chi muc và nhận đc index
        // khi gọi hàm thì chuyền tương ứng với các đối sô tương ứng với tham số 
        var result =  Callback(this[i],i);
        // console.log('result', result);
        output.push(result);
    }
    return output;
}
var courses  = [
    'Javascrip',
    'PHp',
    'Ruby'
];
// định nghia ham se nhần về 2 tham số và thuộc tính 
var htmls = courses.map2(function(course) {
//    console.log(index,course);
      return `<h2>${course}</2>`
});
//console.log(htmls.join(''));
// function myFunction(courses){
//     console.log(courses);
// }
// courses.map(myFunction);
// var htmls = courses.map2(function(courses){
//     return `<h2>${courses}<\h2>`;
// })
// console.log(htmls.join(''));
var arr = [1,2,3,4,5,1,2,3];
//console.log(arr)

//arr.forEach((e)=>{console.log(e)})

Array.prototype.forEach2 = function(cb){
  var len = this.length;
  for (var i = 0; i < len; i++){
  	cb(this[i],i);
  }
}

//arr.forEach2((e)=>{console.log(e)})

Array.prototype.reduce2 = function(cb,init){
	var len = this.length;
  var i = 0
  if (arguments.length < 2){
  	i = 1;
     init = this[0]
  }
  for (; i < len; i++){
  
  	init = cb(init,this[i],i,this);
  }
	return init
}

function sum(a,b){return a + b};

//console.log(arr.reduce(sum) === arr.reduce2(sum))
//console.log(arr.reduce(sum,0) === arr.reduce2(sum,0))



Array.prototype.find2 = function(cb){
	var len = this.length;
  var i = 0
  for (; i < len; i++){
  	if(cb(this[i],i)){
    	return this[i]
    }
  }
	return undefined
}

//console.log(arr.find2((a)=>{return a === 2}))



Array.prototype.filter2 = function(cb){
	var len = this.length;
  var i = 0
  var r = []
  for (; i < len; i++){
  	if(cb(this[i],i)){
    	r.push(this[i])
    }
  }
	return r
}

//console.log(arr.filter2((a)=>{return a === 22}))

var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 0,
    },
    {
        id: 2,
        name: 'Ruby',
        coin: 0,
    },
    {
        id: 3,
        name: 'PHP',
        coin: 0,
    },
    {
        id: 4,
        name: 'C++',
        coin: 0,
    },
    {
        id: 5,
        name: 'JavaScript',
        coin: 0,
    },
    {
        id: 6,
        name: 'JavaScript',
        coin: 0,
    },
];

/////////////////////////////////////////////////////////// ForEach
Array.prototype.forEach2 = function (callback) {
    if (typeof callback === 'function') {
        var arrLength = this.length, arr = [];
        for (var i = 0; i < arrLength; i++) {
              // this[i] là chi muc cua mang se lay ra item
             //i chi muc và nhận đc index
            var result = callback(this[i], i);
        };
        return result;
    } else {
        console.error(`${callback} is not a function!!!`);
    }
};
var forEachhh = courses.forEach2((course, index) => {
     //console.log(course);
});

//////////////////////////////////////////////////////////// every
Array.prototype.every2 = function (callback) {
    if (typeof callback === 'function') {
        var arrLength = this.length;
        for (var i = 0; i < arrLength; i++) {
            if(!callback(this[i], i)){
                return false;
            }
        };
        return true;
    } else {
        console.error(`${callback} is not a function!!!`);
    }
};
var isFree = courses.every2((course, index) => {
    return course.coin === 0;
});
//console.log(isFree);

//////////////////////////////////////////////////////////// Some
Array.prototype.some2 = function (callback) {
    if (typeof callback === 'function') {
        var arrLength = this.length;
        for (var i = 0; i < arrLength; i++) {
            if(callback(this[i], i)){
                return true;
            }
        };
        return false;
    } else {
        console.error(`${callback} is not a function!!!`);
    }
};
var isFree = courses.some2((course, index) => {
    return course.coin === 0;
});
//console.log(isFree);

///////////////////////////////////////////////////////////////Find
Array.prototype.find2 = function(callback) {
    if(typeof callback === 'function'){
        var arrLength = this.length;
        for (var i = 0; i < arrLength; i++){
           // return (callback(this[i], i)) ? this[i] : i;
           if(callback(this[i],i) ){
                return this[i];
           }
        }
    } else {
        console.error(`${callback} is not a function!!!`);
    }
};
var findCourse = courses.find2((course, index) => {
    return course.name === 'JavaScript';
});
console.log(findCourse);

////////////////////////////////////////////////////////////////Filter
Array.prototype.filter2 = function(callback) {
    if(typeof callback === 'function'){
        var arrLength = this.length;
        var arr = [];
        for (var i = 0; i < arrLength; i++){
            var result = callback(this[i], i);
            if(result){
                arr.push(this[i]);
            }
        }
        return arr;
    } else {
        console.error(`${callback} is not a function!!!`);
    }
};
var filterCourse = courses.filter2((course, index) => {
    return course.name === 'JavaScript';
});
//console.log(filterCourse);

///////////////////////////////////////////////////////// Map
Array.prototype.map2 = function(callback){
    if(typeof callback === 'function'){
        var arrLength = this.length, arr = [];
        for (var i = 0; i < arrLength; i++) {
            var result = callback(this[i], i);
            arr.push(result);
        }        
        return arr;
    }else {
        console.error(`${callback} is not a function!!!`);
    }
};
var newCourse = courses.map2((course, index) => {
    return course;
});
//console.log(newCourse);

//////////////////////////////////////////////////////////////////// reduce
Array.prototype.reduce2 = function(callback, result) {
    if(typeof callback === 'function'){
        var i = 0;
        if(arguments.length < 2){
            i = 1;
            result = this[0];
        }
        var arrLength = this.length;
        for ( ; i < arrLength; i++){
            result = callback(result, this[i], i, this);
        }
        return result;
    }else {
        console.error(`${callback} is not a function!!!`);
    }
}
var totalCoin = courses.reduce2((accumulator, currentValue, currentIndex, originArray) => {
    return accumulator + currentValue.coin;
}, 0);
 console.log(totalCoin);

//======================= ForEach
// Arrray gia trij khoiw tao 
// ôn lại prototype
// for in duyet qua ca phuong thuc và thuộc tính 
// hasOwnProperty 
Array.prototype.forEach3 = function(cb){
    // for in nay sẽ duyện luôn có phần từ trong mảng và cả các phần từ ilemen làm trong prototype
    // array là this 
    for(var index in this){
        //this.hasOwnProperty(index);
        // this la courses 
        // hasOwnProperty là 1 phuong thuc là se kiêm tra thuộc tính index và trà và kiểu boolean 
        if( this.hasOwnProperty(index)){
            // this[index] là phan tư trong mang
            // index là key
            // this là array ('Javascrip','PHP','Ruby')
            cb(this[index], index, this);
        }
    }
}
// la 1 array 
var courses = [
    'Javascrip',
    'PHP',
    'Ruby'
];
//console.log(courses);
courses.forEach3(function(course,index,array){
    console.log(course,index,array);
})

// ==================================filter
//  tìm kiếm và trà về tất cả các phần từ 
Array.prototype.filter2 = function(cb){
    var output = [];
    for(var index in this){
        // kiểm tra các phuong thuc và thuộc tính gần nhất 
        if( this.hasOwnProperty(index)){
            // this[index] là phan tư trong mang
            // index là key
            // this là array ('Javascrip','PHP','Ruby')
            var result = cb(this[index], index, this);
            if(result){
                output.push(this[index]);
            }
        }
    }
    return output;
}
var courses = [
     {
        name : 'Java',
        coin: 300
     },
     {
        name : 'Html',
        coin: 500
     },
     {
        name : 'Css',
        coin: 700
     },
];
var filterCourse = courses.filter2(function(course, index,array){
   // console.log(course, index,array);
     return course.coin> 200;
})
//console.log(filterCourse);

//=========================Some : se trả về true hoặc False
// Some(): kiểm tra tất cả các phần từ của mảng phải thỏa mãn 1 điều kiện gì đó
Array.prototype.some2 = function(cb){
    var output = false;
    for(var index in this){
        // kiểm tra các phuong thuc và thuộc tính gần nhất
        if(this.hasOwnProperty(index)){
           if(cb(this[index],index, this)){
               output = true;
               break;
           };
        }
    }
    return output;
}
var courses = [
    {
        name: 'Javascrip',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'Html & Css',
        coin: 500,
        isFinish: false,
    },
    {
        name: 'PHP',
        coin: 700,
        isFinish: false,
    },
    {
        name: 'Java',
        coin: 300,
        isFinish: false,
    },
];
var result = courses.some2(function(course,index, array){
    return course.isFinish;
})
//console.log(result);

//=========================== Every : true / false
Array.prototype.every2 = function(cb){
      var output = true;
      for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = cb(this[index],index,this);
            if(!result){
                output = false;
            }
        }
      }
      return output;
}
var courses = [
   {
    name: 'Javascrip',
    coin: 600,
    isFinite: true
   }, 
   {
    name: 'Java',
    coin: 500,
    isFinite: true
   }, 
   {
    name: 'Javascrip',
    coin: 700,
    isFinite: true
   }, 
]
var result = courses.every2(function(course, index, array){
    return course.coin > 700;
})
//console.log(result);
//==================================Find 
//Find(): tìm kiếm 1  phần tử
Array.prototype.find2 = function(cb){
    for(var index in this){
        // kiem tra phuong thuc va thuoc tinh gan nhat 
          if(this.hasOwnProperty(index)){
              if(cb(this[index])){
                return this[index];
              }
          }
    }
}
var result = courses.find2(function(course,index,array){
    return course.name === 'Java';
})
//console.log(result);
//==================== Map 
//Map(): lặp qua các phần tử trà về từng phần từ thông qua function
var result = courses.map(function(course, index, array){
    //return course;
    return `<h2>${course.name}</h2>`
})
//console.log(result.join(''));

