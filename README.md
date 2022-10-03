# Build server

npm i
npm start

# Build docker image

docker login

# tao docker có tên cypress-included-v10.7.0

docker build -t cypress-included-v10.7.0 .

# tao docker có tên cypress-included-v10.7.0 k có cache

docker build -t cypress-included-v10.7.0 --no-cache .

# run docker

docker run --rm cypress-included-v10.7.0

# ssh

docker run --rm -it cypress-included-v10.7.0 bash

# docker images

docker images
docker image tag cypress-included-v10.7.0 hieutrancypress/cypress-included-v10.7.0:1.0.0

# access denied

1. create a access_token
2. create a repo (15109889/hieutrancypress)
3. docker tag cypress-included-v10.7.0:latest 15109889/hieutrancypress:v1
4. docker push 15109889/hieutrancypress:v1

# How to install and run cypress:

- cd e2e_automation
- yarn
- yarn install cypress
- yarn cypress open
- clicking on "analyticDatabaseChart.feature" file to run

# How to general report:

- node generate.js
