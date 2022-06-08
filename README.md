# Build server

npm i
npm start

# Build docker image

docker login

# tao docker có tên cypress-included-v10.0.3

docker build -t cypress-included-v10.0.3 .

# tao docker có tên cypress-included-v10.0.3 k có cache

docker build -t cypress-included-v10.0.3 --no-cache .

# run docker

docker run --rm cypress-included-v10.0.3

# ssh

docker run --rm -it cypress-included-v10.0.3 bash

# docker images

docker images
docker image tag cypress-included-v10.0.3 hieutrancypress/cypress-included-v10.0.3:1.0.0

# access denied

1. create a access_token
2. create a repo (15109889/hieutrancypress)
3. docker tag cypress-included-v10.0.3:latest 15109889/hieutrancypress:v1
4. docker push 15109889/hieutrancypress:v1
