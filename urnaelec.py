from flask import Flask, render_template

app = Flask(__name__, template_folder="urninha", static_folder="static")

@app.route("/")
def inicio():
    return render_template("urnaelec.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5500)
