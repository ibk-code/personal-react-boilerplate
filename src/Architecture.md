The frontend folder structure is bootstraped from a personal folder structure created by me. This structure is built on create react app and use the DDD (Design driven domain) folder approach pattern.

N:B Their are chances to see folders and files not used on this project. This are test files and folders that guide users when using this project structure

To start this project, run the following command

create a ..env at the root of your project and add 
"SKIP_PREFLIGHT_CHECK=true"

npm install - to install important dpendencies
npm start - to start
npm run build - to make a build version

Project folders description

Asset - Holds all asset for the project e.g images, fonts and other files to be stored on the frontend.

Components - The components folder holds custom component that will be used accross the whole file system of the application.

Context - This folder holds all services of the application. It serves as the state management folder of the application

Hooks - Custom hooks created used within the application are stored within this folder

Layout - Layout folder holds all format of page layout that is used within the application

Sass - The Sass folder House all the css file. All css file are written in Sass preprocessor format.

Screens - The screens folder holds all screens within the application. Screens can either be created as a single file or created as a folder under the screens folder if it has a custom component personalized for the screen created under a component folder within the screens folder

Shared - This is folder holds all shared kind of component within the application e.g Navigation component, Sidenav component.

Utils - This folder holds all helpers file and all sample file for an application e.g  Simple mock json data.

styleguide - The styleguide holds the style systems of the application. The necessary style systems of the application.

Thank you :)
