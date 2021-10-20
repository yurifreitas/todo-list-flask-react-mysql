from flask import Flask, jsonify, request
import json
import mysql.connector
import logging
import os

app = Flask(__name__)

config = {
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD'),
    'host': os.getenv('DB_HOST'),
    'port': os.getenv('DB_PORT'),
    'database': os.getenv('DB_NAME')
}


@app.route('/api/tasks', methods=['GET'])
def get_all_tasks():
    connection = mysql.connector.connect(**config)
    cur = connection.cursor()
    try:
        cur.execute("SELECT * FROM db_tasks.tasks")
        row_headers = [x[0]
                       for x in cur.description]  # this will extract row headers
        rv = cur.fetchall()
        json_data = []
        cur.close()
        connection.close()
        if rv:
            for result in rv:
                json_data.append(dict(zip(row_headers, result)))
            return json.dumps(json_data), 200
        else:
            return json.dumps(json_data), 200

    except:
        error = "Erro to get a tasklist"
        logging.error(error)
        return jsonify({"error": error}), 500


@app.route('/api/task', methods=['POST'])
def add_task():
    connection = mysql.connector.connect(**config)
    cur = connection.cursor()
    title = request.get_json()['title']
    descript = request.get_json()['descript']
    try:
        cur.execute(
            "INSERT INTO db_tasks.tasks (title,descript) VALUES ('" + str(title) + "','" + str(descript) + "')")

        idTask = cur.lastrowid
        connection.commit()
        result = {
            'title': title,
            'descricao': descript,
            'id': idTask
        }

        cur.close()
        connection.close()
        return jsonify({"result": result}), 200
    except:
        error = "Erro on create task"+title
        logging.error(error)
        return jsonify({"error": error}), 500


@app.route("/api/task/<id>", methods=['PUT'])
def update_task(id):
    connection = mysql.connector.connect(**config)
    cur = connection.cursor()
    title = request.get_json()['title']
    descript = request.get_json()['descript']
    try:
        cur.execute("UPDATE db_tasks.tasks SET title = '" +
                    str(title) + "',descript = '" +
                    str(descript) + "' where id = " + id)
        connection.commit()

        result = {
            'title': title,
            'descricao': descript
        }
        cur.close()
        connection.close()
        return jsonify({"result": result}), 200
    except:
        error = "Erro on update task"+id
        logging.error(error)
        return jsonify({"error": error}), 500


@app.route("/api/task/<id>", methods=['DELETE'])
def delete_task(id):
    connection = mysql.connector.connect(**config)
    cur = connection.cursor()
    try:
        cur.execute("DELETE FROM db_tasks.tasks where id = " + id)
        connection.commit()
        cur.close()
        connection.close()
        result = {'message': 'task deleted'}
        return jsonify({"result": result}), 200
    except:
        error = "Erro on delete task"+id
        logging.error(error)
        return jsonify({"error": error}), 500


@app.route("/api/task/clearall", methods=['DELETE'])
def delete_all_task():
    connection = mysql.connector.connect(**config)
    cur = connection.cursor()
    try:
        cur.execute("DELETE FROM db_tasks.tasks")
        connection.commit()
        result = {'message': 'tasks deleted'}
        cur.close()
        connection.close()
        return jsonify({"result": result}), 200
    except:
        error = "Erro on delete tasks"
        logging.error(error)
        return jsonify({"error": error}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
