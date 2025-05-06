const fetchDataButton = document.getElementById('fetchData');
        const messageDiv = document.getElementById('message');

        fetchDataButton.addEventListener('click', async () => {
          try {
            const response = await fetch('http://localhost:3000/data');
            const data = await response.json();
            messageDiv.textContent = data.message;
          } catch (error) {
            messageDiv.textContent = 'Error fetching data.';
            console.error('Error:', error);
          }
        });