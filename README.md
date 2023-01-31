# Kanban Board

Minimalistic Kanban board.

## Design

This project is in an early stage and I haven't yet designed or thought about the whole application. Here is the first draft.

![Kanban boards](.readme/Board-view-Kanban-Boards.png)

![Kanban boards](.readme/Board-view-Kanban-Board.png)

See the Figma viewer : [Kanban Board Design](https://www.figma.com/file/Stxq8Mwo3vQn3pOG09MSZ8?embed_host=share&kind=&node-id=0%3A1&t=lBm5dv7LG469OUzt-1&viewer=1)

## Technologies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Requirements

- [NPM](https://www.npmjs.com/)

## Configuration

### Create a new project

- First create a new project, for that, login to your console at
<https://console.firebase.google.com/>

![firebase-console](.readme/01-firebase-console.png)

- Choose a name to your project

![firebase-create-project](.readme/02-firebase-create-project.png)

![firebase-project-created](.readme/03-firebase-project-created.png)

### Authentication

![firebase-project-created](.readme/authentication-01-build.png)
![firebase-project-created](.readme/authentication-02-set-up-auth.png)
![firebase-project-created](.readme/authentication-03-choose-auth.png)
![firebase-project-created](.readme/authentication-04-auth-google.png)
![firebase-project-created](.readme/authentication-05-auth-google-added.png)
![firebase-project-created](.readme/authentication-06-email-added.png)
![firebase-project-created](.readme/authentication-07-auth-done.png)

### Firestore

- First add Firebase to the created application, choose the web version.

![firebase-project-created](.readme/04-firebase-add-app.png)
![firebase-project-created](.readme/05-firebase-create-app.png)
![firebase-project-created](.readme/06-firebase-register-app.png)
![firebase-project-created](.readme/07-firebase-choose-product.png)
![firebase-project-created](.readme/08-firebase-product-firestore.png)
![firebase-project-created](.readme/09-A-firebase-firestore-create-database.png)
![firebase-project-created](.readme/09-B-firebase-firestore-create-database-test.png)

![firebase-project-created](.readme/10-firebase-firestore-create-database-location.png)

![firebase-project-created](.readme/11-firebase-firestore-create-database-done.png)

### Project environment variables

```js
export const environment = {
  production: true,
  firebase: {
    projectId: '',
    appId: '',
    storageBucket: '',
    apiKey: '',
    authDomain: '',
    messagingSenderId: '',
  },
};
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can
also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the
`dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests
via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To
use this command, you need to first add a package that implements end-to-end
testing capabilities.

## Deployment

Run `firebase deploy`to deploy the site to the appropriate project.

## References

- <https://github.com/angular/angularfire>
- <https://firebase.google.com/docs/firestore/use-rest-api>
- <https://www.jeansnyman.com/posts/google-firestore-rest-api-examples/>
- <https://material.angular.io/>
