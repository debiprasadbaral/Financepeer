import psycopg2
import cgitb
import sys, json
import pdb, cgi


cgitb.enable()

conn = psycopg2.connect("dbname='postgres' user='financepeer' host='fpdevdb.cotwvjlct5sm.ap-south-1.rds.amazonaws.com' password='TirupatiBalaji'")

cur = conn.cursor()

form = cgi.FieldStorage()

mymode = form.getvalue("mymode", "error")
myitem = form.getvalue("myitem", "error")

print myitem
print mymode

pdb.set_trace()

#data=json.dumps(data)

myDataInPython = json.load(sys.stdin)

#query = "INSERT INTO test VALUES (%s, %s, %s,%s);"
#query =  "INSERT INTO items (info, city, price) VALUES ('{mumbai}','{MUMBAI}',1000);"
#data = ("{tes1t}", "{test1}", "{test1}", "{test1}")
#data=(my_array[0],my_array[1],my_array[2],my_array[3])\
print ("Hello")

print json.dumps(myDataInPython)





cur.execute(query,data)

conn.commit()
conn.close()
cur.close()
