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
var headingElement = document.querySelector('h1');
// use properties 
headingElement.id('bottom');
alert.headingElement('id');
// use method setAttribute 
headingElement.setAttribute('class','top');
headingElement.setAttribute('title','top');
console.log(headingElement.getAttribute('class'));
console.log(headingElement.getAttribute('title'));

// =======================================================
/* 
   ------------------InnerText vs textContent Property---------

 */