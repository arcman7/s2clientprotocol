var common_pb = require('./common_pb.js');
var data_pb = require('./data_pb.js');
var debug_pb = require('./debug_pb.js');
var error_pb = require('./error_pb.js');
var query_pb = require('./query_pb.js');
var raw_pb = require('./raw_pb.js');
var sc2api_pb = require('./sc2api_pb.js');
var score_pb = require('./score_pb.js');
var spatial_pb = require('./spatial_pb.js');
var ui_pb = require('./ui_pb.js');

var sc2clientprotocol = {
    common_pb,
    data_pb,
    debug_pb,
    error_pb,
    query_pb,
    raw_pb,
    sc2api_pb,
    score_pb,
    spatial_pb,
    ui_pb,
};

module.exports = sc2clientprotocol;

export default sc2clientprotocol;
