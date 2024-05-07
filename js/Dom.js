// HTML DOM 
// Có 3 Thành Phần 

/**
 * 1. Element: ID, Class, Tag,
 * Css Selector, HTML Collection
 * 2. Attribute
 * 2. Text
 */
// Node = Element, Attribute,Text


// var headingNode =  document.getElementById('heading');
// console.log(headingNode);

//var boxNode = document.querySelectorAll('.box-1');

// Công việc 1: Sử dụng tời `boxNode`
//console.log(boxNode);
// Công việc 2 : Sử dụng tời các li elements
// là con của `.box-1`
//console.log(boxNode.('li'));

// =====================================================
/* 1. GetElementById
   2.GetElementsByClassName
   3.GetElementsByTagName
   4. querySeclector
   5.querySeclectorAll
   6. HTMl collection
   7. document.Write
*/
// var h1Element = document.getElementsByTagName('h1')[0]
// var h2Element = document.getElementsByTagName('h2')[0]
// var h3Element = document.getElementsByTagName('h3')[0]

// =======================================================
/*
   1. Element
   2. Attribute
   3. Text
 */
// =======================================================
/*
   --------DOM attribute---------
 */
//  var headingElement = document.querySelector('h1');
// use properties 
//  headingElement.id('bottom');
// alert.headingElement('id');
// use method setAttribute 
// headingElement.setAttribute('class','top');
// headingElement.setAttribute('title','top');
// console.log(headingElement.getAttribute('class'));
// console.log(headingElement.getAttribute('title'));

// =======================================================
/* 
   ------------------InnerText vs textContent Property--------
 */
// var heading = document.querySelector('h1');
// heading.setAttribute('class', 'name');
// use getter
// console.log(heading.innerText);
// use setter
// Change the properties in 1 subject
// heading.innerText  = 'New heading';

// =======================================================
/*
   -----------InnerHTML vs OuterHTML Property-------------
 */
// var heading = document.querySelector('.box');
// // use InnerHTml
// heading.innerHTML = '<h1>thang1234</h1>';

// var headings = document.querySelector('h1');
// //use getter
// console.log(heading.innerText);

// ======================================================
/*
  ------------Node properties----------------------
*/


// ======================================================
/*
  -----------------------DOM CSS-------------------------
*/
// var add = document.querySelector('.box');
// // ========= Cách 1 =======
// // DOM CSS
// // use properties 
// add.style.width = '200px'; 
// add.style.height = '100px'; 
// add.style.backgroundColor = 'red'; 
// // ========= Cách 2 =======
// // add.style Object
// // assign (là gán)
// Object.assign(add.style, {
//    width: '200px', 
//    height: '100px', 
//    backgroundColor: 'green'
// }
// )
// console.log(add.style.width);

//=======================================================
/*
   --------------------ClassList Property-----------------
   // add // thêm các phuong thức vào class 
   // conatains // kiểm tra các phương thức có tồn tại hay không
   // remove // xóa đi các phần tử trong class 
   // toggle  // Nếu có class rồi thì phương thức toggle sẽ kiểm tra và xóa nó đi và ngược lại
*/
// var add = document.querySelector('.box');
// // add.classList.add('heading');
// // console.log(add.classList.add)

// setTimeout (() => {
//    add.classList.toggle('heading');
// }, 1000);


//========================================================
/*
 ----------------------DOM events--------------------------
 // 1. Attribute events
 // 2. Assign event using the element node
*/

// var add = document.querySelectorAll('h1');
// for(var i = 0; i < add.length; ++i){
//   // function () hàm callback gọi lại onclick
//      add[i].onclick = function(e){
//        console.log(add.length);
//      }
// }
//Node: Lí do vì sao không console.log(add[i]) mà phải sử dụng event và thuộc tính target.
// bởi vì: nếu tá console.log(add[i]) thì sẽ giống như ta đang console.log(add.length)
// tức là sự kiện onclick đã xẩy tra trc khi console.log , khi đó biến i(index) sẽ tăng lên thêm 1
// sẽ vượt quá giới hạn độ dài vòng for. vì vậy kq trả về undefined

