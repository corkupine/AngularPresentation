# Angular1View
Changes to express-base
-- This changeset showcase using directives to encapsulate various UI concern
-- Two directives are added here
-- 1.   wex-icon   This directive encapsulate use of bootstrap glyphs as a way to format icons (e.g. when using with various interactive buttons/links)
-- 2.	wex-map		A directive that allow embedding of google maps given an address (used to display a provider address when reviewing expenses)


Original express-base README for reference
AngularJS demo using express as the mocked backend
Prerequisite:
	nodejs	http://nodejs.org/download/
	npm		(built-in when you install nodejs)


To start web server:
On command prompt first clear any read only attribute on files
> attrib -R *.* /S

then type
> npm install

There should be no error, next launch express app server
> npm run start

This will show a message
Express server listening on port 3001


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





Using nodejs tools within Visual Studio to load project source
You can load Angular1View within Visual studio, though you will first have to install
nodejs tools from http://nodejstools.codeplex.com/

Then before running the project from visual studio right click on "npm" special folder and click
Update NPM packages menu
This will install express and other node packages,after that you can CTRL + F5 to run the express server.

The URL in this case could be different on your workstation, e.g. 
http://localhost:1337/app

