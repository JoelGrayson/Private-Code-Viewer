# Private Code Viewer

Ever wanted to share a private codebase with someone without exposing it to the rest of the world? For example, have you wanted to share a private GitHub repository with a potential employer but did not know their GitHub username? This project lets you share that codebase. You can send the URL to an employer and pass them credentials (username and passowrd) to use to sign in or embed the username and password into the link: example.com/?username=joel&password=securepassword.

### Setup
1. Clone this repository
2. Configure the users in `users.js` as a map of username to password.
```js
const users=new Map();
users.set('joel', 'securepassword');
users.set('employer', 'securepassword2');
module.exports=users;
```
3. Copy the files to `views/files` and create `file-list.ejs`. Store the list of files in `file-list.ejs` as a list of div components, like so:
```ejs
<div class="file-link" data-url='/file/components/admin/Admin.tsx'>components/admin/Admin.tsx</div>
<div class="file-link" data-url='/file/components/admin/DataContext.ts'>components/admin/DataContext.ts</div>
<div class="file-link" data-url='/file/path/to/file'>path/to/file</div>
```

### Usage
example.com/file/path/to/file?username=joel&password=securepassword

