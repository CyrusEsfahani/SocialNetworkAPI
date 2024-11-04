# Social Media API

This project is a social media API built with Node.js, Express, and MongoDB. It allows users to create and manage thoughts, reactions, and friendships. The API provides endpoints for creating, reading, updating, and deleting users and their associated thoughts and reactions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
- [Models](#models)
  - [User](#user)
  - [Thought](#thought)
  - [Reaction](#reaction)
- [Database Connection](#database-connection)
- [License](#license)

## Installation

1. Clone the repository:
 
    git clone https://github.com/your-username/social-media-api.git
    cd social-media-api
   

2. Install dependencies:
    
    npm install
  

3. Create a `.env` file in the root directory and add your MongoDB URI:
    
    MONGODB_URI=mongodb://127.0.0.1:27017/socialmedia
    PORT=5000
  

4. Start the server:
    
    npm start
   

## Usage

Once the server is running, you can use a tool like Postman or Insomnia to interact with the API. The base URL for the API is `http://localhost:5000/api`.

## API Endpoints

### Users

- **GET /api/users**: Get all users
- **GET /api/users/:userId**: Get a single user by ID
- **POST /api/users**: Create a new user
- **PUT /api/users/:userId**: Update a user by ID
- **DELETE /api/users/:userId**: Delete a user by ID
- **POST /api/users/:userId/friends/:friendId**: Add a friend to a user
- **DELETE /api/users/:userId/friends/:friendId**: Remove a friend from a user

### Thoughts

- **GET /api/thoughts**: Get all thoughts
- **GET /api/thoughts/:thoughtId**: Get a single thought by ID
- **POST /api/thoughts**: Create a new thought
- **PUT /api/thoughts/:thoughtId**: Update a thought by ID
- **DELETE /api/thoughts/:thoughtId**: Delete a thought by ID

### Reactions

- **POST /api/thoughts/:thoughtId/reactions**: Add a reaction to a thought
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**: Remove a reaction from a thought

## Models



### User

The `User` model represents a user in the social media application.