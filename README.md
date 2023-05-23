# Show Recordings #

Show Recordings is a ReactJS Single Page Application that allows the end user to browse directories of audio files organized by show name and setlist. The application also includes an audio file player based on the html 5 audio element.

## Technologies Used ##

* React JS
* Typescript
* Vite
* Php

## Usage ##

### Configuration ###

**Environment Variables** - these variables should be defined and placed in .env files per-environment. E.g. '.env.development' or '.env.production'. They will be used by the Vite build process.

* VITE_SHOW_FILES_ROOT_URL - base url for location of audio files on server. This can be relative to root of the SPA.
* VITE_SHOW_FILES_API_URL - the full URL of the api that returns the list of show files and directories.
* VITE_APP_TITLE - the title of the app to be displayed in the header and page title.

### Testing ###

* Add an '.env.development' config file with the relevant variables set. Note that the api.php file in the public directory can be used on a php-enabled server for this purpose, but it may be necessary to configure CORS for this to work properly.
* Ensure that you have Node and NPM installed in your development environment, cd to this directory in a terminal, and issue the following commands.
    ```bash
    npm install
    npm run dev
    ```

### Deployment ###

* Add an '.env.production' config file with the relevant variables set. The following are a good starting point if you are hosting the app in the same folder as your API and show files and directories on a php-enabled server.
    ```bash
    VITE_SHOW_FILES_ROOT_URL=./
    VITE_SHOW_FILES_API_URL=./api.php
    VITE_APP_TITLE=Show Recordings
    ```
* CD to to this directory in a terminal and issue the following commands to build the app for production.
    ```bash
    npm run build
    ```
* Copy the files in the dist directory up to a php-enabled public web server.