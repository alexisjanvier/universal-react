## Runnning React Router v4, SSR, Redux Saga and Code Splitting together

This repository contains the code of a POC seeking to run a React application including React Router v4, Redux Saga, providing splitting code and compatible with *server side rendering*.

### Installation

* clone the repository
* install the dependencies with `make install`

### Start servers

You can start the servers with pm2 by running `make start`.
And stop them with `make stop`.

### Follow the POC's steps

A [blog post](https://marmelab.com/blog/2017/10/17/code-splitting.html) details the implementation of this POC.
You can follow the various steps by following the repository tags :

* step-1          Bootstrap application
* step-2          First simple code splitting
* step-3          SSR without code splitting
* step-4          Dynamic code splitting working client side
* step-5          Dynamic code splitting working server side


The final code including a redux saga is on the master branch.

## React Router v4, SSR, Redux Saga et Code Splitting sont dans un bateau

Ce dépot contient le code d'un POC cherchant à faire fonctionner une application React incluant React Router v4, Redux Saga, fournissant du code splitting et compatible avec du *server side rendering*.

### Installation

* cloner le dépôt
* installer les dépendances avec un `make install`

### Lancer les serveurs

Vous pouvez lancer les serveurs avec pm2 en lançant `make start`.
Et les arrêter avec un `make stop`.

### Suivre l'évolution du POC

Un [post de blog](http://alexisjanvier.net/rr4-ssr-redux-code-splitting-dans-un-bateau) détaille la mise en place de ce POC.
Vous pouvez suivre les différentes étapes en suivant les tags du dépôt :

* step-1          Code de l'application de départ
* step-2          Premier code splitting
* step-3          Mise en place du rendu serveur sans code splitting dynamique
* step-4          code splitting dynamique côté client
* step-5          code splitting dynamique côté serveur

La code final incluant en plus une redux saga correspond à la branche master.
