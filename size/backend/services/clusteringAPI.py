from flask import Flask, request, jsonify
from model import get_cluster

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    result = get_cluster(data['height'], data['weight'], data['chest'], data['waist'], data['hips'])
    return jsonify(result)

if __name__ == '__main__':
    app.run(port=5001)
