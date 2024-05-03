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
function thang(){
  console.log('viec 1');
}
function thang1(){
  console.log('viec 2');
}
var btn  = document.getElementById('btn');
btn.addEventListener('click', thang);
btn.addEventListener('click', thang1);
setTimeout(function()  {
  btn.removeEventListener('click', thang);
}, 5000);
// Note: addEventListener sẽ nhận vào 2 đối số là 'click' và đối số của hàm callback
//       removeEventListener sẽ xóa bỏ đi 2 đối số được chuyền vào 'click' và đối số của hàm callback



