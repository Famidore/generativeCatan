from quart import Quart, render_template, websocket, send_file
import os
import subprocess
import asyncio

app = Quart(__name__)


@app.route("/", methods=["GET", "POST"])
async def index():
    return await render_template("index.html")


# @app.route("/city", methods=["GET", "POST"])
# async def download_city():
#     file_path = app.root_path + "\\static\\js\\objects\\simpleCity.obj"
#     return await send_file(file_path, as_attachment=True)


@app.route("/static/<path:path>")
async def serve_static(path):
    return await send_file(path)


@app.route("/catan", methods=["GET", "POST"])
async def catan():
    return await render_template("catan.html")


if __name__ == "__main__":
    asyncio.run(app.run_task(debug=True, host="0.0.0.0", port=5000))
