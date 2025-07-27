# 🚀 Guide de Déploiement - Portfolio

## Problèmes Résolus ✅

### 1. Chemins Relatifs
- ✅ Configuré `base: './'` dans `vite.config.js`
- ✅ Les assets utilisent maintenant des chemins relatifs (`./assets/`)
- ✅ Icône favicon corrigée

### 2. Configuration Module
- ✅ Ajouté `"type": "module"` dans `package.json`
- ✅ Suppression des warnings de build

## 🔧 Instructions de Déploiement

### Netlify
1. Connectez votre repo GitHub
2. Configuration de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
3. Déployez !

### Vercel
1. Connectez votre repo GitHub
2. Vercel détecte automatiquement Vite
3. Déployez !

### GitHub Pages
1. Dans votre repo, allez dans Settings > Pages
2. Configurez la source sur "GitHub Actions"
3. Créez `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🐛 Débogage Page Blanche

### Si vous avez encore une page blanche :

1. **Vérifiez la console du navigateur** (F12 > Console)
   - Erreurs JavaScript ?
   - Erreurs 404 sur les assets ?

2. **Testez en local** :
   ```bash
   npm run build
   npm run preview
   ```

3. **Vérifiez les chemins** :
   - Les fichiers dans `dist/assets/` existent ?
   - Le serveur sert-il les fichiers statiques ?

4. **Pour GitHub Pages** :
   - Assurez-vous que la branche et le dossier sont corrects
   - Attendez quelques minutes après le déploiement

5. **Headers de sécurité** :
   - Certains hébergeurs bloquent les modules ES
   - Vérifiez la configuration MIME types

## 📝 Checklist Pre-Déploiement

- [ ] `npm run build` fonctionne sans erreur
- [ ] `npm run preview` affiche le site correctement
- [ ] Tous les liens de navigation fonctionnent
- [ ] Les images/assets se chargent
- [ ] Formulaire de contact configuré
- [ ] Méta-tags et titre personnalisés
- [ ] Favicon présent

## 🌐 URLs de Test

- **Local Dev** : http://localhost:3000
- **Local Build** : http://localhost:4173 (après `npm run preview`)

## 💡 Conseils

- Testez toujours le build en local avant de déployer
- Utilisez les outils de développement pour déboguer
- Vérifiez les logs de déploiement de votre plateforme
- Les changements peuvent prendre quelques minutes à apparaître 