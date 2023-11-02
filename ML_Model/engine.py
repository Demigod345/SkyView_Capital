import numpy as np
def predict_price():
    predicted_price1 = -1000
    predicted_price2 = -2000
    return np.array(predicted_price1, predicted_price2)


def predict_sentiment():
    predicted_positivity_score = -1
    return predicted_positivity_score


def technical_analysis():
    predicted_movement = "The stock will fall"
    return predicted_movement


def Engine():
    start_year = start_month = start_date = 0
    end_year = end_month = end_date = 0
    batch_size = 30                                 #fixed
    prediction_days = 0
    company = ''
    predicted_price = predict_price()
    positivity_score = predict_sentiment()
    predicted_movement = technical_analysis()