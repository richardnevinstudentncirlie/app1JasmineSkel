app1JasmineSkel
===============

Demonstration of the use of Jasmine and Skel


1. GIT Repository
https://github.com/richardnevinstudentncirlie/app1JasmineSkel.git


2. Clone Repository
cd C:\MScWebTech2\AdvancedRichInterApps\APPS
git clone https://github.com/richardnevinstudentncirlie/app1JasmineSkel.git app1JasmineSkel
git add app/
git status
git commit -a -m “Adding a new file”
git push
git pull


3. Gemfile
# A sample Gemfile
#source "https://rubygems.org"
# gem "rails"

source :rubygems
gem 'rack'


4. config.ru
use Rack::Static,
  :urls => ["/html", "/js", "/css"],
  :root => "app"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'app, max-age=86400'
    },
    File.open('app/html/index.html', File::RDONLY)
  ]
}


5.
bundle install


6.
git remote add origin https://github.com/richardnevinstudentncirlie/app1JasmineSkel.git
git push origin master
git pull


7.
heroku create
Creating desolate-mesa-9336... done, stack is cedar
http://desolate-mesa-9336.herokuapp.com/ | git@heroku.com:desolate-mesa-9336.git
Git remote heroku added


8.
git remote add heroku git@heroku.com:desolate-mesa-9336.git


9.
git push heroku master


10.
http://desolate-mesa-9336.herokuapp.com/

11.
git commit -a -m “Description of change”
git push origin master
git push heroku master
http://desolate-mesa-9336.herokuapp.com/