const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blog');
      }
    }
  };

  const updateButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id-update')) {
      const id = event.target.getAttribute('data-id-update');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blog');
      }
    }
  };

  

  document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);

  document
  .querySelector('.blog-list')
  .addEventListener('click', updateButtonHandler);
  