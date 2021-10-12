from flask import Flask, render_template, request
from main import student_data
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/data', methods=['POST'])
def data():
    if request.method == 'POST':
        email = str(request.form["email"])
        password = str(request.form["pass"])
        url = str(request.form["url"])
        table_array = student_data(email, password, url)
        return render_template('data.html', table_array=table_array)


if __name__ == "__main__":
    app.run()
