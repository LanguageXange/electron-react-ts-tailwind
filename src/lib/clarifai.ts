// //index.js file

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// // In this section, we set the user authentication, user and app ID, model details, and the URL
// // of the image we want as an input. Change these strings to run your own example.
// ///////////////////////////////////////////////////////////////////////////////////////////////////

// // Your PAT (Personal Access Token) can be found in the Account's Security section
// const PAT = "xx";
// // Specify the correct user_id/app_id pairings
// // Since you're making inferences outside your app's scope
// const USER_ID = "clarifai";
// const APP_ID = "main";
// // Change these to whatever model and image URL you want to use
// const MODEL_ID = "food-item-recognition";
// const MODEL_VERSION_ID = "1d5fd481e0cf4826aa72ec3ff049e044";
// const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";

// ///////////////////////////////////////////////////////////////////////////////////
// // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
// ///////////////////////////////////////////////////////////////////////////////////

// const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

// const stub = ClarifaiStub.grpc();

// // This will be used by every Clarifai endpoint call
// const metadata = new grpc.Metadata();
// metadata.set("authorization", "Key " + PAT);

// stub.PostModelOutputs(
//   {
//     user_app_id: {
//       user_id: USER_ID,
//       app_id: APP_ID,
//     },
//     model_id: MODEL_ID,
//     version_id: MODEL_VERSION_ID, // This is optional. Defaults to the latest model version
//     inputs: [
//       { data: { image: { url: IMAGE_URL, allow_duplicate_url: true } } },
//     ],
//   },
//   metadata,
//   (err, response) => {
//     if (err) {
//       throw new Error(err);
//     }

//     if (response.status.code !== 10000) {
//       throw new Error(
//         "Post model outputs failed, status: " + response.status.description
//       );
//     }

//     // Since we have one input, one output will exist here
//     const output = response.outputs[0];

//     console.log("Predicted concepts:");
//     for (const concept of output.data.concepts) {
//       console.log(concept.name + " " + concept.value);
//     }
//   }
// );

// ERROR

// App threw an error during load
// Error: no such Type or Enum 'clarifai.auth.types.AuthType' in Namespace .clarifai.auth.util
//     at Namespace.lookupTypeOrEnum (/Users/Cindy/Desktop/woohoo/.webpack/main/index.js:32262:15)
//     at Field.resolve (/Users/Cindy/Desktop/woohoo/.webpack/main/index.js:31092:94)
//     at Namespace.resolveAll (/Users/Cindy/Desktop/woohoo/.webpack/main/index.js:32161:25)
//     at Namespace.resolveAll (/Users/Cindy/Desktop/woohoo/.webpack/main/index.js:32159:25)
//     at Namespace.resolveAll (/Users/Cindy/Desktop/woohoo/.webpack/main/index.js:32159:25)
//     at Root.resolveAll (/Users/Cindy/Desktop/woohoo/.webpack/main/index.js:32159:25)
//     at Root.resolveAll (/Users/Cindy/Desktop/woohoo/.webpack/main/index.js:34337:43)
//     at Object.loadSync (/Users/Cindy/Desktop/woohoo/.webpack/main/index.js:26977:16)
//     at ./node_modules/clarifai-nodejs-grpc/src/index.js (/Users/Cindy/Desktop/woohoo/.webpack/main/index.js:27029:39)
//     at __webpack_require__ (/Users/Cindy/Desktop/woohoo/.webpack/main/index.js:39776:42)