//==========================================================
/*
-------------------DOM events example----------------------
// 1. Input / select
// 2. Key up / down
*/
// Note : oninput sẽ trả về luôn 
//        onchange sẽ trả về khi nhấn ra ngoài 
//        key up là khi nhấn bàn phím xuống và thả lên thì sẽ nhận
//        key dow là khi nhấn chuột xuống sẽ nhân
//        key press là khi nhấn
// var inputelement = document.querySelector('input[type="text"]');
// //  function(e) sử dụng mouse event 
// inputelement.oninput = function(e){
//       // e.target : từ mouse event. target sẽ lấy ra element node
//       // e.target.value lấy ra giá trị của thẻ input
//       console.log(e.target.value);
//     }
    
//     inputelement.onkeyup = function(e){
//       console.log(e.which);
//       switch(e.which){
//         case 27:
//           console.log('Exit');
//           break;
//       }
// }

// var checkelment = document.querySelector('input[type="checkbox"]');
// checkelment.onchange = function(e){
//   console.log(e.target.checked);
// }
// var selectelement = document.querySelector('select');
// selectelement.onchange = function(e){
//    console.log(e.target.value);
// }


//================================================================
/*
// Dom
---------------PreventDefault and StopPropagation-----------------
*/
// truong hop 1
// var link = document.querySelectorAll('a');
// truong hop 2
// ======= Ví dự 1 sự cho trg hợp hủy đi sự kiện mặc định cảu trình duyệt lên thẻ a
// var link = document.links;
// for(var i = 0; i<link.length ; ++i){
//     link[i].onclick = function(e){
//       //startsWith bên Es6
//       if(!e.target.href.startsWith('https://fullstack.edu.vn/learning/javascript-co-ban?id=6dd78909-0225-4d57-bee7-20bec5d89773')){
//         // preventDefault sẽ hủy đi các sự kiện mặc định của trình duyệt 
//         e.preventDefault(); 
//       }
//     }
// }
// // ====== Ví dự 2 hủy đi sự kiện mặc định của onmousedown khi kích xuống
// var  add = document.querySelector('ul');
// add.onmousedown = function(e){
//   // sử dung phương thức preventDefault() để hủy đi các sự kiện mặc định 
//   e.preventDefault();
// }
// add.onclick = function(e){
//   console.log(e.target);
// }
// //===== Ví dự Hủy Nổi Bọt 
// var div = document.querySelector('div');
// div.onclick = function(){
//   console.log('Div');
// }
// var button = document.querySelector('button');
// button.onclick = function(e){
//     e.stopPropagation();
//     console.log('Click Me');
// }
// // Note : PreventDefault Hủy bỏ đi các sự kiện mặc định của trình duyêt Vd Như khi ấn và href sẽ chuyển qua trang khác hoặc hủy khi onmousedown khi kích chuột xuống 
// //       stopPropagation hủy đi sư kiện nổi bọt khi kích vào thẻ con trong 1 thẻ cha 

//================================================================================================
/*
----------------------------------Event listener----------------------------------------
*/
// function thang(){
//   console.log('viec 1');
// }
// function thang1(){
//   console.log('viec 2');
// }
// var btn  = document.getElementById('btn');
// btn.addEventListener('click', thang);
// btn.addEventListener('click', thang1);
// setTimeout(function()  {
//   btn.removeEventListener('click', thang);
// }, 5000);
// // Note: addEventListener sẽ nhận vào 2 đối số là 'click' và đối số của hàm callback
// //       removeEventListener sẽ xóa bỏ đi 2 đối số được chuyền vào 'click' và đối số của hàm callback


//========================================================================================================
/*
----------------------------------JSON--------------------------
*/
// 1. Là một định dạng dữ liệu (chuỗi)
// 2. JavaScrip Object Notation
// 3. JSON: number,String, boolean, NUll, Array
// Object

// Mã hóa / Giải mã
// Encode / decode
// Stringify : từ javaScrip types -> JSON
//Parse : từ JSON -> javaScrip types
// thể hiện dạng chuỗi ta thực hiện 2 dấu hoặc đơn
// var a = '"ffsdfasd"';
// console.log(typeof JSON.parse(a));
// var a = '{"name":"Thang","age":21}';
// var b = JSON.parse(a);
// console.log(b);

