exports.config = {
    listenPort: '1338',
    sessionSecret: 'keyboard-cat',
    database: {
        IP: 'localhost',
        name: 'zoe-test',
        port: '27017'
    },
    arduinoHomeDatabase: {
        IP: 'localhost',
        name: 'arduino-home',
        port: '27017'
    }
};