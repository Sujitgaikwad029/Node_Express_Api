import express from 'express';
import bodyparser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyparser.json());

app.use('/users', usersRoutes)

// Get Request -- > 
app.get('/', (req, res) => {
    res.send('Hello, From Home-Page.')
})

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
})