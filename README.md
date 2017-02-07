[ ![Codeship Status for Marjanca/ng2-retro-board](https://app.codeship.com/projects/4a8d8c50-a5d0-0134-92d2-463b4e974771/status?branch=master)](https://app.codeship.com/projects/190953)

Focus group gathered around researching the possibilities of ng2 and learning how to use FE technologies in general.


**Project:**
Retro board for BEG office regular retrospectives.

**Install:**
You should have <code>angular-cli</code> installed globaly.
So if you don't have it already run:

<code>npm install -g angular-cli</code>

Follow these steps to install and start the app:
- get the code with <code>git clone ..</code>
- <code>cd ng2-retro-board\ngBoardFrontend</code>
- install dependencies with <code>npm install</code>
- run the app with <code>ng serve</code>
- app is now running on <code>http://localhost:4200</code>

**Backend:**
Backend side is built using Gradle. The project will be built using:

<code>gradle build</code>

To run the application, type:

<code>gradle bootRun</code>

Now you can access the backend services (probably at localhost:8080).

The main class is located inside ng2-retro-board\ngBoardBackend\src\main\java\com\zuehlke\ng2retroboard\Ng2RetroBoardApplication.java
