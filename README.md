

# @vicod3x/popup_package

`@vicod3x/popup_package` est une popup légère et personnalisable conçue spécifiquement pour React. Facile à intégrer et à utiliser, elle est parfaite pour enrichir vos applications React avec des interactions dynamiques. Ce package a été développé dans le cadre du projet 14 d'OpenClassrooms.



## Prérequis

Avant d'intégrer `@vicod3x/popup_package` à votre projet, assurez-vous de respecter les conditions suivantes :
- Node.js (version 12.x ou supérieure)
- Un éditeur de texte tel que Visual Studio Code, recommandé pour une meilleure intégration avec les outils de développement React.




## Installation

1. **Ajout du package :** Utilisez la commande suivante dans votre terminal pour installer le package dans votre projet React :
    ```bash
    npm install @vicod3x/popup_package
    ```

2. **Importation du composant :** Intégrez la popup dans votre application React comme indiqué ci-dessous :

    ```javascript
    import React, { useState } from 'react';
    import Popup from '@vicod3x/popup_package';

    function App() {
      const [isOpen, setOpen] = useState(false);

      return (
        <div>
          <button onClick={() => setOpen(true)}>Ouvrir la Popup</button>
          <Popup
            isOpen={isOpen}
            onClose={() => setOpen(false)}
            content={MonContenuPerso}
          />
        </div>
      );
    }

    export default App;
    ```






## Propriétés

Le composant `Popup` accepte les propriétés suivantes pour une personnalisation facile :

- `isOpen` (booléen) : Contrôle la visibilité de la popup.
- `onClose` (fonction) : Fonction appelée pour fermer la popup.
- `content` (élément React) : Contenu affiché à l'intérieur de la popup.





## Personnalisation des styles

Personnalisez l'apparence de votre popup en modifiant le fichier `index.css` inclus dans le package. Vous pouvez également ajouter vos propres classes CSS pour adapter les styles par défaut à vos besoins.




## Contribuer

Nous encourageons la contribution à ce projet ! Pour contribuer, fork le dépôt GitHub, apportez vos modifications et soumettez une pull request.




## Licence

`@vicod3x/popup_package` est distribué sous la licence MIT, autorisant une utilisation libre et ouverte du logiciel. Pour plus de détails, consultez le fichier LICENSE inclus.

























