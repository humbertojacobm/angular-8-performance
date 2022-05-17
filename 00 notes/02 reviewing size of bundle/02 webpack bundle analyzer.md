why my application is so big

we can use Webpack bundle analyzer

this is giving me a report.
wich package is using more space or not

we are in the minute 2 of the video 2 of 7.

npm i webpack-bundle-analyzer --save-dev

ng build --prod --stats-json
crea el archivo stats-es2015.json

luego

npx webpack-bundle-analyzer dist/platzi-store-perf/stats-es2015.json

npx: se usa para ejecutar comandos en librerias que estan en el proyecto.

in browser use : 127.0.0.1:8888

