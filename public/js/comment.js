const newFormHandler = async (event) => {
    event.preventDefault();
  

    const content = document.querySelector('#blog-comment').value.trim();
    const blog_id = event.target.getAttribute('data-comment');
  
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ content, blog_id }),
        
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to leave a comment');
      }
    }
  };

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);