// var a = {
//   name:   'thang',
//   age: 26
// }
// console.log(JSON.stringify(a));

//=============================================================================================================
/*
 --------------------------------Promise (sync, async)---------------
 // sync : đồng bộ
 // asyns : bất đống bộ
 // setTimeout , setInterval, fetch,
 // XMLHttpRequest, file reading
 // request animation frame
 // Callback
*/
// sync : đồng bộ yêu tiên cái nào trc chạy trc
// console.log(1);
// console.log(2);
// // asunys : bất đồng bộ : console.log(1) đăng phải đợi 1s mới in ra lên nó bị sleep
// // và consolo.log(2) được in ra trc
// // setTimeout là tác vụ bất đồng bộ (async)
// setTimeout(function(){
//    console.log(1)
// }, 1000);
// console.log(2);

//==============================================================================================================
/*
----------------------------------Promise (pain)----------------------
// Callback hell
// Pyramid of doom
*/
// setTimeout(function() {
//     console.log(1)// viec 1
//     setTimeout(function() {
//       console.log(2)// viec 2
//       setTimeout(function() {
//         console.log(3)// viec 3
//     }, 1000);
//     setTimeout(function() {
//       console.log(4)// viec 4
//   }, 1000);  
    
//   }, 1000);
  
// }, 1000);

//===============================================================================================================
/*
----------------------------------Promise (concept)-----------------------
*/
//Note khi goi den promise thi no se thuc thi vaf chay doan Executor nay trc va va trc khi nhan doi tg promise
// resolve : thanh cong 
// reject : that bai 
// Cac buoc de khoa tao Promise
// B1: khoi tao 1 doi tg new promise
// B2: viet ra Excutor
var promise = new Promise(
   // Executor
   function(resolve, reject){
    // Logic
    // thanh cong: resole()
    // that bai: reject()
    // resolve(
    //   [{
    //     id:1,
    //     name:"Thang"
    //   }]
    // );
    reject('Co loi')
   }
);

// Promise : co 3 trang thai
// 1. Pendding : dang cho
// 2. Fulfilled: thanh cong
// 3. reject: that bai (tach)

promise 
    // khi thang resolve dc call thang callback funcition cua thang then la dc call
    .then(function(a) {
        //  console.log(a)
    })
    // khi thang reject dc call thang callback funcition cua thang then la dc call
    // catch : bay , bat bug
    .catch(function(b) {
        // console.log(b)
    })
    // khi thang resolve hoac thang reject dc call thang callback funcition cua thang then la dc call
    // finally : khi  song
    .finally(function() {
      //  console.log('Done')
    })
// Note : Câu trả lời phỏng vấn
// Promise sinh ra de giai quyet cac van de bất đồng bô
// Trc khi co Promise thi ta phai su dung callback mà sử dụng callback thì se xẩy ra lỗi callbackheal
// để tạo 1 callback ta suwe dụng từ khóa new
// bên trong contructor ta chuyền vào 1 excutor function 
// trong excutor function chuyền vào hai tham sô dạng ham 
// khi đội tg Promise đc tạo ra ta sử dụng 2 đối tg là then và cat
// Then vao cath đề nhận callback function
// then thưc thi khi promise là resolve
// catch thực thi khi pro là thất bai

// ===============================================================================================================
/*-----------------------------------------Promise (chain)--------------------------------------------- */

var promise = new Promise(
     // excutor
     function(resole,reject){
         resole();
     }
)
promise
// Vi du 1
.then(function(){
    //  return 1;
})
.then(function(data){
    // console.log(data);
    // return 2;
})
.then(function(data){
  // console.log(data);
})
// Vi du 2

.then(function(){
      // su dung promise long nhau
      // new promise de tao 1 Promise
      // return chả về 1 promise
      return new Promise(function(resole, reject){
                setTimeout(function(){
                    // resole : khi thành cong
                    // return mang [1,2,3]
                    // resole([1,2,3]);
                }, 3000);
      })
})
.then(function(data){
    console.log(data);
})

// Ví  dụ 3

function sleep(sm){
    return new Promise(function(resole,reject){
      setTimeout(resole,sm);
    })
}
sleep(1000)
.then(function(){
    // console.log(1);
    return sleep(1000);
})
.then(function(){
  // console.log(2);
  return sleep(1000);
})
.then(function(){
  // console.log(3);
  return sleep(1000);
})

