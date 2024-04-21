# React Extension

Chrome extension template in React.

## How To Use

1. Clone the repository
2. Change project details in the following locations
   - src/static/manifest.json
     - [ ] name
     - [ ] description
     - [ ] default_title
   - package.json
     - [ ] name
     - [ ] description
     - [ ] author
     - [ ] license
   - package-lock.json
     - [ ] name
     - [ ] packages/name
   - webpack.common.js
     - [ ] getHTMLPlugins/title
3. Change extension icon in **static/icon.png**
4. Run `npm i` to install all necessary packages
5. Add customized code in subfolders under **src** folder and **webpack.common.js** file
6. Run `npm start` _(development build)_ or `npm run build` _(production build)_ to generate **dist** folder
7. Use **Load unpacked** and select **dist** folder to add the extension to the browser
