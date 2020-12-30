# souplicious
UX implementation soup delivery app

This app is bootstraped with "create-react-app"

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Syntax Highlighting in the Editor
To configure the syntax highlighting in your favorite text editor, head to the Babel's docs and follow the instructions. Some of the most popular editors are covered.

Displaying Lint Output in the Editor
Note: this feature is available with react-scripts@0.2.0 and higher.

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first.

A note for Atom linter-eslint users

If you are using the Atom linter-eslint plugin, make sure that Use global ESLint installation option is checked:


Then add this block to the package.json file of your project:

{
  // ...
  "eslintConfig": {
    "extends": "react-app"
  }
}
Finally, you will need to install some packages globally:

npm install -g eslint-config-react-app@0.3.0 eslint@3.8.1 babel-eslint@7.0.0 eslint-plugin-react@6.4.1 eslint-plugin-import@2.0.1 eslint-plugin-jsx-a11y@2.2.3 eslint-plugin-flowtype@2.21.0
We recognize that this is suboptimal, but it is currently required due to the way we hide the ESLint dependency. The ESLint team is already working on a solution to this so this may become unnecessary in a couple of months.

Installing a Dependency
The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with npm:

npm install --save <library-name>
