const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
    console.log("✅ Webhook received:", req.body);

    res.status(200).send('Webhook received!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
