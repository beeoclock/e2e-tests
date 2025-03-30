FROM cypress/base:14.0.0

# Ustaw katalog roboczy
WORKDIR /cypress-e2e

# Kopiowanie plików konfiguracyjnych
COPY package.json package-lock.json ./

# Instalacja zależności
RUN npm install

# Kopiowanie całego projektu do kontenera
COPY . .

# Uruchomienie Cypress w trybie 'open'
CMD ["npx cypress", "open"]
