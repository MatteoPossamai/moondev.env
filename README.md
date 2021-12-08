# moondev.env

An online code editor for remote pair programming and store projects

# What is moondev.env || SaaS

This webapp has been created to develop simple programming projects in an online platform. You can create code in 8 different languages. This languages are HTML, CSS, Javascript, 
Python, PHP, Java, Go, C. It is not only for a single workspace. You can work with other people. You can create a group. In this group, you can create shared files. There is also
the real-time chat, and a list of the partecipant to the group. Then, you can enter the workspace. You can choose what file to work on, and modify it online. The online
content of the workspace is real-time, so you can do pair programming with every person in the group. You will obviusly have your private room. Obviusly, to enter the service,
you will need to create an account. It will also be safe, because the password is hashed using SHA 256. 

# Technology

To create this project has been used the MERN stack. This mean it is based on React for the frontend, NodeJs and ExpressJs for the backend, and MongoDB fpr the database. In particular, 
in the backend there has also been used technology like socket.io(to make real-time chat and editor space), Morgan(to print operation in server) and cors. 

# Logo

The official logo of the application is the MOON, designed by Alen Simic. 

![alt text](https://github.com/MatteoPossamai/moondev.env/blob/master/frontend/src/images/moonBG.png)


# How to run project

To make the project working, you have to download it first. You will also need to have npm installed. When you enter in the directory of both frontend and backend, type in cmd
`npm install`. Then everything needed will be installed, included Axios, socket.io, morgan, nodemon and so on. At this point, you should modify the .env file, with a working
MongoDB Atlas setting. Then, start the server with the `nodemon server` in cmd. Then, server is working. Then you can start the client, typing `npm start` in the frontend 
cmd. Then, you can create your account, or login, and use the complete platform
