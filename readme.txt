#
# OFFICAL READ ME FOR RUNNING/SETTING UP PROJECT.
#

1. INSTALL NODE AND ADD ENV PATH VAR
2. INSTALL npm install -g npm

3. Navigate to project dir and run,
npm init -y

4. INSTALL OTHER NEEDED PACKAGED
npm i mongoose body-parser express ejs nodemon

5. (optional) add to package.json under scripts:{}
"dev": "nodemon app.js"

use npm run dev to kick off script w nodemon

6. grab connection url from atlas. Make sure ip on database is 0.0.0.0 so anyone can connect

via atlass under network access, settings should be:
0.0.0.0/0  (includes your current IP address)	anyone can access	active

add to connect line in app.js

7. navigate to project dir and run 
npm run dev
or 
nodemon app.js
node app.js 