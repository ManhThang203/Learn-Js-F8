var api = 'http://localhost:3000/courses';

function start(){
   getCourses(renderCourses);
   creatCourses();
}
start();

function getCourses(callback){
    fetch(api)
     .then(function(reponse){
        return reponse.json();
     })
     .then(callback);
}
function renderCourses(courses){
   var listCourses = document.getElementById('item-courses');
   var htmls = courses.map(function(course){
      return `
      <li class="courser-item-${course.id}">
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        <button onclick=" handeDeleteForm(${course.id})">Deleted</button>
        <button onclick=" handeUpdateForm(${course.id})">sửa</button>
      </li>`
   })
   var html = htmls.join('');
   listCourses.innerHTML = html;
}
// ==============Start Creat=============
function handecreatfrom(data,callback){
     var options = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
       },
       // gửi đi dữ liệu
       body: JSON.stringify(data),
     };
     fetch(api,options)
     .then(function(reponse){
      return reponse.json();
     })
     .then(callback);
}

function creatCourses(){
   var creatbtn = document.getElementById('creatbtn');
   creatbtn.onclick = function(){
      var name = document.querySelector('input[name="name"]').value;
      var  description= document.querySelector('input[name="descript"]').value;
      var formdata = {
         name:name,
         description:description,
      };
      handecreatfrom(formdata,function(){
         getCourses(renderCourses);
      })
   }
}

// ==============End Creat=============

// ==============Start Deleted===============
function handeDeleteForm(id){
   var options = {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
       },
     };
     fetch(api + '/' + id, options)
     .then(function(reponse){
      return reponse.json();
     })
     .then(function(){
         var courserItem = document.getElementById('courser-item-' + id);
         if(courserItem){
           courserItem.remove();
         }
     });
}
//================End Daleted==================

//===============Start Update==================
function Update(id,data,callback){
   var options = {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
       },
       // gửi đi dữ liệu
       body: JSON.stringify(data)
     };
     fetch(api + '/' + id,options)
     .then(function(reponse){
      return reponse.json();
     })
     .then(callback);
}

function handeUpdateForm(id) {
   var creatbtn = document.querySelector('#creatbtn');
   var saveBtn = document.querySelector('#saveBtn');
   // cuc bo
   creatbtn.style.display = "none";
   saveBtn.style.display = "block";
   // lấy ra api co id thu may 
   fetch(api + '/' + id)
   .then(function(reponse){
       return reponse.json();
   })
   .then(function(data){
       document.querySelector('input[name="name"]').value = data.name;
       document.querySelector('input[name="descript"]').value = data.description;

       saveBtn.onclick = function(){
           var name = document.querySelector('input[name="name"]').value;
           var description = document.querySelector('input[name="descript"]').value;
           var formwillsave = {
               name: name,
               description: description
           }
           Update(id, formwillsave, function(){
               getCourses(renderCourses);
               document.querySelector('#creatbtn').style.display = "none"; // Hiển thị nút Create lại
               document.querySelector('#saveBtn').style.display = "block"; // Ẩn nút Save đi
           });
       };
   })
}

