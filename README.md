# pets-curd

Introduction
This a nodejs application for creating,fetching and deleting pets data. 

# How to install
git clone https://github.com/anand5434maurya/pets-curd.git

cd pets

# Install  dependencies
npm install

# How to run

node index.js

This will run the backend server at localhost:8000. If all is going well, you should be able to access the url following end point from your Postman

For creating new pets : http://localhost:8000/pets/add
For getting pets data : http://localhost:8000/pets/get
For deleting pets data : http://localhost:8000/pets/delete?id=5fe328b529878927f4160a9b


#sample for creating pets record 
{
    "name":"Dog",
    "age":2,
    "color":"red"
}
