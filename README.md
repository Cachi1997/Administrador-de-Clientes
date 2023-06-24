# Administrador de Clientes

Este proyecto simula una agenda de clientes de una empresa. 

Permite almacenar datos de clientes (Nombre, Apellido, Empresa, email)

Utiliza tecnologias como Tailwind CSS, JSON-Server

## Instalacion 

- Primero instalar el paquete 

```sh
npm i -g json-server
```

- Despues ejecutar el siguiente comando

```sh
json-server --watch db.json
```

Por ultimo

```sh
npm run dev
```

- [click aqui] (https://www.npmjs.com/package/json-server) Para obtener mas informacion sobre json-server 

### Posibles errores

Puede que al ejecutar el comando "json-server --watch db.json" entre en conflicto con las politicas de privacidad de tu sistema, pero esto se soluciona simplemente ejecutandolo de la siguiente forma:

```sh
npx json-server --watch db.json
```