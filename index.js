const fs = require('fs');

module.exports = {
    updateBasePath: async function (sourceFilePath, cdnURL) {
        if (!sourceFilePath || !cdnURL) {
            throw new Error("Error: Missing MANDATORY Parameters => sourceFilePath & cdnURL");
        } else {
            let placeHolderRegex = /\{\[BASE_PATH\]\}/g;
            let placeHolderSource = placeHolderRegex.source.replace(/\\/g, "");
            let fileContents = "";
            fs.readFile(sourceFilePath, (err, data) => {
                if (err) {
                    throw new Error(err);
                }

                fileContents = data.toString();

                if (fileContents.indexOf(placeHolderSource) === -1) {
                    throw new Error(`Placeholder missing in markup.\nLookup failed for string pattern: ${placeHolderSource}\n`);
                }
                
                fileContents = fileContents.replace(placeHolderRegex, cdnURL);

                fs.writeFile(sourceFilePath, fileContents, (err) => {
                    if (err) {
                        throw err;
                    }
                });
            });
        }
    }
};
