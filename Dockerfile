# Bazowy obraz Cypress
FROM cypress/included:14.0.0

# Instalacja brakujących zależności (Xvfb i inne wymagane biblioteki)
RUN apt-get update && apt-get install -y \
    libgtk-3-0 \
    libgbm1 \
    libasound2 \
    libx11-xcb1 \
    libnss3 \
    libxss1 \
    libgdk-pixbuf2.0-0 \
    libxcomposite1 \
    libxrandr2 \
    dbus-x11 \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

# Ustawienie katalogu roboczego
WORKDIR /cypress-e2e

# Kopiowanie plików konfiguracyjnych
COPY package.json package-lock.json ./

# Instalacja zależności
RUN npm install

# Kopiowanie całego projektu do kontenera
COPY . .

# Uruchomienie Xvfb oraz Cypress w trybie GUI
CMD ["sh", "-c", "Xvfb :99 -screen 0 1280x1024x24 & DISPLAY=:99 npx cypress open"]
