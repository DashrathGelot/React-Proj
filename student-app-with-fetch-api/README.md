### student app with rest-api

## setup for spring-boot rest-api

For Spring-Boot rest api first you should replace dbname in src/main/resource/application.property file

mysql> CREATE TABLE studentapp(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(20),
	cpp INT,
	java INT,
	dbms INT 
	);

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

## note: Replace cross-origins in studentapp/rest/StudentController.java file with your web server due to this project running on local-server
