# DermaShare

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

Documentation:
Folder Structure:
--src
--app
--components //for shared component. if you want to add multiple shared folder, u can bundling it to folder shared

        --core
            --service // for all service
                product.service.ts
                ...

            --modules
                --home
                    --components /module component
                    --pages
                    .home.module.ts
                    .home.routing.ts
                --products-by-category
                    --components
                    --pages
                        products-by-category
                        product-detail
                    .products-by-category.module.ts
                    .products-by-category.routing.ts
                ...

    --environments //if u need add to more than one env
        --environment.ts //for development
        --environment.prod.ts //for build prod
        ...

    --assets //share assets like fonts, images, etc.
        --fonts
        --images
        ...

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
