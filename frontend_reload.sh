 docker run -i --rm -v ${PWD}:/app -v /frontend/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true
