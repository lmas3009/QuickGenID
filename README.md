# tinyuuid

Length-Controlled UUID Generator

## v1.0.1

### Quick Start

```javascript
const tinyuuid = require('tinyuuid');

// Quick start with with length=undefined
tinyuuid.TinyUUID(); // 2miorbnev7f9iac6mcmk3lithr (26 length)
```

### Details

Length-Controlled UUID Generator

```javascript
const tinyuuid = require('tinyuuid');

// Generate a shortened UUID with length 10
tinyuuid.TinyUUID(10); // dpoeju10bv


// Generate a shortened UUID with length 5
tinyuuid.TinyUUID(10); // myl72


// Generate a shortened UUID with length 7
tinyuuid.TinyUUID(10); // 2miorbn

```

NPM-Package is open-source.

Raise a PR after making any changes.

Happy-Coding to ALL