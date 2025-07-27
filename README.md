#  Portfolio Forestier - Développeur Full Stack

Un portfolio artistique et minimaliste inspiré des forêts, créé avec React, Framer Motion et Tailwind CSS.

##  Caractéristiques

- **Design Minimaliste** : Interface épurée avec des animations subtiles
- **Thème Forestier** : Palette de couleurs inspirée de la nature (verts, sauges, mousses)
- **Animations Créatives** : Transitions fluides avec Framer Motion
- **Responsive Design** : Optimisé pour tous les appareils
- **Performance Optimisée** : Code moderne et lightweight
- **Accessibilité** : Conforme aux standards WCAG

##  Sections du Portfolio

1. **Hero** - Introduction artistique avec animations de particules
2. **À Propos** - Présentation personnelle avec cartes interactives
3. **Compétences** - Visualisation créative des compétences techniques
4. **Projets** - Galerie de projets avec cartes hover interactives
5. **Contact** - Formulaire de contact avec animations élégantes

##  Installation et Démarrage

### Prérequis
- Node.js (version 18+ recommandée)
- npm ou yarn

### Installation

```bash
# Cloner le repository (si applicable)
git clone [votre-repo]
cd portfolio-forestier

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Scripts Disponibles

```bash
npm run dev      # Démarrer en mode développement
npm run build    # Construire pour la production
npm run preview  # Prévisualiser la build de production
```

##  Personnalisation

### Couleurs et Thème

Les couleurs sont définies dans `tailwind.config.js` :

```javascript
colors: {
  forest: { /* Verts profonds */ },
  sage: { /* Verts sauge */ },
  moss: { /* Verts mousse */ }
}
```

### Contenu

Modifiez le contenu dans les composants :

- **Hero** : `src/components/Hero.jsx` - Titre, sous-titre, réseaux sociaux
- **About** : `src/components/About.jsx` - Votre histoire, statistiques
- **Skills** : `src/components/Skills.jsx` - Vos compétences et niveaux
- **Projects** : `src/components/Projects.jsx` - Vos projets réalisés
- **Contact** : `src/components/Contact.jsx` - Informations de contact

### Animations

Les animations sont configurées avec Framer Motion :

- Animations d'entrée avec `useInView`
- Transitions au hover
- Effets de parallaxe
- Animations de particules

##  Responsive Design

Le portfolio est entièrement responsive avec des breakpoints :

- **Mobile** : 320px - 768px
- **Tablet** : 768px - 1024px
- **Desktop** : 1024px+

##  Fonctionnalités Avancées

### Curseur Personnalisé
- Curseur feuille (🍃) par défaut
- Curseur pousse (🌱) pour les liens/boutons

### Scrollbar Personnalisée
- Style adapté au thème forestier
- Couleurs harmonieuses

### Effets Visuels
- Particules flottantes
- Dégradés animés
- Effets de glass morphism
- Animations de rotation et de scale
 
## 🛠 Technologies Utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool rapide
- **Framer Motion** - Animations fluides
- **Tailwind CSS** - Styling utilitaire
- **Lucide React** - Icônes modernes
- **React Intersection Observer** - Détection de scroll

##  Structure du Projet

```
Portfolio Pro/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── FloatingElements.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

##  Optimisations Recommandées

### Performance
- Lazy loading des images
- Code splitting par route
- Optimisation des bundles

### SEO
- Méta-tags appropriés
- Structure sémantique HTML
- Open Graph tags

### Accessibilité
- Navigation au clavier
- ARIA labels
- Contraste des couleurs

##  Déploiement

### Netlify
```bash
npm run build
# Déployez le dossier dist/
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
Utilisez GitHub Actions avec le workflow de build automatique.

##  Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request
