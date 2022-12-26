#### MERN CMS

A practice portfolio project by Josh Kaye. Not a tutorial.


Tech used: MongoDB, Mongoose, Express, React, NodeJS, TailwindCSS


### Project Structure

#### Pages:

- Index : show posts
- Tag : Show posts with a given tag
- View Single Post
- Admin : manage posts
  - view all/published/draft posts
  - create post
  - edit single post
  - delete post

#### API Routes:

- GET /api/posts/all -> show all posts
- GET /api/posts/published -> show published posts
- GET /api/posts/drafts -> show draft posts

- GET    /api/post/:slug -> show single post
- POST   /api/post/create -> create new post
- PUT    /api/post/:id -> update single post
- DELETE /api/post/:id -> destroy single post

- GET /api/tag/:tag -> get posts with a tag


### Interesting Features
- custom front-end form validation
- mongodb seeder


### TODO/Bugs
- form validate edit post
- create users/login
- add date validation to form validator
- add tag regex validator. letters, numbers, comma, space only
