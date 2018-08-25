# MyEvRideWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

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

## AWS Setup
Setup your AWS environment with this [AWS S3 and CloudFront Instruction](https://rynop.com/2017/04/20/howto-serve-angular2-app-from-s3-and-cloudfront-with-free-https/).
Attention: Be aware of the following points:
1. When creating SSL-Certificate, make sure your region is set to "N. Virgina". The certificate cannot be selected in CloudFront settings when region of the certificate is not "N. Virginia"!
2. Set the "Alternate Domain Names" in your second CloudFront to "yourDomain.com" (don`t leave them empty)
3. For your redirection A-Record in Route53, use your second CloudFront Domain instead of S3 Bucket. S3 Bucket cannot handle HTTPS!

## S3 Management
To upload a new revision of the app, execute the following command from your app dist folder:
`aws s3 cp . s3://your.bucket.name/ --recursive --include "*" --acl public-read --cache-control public,max-age=31536000,no-transform`

## CloudFront Management
After uploading a new revision, you need to tell CloudFront to invalidate the current app and to load the new app from S3:
`aws cloudfront create-invalidation --distribution-id YourDistributionId --paths /*`
