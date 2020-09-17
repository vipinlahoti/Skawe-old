module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '172.105.36.186',
      username: 'root',
      // pem: './path/to/pem'
      password: 'V!p!nl@h0t!'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'WiredLynk',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      // PORT: 3000,
      ROOT_URL: 'https://www.wiredlynk.com',
      // MONGO_URL: 'mongodb://localhost/meteor',
      MONGO_URL: 'mongodb://admin:V!p!nlah0t!@172.105.39.79:27017/admin',

      // MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      // abernix/meteord:node-12-base works with Meteor 1.9 - 1.10
      // If you are using a different version of Meteor,
      // refer to the docs for the correct image to use.
      image: 'abernix/meteord:node-12-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true,
    deployCheckWaitTime: 30,
  },

  // mongo: {
  //   version: '3.4.1',
  //   servers: {
  //     one: {}
  //   }
  // },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  proxy: {
    domains: 'wiredlynk.com,www.wiredlynk.com',
    // nginxServerConfig: './config',

    ssl: {
      // Redirect http to https
      forceSSL: true,
      // Enable Let's Encrypt
      letsEncryptEmail: 'vipi.nsl2787@gmail.com'
    }
  }
};
