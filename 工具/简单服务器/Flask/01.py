from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/callback', methods=['POST'])
def callback():
    data = request.json
    print(data)
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(port=3000)
