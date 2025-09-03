import requests
import json
import os


dir_path = os.path.dirname(os.path.realpath(__file__))
file_path = os.path.join(dir_path, "jokes.json")


response = requests.get("https://api.chucknorris.io/jokes/random")
data = response.json()
print(data["value"])
print(data.get("value"))


with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, sort_keys=True)