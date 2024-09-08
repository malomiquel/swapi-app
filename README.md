# Star Wars Rebels Alliance Search System

Ce projet contient deux services : un **frontend** (React) et un **backend** (Node.js/Hapi). Les deux services sont configurés pour fonctionner avec Docker.

## Prérequis

- [Docker](https://docs.docker.com/get-started/) installé sur votre machine.

## Installation et démarrage du projet

1. Cloner le dépôt depuis le dépôt Git approprié.

```bash
git clone https://github.com/malomiquel/swapi-app.git
cd swapi-app
```

2. Dans la racine du projet, exécutez la commande pour démarrer les services frontend et backend.

```bash
docker compose up
```

ou 

```bash
docker-compose up
```

## Accéder à l'application

Ouvrez votre navigateur et allez à [http://localhost:3000](http://localhost:3000)

## Arrêter les services

Pour arrêter et supprimer les conteneurs, exécutez :

```bash
docker compose down
```

ou 

```bash
docker-compose down
```