# 8Ball

A magic 8 ball style app that uses a node.js backend with a react.js frontend to display an answer to a users question.

The Node.js backend uses the Express framework and was created using the [Express Application Generator](https://expressjs.com/en/starter/generator.html).

All that was modifed was the [index.js](https://github.com/Burkie11/8Ball/blob/master/8Ball_backend/routes/index.js) in /routes as well as as adding the cors module to the app.js file.

The react application was created using the [Create React App generator](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app). Modifications were then applied to the [App.js]((https://github.com/Burkie11/8Ball/blob/master/8ball_frontend/src/App.js)  file and [App.css]((https://github.com/Burkie11/8Ball/blob/master/8ball_frontend/src/App.css) files.

The backend runs on port 3000, the frontend run on port 3001.

When the shake button is pressed on the frontend page it sends a request to the backend application which then returns a random string from an array of responses which is rendered on the page. 


