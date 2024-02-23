

let reader  = new FileReader();

const classifyImage= async ()=>{

    if(reader?.result){
        const result = await fetch("/classify-image",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json'

            },
            body: JSON.stringify({'image':reader.result})
        });
    }
}
const imageChanged=()=>{
    let preview = document.getElementById('currimage');
    let file    = document.getElementById("imageUpload").files[0];
    reader.onloadend = function() {
        preview.src=reader.result;
        preview.style.display='block';
        document.querySelector("span").style.display='none';
        console.log(reader)
    }
    if(file){
        reader.readAsDataURL(file);
    }
    else{
        preview.src="";
    }
}








// import base64
// import numpy as np

// import cv2

// with open("test.jpg", "rb") as f:
//     im_b64 = base64.b64encode(f.read())

// im_bytes = base64.b64decode(im_b64)
// im_arr = np.frombuffer(im_bytes, dtype=np.uint8)  # im_arr is one-dim Numpy array
// img = cv2.imdecode(im_arr, flags=cv2.IMREAD_COLOR)
