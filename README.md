# Propeller
A simple and open source project management library.

```js
const express = require('express');
const prop  = require('@sawyerbiv/propeller');
const app = express();

// use passport and stuff

app.post('/new', (req, res) => {
    let user = new prop.User(req.user);
    let project = new prop.Project(req.body.name, user);

    // add to database and stuff

    res.redirect(`/project/${project.id}`);
});
```