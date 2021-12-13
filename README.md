# React Native IMC

Correction de l'application IMC en React Native

## Récupération du dépôt

`git clone https://github.com/plarrat/React-Native-IMC.git`

## Installation

Après avoir cloné le dépôt, se positionner dans le répertoire et lancer la commande suivante :

`npm install`

## Lancer l'application

`npm start`

# Informations sur la correction

## Framework CSS

Pour la correction j'ai décidé de tester la librairie **Native Base**, vous pouvez trouver la documentation ici : [documentation NativeBase](https://nativebase.io/)

## UX

J'ai décidé d'opter pour une saisie via un input range afin que l'utilisateur n'ai pas à saisir la moindre donnée.

Certes la sélection au cm près et au kilo près est plus délicate mais c'est contre balancer sur l'immédiateté du résultat (je ne passe pas par un bouton calculer) et le fait de pouvoir slider sur le poids afin de voir à partir de quel poids nous changeons de catégorie.

J'ai également apporté un code couleur sur le résultat pour que ce soit plus impactant pour l'utilisateur
