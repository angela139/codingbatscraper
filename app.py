from flask import Flask, flash, redirect, render_template, request, url_for
from main import student_data
import os

app = Flask(__name__)
app.secret_key = os.urandom(12).hex()


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/data', methods=['POST'])
def data():
    if request.method == 'POST':
        email = str(request.form["email"])
        password = str(request.form["pass"])
        url = str(request.form["url"])
        if email != "" and password != "" and url != "":
            table_array = student_data(email, password, url)
            if len(table_array) == 0:
                flash("Wrong credentials")
                return redirect(url_for('index'))
            else:
                return render_template('data.html', table_array=table_array)
        else:
            flash("Missing credentials")
            return redirect(url_for('index'))


if __name__ == "__main__":
    app.run()
