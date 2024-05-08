
var courseAPi = 'http://localhost:3000/courses';
function statr(){
    // get ra cac phan tu
    //getCourses(function(courses){
    // xuat ra trình duyệt
    //renderCourses(courses);
//});
    // renderCourses sẽ chuyền được dưới dạng callback
    getCourses(renderCourses);
}
// callback
statr();

// Functions
function getCourses(callback){
    fetch(courseAPi)
    // khi thanh cong
    .then(function(reponse){
        return reponse.json();
    })

    // nhan lai json
   .then(callback);
}
// function renderCourses
function renderCourses(courses){
    var listCoursesBlock = document.getElementById('list-courses');
    var htmls = courses.map(function(course){
        return `<li>
        <h4>${course.name}</h4>
        <p>${course.description}</p>
        </li>`;
    });
    var html = htmls.join('');
    listCoursesBlock.innerHTML = html;

}