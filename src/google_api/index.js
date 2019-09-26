const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const nsHttp = require("http");
const nsUrl = require("url");
const nsPath = require("path");

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = './src/google_api/token.json';

let name = "";
let email = "";
let message = "";

const srv = nsHttp.createServer(function (req, res) {
    const pathname = nsUrl.parse(req.url).pathname;
    const curr_url = new URL("http://localhost:3000" + req.url);
    const search_params = curr_url.searchParams;

    console.log(curr_url);
    // check URL to send the right response
    switch (pathname) {
        case "/favicon.ico":
            res.end();
            break;

        // case "/":
        //     HTTP_SendHtmlFile(res, nsPath.join(__dirname, "test.html"));
        //     break;

        case "/sendData":

            name = search_params.get('name');
            email = search_params.get('email');;
            message = search_params.get('message');;

            HTTP_SendOK(res, "");
            break;

        default:
            HTTP_SendNotFound(res);
            break;
    }
});

function HTTP_SendHtmlFile(res, filepath) {
    fs.readFile(filepath, function (err, data) {
        if (err) {
            HTTP_SendInternalServerError(res);
            return;
        }

        HTTP_SendOK(res, data);
    });
}

function HTTP_SendOK(res, body) {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.readFile('./src/google_api/credentials.json', (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        // Authorize a client with credentials, then call the Google Sheets API.
        authorize(JSON.parse(content), add);
    });

    res.end(body);
}

function HTTP_SendInternalServerError(res) {
    res.writeHead(500, { "Content-type": "text/html" });
    res.end();
}

function HTTP_SendNotFound(res) {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end();
}

srv.listen(8080);


/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        // if (err) return getNewToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error while trying to retrieve access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function listMajors(auth) {
    const sheets = google.sheets({ version: 'v4', auth });
    sheets.spreadsheets.values.get({
        spreadsheetId: '1RuTRj75SA2CtPf1NebV5tNbcvuYVuwgmbGUYa9zhy6o',
        range: 'Class Data!A2:E',
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const rows = res.data.values;
        if (rows.length) {
            console.log('Name, Major:');
            // Print columns A and E, which correspond to indices 0 and 4.
            rows.map((row) => {
                console.log(`${row[0]}, ${row[4]}`);
            });
        } else {
            console.log('No data found.');
        }
    });
}
const add = function add(auth) {
    const sheets = google.sheets({ version: 'v4', auth });
    let values = [
        [name, email, message]
    ]
    let resource = {
        values,
    };
    sheets.spreadsheets.values.append({
        spreadsheetId: '1RuTRj75SA2CtPf1NebV5tNbcvuYVuwgmbGUYa9zhy6o',
        range: 'Message!A1:C1',
        valueInputOption: 'RAW',
        resource,
    }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
    });
}

