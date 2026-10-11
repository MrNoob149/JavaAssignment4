import api from './api/index.js';
import express from 'express';

const app = express();

// Parses incoming requests with JSON payloads
app.use(express.json());
// Parses URL-encoded form data (like HTML forms)
app.use(express.urlencoded({extended: true}));
app.use('/api/v1', api);
export default app;