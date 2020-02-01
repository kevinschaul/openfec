const client = require('./api-client');

exports.list = (params) => {
    let path = `/efile/filings/`;
    return client.makeApiCall(path, params);
};
