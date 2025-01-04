const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true
    }
));
app.use(express.json());


const connections = new Map();


wss.on('connection', (ws) => {
    const requestId = Math.random().toString(36).substring(7);
    connections.set(requestId, ws);

    ws.on('close', () => {
        connections.delete(requestId);
    });

    
    ws.send(JSON.stringify({ type: 'requestId', requestId }));
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/chat', async (req, res) => {
    const { input_value, requestId } = req.body;
    const ws = connections.get(requestId);

    if (!ws) {
        return res.status(400).json({ error: 'WebSocket connection not found' });
    }

    try {
        const response = await axios.post(
            'https://api.langflow.astra.datastax.com/lf/af1b788e-12f4-4190-b7f3-96fcf3b514ec/api/v1/run/916ca439-9c54-47b8-8ff8-5b45b5853fa1?stream=false',
            {
                input_value,
                output_type: 'chat',
                input_type: 'chat',
                tweaks: {
                    "ChatInput-9dK3o": {},
                    "ParseData-kLx0a": {},
                    "Prompt-zG0yU": {},
                    "SplitText-jHpNO": {},
                    "OpenAIModel-7Msuw": {},
                    "ChatOutput-cbdYg": {},
                    "AstraDB-NW9nj": {},
                    "OpenAIEmbeddings-1taRw": {},
                    "AstraDB-gRvbZ": {},
                    "OpenAIEmbeddings-a85Tn": {},
                    "File-lNfWP": {}
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.APPLICATION_TOKEN}`
                }
            }
        );

        const message = response.data.outputs[0].outputs[0].results.message.text;
       
        ws.send(JSON.stringify({ type: 'response', message }));
        res.json({ status: 'Processing' });
        
    } catch (error) {
        ws.send(JSON.stringify({ type: 'error', message: error.message }));
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
