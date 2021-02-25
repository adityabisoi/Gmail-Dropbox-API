var request = require('request');
var fs = require('fs');

const TOKEN = 'dropbox-token.json';

let ACCESS_TOKEN

fs.readFile(TOKEN, (err, content) => {
    if (err) return console.log('Error loading dropbox token:', err);
    ACCESS_TOKEN = JSON.parse(content).token_id
    ls('./attachments/').catch(console.error)
});

async function ls(path) {
    const dir = await fs.promises.opendir(path)
    for await (const dirent of dir) {
        uploadFiles(dirent.name)
    }
}

function uploadFiles(file) {
    var filename ='./attachments/'+file
    var content = fs.readFileSync(filename);

    options = {
        method: "POST",
        url: 'https://content.dropboxapi.com/2/files/upload',
        headers: {
            "Content-Type": "application/octet-stream",
            "Authorization": "Bearer " + ACCESS_TOKEN,
            "Dropbox-API-Arg": "{\"path\": \"/attachments/" + file + "\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
        },
        body: content
    };

    request(options, function (err, res, body) {
        if (err) return console.log("Err : " + err);
        console.log("body : " + body);
    })
}
