from operator import itemgetter
from flask import Flask, render_template, jsonify, request, session, make_response, send_from_directory
from jinja2 import StrictUndefined
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource, reqparse
from model import db, connect_to_db
import csv
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
app.debug = True


@app.route("/")
def index():
    with open('2nd_ELA.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        headers = []
        names = []
        EL = []
        september_scores = []
        december_scores = []
        teacher = []
        for row in csv_reader:
            if line_count == 0:
                for item in row:
                    headers.append(item)
                line_count += 1
            else:
                names.append(row[0])
                teacher.append(row[1])
                EL.append(row[2])
                september_scores.append(row[3])
                december_scores.append(row[4])
                line_count += 1
    second_grade_ela = {
        'headers': headers,
        'names': names,
        'EL': EL,
        'teacher': teacher,
        'september_scores': september_scores,
        'december_scores': december_scores
    }
    return jsonify(second_grade_ela)


if __name__ == "__main__":

    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
