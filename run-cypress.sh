#!/bin/bash

OS=$(uname)

if [[ "$OS" == "MINGW"* || "$OS" == "CYGWIN"* ]]; then
    echo "Wykryto Windows (Git Bash)"

    if [[ -z "$DISPLAY" ]]; then
        export DISPLAY=host.docker.internal:0.0
        echo "Ustawiono DISPLAY na: $DISPLAY"
    fi

    if [[ -z "$(docker images -q cypress-gui)" ]]; then
        echo "Obraz 'cypress-gui' nie znaleziony. Budowanie..."
        docker build -t cypress-gui
    else
        echo "Obraz 'cypress-gui' już istnieje."
    fi

    if command -v winpty &> /dev/null; then
        WINPTY="winpty"
    else
        WINPTY=""
    fi

    $WINPTY docker run --rm -it \
        -e DISPLAY=$DISPLAY \
        -v $(pwd):/cypress-e2e \
        --network host \
        cypress-gui

else
    echo "Ten skrypt działa tylko w Git Bash na Windowsie."
fi
