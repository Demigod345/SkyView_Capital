from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
import time
import engine
import stockdata
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
        print(request.get_data())
        # data=request.get_json()
        company=request.get_json()['company']
        startDate=request.get_json()['startDate']
        endDate=request.get_json()['endDate']
        days=request.get_json()['days']
        # duration=request.get_json()['duration']
        #Date- YYYY-MM-DD
        #yaha par processing kar and data bhej
        ticker=company.split('-')[0]
        prediction_days = days
        batch_size = 7
        print("startDate", startDate)
        print("endDate", endDate)
        return_obj = engine.main(str(startDate), str(endDate), batch_size, prediction_days, str(ticker))
        print(return_obj)
        return jsonify(return_obj)
    
@app.route("/search", methods=["POST"])                   
def search():                      
    company = request.get_json()['company']
    return jsonify(stockdata.stock_data(company))

if __name__ == "__main__":        
    app.run(debug=True, port=6969)                     