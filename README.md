# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Prerequisites:-Nodejs ,node -v and npm -v 
ng new <app-name>
To create the angular app

ng serve is used for the up the server 

ng lint --->Checking the coding standards

ng test --->In frontend test are called as specs -->specifications

Please use --skip-import --standalone options when executing the command as shown below:
ng generate component welcome --skip-import --standalone


{{}}---->string interpolation means whatever the member variable defined in typescript file we can use in html file to print this 

(click) =handleLogin()--->event binding whenever the click happens in that component some event is happened and handlelogin method calls

twoway binding [(ngModel)]=”username” means which is updated in both the files which is useful when the user enters different names

*ngIf is the angular attribute whenever the condition is applied for the both the file depenedency

Appmodule is the main or first module when the angular bootstraps it.It will be present in main.ts

Difference between href and routerLink?

href will leads to complete page refresh but routerLink will leads to routing not refresh
