const { Client } = require('pg');

async function getConnectionBd() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'alejo',
    password: 'admin123',
    database: 'my_store'
  });
  await client.connect();
  return client;
}
module.exports = getConnectionBd;


