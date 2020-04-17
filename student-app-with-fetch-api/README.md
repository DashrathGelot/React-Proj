### student app with rest-api

## setup for spring-boot rest-api

For Spring-Boot rest api first you should replace dbname in src/main/resource/application.property file

mysql> describe studentapp;
+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| id    | int unsigned | NO   | PRI | NULL    | auto_increment |
| name  | varchar(25)  | YES  |     | NULL    |                |
| cpp   | int          | YES  |     | NULL    |                |
| java  | int          | YES  |     | NULL    |                |
| dbms  | int          | YES  |     | NULL    |                |
+-------+--------------+------+-----+---------+----------------+
5 rows in set (0.09 sec)

make sure in your database there is studentapp table available. 

After doing this changes run spring-boot application :
In the project directory, you can run:

### `./gradlew bootRun`

you can see log in the terminal 

### setup for react-app:

## Available Scripts

In the project directory, you can run:

for installing all dependency:
### `npm install`

for run the server:
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## note: Replace proxy in package.json file with your tomcat server due to this project running on local-server
