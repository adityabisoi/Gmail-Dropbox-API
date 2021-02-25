## Gmail-Dropbox-API
A NodeJS based application to download your **Unread** email attachments from **Gmail** and upload them to **Dropbox** for saving them.

### Installing
* Go to [Gmail API](https://developers.google.com/gmail/api/quickstart/nodejs) and click on `Enable Gmail API`
* Setup client as `web server` and callback as `localhost:3000`
* Download and save `credentials.json` in the parent directory
* Run `npm install` to install required dependencies
* Create a new app in [Dropbox Developers](https://www.dropbox.com/developers) with permissions: `files.content.write`, `files.content.read`, `sharing.read` and `file_requests.read`
* Generate access token and fill it in `dropbox-token.js`
* That's all! Run `npm run download` to download unread attachments, and `num run upload` to upload them to dropbox.
