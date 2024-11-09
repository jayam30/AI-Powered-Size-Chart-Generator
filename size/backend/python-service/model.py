import numpy as np
from sklearn.cluster import KMeans
import joblib

# Load a pre-trained model or define your own clustering logic here
def get_cluster(height, weight, chest, waist, hips):
    data = np.array([[height, weight, chest, waist, hips]])
    model = joblib.load('clustering_model.joblib')
    cluster = model.predict(data)[0]
    return {'recommended_cluster': cluster}
