// export default mainCtrl;
// const url = lib.buildAuthorizationEndpoint(redirect_uri, scopes, state)
//
// function mainCtrl($scope) {
//   lib.generateClientCredentials(scope, function(err, access_token) {
//     if (err) {
//       throw err;
//     }
//     const token = access_token.access_token;
//
//     const scopes = access_token.scope;
//   });
//
//   lib.accessToken(code, redirect_uri, function(err, token) {
//     if (err) {
//       return response.end("error\n" + err);
//     }
//     if (token.access_token) {
//       lib.access_token = token.access_token;
//
//       const scopes = token.scope;
//
//       const user = access_token.user;
//     }
//   });
//
//   lib.request(/*options*/){
//     path: '/channels/staffpicks/videos',
//     query: {
//       page: 2,
//       per_page: 10
//     }
//   }, /*callback*/function(error, body, status_code, headers) {
//     if (error) {
//       console.log('error');
//       console.log(error);
//     }
//     else {
//       console.log('body');
//       console.log(body);
//     }
//
//     console.log('status code');
//     console.log(status code);
//     console.log('headers');
//     console.log(headers);
//   });
//
//
// }
