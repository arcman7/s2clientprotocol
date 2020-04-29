var common_pb = require('../s2clientprotocol/common_pb.js');
var data_pb = require('../s2clientprotocol/data_pb.js');
var debug_pb = require('../s2clientprotocol/debug_pb.js');
var error_pb = require('../s2clientprotocol/error_pb.js');
var query_pb = require('../s2clientprotocol/query_pb.js');
var raw_pb = require('../s2clientprotocol/raw_pb.js');
var sc2api_pb = require('../s2clientprotocol/sc2api_pb.js');
var score_pb = require('../s2clientprotocol/score_pb.js');
var spatial_pb = require('../s2clientprotocol/spatial_pb.js');
var ui_pb = require('../s2clientprotocol/ui_pb.js');

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