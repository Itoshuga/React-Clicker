# Brutalist Clicker Game

Un jeu de clicker minimaliste avec une esthétique brutaliste, développé avec React, TypeScript et Tailwind CSS.

![Brutalist Clicker Game](https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?auto=format&fit=crop&q=80&w=1600&h=900)

## 🎮 Caractéristiques

- **Design Brutaliste**: Interface minimaliste et percutante
- **Système de Points**: Gagnez des points en cliquant et automatiquement
- **Boutique d'Améliorations**: 
  - Améliorations automatiques (PPS - Points Par Seconde)
  - Multiplicateurs de clics
- **Animations**: Effets de particules et animations fluides
- **Multi-langue**: Support du Français et de l'Anglais
- **Sauvegarde Locale**: Progression sauvegardée automatiquement
- **Codes Promo**: Système de codes promotionnels

## 🛠️ Technologies Utilisées

- React 18
- TypeScript
- Tailwind CSS
- i18next (Internationalisation)
- Lucide React (Icônes)
- Vite (Build tool)

## 📋 Prérequis

- Node.js (version 18 ou supérieure)
- npm (inclus avec Node.js)

## 🚀 Installation

1. Clonez le dépôt :
```bash
git clone [url-du-repo]
cd react-clicker
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur et accédez à `http://localhost:5173`

## 🎯 Comment Jouer

1. **Cliquez** sur le bouton principal pour gagner des points
2. Utilisez vos points pour acheter des **améliorations** dans la boutique :
   - Les améliorations PPS génèrent des points automatiquement
   - Les multiplicateurs augmentent les points gagnés par clic
3. Gérez votre stratégie entre améliorations automatiques et multiplicateurs
4. Utilisez le code promo "BRUTAL" pour obtenir un bonus de 50,000 points !

## 🌐 Internationalisation

Le jeu est disponible en :
- 🇫🇷 Français
- 🇬🇧 Anglais

Changez la langue dans les paramètres du jeu.

## 🏗️ Structure du Projet

```
src/
├── components/     # Composants React
├── hooks/         # Hooks personnalisés
├── i18n/          # Fichiers de traduction
├── types/         # Types TypeScript
└── utils/         # Fonctions utilitaires
```

## 📦 Build Production

Pour créer une version de production :

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT
