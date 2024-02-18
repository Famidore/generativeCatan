from quart import Quart, render_template, websocket, send_file, make_response
import os
import subprocess
import asyncio

app = Quart(__name__)


@app.route("/", methods=["GET", "POST"])
async def index():
    return await render_template("index.html")


@app.route("/static/<path:path>")
async def serve_static(path):
    return await send_file(path)


@app.route("/catan", methods=["GET", "POST"])
async def catan():
    with open("src\\app\\config\\ip_addr.txt") as f:
        ip_addr = f.readline()
    return await render_template("catan.html", ip_addr=ip_addr)


@app.after_request
async def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response


if __name__ == "__main__":
    asyncio.run(app.run_task(debug=True, host="0.0.0.0", port=5000))
