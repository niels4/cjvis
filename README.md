# Code Jam Visualized
<br />

This application can be hosted entirely as static files in any HTTP server.
Here is an example of the app hosted using Google Drive:
[Code Jam Visualized](https://googledrive.com/host/0B2DTdtklfWDybERyb2tjOUdRRUE/index.html)

This project was created to practice developing user interfaces using AngularJS.
I decided to animate an interactive visualization of the Google Code Jam problem "Snapper Chain",
since it was a good example of what a few simple Angular directives and some CSS animations can
produce.

Created using the [AngularJS](http://angularjs.org/) and [Yeoman with the Angular Generator](http://yeoman.io/gettingstarted.html).

### Browsers supported:

The CSS and Animations should work on all the latest version of all browsers, however the native range
slider input is fairly new and not supported universally accross all browsers. I was using
a jQuery plugin that worked great accross all desktop browsers, but was very clunky on
touch screens. The obvious solution would be for the slider directive to use a fallback for
browsers that don't properly support the native range input. However, that was not the point
of this excercise, so for now just use google chrome for the best results.


## License

[The MIT License (MIT)](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Niels Nielsen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
