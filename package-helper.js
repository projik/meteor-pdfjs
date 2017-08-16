function allFilesInDir(folderName) {
    const folder = './' + folderName + '/';
    const fs = require('fs');

    var allFiles = [];
    
    fs.readdirSync(folder).forEach(function(file) {
        allFiles.push(file);
    });

    return allFiles;
}

function allFilesInSubfolders(folderName) {
    var allFiles = [];

    var folderFiles = allFilesInDir(folderName);
    for (var i = 0; i < folderFiles.length; i++) {
        // Is file, add this instead of traversing
        if (folderFiles[i].indexOf('.') != -1) {
            allFiles.push(folderFiles[i]);
        } else {
            allFiles = allFiles.concat(allFilesInDir(folderFiles[i]));
        }
    }
}

module.exports = {
    allFilesInDir: allFilesInDir,
    allFilesInSubfolders: allFilesInSubfolders,
};