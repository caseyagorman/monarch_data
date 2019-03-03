from flask_mail import Message
from flask_mail import Mail
from operator import itemgetter
from flask import Flask, render_template, jsonify, request, session, make_response, send_from_directory
from jinja2 import StrictUndefined
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource, reqparse
from model import db, connect_to_db,
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
app.debug = True


@app.route("/")
def index():
    return "welcome!"


if __name__ == "__main__":

    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
