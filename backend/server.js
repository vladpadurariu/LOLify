const X = require('express');
const app = X();
const PORT = 7707;
const CORS = require('cors');
const bodyParser = require('body-parser');
const appID = 44;
const meta = require('versiony');
const request = require('request');
const x2j = require('xml2js');
const util = require('util');

let builder = new x2j.Builder();
let parser = new x2j.Parser();

// const log = 'essadji@gmail.com';
// const pass = 'VladVlad';
let credentialParts = [];

/**
 * META versioning
 * @type {[type]}
 */
meta.from('package.json');
let premeta = meta.get();
meta.preRelease();
// meta.to();

app.post('/login', CORS(), bodyParser.text(), function (req, res) {
  let result = JSON.parse(req.body);
  let log = result.email;
  credentialParts.push(result.password );
  //    ----- XML LOGIN BUILDER ----- 
  let loginObj = {
    'tun:loginUser': {
      $: {
        'xmlns:tun': ['http://www.tunify.com']
      },
      userName: log,
      userPassword: credentialParts[0],
      appID: appID,
      clientVersion: premeta
    }
  }

  this.login = builder.buildObject(loginObj);
  console.log(login);

  let response = { message: 'POST data passed to backend' }
  res.end(JSON.stringify(response));
})


app.get('/login', CORS(), function (req, res) {
  request.post({
      url: 'https://api.tunify.com/blackbox2/services/tunify3?wsdl',
      body: this.login,
      headers: {
        'Content-Type': 'text/xml'
      }
    },
    function (error, response, body) {
      if (error || response.statusCode != 200) {
        //  ------- TO DO -------
        // Finish the error handling 
        // Server sends 'good' errors to work with

        // throw new Error(error);
      } else {
        parser.parseString(response.body, function (err, result) {
          console.log(util.inspect(result, false, null));    
          // uncomment this ^^^^ line to se the reasons for errors in console.
          let sessionCode = result['ns1:loginUserResponse'].sessionCode[0];
          let userID = result['ns1:loginUserResponse']['configuration'][0].userID[0];
          credentialParts.push(userID, sessionCode);
        });
        // console.dir(util.inspect(response.headers, false, null));
        let sendNudes = { 
          userID: credentialParts[1],
          userPassword: credentialParts[0],
          sessionCode: credentialParts[2] 
        }
        res.end(JSON.stringify(sendNudes));
      }
    })
});

// ----- XML CREDENTIALS BUILDER -----
let credentialsObj = {
  'tun:Credentials': {
    $: {
      'xmlns:tun': ['http://www.tunify.com']
    },
    userID: credentialParts[2],
    userPassword: credentialParts[0],
    appID: appID,
    sessionCode: credentialParts[1],
    locale: ''
  }
}
let credentials = builder.buildObject(credentialsObj);
// console.log(credentials);

app.listen(PORT, () => {
  console.log(`\r\nNODE ::: I started my back end server on port ${PORT}.\r\n`);
});