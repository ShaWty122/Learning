# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/login', methods=['POST'])
def login():
    print("H")
    
    data = request.get_json()
    print("Received data:", data) 
    username = data.get('username')
    password = data.get('password')
    print(username,password)
    # Basic validation, you may want to add more
    if not username or not password:
        return jsonify({'message': 'Please provide both username and password'}), 400

    # Here you would perform authentication, for example:
    # if username == 'admin' and password == 'password':
    #     return jsonify({'message': 'Login successful'}), 200
    # else:
    #     return jsonify({'message': 'Invalid username or password'}), 401

    # For simplicity, let's assume any non-empty username and password combination is valid
    return jsonify({'message': 'Login successful'},username), 200

if __name__ == '__main__':
    print("H")
    app.run(debug=True)
