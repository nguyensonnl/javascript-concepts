 const express = require('express');
        const app = express();
        const port = 3000; // You can choose any port

        app.get('/data', (req, res) => {
          res.json({ message: 'Hello from the server!' });
        });

        app.listen(port, () => {
          console.log(`Server running on http://localhost:${port}`);
        });