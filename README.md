This is an API REST with typescript, node.js and express, simple way to deliver data
routes:
1. /api/diaries (GET method)
   fetch all entries without sensitive data from the json file
2. /api/diaries/: id
   searches for an entry by ID
2. /api/diaries/ (POST method)
   requires a json req body add data to the json file
