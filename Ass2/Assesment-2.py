import json
with open('ex5.json', 'r') as file:
    data = json.load(file)
new_record = { "id": "1003", "type": "Tea" }

record_exists = False
for record in data:
    if record["type"] == "donut" and record["name"] =="Old Fashioned":
       record["batters"]["batter"].append(new_record)


# Write the updated JSON object back to the file
with open('ex5.json', 'w') as file:
    json.dump(data, file, indent=4)