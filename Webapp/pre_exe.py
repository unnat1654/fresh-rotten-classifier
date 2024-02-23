# from cv2 import imdecode,INTER_AREA,IMREAD_COLOR,resize
# from base64 import b64decode
# from pickle import load
# from numpy import expand_dims,frombuffer,uint8
# from pandas import DataFrame
import sys

# cols = list(map("c{}".format, range(3888)))
# classifier=load(open("freshRottenClassifier.sav","rb"))

# def predictor(b64imageinp):
    
#     encoded_data = b64imageinp.split(',')[1]
#     nparr = frombuffer(b64decode(encoded_data), uint8)
#     img = imdecode(nparr, IMREAD_COLOR)

    
#     img1=(resize(img,(36,36),interpolation=INTER_AREA).flatten())/255

    
#     df = DataFrame(expand_dims(img1,0), columns=cols)
    
#     #using predict on model
#     [ans]=classifier.predict(df)
#     return ans

# print(predictor(sys.argv[1]))
print("test123")
