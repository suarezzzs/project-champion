import createApp from "./app";


const app = createApp();
const port = process.env.PORT;


app.listen(Number(port), ()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})
