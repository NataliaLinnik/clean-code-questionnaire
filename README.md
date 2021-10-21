


# Questionnaire

This project is a part of a clean code training exercise. The following code make it possible to render a questionnaire, select the answer and will return the results.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# TODO:
- Update README.md file with task description from: [LINK](https://ccd-school.de/coding-dojo/agility-katas/filling-out-a-questionnaire-i/)

- Create Flow diagram

- User answers we will put in array of numbers like: [2,2,3,1,0,2,4]. Initial array will be [3,3,3,3,3,3,3] filled with "I dont know answers",

```js
    for loop ( 9 ){
        [0,1,0,1,1,1,1]
        array.push(comonentToRenderResults(2,object));
    }

    calculateScore(answers[index], object[index].answers) {

    displayScore()
    calculate everytin

    return true/fasle
    }
```

```
One component that will render results
That component will receive two params:
- question 

{
  "question": "Which of these animals is a mammal?",
  "answers": [
    {
      "Ant": false
    },
    {
      "Bee": false
    },
    {
      "Cat": true
    }
  ]
},

- answer: 2
Output: true/false

{"answer": "bla bla bla"}

<div>

  <p>Question: {{question}}</p>

  <div ngIf="answer is correct">
    <p> Your answer {{Cat}} is correct
  </div>
  <div else>
    <p>Your answer {{Cat}} is not correct
  </div>
```