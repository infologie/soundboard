# Modèle de soundboard

Ceci est un modèle pour fabriquer des *soundboards*, sur le modèle du [Kaamelott Soundboard](https://github.com/2ec0b4/kaamelott-soundboard). Tout le crédit doit être donné aux créateurs et contributeurs du projet d'origine.

## Lancer le projet

Pour faire fonctionner le projet sur votre machine, vous devrez tout d'abord, depuis la racine, exécuter la commande `bower install` puis accéder au fichier `index.html` via le serveur Web de votre choix.

Sinon vous pouvez aussi utiliser [Docker](https://www.docker.com/) avec les commandes suivantes :

```bash
make init
make install
make start
```

(cf. le fichier `Makefile`)

Pour ajouter des sons, ajoutez les fichiers audio (format mp3) dans le répertoire `sounds/` et référencez-les dans le fichier `sounds/sounds.json`.

