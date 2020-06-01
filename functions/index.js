const functions = require('firebase-functions');
const {Storage} = require("@google-cloud/storage");
const os = require("os");
const path = require("path");
// const spawn = require('child-process-promise').spawn;

const projectId = "wickid-sense";
let gcs = new Storage ({
    projectId
});

// exports.onFileChange = functions.storage.object().onFinalize(event => {
//     const bucket = event.bucket;
//     const contentType = event.contentType;
//     const filePath = event.name;
//     console.log("file changed, function started");

//     if (event.resourceState === "not_exists") {
//         console.log("File deleted, exit...");
//         return;
//     }

//     if (path.basename(filePath).startsWith("rename-")) {
//         console.log("already converted");
//         return;
//     }

//     const destBucket = gcs.bucket(bucket);
//     const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
//     const metadata = {contentType: contentType};
//     return destBucket.file(filePath).download({
//         destination: tmpFilePath
//     })
//     // .then(() => {
//     //     return spawn('convert', [tmpFilePath, '-resize', '500x500', tmpFilePath]);
//     // })
//     .then(() => {
//         return destBucket.upload(tmpFilePath, {
//             destination: "convert-" + path.basename(filePath),
//             metadata: metadata
//         });
//     });
// });
