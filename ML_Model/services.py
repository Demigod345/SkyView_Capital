import yfinance as yf
import numpy as np
import pandas as pd
import datetime as dt
from pandas_datareader import data as pdr
from keras.models import Sequential
from keras.layers import LSTM
from keras.layers import Dense

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

start_year = int(input("Enter the Starting Year \n"))
start_month = int(input("Enter the Starting Month \n"))
start_date = int(input("Enter the Starting Date \n"))
end_year = int(input("Enter the Ending Year \n"))
end_month = int(input("Enter the Ending Month \n"))
end_date = int(input("Enter the Ending Date \n"))
batch_size = int(input("Enter the batch size \n"))
prediction_days = int(input("Enter the number of days you want prediction for \n"))
company = input("Enter the Ticker of Stock \n")

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
model.fit(X, Y, epochs=100, verbose=1)

x_input = seq[-n_steps:]
x_input = x_input.reshape((1, n_steps, n_features))
yhat = model.predict(x_input, verbose=0)

print(yhat)