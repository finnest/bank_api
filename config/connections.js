module.exports.connections = {
  localDiskDb: {
    adapter: 'sails-disk'
  },

  mysql: {
    adapter: 'sails-mysql',
    host: 'localhost',
    user: 'root',
    database: 'bank_db'
  }

};
