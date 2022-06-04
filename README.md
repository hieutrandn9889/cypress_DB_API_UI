# Build docker image

docker login
docker build -t cypress-included-v10.0.2 .
docker images
docker image tag cypress-included-v10.0.2 hieutrancypress/cypress-included-v10.0.2:1.0.0
