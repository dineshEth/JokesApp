import express from 'express';

const app = express();
const PORT = 3000 || 5000

const jokes = [
    {
        id:1,
        title: 'Joke 1',
        content : "This is first joke"
    },
    {
        id:2,
        title: 'Joke 2',
        content : "This is second joke"
    },
    {
        id:3,
        title: 'Joke 3',
        content : "This is third joke"
    },
    {
        id:4,
        title: 'Joke 4',
        content : "This is fourth joke"
    },
    {
        id:5,
        title: 'Joke 5',
        content : "This is fifth joke"
    }
]

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.get('/api/jokes',(req,res)=>{
    res.send(jokes);
})

app.listen(PORT,()=>{
    console.log(`Server is started on http://localhost:${PORT}`)
})