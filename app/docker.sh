#!/bin/bash

cd front-tier
rm -rf dist
npm  install
ng build  --prod --aot
cd ..
rm -rf middle-tier/src/main/resources/static/*
cp -r front-tier/dist/front-tier/* middle-tier/src/main/resources/static/

cd middle-tier
mvn  -DskipTests=true  clean install
docker build -t brainupgrade/test-app:all-tiers-in-one -f Dockerfile .
docker push brainupgrade/test-app:all-tiers-in-one
