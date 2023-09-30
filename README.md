<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Cogs'z API

1. Clone the project
2. ```yarn install```
3. Clone the file ```.env.template``` inside the ```env``` folder and rename it to ```local.env``` 
4. Change the environment variables
5. Clone the file ```.env.template``` and rename it to ```.env```
6. Change the environment variables
7. Raise the database
```
docker-compose up -d
```
8. Start: ```yarn start:dev```

# Docker
Build custom image (Dockerfile):
```
docker build -t image_name .
```
Excecute MySQL(port 3306) container:
```
docker run -d --name my_container -p 3306:3306 image_name
```
Logs:
```
docker logs container_name
```
Down the database:
```
docker-compose down
```
# Versioning
```
Node v18.12.1
```