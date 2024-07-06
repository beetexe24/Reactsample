<h1 align="center">Assessment</h1>

## OVERVIEW
This is simple application displays location of the user and it's profile information.

## REQUIREMENTS
* PHP 8.1.17 or higher. Use laragon `https://laragon.org/download/` or xampp `https://www.apachefriends.org/download.html`
* Laravel Framework 10.48.12 or higher
* Node v20.11.0 or higher `https://nodejs.org/en/download/package-manager`
* MySql v10.4.28-MariaDB

## INSTALLATION OF THE PROJECT
* Clone the project `git clone https://github.com/beetexe24/Reactsample`
* Open command prompt then navigate to the project folder
* Run `composer install`
* Run `npm install`
* Run `npm run build`
* Provide `.env` file inside the project root folder, then setup database connection
* Run `php artisan migrate`

## USAGE
* Open command prompt then navigate to the project folder
* Run `php artisan serve`, or create a `virtual host` in XAMPP. If you are using Laragon, just right-click, hover to `www`, then select the project
* On the login page, click 'Create Account,' then will automatically login after successful creation of account
* You will be redirected to the home page which displays your profile information which only name can be updated and displays your current geo location
