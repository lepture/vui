# VUI

A UI framework for mobile, built with Vue.


## Design Pattern

VUI provides components that look like native UI in iOS, Android and
Windows UI. However, VUI will not build those animations as in Material
design.


## Development

Clone site for preview:

    $ git clone git@github.com:vui/vui.github.io.git public

Generate site in `public` directory with `jekyll`:

    $ cd public
    $ jekyll build -w

Serve assets with webpack dev server:

    $ npm start

Now visit `http://localhost:9090/ui/index.html`. **Don't forget /index.html**.
