var url = 'http://localhost:3000/courses';
fetch(url)
   .then(function(post){
      return post.json();
   })
   .then(function(posts){
      var htmls =  posts.map(function(a){
         return `<li>
            <h2>${a.name}</h2>
            <p>${a.description}</p>
         <\li>`
      })
      var html = htmls.join('');
      document.getElementById('post-block').innerHTML = html;
   })