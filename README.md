# angular-cdnify

## Install Package:

```
npm i angular-cdnify
```

## Usage example in code:
```
const ngCDN = require("angular-cdnify");
ngCDN.updateBasePath("index.html", "https://mycdn.example.com/some-folder/");
```

_Note: The index.html file should contain the placeholder pattern text {[BASE_PATH]}.  
This placeholder pattern text will get replaced with the cdnURL provided as the second argument to the `updateBasePath` function._

e.g.: `<base href="{[BASE_PATH]}" />`

After invoking `updateBasePath` from the above example, the index.html file will be updated as below:  
`<base href="https://mycdn.example.com/some-folder/" />`