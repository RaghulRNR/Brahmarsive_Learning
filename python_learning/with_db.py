import mysql.connector

'''con = mysql.connector.connect(user='root',
                                password='root',
                                host='localhost')
print(con.get_server_version())'''

with mysql.connector.connect(user='root',password='root',host='localhost') as con:
    print(con.get_server_version())