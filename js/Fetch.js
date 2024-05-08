var postApi = 'https://jsonplaceholder.typicode.com/posts';
fetch(postApi)
    .then(function(response) {
        // doi tg response sẽ chứa các đối tg json chuyền vào 
        return response.json();
        // phuong thức json() đã trả về 1 promise
        // JSON.parse : chuyền từ Json -> javacript types
    })
    .then(function(posts) {
        // do sư dụng hàm map nhận lại mảng tương ứng với số phần từ của posts
      // nhưng nó lại trả về dạng chuỗi 
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.completed}</p>
            </li>`;
        });
        //lên ta sử dụng join để chyển từ mảng sang chuoi
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        alert("MESSAGE: ERROR!");
    });
