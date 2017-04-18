#!/usr/bin/python3

import json
import os

DB_USER = 'cs'
DB_PASSWORD = 'ncsu'
DB_TABLE = 'citizen_science'

#insert shark into sharks table
print( "INSERT INTO sharks (name, description, imgfilename) VALUES('tiger', 'test shark', 'sql/images/tigershark.jpg');" )

json_data = open("data.json").read()
data = json.loads(json_data)

for point in data:
	print( "INSERT INTO teeth (name, imgfilename, measurement, sid) VALUES ('Lamniform', '" + point['filename'] + "', " + str(point['measurement']) + ", 1);" )
