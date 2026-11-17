from flask import Flask, send_from_directory

app = Flask(__name__, static_folder="static")

@app.route("/")
def inicio():
    return send_from_directory(".", "index.html")

@app.route("/urna eletronics/<path:filename>")
def audio(filename):
    return send_from_directory("urna eletronics", filename)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5500)
