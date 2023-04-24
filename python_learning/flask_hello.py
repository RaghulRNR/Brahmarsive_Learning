from flask import Flask
from flask import  jsonify
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

app.config['SECRET_KEY'] = 'hardsecretkey'
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://root:root@localhost/testflask'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class UserInfo(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(100), unique = True)
    phoneno=db.Column(db.Integer, unique = True)
    age=db.Column(db.Integer, unique = True)
    location=db.Column(db.String(25), unique = True)
 
 
    def __init__(self, username, password,phoneno,age,location):
        self.username = username
        self.password = password
        self.phoneno=phoneno
        self.age=age
        self.location=location
        with self.app.app_context():
            db.create_all()



@app.route("/")
def hello_world():
  return "<h1>Hello World<\h1>"

if __name__ == '__main__':
   app.run(debug = True)
   