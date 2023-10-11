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
# Quick start with Docker
To start the API, ensure you have the proper values for the ```.env``` and the ```env/local.env``` files, then simply run
```
docker compose up -d
```
This will raise the database and the node application in different containers
## Testing inside the container
To run the tests you need to first know the ID of the container the app is running on. To get this information, run ```docker ps```, you'll get an output like this:
```
CONTAINER ID   IMAGE                     COMMAND                  CREATED         STATUS         PORTS                                                  NAMES
d134b749f04a   clean-arch-template-app   "docker-entrypoint.s…"   6 seconds ago   Up 6 seconds   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp              cogsz_api
b83cf338f227   mysql:8.0                 "docker-entrypoint.s…"   2 hours ago     Up 6 seconds   33060/tcp, 0.0.0.0:3906->3306/tcp, :::3906->3306/tcp   cogsz
```
Look for the container with the name "cogsz-api" and copy its id.

Now, we can run the tests using ```docker exec -it <container_id> yarn test```
# Versioning
```
Node v18.12.1
```
# Git
## Run tests before each commit. 
1. Navigate or create a file named ```.git/hooks/pre-commit``` 
##### You can do this with a text editor or command-line text editor like nano or vim.
```
nano .git/hooks/pre-commit
```
2. Add the following content to the  ```pre-commit``` file.
```
#!/bin/bash

# Make the script itself executable
chmod +x "$0"

echo "Running tests..."
yarn test --verbose

# Check the exit status of the test command
if [ $? -ne 0 ]; then
  echo "Tests failed. Commit aborted."
  exit 1
fi
```
3. Save the file and make it executable.
#### In nano

```Ctrl + O``` to save and ```Ctrl + X``` to exit.

4. Make the Hook Executable.
```
chmod +x .git/hooks/pre-commit
```
### Test the Pre-commit Hook:
#### Now, when you attempt to commit changes using ```git commit -m 'your_commit'```, the ```yarn test``` command will run automatically before the commit is allowed. If the tests fail, the commit will be aborted.