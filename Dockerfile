# Étape 1 : build (dev-friendly)
FROM node:22-slim

WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe TOUTES les dépendances (inclut tsx, typescript, etc.)
RUN npm install

# Copie le reste du code source
COPY . .

# Expose ton port d’API
EXPOSE 3000

# Définit le socket Docker par défaut
ENV SOCKET_PATH=/var/run/docker.sock

# Commande de démarrage
CMD ["npm", "run", "dev"]
