const posts = document.querySelectorAll('.post-item');

posts.forEach(post => {
  post.addEventListener('click', () => {
    posts.forEach(p => p.classList.remove('active-post'));
    post.classList.add('active-post');
  });
});
