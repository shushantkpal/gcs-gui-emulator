
const { Storage } = require('@google-cloud/storage');

const apiEndpoint = process.env.API_ENDPOINT || "http://localhost:8080";
const projectId = process.env.PROJECT_ID || 'someDummyValue';

const storageCon = new Storage({
  projectId: projectId,
  apiEndpoint: apiEndpoint
});

async function getFileListsfromGCP(req, res) {
  try {

    const bucketName = req.params.bucketname
    console.log(bucketName)
    const allbucketss = await storageCon.getBuckets();

    allbucketss.forEach(e => {
      e.forEach(innerBucket => {
        if (innerBucket.id === bucketName) {
          innerBucket.getFiles().then(filesResukt => {
            res.send(filesResukt[0])
          })
        }
      })
    })
  }
  catch (e) {
    console.log(e)
  }
}

async function getBucketList(req, res) {
  try {

    const allbucketss = await storageCon.getBuckets();
    if (allbucketss !== undefined) {
      const bucketsDetail = []
      allbucketss[0].forEach(bucket => bucketsDetail.push({
        bucketname: bucket.name,
        id: bucket.id,
        baseUrl: bucket.baseUrl
      }))

      res.send(bucketsDetail)
    }
  }
  catch (e) {
    console.log(e)
  }
}


module.exports = {
  getFileListsfromGCP,
  getBucketList
};