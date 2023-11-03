from flask import Flask, request 
import os
from dotenv import load_dotenv
import engine
print(engine.technical_analysis())
load_dotenv()

app = Flask(__name__)             

@app.route("/")                   
def hello():                      
    return "Hello World!"  

@app.route("/ping")                   
def yo():                      
    return "pong"  

@app.route("/model", methods=["POST"])
def predict(): 

    secretKey=request.headers.get('Token')
    if(secretKey!=os.getenv('SERVER_SECRET')):
        print("NOT VERIFIED")
        return "invalid request"
    else:
        print("VERIFIED")
        data=request.get_json()
        stockName=request.get_json()['stockName']
        startDate=request.get_json()['startDate']
        endDate=request.get_json()['endDate']
        duration=request.get_json()['duration']
        return "successful"
if __name__ == "__main__":        
    app.run()                     