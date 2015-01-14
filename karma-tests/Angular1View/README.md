# Angular1View
This folder contains karma driven unit tests and protractor driven UI end to end tests.
Test
======
After running the demo (see Setup section below), run following on prompt to run unit tests

> npm run test

To run protractor end 2 end tests launch two separate command shells
On one shell issue
> npm run start
Once the app has started confirm by launching URL
http://localhost:3001

Then on another shell issue
> npm run protractor

To explore test modules see folder ./ui/test

Setup
======


Prerequisite:
	nodejs	http://nodejs.org/download/
	npm		(built-in when you install nodejs)

To start web server:
On command prompt first clear any read only attribute on files
> attrib -R *.* /S

then type
> npm install

There should be no error. Next, launch express app server
> npm run start

This will show the message:
"Express server listening on port 3001"

Browse to following URL
http://localhost:3001/app

Browser should present following content

1View Dashboard
Search:  [        ]
Pharmacy Jan 18, 2011 Pain reliever $10.20
Pharmacy Feb 19, 2012 Bandages $5.30
Dental Mar 23, 2013 Cleaning $150.00
Pharmacy Apr 23, 2012 Cold medicine $13.65
Chiropractic Aug 21, 2014 Adjustment $110.85
Dental Oct 23, 2014 Filling $85.25


Using nodejs tools within Visual Studio to load project source:

You can load Angular1View within Visual studio, though you will first have to install
nodejs tools from http://nodejstools.codeplex.com/

Before running the project from visual studio right-click on "npm" special folder and click
"Update NPM packages menu"
This will install express and other node packages. After that, you can CTRL + F5 to run the express server.

The URL in this case could be different on your workstation, e.g.
http://localhost:1337/app
