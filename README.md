# Code Challenge - Luis Fernando Salazar Buitrago

This repository contains my code for the code challenge project. It is a simple application built with Node.js and Express.js and includes operations to manage sprockets and factories. It has been written in TypeScript, to provide type safety and improved readability.

## How to Run

You can run this application in several ways:

### Locally

To run it locally, you need to have Node.js and npm installed on your machine. You can follow the steps below:
(This is going to be an example because we are going to send it as a zip)

1. Clone the repository: `git clone <repo-link>`
2. Navigate to the repository folder: `cd <repo-folder>`
3. Install the dependencies: `npm install`
4. Build the application: `npm build`
5. Run the application: `npm start`

### Docker

Alternatively, you can use Docker to run the application:

1. Build the Docker image: `docker build -t <your-image-name> .`
2. Run the Docker container: `docker run -p 8082:8082 <your-image-name>`

The application will then be accessible at `http://localhost:8082`.

Please note that you need to replace `<repo-link>`, `<repo-folder>`, and `<your-image-name>` with the actual values according to your setup.

### Docker Compose

You can also use Docker Compose to start the application:

1. Run `docker-compose up`

The application will then be accessible at `http://localhost:8082`.

NOTE: I use 8082 because i was running a personal application on another PORTS and 8082 was empty, you can change it!

## Structure

- /src
  - /controllers
    - sprocketsController.ts
    - factoriesController.ts
  - /models
    - seed_factory_data.json
    - seed_sprocket_types.json
  - /routes
    - sprocketsRoutes.ts
    - factoriesRoutes.ts
  - server.ts
- Dockerfile
- docker-compose.yml
- package.json
- tsconfig.json
- README.md

## Author

Luis Fernando Salazar Buitrago

## ENJOY IT!!!
