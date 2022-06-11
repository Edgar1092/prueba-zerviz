# Creditos Panda

## Instalacion

Ejecutar en una consola `npm install`

## Desarrollo local

Ejecutar `ng serve` para un servidor de desarrollo. Navegar hacia `http://localhost:4200/`.

## Copilacion para produccion

Antes de ejecutar este comando se tiene que revisar y ajustar las rutas bases del environment.prod
Ejecutar `ng build --prod --build-optimizer=false`. 
Se creara la carpeta `dist/`. y su contenido se subira al servidor en la carpeta `public_html/`

## Copilacion para test

Antes de ejecutar este comando se tiene que revisar y ajustar las rutas bases del environment.prod
Ejecutar `ng build --prod --build-optimizer=false --base-href=/test/`. 
Se creara la carpeta `dist/`. y su contenido se subira al servidor en la carpeta `public_html/test`
