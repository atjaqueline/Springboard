from flask import Flask, render_template, request
from forex_python.converter import CurrencyRates, CurrencyCodes
from flask_debugtoolbar import DebugToolbarExtension


app = Flask(__name__)
app.config['SECRET_KEY'] = "mysecret"
c = CurrencyRates(force_decimal=False)
cc = CurrencyCodes()

@app.route("/")
def root():
    """Render homepage."""

    return render_template("index.html")


@app.route("/", methods=['POST'])
def display_results():
    input1 = request.form.get("input1")
    input2 = request.form.get("input2")
    amount = request.form.get("amount")
 

    converted = c.convert(input1, input2, amount)
   
    symbol = cc.get_symbol(input2)

    return render_template("result.html", converted=converted, symbol = symbol)
            




