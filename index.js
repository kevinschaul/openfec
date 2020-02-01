module.exports = {
    init: (key) => require('./lib/api-client').init(key),
    candidate: require('./lib/candidate'),
    committee: require('./lib/committee'),
    reports: require('./lib/reports'),
    efilings: require('./lib/efilings'),
    schedules: require('./lib/schedules')
};
