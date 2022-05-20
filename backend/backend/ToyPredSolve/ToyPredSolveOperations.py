import pickle
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier


class ToyPred:
    def __init__(self):
        self.train_X = []
        self.train_Y = []
        with open(r'od_embeddings16.pkl', 'rb') as embedding16_file:
            self.embedding16 = pickle.load(embedding16_file)
        self.stations_name = np.load(r'stations.npy')
        self.stations_position = np.array(pd.read_csv(r'station_position.csv'))
        self.RFC = RandomForestClassifier(n_estimators=1000, max_depth=5)

    def add_train_data(self, embedding, belong):
        self.train_X.append(embedding)
        self.train_Y.append(belong)


RF = ToyPred()


def start_pred():
    RF.__init__()


def add_new_point(x, y, c):

    print("add new point : " + str(x) + " " + str(y) + " " + str(c))


def get_point_class(x, y):
    print("get point class : " + str(x) + " " + str(y))
    return 0
