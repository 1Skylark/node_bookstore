'use strict';

var mongoose = require('mongoose');

var db = function() {
    return {
        config: function(conf) {
            mongoose.connect('mongodb://1Sky:1234@ds119250.mlab.com:19250/bookstore');
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'Connection error'));
            db.once('open', function() {
                console.log('db connection open');
            });
        }
    };
};

module.exports = db();
