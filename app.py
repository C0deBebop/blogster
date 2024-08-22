from flask import Flask, render_template, redirect, request


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    data = request.get_json(force=True);
    print(data)
    return {'status' : 200}

@app.route('/signin', methods=['POST'])
def signin():
    print(request.get_json(force=True))
    return {'status' : 200}








if __name__ == '__main__':
    app.run(debug=True)