from quart import Quart, render_template, websocket
import os
import subprocess
import asyncio

app = Quart(__name__)


@app.route("/", methods=["GET", "POST"])
async def index():
    return await render_template("index.html")


@app.route("/catan", methods=["GET", "POST"])
async def catan():
    return await render_template("catan.html")


if __name__ == "__main__":
    asyncio.run(app.run_task(debug=True, host="0.0.0.0", port=5000))
