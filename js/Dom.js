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
var add = document.querySelector('.box');
// add.classList.add('heading');
// console.log(add.classList.add)

setTimeout (() => {
   add.classList.toggle('heading');
}, 1000);



