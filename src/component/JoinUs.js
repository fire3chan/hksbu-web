import React from 'react';
import '../css/joinUs.css';

// const readline = require('readline');

// const { google } = require('googleapis');

// Initialize authentication object
// const auth = new google.auth.OAuth2();


class JoinUs extends React.Component {

    sendData() {
        // auth.setCredentials({ access_token: process.env.GOOGLE_SHEETS_TOKEN });

        const http = new XMLHttpRequest();
        const url = "https://sheets.googleapis.com/v4/spreadsheets/1RuTRj75SA2CtPf1NebV5tNbcvuYVuwgmbGUYa9zhy6o/values/A2:C2:append";
        const data = {
            "range": "Message!A1:C1",
            "majorDimension": "ROWS",
            "values": [
                ["dsgsd", "$15", "2"],
                ["Engine", "$100", "1"],
            ],
            // "auth": auth,
        }

        http.open('POST', url, true);

        //Send the proper header information along with the request
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.onreadystatechange = function () {//Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {
                console.log(http.responseText);
            }
        }
        http.send(data);


    }


    // sendData() {
    //     const sheets = google.sheets({ version: 'v4', auth });
    //     let values = [
    //         ["dsgsd", "$15", "2"],
    //         ["Engine", "$100", "1"],
    //     ]
    //     let resource = {
    //         values,
    //     };
    //     sheets.spreadsheets.values.append({
    //         spreadsheetId: '1RuTRj75SA2CtPf1NebV5tNbcvuYVuwgmbGUYa9zhy6o',
    //         range: 'Message!A1:C1',
    //         valueInputOption: 'RAW',
    //         resource,
    //     }, (err, result) => {
    //         if (err) {
    //             // Handle error.
    //             console.log(err);
    //         } else {
    //             console.log(`${result.updates.updatedCells} cells appended.`);
    //         }
    //     });

    // google_api.loadFile();
    // }

    render() {

        return (
            <div className="join-us container">
                <h2>We need you. Join Us Now!</h2>
                <form className="row join-us-row">
                    <div className="col-11 col-md-4 join-us-input-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">NAME</span>
                            </div>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        </div>
                    </div>
                    <div className="col-11 col-md-4 join-us-input-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">EMAIL</span>
                            </div>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        </div>
                    </div>
                    <div className="col-11 col-md-4 join-us-input-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">MESSAGE</span>
                            </div>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        </div>
                    </div>
                </form>
                <div><button type="button" className="btn btn-secondary" onClick={this.sendData}>Submit</button></div>


            </div>


        );
    }
}

export default JoinUs;
