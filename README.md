# React Starter

This is a starter kit for UI development based on React. This package is come with server functionality so you can use it without any server setup.

Just clone this package or download it and extract to a specific folder and run `npm install` on the terminal pointing to the path where you extract this package and you are ready to build your React based UI.

You will need NodeJs installed on your machine, anyway. Just head over to google and search for `NodeJS download` to get it. I recommend to use the stable version, but that's up to you to choose.

Feel free to modify it.

You can take a look inside package.json file in `scripts` property for the list of the commands you can use to run your app.

Don't forget to add `env.js` file on the root directory where you extract this package and give it the following content:

`module.exports = { MAIL_USER: "your_email", MAIL_PASS: "your_password", PORT: 3000 };`

You can set your own values for each property listed above. Otherwise, you can deletes any codes that requires the `env.js` file and the data mentioned above. That won't hurt.

Below are the basic commands to compile and run the app created with this package:

- `npm run dev` -> To build and run the app in development mode.
- `npm run prod` -> To build and run the app in production mode.

Feel free to give feedback and suggestions for this package.
