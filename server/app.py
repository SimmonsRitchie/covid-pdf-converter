from flask import Flask, request
import os
from .scrape import scrape_pdfs

# Get and set directory for static files (ie. index.html, css, and bundled JS)
# defaults to 'dist', the default name of Parcel's build directory
build_dir = os.getenv("BUILD_DIR", "dist")
print("Build dir:", build_dir)
app = Flask(__name__, static_folder=f"../{build_dir}", static_url_path="/")
app.config["JSON_SORT_KEYS"] = False


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/scrape", methods=["POST"])
def scrape():
    # Get content from client, process it on server, and return it
    args = request.get_json()
    cases_url = args["casesURL"]
    deaths_url = args["deathsURL"]
    try:
        data = scrape_pdfs(cases_url, deaths_url)
        return {"data": data}, 200
    except Exception as e:
        print(e)
        return str(e), 500
