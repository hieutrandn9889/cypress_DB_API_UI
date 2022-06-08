# Build server

npm i
npm start

# Build docker image

docker login

# tao docker có tên test-cypress

docker build -t test-cypress .

# tao docker có tên test-cypress k có cache

docker build -t test-cypress --no-cache .

# run docker

docker run --rm test-cypress

# ssh

docker run --rm -it test-cypress bash

docker images
docker image tag cypress-included-v10.0.2 hieutrancypress/cypress-included-v10.0.2:1.0.0

# verify

example:
docker run -it -v $PWD:/e2e -w /e2e cypress/included:10.0.2
apply:
docker run -it -v $PWD:/e2e -w /e2e hieutrancypress/cypress-included-v10.0.2
docker run -it -v $PWD:/e2e -w /e2e hieutrancypress/cypress-included-v10.0.2 cy:test:dev
