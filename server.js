const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const jwt = require ('jsonwebtoken');
const {expressjwt: exjwt} = require ('express-jwt');

const app = express ();
const port = 3001;

app.use (cors ({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-type', 'Authorization']
}));
app.use (bodyParser.json ());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');  // Allow frontend port
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');  // Allow methods
    next();
});


const secretKey = 'My super secret key';
const jwtMW = exjwt({
    secret: secretKey,
    algorithms: ['HS256']
});

let users = [
    {
        id: 1,
        username: 'janvi',
        password: 'janvi'
    }
];

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user with matching credentials
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Generate a token
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '3m' });
        res.json({
            success: true,
            err: null,
            token,
        });
    } else {
        // Send a single error response
        res.status(401).json({
            success: false,
            token: null,
            err: 'Username or password is incorrect',
        });
    }
});



app.get ('/', (req, res) => {
  res.send ('Hello World!');
});


app.listen (port, () => {
  console.log (`Listening at http://localhost:${port}`);
});