//==============================================================================================================
/*
----------------------------------------------Promise methods (resolve, reject, all)----------------------------
 */

function promise(){
  return new Promise(function(resole,reject){
        resole();
  })
}
promise
.then(function(){
  return 1;
})
.then(function(data){
  //  console.log(data);
   return new Promise(function(resole,reject){
    reject('loi roi');
   })
})
.catch(function(error){
    // console.log(error);
})
.then(function(data){

  // console.log(data);
})

// Bài Mới 
// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

var promise1 = new Promise(
  function(resole,reject){
     setTimeout(function(){
         resole([1]);
     },2000)
  }
)
var promise2 = new Promise(
  function(resole,reject){
     setTimeout(function(){
         resole([2,3])
     },4000)
})
// khi tất cả promise trong mang đầu vào all song thi mới thực thi .Then
Promise.all([promise1 , promise2])
// cách 1
.then(function(a){
     var c = a[0];
     var b = a[1];
     // concat noi chuoi 
    //  console.log(c.concat(b));
})
// cach 2
// .then(function([a,b]){
//   // console.log(a.concat(b));
// })

//====================================================================================
/*
----------------------------------Promise example------------------------------------
 */

// var user = [
//   {
//     id: 1,
//     name: 'Thang'
//   },
//   {
//     id: 2,
//     name: 'Thang1'
//   },
//   {
//     id: 3,
//     name: 'Thang2'
//   },
// ];
// var comments = [
//     {
//       id: 1,
//       user_id:1,
//       conten: 'abc'
//     },
//     {
//       id: 2,
//       user_id:2,
//       conten: 'cde'
//     }
// ];

// // Cách bước lấy ra dữ liêu
// // B1: Lấy Comment 
// // B2: Từ comments lấy ra user_id,
// // từ user_id lấy ra user tương ứng 

// //================Fake API==================

function getComment(){
  return new Promise(function(resolve , reject){
    setTimeout(function(){
      resolve(comments);
    },1000)
  });
}
//UserIds tham so hay la 1 mang chứa các id người dùng
function getUsersByIds(UserIds){
  // new promise tao 1 promise moi
  // tra ve doi ham getUsersByIds
  //getUsersByIds lai la 1 Doi tg dc khoi tg tu promise moi
  return new Promise(function(resolve, reject){
    // loc qua tung phan tu user
      var result  = user.filter(function(user){
        //UserIds là một mảng mới chỉ chứa các phần tử user mà user.
        //id của chúng nằm trong mảng UserIds.
        // Mảng này được gán vào biến result .
        // loc ra cac user.id nam trong UserIds
        return UserIds.includes(user.id);
      });
      setTimeout(function(){
           resolve(result);
      },1000)

  })
}
//============== Lay ra cac phan tu cau user_id
getComment()
.then(function(comments){
  // map se lap qua tung phan tu cua thang comments
  // function(comment) chinh la cac phan tu 
  var userIds = comments.map(function(comment){
    // dieu kien la se lap qua tung phan tu co user_id 
    // va tra ve bien userIds
    return comment.user_id;
  });
  // Promise long nhau 
  // getUsersByIds(userIds) la 1 mang [1,2];
  // đây là 1 promise 
  return getUsersByIds(userIds)
  // var getUsersByIds = new promise(function(resolve){
  //    resolve(userIds);
  // })
   // thanh cong se goi den ham callback 
   // goi toi thang user 
    .then(function(user){
      // return user tra ra 1 danh sach list cac phan tu có id la 1 và 2
      // return 1 oject
       return {
           users:user,
           comments:comments,   
       };
     });
})
// ham callback sẽ lấy user đc return là các phần tử của id 1 va 2 
.then(function(data){
   var CommenBlock = document.getElementById('comment-block');
   var html = '';
     data.comments.forEach(function(comment){
      var user = data.users.find(function(user){
        return user.id === comment.user_id;
      });
      //html += `${user.name}: ${comment.content}<br>`;
      html += `<li>${comment.content}</li>`;
   });
   CommenBlock.innerHTML = html;
    // console.log(data);
})



