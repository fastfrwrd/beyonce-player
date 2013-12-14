#!/bin/bash
cd `dirname $0`

MEDIA='./public/media'
if [ ! -h $MEDIA ]
  then
    echo "Linking *~*Beyoncé*~* from iTunes..."
    ln -s ~/Music/iTunes/iTunes\ Media/Music/Beyoncé/BEYONCÉ ./public/media
fi

echo "Turning on Node..."
source ./env/bin/activate
npm install

echo "Starting up server..."
node ./app.js &

echo "Opening Chrome"
open -a Google\ Chrome http://localhost:3000 --args --new-window