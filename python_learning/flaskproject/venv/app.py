import os
from flask import Flask, render_template, request, url_for, redirect,jsonify
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.sql import func

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] ='mysql://root:root@localhost:3306/employee'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    age = db.Column(db.Integer)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    bio = db.Column(db.Text)

    def __repr__(self):
        return f'<Student {self.firstname}>'

    def serialize(obj):
        iobj=obj
        if str(type(obj))=="<class 'app.Student'>":
            iobj=[]
            iobj.append(obj)       
        jsonFinal={}
        counter=0
        for o in iobj:
            json={}
            json['id']=o.id
            json['firstname']=o.firstname
            json['lastname']=o.lastname
            json['email']=o.email
            json['age']=o.age
            json['created_at']=o.created_at
            json['bio']=o. bio
            jsonFinal[counter]=json
            counter=counter+1

        return jsonFinal


@app.route('/get', methods=['GET','POST'])
def get():
    if request.method=="GET":
        students=Student.query.all() 
        data=Student.serialize(students)
        return jsonify(data)
    if request.method=="POST": 
        student=Student(firstname=request.json["firstname"],lastname=request.json["lastname"],email=request.json["email"], age= request.json["age"],bio=request.json['bio'])
        db.session.add(student)
        db.session.commit()
        return jsonify({"msg":"resource added Successfully"})


@app.route('/get/<id>',methods=['GET','PUT','DELETE','PATCH'])
def getById(id):
    if request.method=="GET":
        students=Student.query.get(id)
        if students is None:
            return jsonify({'msg':'data not available'})
        data=Student.serialize(students)
        return jsonify(data)
    if request.method=="PUT":
        student=Student.query.get(id)
        if student is None:
            return jsonify({'msg':'data not available for given id'})
        student.firstname=request.json["firstname"]
        student.lastname=request.json["lastname"]
        student.email=request.json["email"]
        student.age=request.json["age"]
        student.bio=request.json["bio"]
        db.session.add(student)
        db.session.commit()
        return jsonify({"msg":"Resource updated Successfully"})
    if request.method=="DELETE":
        student=Student.query.get(id)
        if student is None:
            return jsonify({'msg':'data not available for given id'})
        db.session.delete(student)
        db.session.commit()
        return jsonify({"msg":"Resource Deleted Successfully"})

    if request.method=="PATCH":
        student=Student.query.get(id)
        if student is None:
            return jsonify({'msg':'data not available for given id'})
        if "firstname" in  request.json:
            student.firstname=request.json["firstname"]
        if "lastname" in request.json:
            student.lastname=request.json["lastname"]
        if "email" in request.json:
            student.email=request.json["email"]
        if "bio" in request.json:
            student.bio=request.json["bio"]
        
        db.session.add(student)
        db.session.commit()

        return jsonify({"msg":"Resource updated Successfully Using PATCH"})
        


