import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import {PythonShell} from "python-shell";
import fs from 'fs';

const app = express()
const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let pyshell = new PythonShell('my_script.py',{scriptPath:__dirname});



app.use(`/client`,express.static("client"));
app.use(express.json());



app.post("/classify-image",async (req,res)=>{
    try {
        console.log("Request to classify image")
        pyshell.send('hello');

         pyshell.on('message', function (message) {
            // received a message sent from the Python script (a simple "print" statement)
            res.status(200).send({message});
        });
          
        // await PythonShell.runString('print("test123")', null, (err, result) => {
        //     if (err) {
        //         console.error('Error:', err);
        //     } else {
        //         console.log('Result:', result);
        //     }
        // });

        // const scriptPath = __dirname + "/pre_exe.py";
        // if (!fs.existsSync(scriptPath)) {
        //     throw new Error("Python script file does not exist");
        // }

        // PythonShell.run("pre_exe.py",{scriptPath:__dirname,args:[req.body.image]},(err,result)=>{
        //     if (err) {
        //         console.error("Error in PythonScript:", err); 
        //         res.status(500).send({
        //             success: false,
        //             message: "Error while Classifying image",
        //             error: err
        //         });
        //     } else if (result) {
        //         console.log("PythonScript Result:", result); 
        //         res.status(200).send({
        //             success: true,
        //             message: "Image classified successfully",
        //             fresh: result
        //         });
        //     }
        // })
       
    } catch (error) {
        console.log(error);
        res.status(501).send({
            success:false,
            message:"Error while classifying image",
            error
        });
    }
});
app.get("/test",(req,res)=>{
    res.send("Hello World!");
})
app.get("*",(req,res)=>{
    try{
    res.sendFile(__dirname+"/client/index.html");
    } catch(error){
        console.log(error);
    }

});


app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});