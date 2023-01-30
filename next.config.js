 [{
    "instancePath": "",
    "schemaPath": "#/additionalProperties",
    "keyword": "additionalProperties",
    "params": {
      "additionalProperty": "optimizedImagesInDev"
    },
    "message": "must NOT have additional properties"
  }]

  const withOffline = require('next-offline')
const withImages = require('next-images')
const path = require('path');

const nextConfig = {
   sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withOffline(withImages(nextConfig))
