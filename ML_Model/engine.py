import yfinance as yf
import numpy as np
import pandas as pd
import datetime as dt
from pandas_datareader import data as pdr
from keras.models import Sequential
from keras.layers import LSTM
from keras.layers import Dense
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

def build_dataset(sequence, n_steps):
  X, y = list(), list()
  for i in range(len(sequence)):
    end_ix = i + n_steps
    if end_ix > len(sequence) - 1:
      break
    seq_x = sequence[i:end_ix]
    seq_y = sequence[end_ix]
    X.append(seq_x)
    y.append(seq_y)
  return np.array(X), np.array(y)


def predict_price(start_year, start_month, start_date, end_year, end_month, end_date, batch_size, prediction_days, company):
    
    start = dt.datetime(start_year, start_month, start_date)
    end = dt.datetime(end_year, end_month, end_date)
    stock_list = [company]
    df = yf.download(stock_list, period='1d', start=start, end=end)

    seq = df['Close']
    seq = np.array(seq)
    n_steps = batch_size
    n_features = 1
    X, Y = build_dataset(seq, n_steps)
    X = X.reshape([X.shape[0], X.shape[1], n_features])

    model = Sequential()
    model.add(LSTM(27, activation='relu', return_sequences=True, input_shape=(n_steps, n_features)))
    model.add(LSTM(27, activation='relu'))
    model.add(Dense(1))
    model.compile(optimizer='adam', loss='mse')
    model.fit(X, Y, epochs=10, verbose=1)

    x_input = seq[-n_steps:]
    x_input = x_input.reshape((1, n_steps, n_features))
    yhat = model.predict(x_input, verbose=0)
    x_input = seq[-n_steps:]
    temp_input = list(x_input)

    predictions = []
    for i in range(prediction_days):
        x_input = np.array(temp_input).astype('float32')
        x_input = x_input.reshape((1, n_steps, n_features))
        yhat = model.predict(x_input, verbose=0)
        temp_input.append(yhat)
        temp_input = temp_input[1:]
        predictions.append(yhat)
    
    predictions = np.array(predictions)
    return predictions;


def predict_sentiment():
    """ tokenizer = AutoTokenizer.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')
    model = AutoModelForSequenceClassification.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')
    tokens = tokenizer.encode('Tesla is changing CEO, but', return_tensors='pt')
    result = model(tokens)
    predicted_sentiment = (torch.argmax(result.logits)+1).item()
    print(predicted_sentiment) """


def technical_analysis(start_year, start_month, start_date, end_year, end_month, end_date, company):
    
    start = dt.datetime(start_year, start_month, start_date)
    end = dt.datetime(end_year, end_month, end_date)
    stock_list = [company]
    df = yf.download(stock_list, period='1d', start=start, end=end)
    vol = df['Volume']

    vol = np.array(vol[-31:])
    prev_vol = vol[:30]
    curr_vol = vol[-1:]
    mean_vol = prev_vol.mean()
    ema_9 = df['Close'].ewm(span=9, adjust=False).mean()
    ema_12 = df['Close'].ewm(span=12, adjust=False).mean()
    ema_26 = df['Close'].ewm(span=26, adjust=False).mean()
    macd_line = ema_12 - ema_26
    signal_line = macd_line.ewm(span=20, adjust=False).mean()
    curr_macd = macd_line[-1:].item()
    curr_signal = signal_line[-1:].item()

    if(curr_vol >= 1.1*mean_vol and curr_macd>0 and curr_macd > curr_signal):
        tech_ans = "Buy"
    elif(curr_vol >= 1.1*mean_vol and curr_macd<0 and curr_macd < curr_signal):
        tech_ans = "Short"
    elif(curr_vol < mean_vol or curr_macd<0 or curr_macd < curr_signal):
        tech_ans = "Sell"
    elif(curr_vol < mean_vol or curr_macd>0 or curr_macd > curr_signal):
        tech_ans = "Cut Shorts"
    else:
        tech_ans = "Indecisive"

    return tech_ans;


def Engine():
    start_year = start_month = start_date = 0
    end_year = end_month = end_date = 0
    batch_size = 30                                 
    prediction_days = 0
    company = ''
    predicted_price = predict_price()
    positivity_score = predict_sentiment()
    predicted_movement = technical_analysis()