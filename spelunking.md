# Model Constraints
What validations do the backend models have?

> Stories must have unique titles and users must have unique email addresses. That's it.

# User Seeding
How does `npm run seed` trigger usrs ending up in the database?
> In the package.json, the seed script is `node seed` which means that the seed.js file is run.  This file contains functions that create 100 unique e-mail addresses as well as names, emails, passwords, and whether or not the user is an admin, using the chance utility library.  It does the same for stories, attaching them to users.  There are two users (Zeke and Ormi) that are always included.  Finally the file syncs the database and runs the `seed` function which creates users and stories.

# State Tree
Diagram out the frontend's state tree — i.e. all states and parent/child relationships. This app has a fairly "shallow" state tree, it should not be especially complicated.

> Initial state is set as users: [] and stories []
> Story: {
        title: '',
        author_id: '',
        paragraphs: [],
        author: {}
      }

# Webpack
How does webpack package up your React/Redux and inject it into the front-end?

> The entry point is designated as app.js in the webpackconfig.js file.  The babel loader is used to parse jsx files into the build/bundle.js which is included as a dependency in index.html.

# CSS
In as much full stack detail as possible, describe what happens when you go to the URL http://127.0.0.1:8080/users.

> - Local CSS dependency = stylesheets/main.css, - Externcal CSS dependency: bootstrap and font-awesome 
> Dealt with by statics middleware

# Users
In as much full stack detail as possible, describe what happens when you go to the URL http://127.0.0.1:8080/users.

> Get request, the internet, blah blah.

# React/Redux
What components and reducers does this app have and what purpose does each one serve?
> Components:

                                      Provider
                                          |
                                       Routes
                                          |
                                        Router
                                          |
                                        Root
                                  /       |       \
                              Navbar*   children  Footer
                                          |
                                          Switch
                                          |
Route: Home   || Route: Login* || Route: Sign-up* || Route: UserList* || Route: UserDetail* || Route: StoryList* || Route: StoryDetail


UserList*    UserDetail*    StoryList*    StoryDetail*
|             |             |             
UserItem      UserItem      StoryItem       
              StoryItem

'*' Uses connect and exports a stateful container





