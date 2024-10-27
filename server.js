const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/payment.routes');
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/api',router);


app.get('/',(req, res)=>{
    res.send('Hello World');
    }
);

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
    }
);