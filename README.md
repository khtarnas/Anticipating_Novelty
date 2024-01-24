# Current Status:
on Jan. 23: Now adding to the database in a more useful and complex manner (including a drop down menu for languages). Attempted to set up a footer, but ran out of time (not quite positioned at the bottom yet).

on Jan. 20: Successfully retrieving, parsing and dislaying data from MongoDB database!

on Jan. 9: Now successfully retrieving data from the MongoDb database, not fully displaying it, need to finish that logic in client/src/views/writing/all_writings_view.js

on Dec. 28: Added a cluster on MongoDb, successfully connectd to it and added data. TODO: currently is creating a new collection rather than adding to a preexisting one.

on Nov. 29: Created the foundation of the application with a working and connected front and backend. Started added style and other additions. Next step: just added the writing model. Create a way to add a new writing and to view it. AND/OR get hosting set up.

on Nov. 28: Changed naming conventions to fit desired MVC structure. Added nested routing.

# Set-up Instructions:

The pre-reqs to running this are having [MongoDB](https://www.mongodb.com/docs/manual/installation/) and [NodeJS](https://nodejs.org/en/download/package-manager) installed.

1. Clone the repo onto your local computer
2. Run '''npm install''' in both the client and server folders to generate a node_modules folder in each based on their respective package.json files.
3. Run '''npm run dev''' in server folder and leave running
4. Run '''npm start''' in the client folder -- the link should automatically pop up, but if not, navigate [here](https://localhost:3000/).

# Notes:

- The database for this is a cluster on the Mongodb cloud. The account is accessible via my email. The connection string is pasted directly into the code here, but exclusively because it is the free tier and this is just the testing phase.

# Explanation:

TODO

# Programming Ideas:

- Motion transition between pages (currently have frmaer-motion installed and motion.div is written out in home_view.js and writing_view.js). Unsure what type of motion I want and/or IF I want it.


# Concept Ideas

- Blog: A section for my writing with an elegant display
 - Possibly a way for people to make comments and suggestions (anonymous)
- Code Projects: descriptions of all on-going and viewable projects and github links
- Translation feature: translation ai api? for writing
- Calendar: A place to plan and to organize my life, while also making it public
 - Infinite scroll down the line with a zoom-in and zoom-out feature
- A map: A map of all the places I’ve been and where I would like to go.
 - Google maps api
- A place for media consumed and a rating system

