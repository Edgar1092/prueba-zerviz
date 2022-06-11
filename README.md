# Prueba zerviz

## Instalacion
Version de angular 8
Recomendable usar node 12.22.1

Ejecutar en una consola `npm install`

## Desarrollo local

Ejecutar `ng serve` para un servidor de desarrollo. Navegar hacia `http://localhost:4200/`.

## Copilacion para produccion

Antes de ejecutar este comando se tiene que revisar y ajustar las rutas bases del environment.prod
Ejecutar `ng build --prod`. 
Se creara la carpeta `dist/`.

## Copilacion para test

Antes de ejecutar este comando se tiene que revisar y ajustar las rutas bases del environment.prod
Ejecutar `ng build --prod --base-href=/test/`. 
Se creara la carpeta `dist/`.
