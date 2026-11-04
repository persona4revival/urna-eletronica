from flask import Flask, render_template

app = Flask(__name__, template_folder="urninha", static_folder="static")

@app.route("/")
def inicio():
    return render_template("urnaelec.html")

app.run(debug=True)
