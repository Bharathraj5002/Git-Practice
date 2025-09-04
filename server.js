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
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
