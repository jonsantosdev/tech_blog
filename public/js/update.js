const updateFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    const id = event.target.getAttribute('data-id-update');
    // console.log(`${title} and ${content}`);
  
    if (title && content) {
      console.log(title);
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blog');
      }
    }
  };

  document
  .querySelector('.update-blog-form')
  .addEventListener('submit', updateFormHandler);