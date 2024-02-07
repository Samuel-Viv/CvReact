Dans le répertoire du projet, vous pouvez exécuter les commandes suivantes :

npm start
Lance l'application en mode développement.
Ouvrez http://localhost:3000 pour la voir dans votre navigateur.

La page se rechargera lorsque vous apportez des modifications.
Vous pouvez également voir les erreurs de lint dans la console.

npm test
Lance le coureur de tests en mode de surveillance interactif.
Consultez la section sur l'exécution des tests pour plus d'informations.

npm run build
Construit l'application pour la production dans le dossier de build.
Il regroupe correctement React en mode production et optimise la construction pour les meilleures performances.

La construction est minifiée et les noms de fichiers incluent les hachages.
Votre application est prête à être déployée !

Consultez la section sur le déploiement pour plus d'informations.

npm run eject
Remarque : il s'agit d'une opération à sens unique. Une fois éjecté, vous ne pouvez pas revenir en arrière !

Si vous n'êtes pas satisfait de l'outil de construction et des choix de configuration, vous pouvez vous éjecter à tout moment. Cette commande supprimera la seule dépendance de construction de votre projet.

À la place, elle copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les commandes, sauf eject, continueront à fonctionner, mais elles pointeront vers les scripts copiés afin que vous puissiez les ajuster. À ce stade, vous êtes seul.

Vous n'avez pas à utiliser eject. L'ensemble de fonctionnalités sélectionnées convient aux déploiements petits et moyens, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt.

En savoir plus
Vous pouvez en apprendre davantage dans la documentation de Create React App.

Pour apprendre React, consultez la documentation React.

Division du code
Cette section a été déplacée ici : https://facebook.github.io/create-react-app/docs/code-splitting

Analyse de la taille du bundle
Cette section a été déplacée ici : https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Création d'une Progressive Web App
Cette section a été déplacée ici : https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Configuration avancée
Cette section a été déplacée ici : https://facebook.github.io/create-react-app/docs/advanced-configuration

Déploiement
Cette section a été déplacée ici : https://facebook.github.io/create-react-app/docs/deployment

La commande npm run build échoue à minimiser
Cette section a été déplacée ici : https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



Devoir "Optimisez votre Cv en ligne avec React.Js"

1. Votre mission:
   Votre mission , consiste à créer et rendre fonctionnel le site internet d'un futur développeur web.
   
   Les contenus textuels qui vous sont présentés peuvent être modifiés et personnalisés selon vos besoins. Toutefois, la charte graphique doit être respectée.
   Des maquettes vous sont fournies, pour les images libres de droits vous pouvez les trouver sur le site de Pixabay. Vous pouvez remplacer certaines images par les vôtres et les maquettes de vos réalisations.

   Le site doit pouvoir être hébergé et travaillé pour le SEO

   L'hébergement d'un application React chez un hébergeur gratuit étant problématique. L'application React pourra être hébergée sur CodeSandbox ou un autre.

   Le code doit être valide au regard des normes w3c.

2. Le client

  John Doe , en formation de développeur web à besoin d'un site internet pour se présenter sur le marché de l'emploi et recherche un emploi en alternance.

  Son site est développer en HTML, CSS avec l'utilisation du framework Bootstrap. Vous devez cependant ajouter un minimum de css personnalisé.
  John Doe a également besoin d'une application React pour afficher les données de son profil GitHub.
  
3.   1/ L'identité graphique
  - Police : "Nunito Sans"
  - graisse de 400 pour le corp de text et de 600 pour les titre et balises <strong>
  - les icones sont affichées à l'aide de la police Font Awersome en version 6.

      2/ Palette de couleur
  - couleur de fond #eee, texte #444, titres #1e1e1e. Les balises <strong> sont affiché en noir.
  - #0d6efd
  - #444
  - #1e1e1e
  - #eee
  - #000000
    
4. livrabre attendu
  Le livrable est un lien repository GitHub du projet.
ce projet contiendra :
  1 page d'acceuil avec :
      - Une image de fond en pleine page, des balises h1 et h2 , un bouton " En savoir plus " avec un lien vers la section " A propos ". Au-dessus de l'image d'arrière plan doit se superposer un fond de couleur noire, avec une transparence de 0.3.
      - Une section "A propos" avec une présentation de John Doe, sa photo  et ses compétences affichées sous forme de progress bars Bootstrap.
  
   1 page de services avec :
      - La présentation des offres de services que John Doe propose.

   1 page réalisation avec :
      - Le portfolio de John Doe avec au minimum 3 projets, présenter sous forme de bootstrap card.
  
   1 page blog avec:
      - Une introduction de 6 articles, présentés sous forme de bootstrap card.

   1 page contact avec:
      - Un formulaire de contact intégrant les champs nom, e-mail, numéro de téléphone, sujet et message (tous obligatoires).
      - Les coordonées de John Doe: adresse, numéro de téléphone et google map
      - l'image de fond de la section doit être recouverte d'un fond bleu transparent : rgba (0, 105, 255, 0.5)
  
   1 pages avec les mentions légales:
      - l'éditeur du site
      - l'hébergeur du site
      - les crédits , avec un lien pixabay pour les images.
   
   Le header :
      -  Présent sur tout les pages.
      -  Il repend le logo à gauche et la navigation à droite. Sur mobile et tablette la navigation s'affiche sous form de d'icone de "hamburger".
      -  L'élément actif doit pouvoir être affiché dans une autre couleur ou nuance.
      -  Le texte des hyperliens est affiché en majuscule, en utilisant des régles CSS ou une classe Bootstrap.
  
   Le footer:
      - Le  footer est identique sur toute les pages.
      - Il contient 4 colonnes de largeur égale:
            -La 1er avec le nom du développeur , son adresse , son numéro de téléphone et les icones vers ses réseaux professionnels.
            - La 2e colonne reprend les liens vers les differentes pages , à l'exception des réalisations et des articles de blog.
            - La 3e colonne reprend les liens vers les dernières réalisations.
            - La 4e colonne reprend les liens vers les derniers articles de blog.
     - Il repend en plus une ligne copyright et un lien pour remonter  en haut de la page . Ce dernier lien n'apparaît pas lorsque l'utilisateur est positionné en haut de la page, mais doit apparaître lors du défilement.
  
5. Effets graphique
    - Navigation : au survol d'un lien  appliquer un blanc avec une transparence de 0.8.
    - Pages services : la couleur de l'icones devient #cde1f8 au survol de l'article.
    - Bouton retour en haut: la couleur de fond devient #298eff.
      
6. React.JS
   L'application React doit afficher les informations du profil github.


Vous trouverez les impressions écrans du wc3 des differentes pages dans le dossier public.

https://samvivier.alwaysdata.net/index.html 
