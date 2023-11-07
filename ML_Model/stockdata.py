import yfinance as yf
import numpy as np
import pandas as pd
import datetime as dt
from pandas_datareader import data as pdr

def stock_data(company):
    end = dt.datetime.now()
    start = end -dt.timedelta(days=100000)
    stock_list = [company]
    df = yf.download(stock_list, period='1d', start=start, end=end)

    prices = np.array(df['Close'])
    dates = np.array(df.index)
    prices_list=prices.tolist()
    dates_list=dates.tolist()
    search_object= {
        "prices":prices_list,
        "dates":dates_list
    }

    return search_object