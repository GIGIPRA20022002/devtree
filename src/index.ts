import express, { Request, Response } from 'express';
const app = express();

// Routing
app.get('/', (req: Request, res: Response) => {
    res.send('hola mundo en express');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server is running on port:', port);
});