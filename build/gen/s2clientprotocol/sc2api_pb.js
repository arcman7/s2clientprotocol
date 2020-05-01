/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var s2clientprotocol_common_pb = require('./common_pb.js');
var s2clientprotocol_data_pb = require('./data_pb.js');
var s2clientprotocol_debug_pb = require('./debug_pb.js');
var s2clientprotocol_error_pb = require('./error_pb.js');
var s2clientprotocol_query_pb = require('./query_pb.js');
var s2clientprotocol_raw_pb = require('./raw_pb.js');
var s2clientprotocol_score_pb = require('./score_pb.js');
var s2clientprotocol_spatial_pb = require('./spatial_pb.js');
var s2clientprotocol_ui_pb = require('./ui_pb.js');
goog.exportSymbol('proto.SC2APIProtocol.AIBuild', null, global);
goog.exportSymbol('proto.SC2APIProtocol.Action', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ActionChat', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ActionChat.Channel', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ActionError', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ActionObserverCameraFollowPlayer', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ActionObserverCameraFollowUnits', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ActionObserverCameraMove', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ActionObserverPlayerPerspective', null, global);
goog.exportSymbol('proto.SC2APIProtocol.Alert', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ChatReceived', null, global);
goog.exportSymbol('proto.SC2APIProtocol.Difficulty', null, global);
goog.exportSymbol('proto.SC2APIProtocol.InterfaceOptions', null, global);
goog.exportSymbol('proto.SC2APIProtocol.LocalMap', null, global);
goog.exportSymbol('proto.SC2APIProtocol.Observation', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ObserverAction', null, global);
goog.exportSymbol('proto.SC2APIProtocol.PlayerCommon', null, global);
goog.exportSymbol('proto.SC2APIProtocol.PlayerInfo', null, global);
goog.exportSymbol('proto.SC2APIProtocol.PlayerInfoExtra', null, global);
goog.exportSymbol('proto.SC2APIProtocol.PlayerResult', null, global);
goog.exportSymbol('proto.SC2APIProtocol.PlayerSetup', null, global);
goog.exportSymbol('proto.SC2APIProtocol.PlayerType', null, global);
goog.exportSymbol('proto.SC2APIProtocol.PortSet', null, global);
goog.exportSymbol('proto.SC2APIProtocol.Request', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestAction', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestAvailableMaps', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestCreateGame', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestData', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestDebug', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestGameInfo', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestJoinGame', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestLeaveGame', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestMapCommand', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestObservation', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestObserverAction', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestPing', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestQuickLoad', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestQuickSave', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestQuit', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestReplayInfo', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestRestartGame', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestSaveMap', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestSaveReplay', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestStartReplay', null, global);
goog.exportSymbol('proto.SC2APIProtocol.RequestStep', null, global);
goog.exportSymbol('proto.SC2APIProtocol.Response', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseAction', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseAvailableMaps', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseCreateGame', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseCreateGame.Error', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseData', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseDebug', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseGameInfo', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseJoinGame', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseJoinGame.Error', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseLeaveGame', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseMapCommand', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseMapCommand.Error', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseObservation', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseObserverAction', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponsePing', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseQuickLoad', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseQuickSave', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseQuit', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseReplayInfo', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseReplayInfo.Error', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseRestartGame', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseRestartGame.Error', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseSaveMap', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseSaveMap.Error', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseSaveReplay', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseStartReplay', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseStartReplay.Error', null, global);
goog.exportSymbol('proto.SC2APIProtocol.ResponseStep', null, global);
goog.exportSymbol('proto.SC2APIProtocol.Result', null, global);
goog.exportSymbol('proto.SC2APIProtocol.SpatialCameraSetup', null, global);
goog.exportSymbol('proto.SC2APIProtocol.Status', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.SC2APIProtocol.Request.oneofGroups_);
};
goog.inherits(proto.SC2APIProtocol.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.Request.displayName = 'proto.SC2APIProtocol.Request';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SC2APIProtocol.Request.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,21,12,13,14,15,22,16,17,18,19,20]];

/**
 * @enum {number}
 */
proto.SC2APIProtocol.Request.RequestCase = {
  REQUEST_NOT_SET: 0,
  CREATE_GAME: 1,
  JOIN_GAME: 2,
  RESTART_GAME: 3,
  START_REPLAY: 4,
  LEAVE_GAME: 5,
  QUICK_SAVE: 6,
  QUICK_LOAD: 7,
  QUIT: 8,
  GAME_INFO: 9,
  OBSERVATION: 10,
  ACTION: 11,
  OBS_ACTION: 21,
  STEP: 12,
  DATA: 13,
  QUERY: 14,
  SAVE_REPLAY: 15,
  MAP_COMMAND: 22,
  REPLAY_INFO: 16,
  AVAILABLE_MAPS: 17,
  SAVE_MAP: 18,
  PING: 19,
  DEBUG: 20
};

/**
 * @return {proto.SC2APIProtocol.Request.RequestCase}
 */
proto.SC2APIProtocol.Request.prototype.getRequestCase = function() {
  return /** @type {proto.SC2APIProtocol.Request.RequestCase} */(jspb.Message.computeOneofCase(this, proto.SC2APIProtocol.Request.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    createGame: (f = msg.getCreateGame()) && proto.SC2APIProtocol.RequestCreateGame.toObject(includeInstance, f),
    joinGame: (f = msg.getJoinGame()) && proto.SC2APIProtocol.RequestJoinGame.toObject(includeInstance, f),
    restartGame: (f = msg.getRestartGame()) && proto.SC2APIProtocol.RequestRestartGame.toObject(includeInstance, f),
    startReplay: (f = msg.getStartReplay()) && proto.SC2APIProtocol.RequestStartReplay.toObject(includeInstance, f),
    leaveGame: (f = msg.getLeaveGame()) && proto.SC2APIProtocol.RequestLeaveGame.toObject(includeInstance, f),
    quickSave: (f = msg.getQuickSave()) && proto.SC2APIProtocol.RequestQuickSave.toObject(includeInstance, f),
    quickLoad: (f = msg.getQuickLoad()) && proto.SC2APIProtocol.RequestQuickLoad.toObject(includeInstance, f),
    quit: (f = msg.getQuit()) && proto.SC2APIProtocol.RequestQuit.toObject(includeInstance, f),
    gameInfo: (f = msg.getGameInfo()) && proto.SC2APIProtocol.RequestGameInfo.toObject(includeInstance, f),
    observation: (f = msg.getObservation()) && proto.SC2APIProtocol.RequestObservation.toObject(includeInstance, f),
    action: (f = msg.getAction()) && proto.SC2APIProtocol.RequestAction.toObject(includeInstance, f),
    obsAction: (f = msg.getObsAction()) && proto.SC2APIProtocol.RequestObserverAction.toObject(includeInstance, f),
    step: (f = msg.getStep()) && proto.SC2APIProtocol.RequestStep.toObject(includeInstance, f),
    data: (f = msg.getData()) && proto.SC2APIProtocol.RequestData.toObject(includeInstance, f),
    query: (f = msg.getQuery()) && s2clientprotocol_query_pb.RequestQuery.toObject(includeInstance, f),
    saveReplay: (f = msg.getSaveReplay()) && proto.SC2APIProtocol.RequestSaveReplay.toObject(includeInstance, f),
    mapCommand: (f = msg.getMapCommand()) && proto.SC2APIProtocol.RequestMapCommand.toObject(includeInstance, f),
    replayInfo: (f = msg.getReplayInfo()) && proto.SC2APIProtocol.RequestReplayInfo.toObject(includeInstance, f),
    availableMaps: (f = msg.getAvailableMaps()) && proto.SC2APIProtocol.RequestAvailableMaps.toObject(includeInstance, f),
    saveMap: (f = msg.getSaveMap()) && proto.SC2APIProtocol.RequestSaveMap.toObject(includeInstance, f),
    ping: (f = msg.getPing()) && proto.SC2APIProtocol.RequestPing.toObject(includeInstance, f),
    debug: (f = msg.getDebug()) && proto.SC2APIProtocol.RequestDebug.toObject(includeInstance, f),
    id: jspb.Message.getField(msg, 97)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.Request}
 */
proto.SC2APIProtocol.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.Request;
  return proto.SC2APIProtocol.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.Request}
 */
proto.SC2APIProtocol.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SC2APIProtocol.RequestCreateGame;
      reader.readMessage(value,proto.SC2APIProtocol.RequestCreateGame.deserializeBinaryFromReader);
      msg.setCreateGame(value);
      break;
    case 2:
      var value = new proto.SC2APIProtocol.RequestJoinGame;
      reader.readMessage(value,proto.SC2APIProtocol.RequestJoinGame.deserializeBinaryFromReader);
      msg.setJoinGame(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.RequestRestartGame;
      reader.readMessage(value,proto.SC2APIProtocol.RequestRestartGame.deserializeBinaryFromReader);
      msg.setRestartGame(value);
      break;
    case 4:
      var value = new proto.SC2APIProtocol.RequestStartReplay;
      reader.readMessage(value,proto.SC2APIProtocol.RequestStartReplay.deserializeBinaryFromReader);
      msg.setStartReplay(value);
      break;
    case 5:
      var value = new proto.SC2APIProtocol.RequestLeaveGame;
      reader.readMessage(value,proto.SC2APIProtocol.RequestLeaveGame.deserializeBinaryFromReader);
      msg.setLeaveGame(value);
      break;
    case 6:
      var value = new proto.SC2APIProtocol.RequestQuickSave;
      reader.readMessage(value,proto.SC2APIProtocol.RequestQuickSave.deserializeBinaryFromReader);
      msg.setQuickSave(value);
      break;
    case 7:
      var value = new proto.SC2APIProtocol.RequestQuickLoad;
      reader.readMessage(value,proto.SC2APIProtocol.RequestQuickLoad.deserializeBinaryFromReader);
      msg.setQuickLoad(value);
      break;
    case 8:
      var value = new proto.SC2APIProtocol.RequestQuit;
      reader.readMessage(value,proto.SC2APIProtocol.RequestQuit.deserializeBinaryFromReader);
      msg.setQuit(value);
      break;
    case 9:
      var value = new proto.SC2APIProtocol.RequestGameInfo;
      reader.readMessage(value,proto.SC2APIProtocol.RequestGameInfo.deserializeBinaryFromReader);
      msg.setGameInfo(value);
      break;
    case 10:
      var value = new proto.SC2APIProtocol.RequestObservation;
      reader.readMessage(value,proto.SC2APIProtocol.RequestObservation.deserializeBinaryFromReader);
      msg.setObservation(value);
      break;
    case 11:
      var value = new proto.SC2APIProtocol.RequestAction;
      reader.readMessage(value,proto.SC2APIProtocol.RequestAction.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 21:
      var value = new proto.SC2APIProtocol.RequestObserverAction;
      reader.readMessage(value,proto.SC2APIProtocol.RequestObserverAction.deserializeBinaryFromReader);
      msg.setObsAction(value);
      break;
    case 12:
      var value = new proto.SC2APIProtocol.RequestStep;
      reader.readMessage(value,proto.SC2APIProtocol.RequestStep.deserializeBinaryFromReader);
      msg.setStep(value);
      break;
    case 13:
      var value = new proto.SC2APIProtocol.RequestData;
      reader.readMessage(value,proto.SC2APIProtocol.RequestData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 14:
      var value = new s2clientprotocol_query_pb.RequestQuery;
      reader.readMessage(value,s2clientprotocol_query_pb.RequestQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 15:
      var value = new proto.SC2APIProtocol.RequestSaveReplay;
      reader.readMessage(value,proto.SC2APIProtocol.RequestSaveReplay.deserializeBinaryFromReader);
      msg.setSaveReplay(value);
      break;
    case 22:
      var value = new proto.SC2APIProtocol.RequestMapCommand;
      reader.readMessage(value,proto.SC2APIProtocol.RequestMapCommand.deserializeBinaryFromReader);
      msg.setMapCommand(value);
      break;
    case 16:
      var value = new proto.SC2APIProtocol.RequestReplayInfo;
      reader.readMessage(value,proto.SC2APIProtocol.RequestReplayInfo.deserializeBinaryFromReader);
      msg.setReplayInfo(value);
      break;
    case 17:
      var value = new proto.SC2APIProtocol.RequestAvailableMaps;
      reader.readMessage(value,proto.SC2APIProtocol.RequestAvailableMaps.deserializeBinaryFromReader);
      msg.setAvailableMaps(value);
      break;
    case 18:
      var value = new proto.SC2APIProtocol.RequestSaveMap;
      reader.readMessage(value,proto.SC2APIProtocol.RequestSaveMap.deserializeBinaryFromReader);
      msg.setSaveMap(value);
      break;
    case 19:
      var value = new proto.SC2APIProtocol.RequestPing;
      reader.readMessage(value,proto.SC2APIProtocol.RequestPing.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    case 20:
      var value = new proto.SC2APIProtocol.RequestDebug;
      reader.readMessage(value,proto.SC2APIProtocol.RequestDebug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 97:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreateGame();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.SC2APIProtocol.RequestCreateGame.serializeBinaryToWriter
    );
  }
  f = message.getJoinGame();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.SC2APIProtocol.RequestJoinGame.serializeBinaryToWriter
    );
  }
  f = message.getRestartGame();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.SC2APIProtocol.RequestRestartGame.serializeBinaryToWriter
    );
  }
  f = message.getStartReplay();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.SC2APIProtocol.RequestStartReplay.serializeBinaryToWriter
    );
  }
  f = message.getLeaveGame();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.SC2APIProtocol.RequestLeaveGame.serializeBinaryToWriter
    );
  }
  f = message.getQuickSave();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.SC2APIProtocol.RequestQuickSave.serializeBinaryToWriter
    );
  }
  f = message.getQuickLoad();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.SC2APIProtocol.RequestQuickLoad.serializeBinaryToWriter
    );
  }
  f = message.getQuit();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.SC2APIProtocol.RequestQuit.serializeBinaryToWriter
    );
  }
  f = message.getGameInfo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.SC2APIProtocol.RequestGameInfo.serializeBinaryToWriter
    );
  }
  f = message.getObservation();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.SC2APIProtocol.RequestObservation.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.SC2APIProtocol.RequestAction.serializeBinaryToWriter
    );
  }
  f = message.getObsAction();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.SC2APIProtocol.RequestObserverAction.serializeBinaryToWriter
    );
  }
  f = message.getStep();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.SC2APIProtocol.RequestStep.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.SC2APIProtocol.RequestData.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      s2clientprotocol_query_pb.RequestQuery.serializeBinaryToWriter
    );
  }
  f = message.getSaveReplay();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.SC2APIProtocol.RequestSaveReplay.serializeBinaryToWriter
    );
  }
  f = message.getMapCommand();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.SC2APIProtocol.RequestMapCommand.serializeBinaryToWriter
    );
  }
  f = message.getReplayInfo();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.SC2APIProtocol.RequestReplayInfo.serializeBinaryToWriter
    );
  }
  f = message.getAvailableMaps();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.SC2APIProtocol.RequestAvailableMaps.serializeBinaryToWriter
    );
  }
  f = message.getSaveMap();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.SC2APIProtocol.RequestSaveMap.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.SC2APIProtocol.RequestPing.serializeBinaryToWriter
    );
  }
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.SC2APIProtocol.RequestDebug.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 97));
  if (f != null) {
    writer.writeUint32(
      97,
      f
    );
  }
};


/**
 * optional RequestCreateGame create_game = 1;
 * @return {?proto.SC2APIProtocol.RequestCreateGame}
 */
proto.SC2APIProtocol.Request.prototype.getCreateGame = function() {
  return /** @type{?proto.SC2APIProtocol.RequestCreateGame} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestCreateGame, 1));
};


/** @param {?proto.SC2APIProtocol.RequestCreateGame|undefined} value */
proto.SC2APIProtocol.Request.prototype.setCreateGame = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearCreateGame = function() {
  this.setCreateGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasCreateGame = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RequestJoinGame join_game = 2;
 * @return {?proto.SC2APIProtocol.RequestJoinGame}
 */
proto.SC2APIProtocol.Request.prototype.getJoinGame = function() {
  return /** @type{?proto.SC2APIProtocol.RequestJoinGame} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestJoinGame, 2));
};


/** @param {?proto.SC2APIProtocol.RequestJoinGame|undefined} value */
proto.SC2APIProtocol.Request.prototype.setJoinGame = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearJoinGame = function() {
  this.setJoinGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasJoinGame = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RequestRestartGame restart_game = 3;
 * @return {?proto.SC2APIProtocol.RequestRestartGame}
 */
proto.SC2APIProtocol.Request.prototype.getRestartGame = function() {
  return /** @type{?proto.SC2APIProtocol.RequestRestartGame} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestRestartGame, 3));
};


/** @param {?proto.SC2APIProtocol.RequestRestartGame|undefined} value */
proto.SC2APIProtocol.Request.prototype.setRestartGame = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearRestartGame = function() {
  this.setRestartGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasRestartGame = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RequestStartReplay start_replay = 4;
 * @return {?proto.SC2APIProtocol.RequestStartReplay}
 */
proto.SC2APIProtocol.Request.prototype.getStartReplay = function() {
  return /** @type{?proto.SC2APIProtocol.RequestStartReplay} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestStartReplay, 4));
};


/** @param {?proto.SC2APIProtocol.RequestStartReplay|undefined} value */
proto.SC2APIProtocol.Request.prototype.setStartReplay = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearStartReplay = function() {
  this.setStartReplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasStartReplay = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RequestLeaveGame leave_game = 5;
 * @return {?proto.SC2APIProtocol.RequestLeaveGame}
 */
proto.SC2APIProtocol.Request.prototype.getLeaveGame = function() {
  return /** @type{?proto.SC2APIProtocol.RequestLeaveGame} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestLeaveGame, 5));
};


/** @param {?proto.SC2APIProtocol.RequestLeaveGame|undefined} value */
proto.SC2APIProtocol.Request.prototype.setLeaveGame = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearLeaveGame = function() {
  this.setLeaveGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasLeaveGame = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RequestQuickSave quick_save = 6;
 * @return {?proto.SC2APIProtocol.RequestQuickSave}
 */
proto.SC2APIProtocol.Request.prototype.getQuickSave = function() {
  return /** @type{?proto.SC2APIProtocol.RequestQuickSave} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestQuickSave, 6));
};


/** @param {?proto.SC2APIProtocol.RequestQuickSave|undefined} value */
proto.SC2APIProtocol.Request.prototype.setQuickSave = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearQuickSave = function() {
  this.setQuickSave(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasQuickSave = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RequestQuickLoad quick_load = 7;
 * @return {?proto.SC2APIProtocol.RequestQuickLoad}
 */
proto.SC2APIProtocol.Request.prototype.getQuickLoad = function() {
  return /** @type{?proto.SC2APIProtocol.RequestQuickLoad} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestQuickLoad, 7));
};


/** @param {?proto.SC2APIProtocol.RequestQuickLoad|undefined} value */
proto.SC2APIProtocol.Request.prototype.setQuickLoad = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearQuickLoad = function() {
  this.setQuickLoad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasQuickLoad = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RequestQuit quit = 8;
 * @return {?proto.SC2APIProtocol.RequestQuit}
 */
proto.SC2APIProtocol.Request.prototype.getQuit = function() {
  return /** @type{?proto.SC2APIProtocol.RequestQuit} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestQuit, 8));
};


/** @param {?proto.SC2APIProtocol.RequestQuit|undefined} value */
proto.SC2APIProtocol.Request.prototype.setQuit = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearQuit = function() {
  this.setQuit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasQuit = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional RequestGameInfo game_info = 9;
 * @return {?proto.SC2APIProtocol.RequestGameInfo}
 */
proto.SC2APIProtocol.Request.prototype.getGameInfo = function() {
  return /** @type{?proto.SC2APIProtocol.RequestGameInfo} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestGameInfo, 9));
};


/** @param {?proto.SC2APIProtocol.RequestGameInfo|undefined} value */
proto.SC2APIProtocol.Request.prototype.setGameInfo = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearGameInfo = function() {
  this.setGameInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasGameInfo = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional RequestObservation observation = 10;
 * @return {?proto.SC2APIProtocol.RequestObservation}
 */
proto.SC2APIProtocol.Request.prototype.getObservation = function() {
  return /** @type{?proto.SC2APIProtocol.RequestObservation} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestObservation, 10));
};


/** @param {?proto.SC2APIProtocol.RequestObservation|undefined} value */
proto.SC2APIProtocol.Request.prototype.setObservation = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearObservation = function() {
  this.setObservation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasObservation = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RequestAction action = 11;
 * @return {?proto.SC2APIProtocol.RequestAction}
 */
proto.SC2APIProtocol.Request.prototype.getAction = function() {
  return /** @type{?proto.SC2APIProtocol.RequestAction} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestAction, 11));
};


/** @param {?proto.SC2APIProtocol.RequestAction|undefined} value */
proto.SC2APIProtocol.Request.prototype.setAction = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearAction = function() {
  this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasAction = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional RequestObserverAction obs_action = 21;
 * @return {?proto.SC2APIProtocol.RequestObserverAction}
 */
proto.SC2APIProtocol.Request.prototype.getObsAction = function() {
  return /** @type{?proto.SC2APIProtocol.RequestObserverAction} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestObserverAction, 21));
};


/** @param {?proto.SC2APIProtocol.RequestObserverAction|undefined} value */
proto.SC2APIProtocol.Request.prototype.setObsAction = function(value) {
  jspb.Message.setOneofWrapperField(this, 21, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearObsAction = function() {
  this.setObsAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasObsAction = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional RequestStep step = 12;
 * @return {?proto.SC2APIProtocol.RequestStep}
 */
proto.SC2APIProtocol.Request.prototype.getStep = function() {
  return /** @type{?proto.SC2APIProtocol.RequestStep} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestStep, 12));
};


/** @param {?proto.SC2APIProtocol.RequestStep|undefined} value */
proto.SC2APIProtocol.Request.prototype.setStep = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearStep = function() {
  this.setStep(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasStep = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional RequestData data = 13;
 * @return {?proto.SC2APIProtocol.RequestData}
 */
proto.SC2APIProtocol.Request.prototype.getData = function() {
  return /** @type{?proto.SC2APIProtocol.RequestData} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestData, 13));
};


/** @param {?proto.SC2APIProtocol.RequestData|undefined} value */
proto.SC2APIProtocol.Request.prototype.setData = function(value) {
  jspb.Message.setOneofWrapperField(this, 13, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasData = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional RequestQuery query = 14;
 * @return {?proto.SC2APIProtocol.RequestQuery}
 */
proto.SC2APIProtocol.Request.prototype.getQuery = function() {
  return /** @type{?proto.SC2APIProtocol.RequestQuery} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_query_pb.RequestQuery, 14));
};


/** @param {?proto.SC2APIProtocol.RequestQuery|undefined} value */
proto.SC2APIProtocol.Request.prototype.setQuery = function(value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearQuery = function() {
  this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional RequestSaveReplay save_replay = 15;
 * @return {?proto.SC2APIProtocol.RequestSaveReplay}
 */
proto.SC2APIProtocol.Request.prototype.getSaveReplay = function() {
  return /** @type{?proto.SC2APIProtocol.RequestSaveReplay} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestSaveReplay, 15));
};


/** @param {?proto.SC2APIProtocol.RequestSaveReplay|undefined} value */
proto.SC2APIProtocol.Request.prototype.setSaveReplay = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearSaveReplay = function() {
  this.setSaveReplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasSaveReplay = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional RequestMapCommand map_command = 22;
 * @return {?proto.SC2APIProtocol.RequestMapCommand}
 */
proto.SC2APIProtocol.Request.prototype.getMapCommand = function() {
  return /** @type{?proto.SC2APIProtocol.RequestMapCommand} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestMapCommand, 22));
};


/** @param {?proto.SC2APIProtocol.RequestMapCommand|undefined} value */
proto.SC2APIProtocol.Request.prototype.setMapCommand = function(value) {
  jspb.Message.setOneofWrapperField(this, 22, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearMapCommand = function() {
  this.setMapCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasMapCommand = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional RequestReplayInfo replay_info = 16;
 * @return {?proto.SC2APIProtocol.RequestReplayInfo}
 */
proto.SC2APIProtocol.Request.prototype.getReplayInfo = function() {
  return /** @type{?proto.SC2APIProtocol.RequestReplayInfo} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestReplayInfo, 16));
};


/** @param {?proto.SC2APIProtocol.RequestReplayInfo|undefined} value */
proto.SC2APIProtocol.Request.prototype.setReplayInfo = function(value) {
  jspb.Message.setOneofWrapperField(this, 16, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearReplayInfo = function() {
  this.setReplayInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasReplayInfo = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional RequestAvailableMaps available_maps = 17;
 * @return {?proto.SC2APIProtocol.RequestAvailableMaps}
 */
proto.SC2APIProtocol.Request.prototype.getAvailableMaps = function() {
  return /** @type{?proto.SC2APIProtocol.RequestAvailableMaps} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestAvailableMaps, 17));
};


/** @param {?proto.SC2APIProtocol.RequestAvailableMaps|undefined} value */
proto.SC2APIProtocol.Request.prototype.setAvailableMaps = function(value) {
  jspb.Message.setOneofWrapperField(this, 17, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearAvailableMaps = function() {
  this.setAvailableMaps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasAvailableMaps = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional RequestSaveMap save_map = 18;
 * @return {?proto.SC2APIProtocol.RequestSaveMap}
 */
proto.SC2APIProtocol.Request.prototype.getSaveMap = function() {
  return /** @type{?proto.SC2APIProtocol.RequestSaveMap} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestSaveMap, 18));
};


/** @param {?proto.SC2APIProtocol.RequestSaveMap|undefined} value */
proto.SC2APIProtocol.Request.prototype.setSaveMap = function(value) {
  jspb.Message.setOneofWrapperField(this, 18, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearSaveMap = function() {
  this.setSaveMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasSaveMap = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional RequestPing ping = 19;
 * @return {?proto.SC2APIProtocol.RequestPing}
 */
proto.SC2APIProtocol.Request.prototype.getPing = function() {
  return /** @type{?proto.SC2APIProtocol.RequestPing} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestPing, 19));
};


/** @param {?proto.SC2APIProtocol.RequestPing|undefined} value */
proto.SC2APIProtocol.Request.prototype.setPing = function(value) {
  jspb.Message.setOneofWrapperField(this, 19, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearPing = function() {
  this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasPing = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional RequestDebug debug = 20;
 * @return {?proto.SC2APIProtocol.RequestDebug}
 */
proto.SC2APIProtocol.Request.prototype.getDebug = function() {
  return /** @type{?proto.SC2APIProtocol.RequestDebug} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.RequestDebug, 20));
};


/** @param {?proto.SC2APIProtocol.RequestDebug|undefined} value */
proto.SC2APIProtocol.Request.prototype.setDebug = function(value) {
  jspb.Message.setOneofWrapperField(this, 20, proto.SC2APIProtocol.Request.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Request.prototype.clearDebug = function() {
  this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional uint32 id = 97;
 * @return {number}
 */
proto.SC2APIProtocol.Request.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 97, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.Request.prototype.setId = function(value) {
  jspb.Message.setField(this, 97, value);
};


proto.SC2APIProtocol.Request.prototype.clearId = function() {
  jspb.Message.setField(this, 97, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Request.prototype.hasId = function() {
  return jspb.Message.getField(this, 97) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.Response.repeatedFields_, proto.SC2APIProtocol.Response.oneofGroups_);
};
goog.inherits(proto.SC2APIProtocol.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.Response.displayName = 'proto.SC2APIProtocol.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.Response.repeatedFields_ = [98];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SC2APIProtocol.Response.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,21,12,13,14,15,16,17,18,22,19,20]];

/**
 * @enum {number}
 */
proto.SC2APIProtocol.Response.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  CREATE_GAME: 1,
  JOIN_GAME: 2,
  RESTART_GAME: 3,
  START_REPLAY: 4,
  LEAVE_GAME: 5,
  QUICK_SAVE: 6,
  QUICK_LOAD: 7,
  QUIT: 8,
  GAME_INFO: 9,
  OBSERVATION: 10,
  ACTION: 11,
  OBS_ACTION: 21,
  STEP: 12,
  DATA: 13,
  QUERY: 14,
  SAVE_REPLAY: 15,
  REPLAY_INFO: 16,
  AVAILABLE_MAPS: 17,
  SAVE_MAP: 18,
  MAP_COMMAND: 22,
  PING: 19,
  DEBUG: 20
};

/**
 * @return {proto.SC2APIProtocol.Response.ResponseCase}
 */
proto.SC2APIProtocol.Response.prototype.getResponseCase = function() {
  return /** @type {proto.SC2APIProtocol.Response.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.SC2APIProtocol.Response.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    createGame: (f = msg.getCreateGame()) && proto.SC2APIProtocol.ResponseCreateGame.toObject(includeInstance, f),
    joinGame: (f = msg.getJoinGame()) && proto.SC2APIProtocol.ResponseJoinGame.toObject(includeInstance, f),
    restartGame: (f = msg.getRestartGame()) && proto.SC2APIProtocol.ResponseRestartGame.toObject(includeInstance, f),
    startReplay: (f = msg.getStartReplay()) && proto.SC2APIProtocol.ResponseStartReplay.toObject(includeInstance, f),
    leaveGame: (f = msg.getLeaveGame()) && proto.SC2APIProtocol.ResponseLeaveGame.toObject(includeInstance, f),
    quickSave: (f = msg.getQuickSave()) && proto.SC2APIProtocol.ResponseQuickSave.toObject(includeInstance, f),
    quickLoad: (f = msg.getQuickLoad()) && proto.SC2APIProtocol.ResponseQuickLoad.toObject(includeInstance, f),
    quit: (f = msg.getQuit()) && proto.SC2APIProtocol.ResponseQuit.toObject(includeInstance, f),
    gameInfo: (f = msg.getGameInfo()) && proto.SC2APIProtocol.ResponseGameInfo.toObject(includeInstance, f),
    observation: (f = msg.getObservation()) && proto.SC2APIProtocol.ResponseObservation.toObject(includeInstance, f),
    action: (f = msg.getAction()) && proto.SC2APIProtocol.ResponseAction.toObject(includeInstance, f),
    obsAction: (f = msg.getObsAction()) && proto.SC2APIProtocol.ResponseObserverAction.toObject(includeInstance, f),
    step: (f = msg.getStep()) && proto.SC2APIProtocol.ResponseStep.toObject(includeInstance, f),
    data: (f = msg.getData()) && proto.SC2APIProtocol.ResponseData.toObject(includeInstance, f),
    query: (f = msg.getQuery()) && s2clientprotocol_query_pb.ResponseQuery.toObject(includeInstance, f),
    saveReplay: (f = msg.getSaveReplay()) && proto.SC2APIProtocol.ResponseSaveReplay.toObject(includeInstance, f),
    replayInfo: (f = msg.getReplayInfo()) && proto.SC2APIProtocol.ResponseReplayInfo.toObject(includeInstance, f),
    availableMaps: (f = msg.getAvailableMaps()) && proto.SC2APIProtocol.ResponseAvailableMaps.toObject(includeInstance, f),
    saveMap: (f = msg.getSaveMap()) && proto.SC2APIProtocol.ResponseSaveMap.toObject(includeInstance, f),
    mapCommand: (f = msg.getMapCommand()) && proto.SC2APIProtocol.ResponseMapCommand.toObject(includeInstance, f),
    ping: (f = msg.getPing()) && proto.SC2APIProtocol.ResponsePing.toObject(includeInstance, f),
    debug: (f = msg.getDebug()) && proto.SC2APIProtocol.ResponseDebug.toObject(includeInstance, f),
    id: jspb.Message.getField(msg, 97),
    errorList: jspb.Message.getRepeatedField(msg, 98),
    status: jspb.Message.getField(msg, 99)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.Response}
 */
proto.SC2APIProtocol.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.Response;
  return proto.SC2APIProtocol.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.Response}
 */
proto.SC2APIProtocol.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SC2APIProtocol.ResponseCreateGame;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseCreateGame.deserializeBinaryFromReader);
      msg.setCreateGame(value);
      break;
    case 2:
      var value = new proto.SC2APIProtocol.ResponseJoinGame;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseJoinGame.deserializeBinaryFromReader);
      msg.setJoinGame(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.ResponseRestartGame;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseRestartGame.deserializeBinaryFromReader);
      msg.setRestartGame(value);
      break;
    case 4:
      var value = new proto.SC2APIProtocol.ResponseStartReplay;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseStartReplay.deserializeBinaryFromReader);
      msg.setStartReplay(value);
      break;
    case 5:
      var value = new proto.SC2APIProtocol.ResponseLeaveGame;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseLeaveGame.deserializeBinaryFromReader);
      msg.setLeaveGame(value);
      break;
    case 6:
      var value = new proto.SC2APIProtocol.ResponseQuickSave;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseQuickSave.deserializeBinaryFromReader);
      msg.setQuickSave(value);
      break;
    case 7:
      var value = new proto.SC2APIProtocol.ResponseQuickLoad;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseQuickLoad.deserializeBinaryFromReader);
      msg.setQuickLoad(value);
      break;
    case 8:
      var value = new proto.SC2APIProtocol.ResponseQuit;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseQuit.deserializeBinaryFromReader);
      msg.setQuit(value);
      break;
    case 9:
      var value = new proto.SC2APIProtocol.ResponseGameInfo;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseGameInfo.deserializeBinaryFromReader);
      msg.setGameInfo(value);
      break;
    case 10:
      var value = new proto.SC2APIProtocol.ResponseObservation;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseObservation.deserializeBinaryFromReader);
      msg.setObservation(value);
      break;
    case 11:
      var value = new proto.SC2APIProtocol.ResponseAction;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseAction.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 21:
      var value = new proto.SC2APIProtocol.ResponseObserverAction;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseObserverAction.deserializeBinaryFromReader);
      msg.setObsAction(value);
      break;
    case 12:
      var value = new proto.SC2APIProtocol.ResponseStep;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseStep.deserializeBinaryFromReader);
      msg.setStep(value);
      break;
    case 13:
      var value = new proto.SC2APIProtocol.ResponseData;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 14:
      var value = new s2clientprotocol_query_pb.ResponseQuery;
      reader.readMessage(value,s2clientprotocol_query_pb.ResponseQuery.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 15:
      var value = new proto.SC2APIProtocol.ResponseSaveReplay;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseSaveReplay.deserializeBinaryFromReader);
      msg.setSaveReplay(value);
      break;
    case 16:
      var value = new proto.SC2APIProtocol.ResponseReplayInfo;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseReplayInfo.deserializeBinaryFromReader);
      msg.setReplayInfo(value);
      break;
    case 17:
      var value = new proto.SC2APIProtocol.ResponseAvailableMaps;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseAvailableMaps.deserializeBinaryFromReader);
      msg.setAvailableMaps(value);
      break;
    case 18:
      var value = new proto.SC2APIProtocol.ResponseSaveMap;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseSaveMap.deserializeBinaryFromReader);
      msg.setSaveMap(value);
      break;
    case 22:
      var value = new proto.SC2APIProtocol.ResponseMapCommand;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseMapCommand.deserializeBinaryFromReader);
      msg.setMapCommand(value);
      break;
    case 19:
      var value = new proto.SC2APIProtocol.ResponsePing;
      reader.readMessage(value,proto.SC2APIProtocol.ResponsePing.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    case 20:
      var value = new proto.SC2APIProtocol.ResponseDebug;
      reader.readMessage(value,proto.SC2APIProtocol.ResponseDebug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 97:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 98:
      var value = /** @type {string} */ (reader.readString());
      msg.addError(value);
      break;
    case 99:
      var value = /** @type {!proto.SC2APIProtocol.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreateGame();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.SC2APIProtocol.ResponseCreateGame.serializeBinaryToWriter
    );
  }
  f = message.getJoinGame();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.SC2APIProtocol.ResponseJoinGame.serializeBinaryToWriter
    );
  }
  f = message.getRestartGame();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.SC2APIProtocol.ResponseRestartGame.serializeBinaryToWriter
    );
  }
  f = message.getStartReplay();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.SC2APIProtocol.ResponseStartReplay.serializeBinaryToWriter
    );
  }
  f = message.getLeaveGame();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.SC2APIProtocol.ResponseLeaveGame.serializeBinaryToWriter
    );
  }
  f = message.getQuickSave();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.SC2APIProtocol.ResponseQuickSave.serializeBinaryToWriter
    );
  }
  f = message.getQuickLoad();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.SC2APIProtocol.ResponseQuickLoad.serializeBinaryToWriter
    );
  }
  f = message.getQuit();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.SC2APIProtocol.ResponseQuit.serializeBinaryToWriter
    );
  }
  f = message.getGameInfo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.SC2APIProtocol.ResponseGameInfo.serializeBinaryToWriter
    );
  }
  f = message.getObservation();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.SC2APIProtocol.ResponseObservation.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.SC2APIProtocol.ResponseAction.serializeBinaryToWriter
    );
  }
  f = message.getObsAction();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.SC2APIProtocol.ResponseObserverAction.serializeBinaryToWriter
    );
  }
  f = message.getStep();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.SC2APIProtocol.ResponseStep.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.SC2APIProtocol.ResponseData.serializeBinaryToWriter
    );
  }
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      s2clientprotocol_query_pb.ResponseQuery.serializeBinaryToWriter
    );
  }
  f = message.getSaveReplay();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.SC2APIProtocol.ResponseSaveReplay.serializeBinaryToWriter
    );
  }
  f = message.getReplayInfo();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.SC2APIProtocol.ResponseReplayInfo.serializeBinaryToWriter
    );
  }
  f = message.getAvailableMaps();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.SC2APIProtocol.ResponseAvailableMaps.serializeBinaryToWriter
    );
  }
  f = message.getSaveMap();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.SC2APIProtocol.ResponseSaveMap.serializeBinaryToWriter
    );
  }
  f = message.getMapCommand();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.SC2APIProtocol.ResponseMapCommand.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.SC2APIProtocol.ResponsePing.serializeBinaryToWriter
    );
  }
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.SC2APIProtocol.ResponseDebug.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 97));
  if (f != null) {
    writer.writeUint32(
      97,
      f
    );
  }
  f = message.getErrorList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      98,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.Status} */ (jspb.Message.getField(message, 99));
  if (f != null) {
    writer.writeEnum(
      99,
      f
    );
  }
};


/**
 * optional ResponseCreateGame create_game = 1;
 * @return {?proto.SC2APIProtocol.ResponseCreateGame}
 */
proto.SC2APIProtocol.Response.prototype.getCreateGame = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseCreateGame} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseCreateGame, 1));
};


/** @param {?proto.SC2APIProtocol.ResponseCreateGame|undefined} value */
proto.SC2APIProtocol.Response.prototype.setCreateGame = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearCreateGame = function() {
  this.setCreateGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasCreateGame = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ResponseJoinGame join_game = 2;
 * @return {?proto.SC2APIProtocol.ResponseJoinGame}
 */
proto.SC2APIProtocol.Response.prototype.getJoinGame = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseJoinGame} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseJoinGame, 2));
};


/** @param {?proto.SC2APIProtocol.ResponseJoinGame|undefined} value */
proto.SC2APIProtocol.Response.prototype.setJoinGame = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearJoinGame = function() {
  this.setJoinGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasJoinGame = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ResponseRestartGame restart_game = 3;
 * @return {?proto.SC2APIProtocol.ResponseRestartGame}
 */
proto.SC2APIProtocol.Response.prototype.getRestartGame = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseRestartGame} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseRestartGame, 3));
};


/** @param {?proto.SC2APIProtocol.ResponseRestartGame|undefined} value */
proto.SC2APIProtocol.Response.prototype.setRestartGame = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearRestartGame = function() {
  this.setRestartGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasRestartGame = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ResponseStartReplay start_replay = 4;
 * @return {?proto.SC2APIProtocol.ResponseStartReplay}
 */
proto.SC2APIProtocol.Response.prototype.getStartReplay = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseStartReplay} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseStartReplay, 4));
};


/** @param {?proto.SC2APIProtocol.ResponseStartReplay|undefined} value */
proto.SC2APIProtocol.Response.prototype.setStartReplay = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearStartReplay = function() {
  this.setStartReplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasStartReplay = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ResponseLeaveGame leave_game = 5;
 * @return {?proto.SC2APIProtocol.ResponseLeaveGame}
 */
proto.SC2APIProtocol.Response.prototype.getLeaveGame = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseLeaveGame} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseLeaveGame, 5));
};


/** @param {?proto.SC2APIProtocol.ResponseLeaveGame|undefined} value */
proto.SC2APIProtocol.Response.prototype.setLeaveGame = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearLeaveGame = function() {
  this.setLeaveGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasLeaveGame = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ResponseQuickSave quick_save = 6;
 * @return {?proto.SC2APIProtocol.ResponseQuickSave}
 */
proto.SC2APIProtocol.Response.prototype.getQuickSave = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseQuickSave} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseQuickSave, 6));
};


/** @param {?proto.SC2APIProtocol.ResponseQuickSave|undefined} value */
proto.SC2APIProtocol.Response.prototype.setQuickSave = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearQuickSave = function() {
  this.setQuickSave(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasQuickSave = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ResponseQuickLoad quick_load = 7;
 * @return {?proto.SC2APIProtocol.ResponseQuickLoad}
 */
proto.SC2APIProtocol.Response.prototype.getQuickLoad = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseQuickLoad} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseQuickLoad, 7));
};


/** @param {?proto.SC2APIProtocol.ResponseQuickLoad|undefined} value */
proto.SC2APIProtocol.Response.prototype.setQuickLoad = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearQuickLoad = function() {
  this.setQuickLoad(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasQuickLoad = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ResponseQuit quit = 8;
 * @return {?proto.SC2APIProtocol.ResponseQuit}
 */
proto.SC2APIProtocol.Response.prototype.getQuit = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseQuit} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseQuit, 8));
};


/** @param {?proto.SC2APIProtocol.ResponseQuit|undefined} value */
proto.SC2APIProtocol.Response.prototype.setQuit = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearQuit = function() {
  this.setQuit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasQuit = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ResponseGameInfo game_info = 9;
 * @return {?proto.SC2APIProtocol.ResponseGameInfo}
 */
proto.SC2APIProtocol.Response.prototype.getGameInfo = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseGameInfo} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseGameInfo, 9));
};


/** @param {?proto.SC2APIProtocol.ResponseGameInfo|undefined} value */
proto.SC2APIProtocol.Response.prototype.setGameInfo = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearGameInfo = function() {
  this.setGameInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasGameInfo = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ResponseObservation observation = 10;
 * @return {?proto.SC2APIProtocol.ResponseObservation}
 */
proto.SC2APIProtocol.Response.prototype.getObservation = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseObservation} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseObservation, 10));
};


/** @param {?proto.SC2APIProtocol.ResponseObservation|undefined} value */
proto.SC2APIProtocol.Response.prototype.setObservation = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearObservation = function() {
  this.setObservation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasObservation = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ResponseAction action = 11;
 * @return {?proto.SC2APIProtocol.ResponseAction}
 */
proto.SC2APIProtocol.Response.prototype.getAction = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseAction} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseAction, 11));
};


/** @param {?proto.SC2APIProtocol.ResponseAction|undefined} value */
proto.SC2APIProtocol.Response.prototype.setAction = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearAction = function() {
  this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasAction = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ResponseObserverAction obs_action = 21;
 * @return {?proto.SC2APIProtocol.ResponseObserverAction}
 */
proto.SC2APIProtocol.Response.prototype.getObsAction = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseObserverAction} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseObserverAction, 21));
};


/** @param {?proto.SC2APIProtocol.ResponseObserverAction|undefined} value */
proto.SC2APIProtocol.Response.prototype.setObsAction = function(value) {
  jspb.Message.setOneofWrapperField(this, 21, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearObsAction = function() {
  this.setObsAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasObsAction = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ResponseStep step = 12;
 * @return {?proto.SC2APIProtocol.ResponseStep}
 */
proto.SC2APIProtocol.Response.prototype.getStep = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseStep} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseStep, 12));
};


/** @param {?proto.SC2APIProtocol.ResponseStep|undefined} value */
proto.SC2APIProtocol.Response.prototype.setStep = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearStep = function() {
  this.setStep(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasStep = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ResponseData data = 13;
 * @return {?proto.SC2APIProtocol.ResponseData}
 */
proto.SC2APIProtocol.Response.prototype.getData = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseData} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseData, 13));
};


/** @param {?proto.SC2APIProtocol.ResponseData|undefined} value */
proto.SC2APIProtocol.Response.prototype.setData = function(value) {
  jspb.Message.setOneofWrapperField(this, 13, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasData = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ResponseQuery query = 14;
 * @return {?proto.SC2APIProtocol.ResponseQuery}
 */
proto.SC2APIProtocol.Response.prototype.getQuery = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseQuery} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_query_pb.ResponseQuery, 14));
};


/** @param {?proto.SC2APIProtocol.ResponseQuery|undefined} value */
proto.SC2APIProtocol.Response.prototype.setQuery = function(value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearQuery = function() {
  this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ResponseSaveReplay save_replay = 15;
 * @return {?proto.SC2APIProtocol.ResponseSaveReplay}
 */
proto.SC2APIProtocol.Response.prototype.getSaveReplay = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseSaveReplay} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseSaveReplay, 15));
};


/** @param {?proto.SC2APIProtocol.ResponseSaveReplay|undefined} value */
proto.SC2APIProtocol.Response.prototype.setSaveReplay = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearSaveReplay = function() {
  this.setSaveReplay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasSaveReplay = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ResponseReplayInfo replay_info = 16;
 * @return {?proto.SC2APIProtocol.ResponseReplayInfo}
 */
proto.SC2APIProtocol.Response.prototype.getReplayInfo = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseReplayInfo} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseReplayInfo, 16));
};


/** @param {?proto.SC2APIProtocol.ResponseReplayInfo|undefined} value */
proto.SC2APIProtocol.Response.prototype.setReplayInfo = function(value) {
  jspb.Message.setOneofWrapperField(this, 16, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearReplayInfo = function() {
  this.setReplayInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasReplayInfo = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ResponseAvailableMaps available_maps = 17;
 * @return {?proto.SC2APIProtocol.ResponseAvailableMaps}
 */
proto.SC2APIProtocol.Response.prototype.getAvailableMaps = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseAvailableMaps} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseAvailableMaps, 17));
};


/** @param {?proto.SC2APIProtocol.ResponseAvailableMaps|undefined} value */
proto.SC2APIProtocol.Response.prototype.setAvailableMaps = function(value) {
  jspb.Message.setOneofWrapperField(this, 17, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearAvailableMaps = function() {
  this.setAvailableMaps(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasAvailableMaps = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ResponseSaveMap save_map = 18;
 * @return {?proto.SC2APIProtocol.ResponseSaveMap}
 */
proto.SC2APIProtocol.Response.prototype.getSaveMap = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseSaveMap} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseSaveMap, 18));
};


/** @param {?proto.SC2APIProtocol.ResponseSaveMap|undefined} value */
proto.SC2APIProtocol.Response.prototype.setSaveMap = function(value) {
  jspb.Message.setOneofWrapperField(this, 18, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearSaveMap = function() {
  this.setSaveMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasSaveMap = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ResponseMapCommand map_command = 22;
 * @return {?proto.SC2APIProtocol.ResponseMapCommand}
 */
proto.SC2APIProtocol.Response.prototype.getMapCommand = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseMapCommand} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseMapCommand, 22));
};


/** @param {?proto.SC2APIProtocol.ResponseMapCommand|undefined} value */
proto.SC2APIProtocol.Response.prototype.setMapCommand = function(value) {
  jspb.Message.setOneofWrapperField(this, 22, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearMapCommand = function() {
  this.setMapCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasMapCommand = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional ResponsePing ping = 19;
 * @return {?proto.SC2APIProtocol.ResponsePing}
 */
proto.SC2APIProtocol.Response.prototype.getPing = function() {
  return /** @type{?proto.SC2APIProtocol.ResponsePing} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponsePing, 19));
};


/** @param {?proto.SC2APIProtocol.ResponsePing|undefined} value */
proto.SC2APIProtocol.Response.prototype.setPing = function(value) {
  jspb.Message.setOneofWrapperField(this, 19, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearPing = function() {
  this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasPing = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ResponseDebug debug = 20;
 * @return {?proto.SC2APIProtocol.ResponseDebug}
 */
proto.SC2APIProtocol.Response.prototype.getDebug = function() {
  return /** @type{?proto.SC2APIProtocol.ResponseDebug} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ResponseDebug, 20));
};


/** @param {?proto.SC2APIProtocol.ResponseDebug|undefined} value */
proto.SC2APIProtocol.Response.prototype.setDebug = function(value) {
  jspb.Message.setOneofWrapperField(this, 20, proto.SC2APIProtocol.Response.oneofGroups_[0], value);
};


proto.SC2APIProtocol.Response.prototype.clearDebug = function() {
  this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional uint32 id = 97;
 * @return {number}
 */
proto.SC2APIProtocol.Response.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 97, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.Response.prototype.setId = function(value) {
  jspb.Message.setField(this, 97, value);
};


proto.SC2APIProtocol.Response.prototype.clearId = function() {
  jspb.Message.setField(this, 97, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasId = function() {
  return jspb.Message.getField(this, 97) != null;
};


/**
 * repeated string error = 98;
 * @return {!Array.<string>}
 */
proto.SC2APIProtocol.Response.prototype.getErrorList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 98));
};


/** @param {!Array.<string>} value */
proto.SC2APIProtocol.Response.prototype.setErrorList = function(value) {
  jspb.Message.setField(this, 98, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.SC2APIProtocol.Response.prototype.addError = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 98, value, opt_index);
};


proto.SC2APIProtocol.Response.prototype.clearErrorList = function() {
  this.setErrorList([]);
};


/**
 * optional Status status = 99;
 * @return {!proto.SC2APIProtocol.Status}
 */
proto.SC2APIProtocol.Response.prototype.getStatus = function() {
  return /** @type {!proto.SC2APIProtocol.Status} */ (jspb.Message.getFieldWithDefault(this, 99, 1));
};


/** @param {!proto.SC2APIProtocol.Status} value */
proto.SC2APIProtocol.Response.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 99, value);
};


proto.SC2APIProtocol.Response.prototype.clearStatus = function() {
  jspb.Message.setField(this, 99, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Response.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 99) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestCreateGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.RequestCreateGame.repeatedFields_, proto.SC2APIProtocol.RequestCreateGame.oneofGroups_);
};
goog.inherits(proto.SC2APIProtocol.RequestCreateGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestCreateGame.displayName = 'proto.SC2APIProtocol.RequestCreateGame';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.RequestCreateGame.repeatedFields_ = [3];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SC2APIProtocol.RequestCreateGame.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.SC2APIProtocol.RequestCreateGame.MapCase = {
  MAP_NOT_SET: 0,
  LOCAL_MAP: 1,
  BATTLENET_MAP_NAME: 2
};

/**
 * @return {proto.SC2APIProtocol.RequestCreateGame.MapCase}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getMapCase = function() {
  return /** @type {proto.SC2APIProtocol.RequestCreateGame.MapCase} */(jspb.Message.computeOneofCase(this, proto.SC2APIProtocol.RequestCreateGame.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestCreateGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestCreateGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestCreateGame.toObject = function(includeInstance, msg) {
  var f, obj = {
    localMap: (f = msg.getLocalMap()) && proto.SC2APIProtocol.LocalMap.toObject(includeInstance, f),
    battlenetMapName: jspb.Message.getField(msg, 2),
    playerSetupList: jspb.Message.toObjectList(msg.getPlayerSetupList(),
    proto.SC2APIProtocol.PlayerSetup.toObject, includeInstance),
    disableFog: jspb.Message.getField(msg, 4),
    randomSeed: jspb.Message.getField(msg, 5),
    realtime: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestCreateGame}
 */
proto.SC2APIProtocol.RequestCreateGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestCreateGame;
  return proto.SC2APIProtocol.RequestCreateGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestCreateGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestCreateGame}
 */
proto.SC2APIProtocol.RequestCreateGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SC2APIProtocol.LocalMap;
      reader.readMessage(value,proto.SC2APIProtocol.LocalMap.deserializeBinaryFromReader);
      msg.setLocalMap(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBattlenetMapName(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.PlayerSetup;
      reader.readMessage(value,proto.SC2APIProtocol.PlayerSetup.deserializeBinaryFromReader);
      msg.addPlayerSetup(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableFog(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRandomSeed(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRealtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestCreateGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestCreateGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestCreateGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocalMap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.SC2APIProtocol.LocalMap.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayerSetupList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.SC2APIProtocol.PlayerSetup.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional LocalMap local_map = 1;
 * @return {?proto.SC2APIProtocol.LocalMap}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getLocalMap = function() {
  return /** @type{?proto.SC2APIProtocol.LocalMap} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.LocalMap, 1));
};


/** @param {?proto.SC2APIProtocol.LocalMap|undefined} value */
proto.SC2APIProtocol.RequestCreateGame.prototype.setLocalMap = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.SC2APIProtocol.RequestCreateGame.oneofGroups_[0], value);
};


proto.SC2APIProtocol.RequestCreateGame.prototype.clearLocalMap = function() {
  this.setLocalMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.hasLocalMap = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string battlenet_map_name = 2;
 * @return {string}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getBattlenetMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.RequestCreateGame.prototype.setBattlenetMapName = function(value) {
  jspb.Message.setOneofField(this, 2, proto.SC2APIProtocol.RequestCreateGame.oneofGroups_[0], value);
};


proto.SC2APIProtocol.RequestCreateGame.prototype.clearBattlenetMapName = function() {
  jspb.Message.setOneofField(this, 2, proto.SC2APIProtocol.RequestCreateGame.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.hasBattlenetMapName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PlayerSetup player_setup = 3;
 * @return {!Array.<!proto.SC2APIProtocol.PlayerSetup>}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getPlayerSetupList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.PlayerSetup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.PlayerSetup, 3));
};


/** @param {!Array.<!proto.SC2APIProtocol.PlayerSetup>} value */
proto.SC2APIProtocol.RequestCreateGame.prototype.setPlayerSetupList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.SC2APIProtocol.PlayerSetup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.PlayerSetup}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.addPlayerSetup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.SC2APIProtocol.PlayerSetup, opt_index);
};


proto.SC2APIProtocol.RequestCreateGame.prototype.clearPlayerSetupList = function() {
  this.setPlayerSetupList([]);
};


/**
 * optional bool disable_fog = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getDisableFog = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestCreateGame.prototype.setDisableFog = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SC2APIProtocol.RequestCreateGame.prototype.clearDisableFog = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.hasDisableFog = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 random_seed = 5;
 * @return {number}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getRandomSeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.RequestCreateGame.prototype.setRandomSeed = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SC2APIProtocol.RequestCreateGame.prototype.clearRandomSeed = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.hasRandomSeed = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool realtime = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.getRealtime = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestCreateGame.prototype.setRealtime = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.SC2APIProtocol.RequestCreateGame.prototype.clearRealtime = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestCreateGame.prototype.hasRealtime = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.LocalMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.LocalMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.LocalMap.displayName = 'proto.SC2APIProtocol.LocalMap';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.LocalMap.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.LocalMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.LocalMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.LocalMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapPath: jspb.Message.getField(msg, 1),
    mapData: msg.getMapData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.LocalMap}
 */
proto.SC2APIProtocol.LocalMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.LocalMap;
  return proto.SC2APIProtocol.LocalMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.LocalMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.LocalMap}
 */
proto.SC2APIProtocol.LocalMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapPath(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMapData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.LocalMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.LocalMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.LocalMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.LocalMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBytes(
      7,
      f
    );
  }
};


/**
 * optional string map_path = 1;
 * @return {string}
 */
proto.SC2APIProtocol.LocalMap.prototype.getMapPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.LocalMap.prototype.setMapPath = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.LocalMap.prototype.clearMapPath = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.LocalMap.prototype.hasMapPath = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes map_data = 7;
 * @return {!(string|Uint8Array)}
 */
proto.SC2APIProtocol.LocalMap.prototype.getMapData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes map_data = 7;
 * This is a type-conversion wrapper around `getMapData()`
 * @return {string}
 */
proto.SC2APIProtocol.LocalMap.prototype.getMapData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMapData()));
};


/**
 * optional bytes map_data = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMapData()`
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.LocalMap.prototype.getMapData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMapData()));
};


/** @param {!(string|Uint8Array)} value */
proto.SC2APIProtocol.LocalMap.prototype.setMapData = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.SC2APIProtocol.LocalMap.prototype.clearMapData = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.LocalMap.prototype.hasMapData = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseCreateGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseCreateGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseCreateGame.displayName = 'proto.SC2APIProtocol.ResponseCreateGame';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseCreateGame.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseCreateGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseCreateGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseCreateGame.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getField(msg, 1),
    errorDetails: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseCreateGame}
 */
proto.SC2APIProtocol.ResponseCreateGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseCreateGame;
  return proto.SC2APIProtocol.ResponseCreateGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseCreateGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseCreateGame}
 */
proto.SC2APIProtocol.ResponseCreateGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SC2APIProtocol.ResponseCreateGame.Error} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseCreateGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseCreateGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseCreateGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseCreateGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SC2APIProtocol.ResponseCreateGame.Error} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SC2APIProtocol.ResponseCreateGame.Error = {
  MISSINGMAP: 1,
  INVALIDMAPPATH: 2,
  INVALIDMAPDATA: 3,
  INVALIDMAPNAME: 4,
  INVALIDMAPHANDLE: 5,
  MISSINGPLAYERSETUP: 6,
  INVALIDPLAYERSETUP: 7,
  MULTIPLAYERUNSUPPORTED: 8
};

/**
 * optional Error error = 1;
 * @return {!proto.SC2APIProtocol.ResponseCreateGame.Error}
 */
proto.SC2APIProtocol.ResponseCreateGame.prototype.getError = function() {
  return /** @type {!proto.SC2APIProtocol.ResponseCreateGame.Error} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/** @param {!proto.SC2APIProtocol.ResponseCreateGame.Error} value */
proto.SC2APIProtocol.ResponseCreateGame.prototype.setError = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponseCreateGame.prototype.clearError = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseCreateGame.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error_details = 2;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseCreateGame.prototype.getErrorDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseCreateGame.prototype.setErrorDetails = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ResponseCreateGame.prototype.clearErrorDetails = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseCreateGame.prototype.hasErrorDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestJoinGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.RequestJoinGame.repeatedFields_, proto.SC2APIProtocol.RequestJoinGame.oneofGroups_);
};
goog.inherits(proto.SC2APIProtocol.RequestJoinGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestJoinGame.displayName = 'proto.SC2APIProtocol.RequestJoinGame';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.RequestJoinGame.repeatedFields_ = [5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SC2APIProtocol.RequestJoinGame.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.SC2APIProtocol.RequestJoinGame.ParticipationCase = {
  PARTICIPATION_NOT_SET: 0,
  RACE: 1,
  OBSERVED_PLAYER_ID: 2
};

/**
 * @return {proto.SC2APIProtocol.RequestJoinGame.ParticipationCase}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.getParticipationCase = function() {
  return /** @type {proto.SC2APIProtocol.RequestJoinGame.ParticipationCase} */(jspb.Message.computeOneofCase(this, proto.SC2APIProtocol.RequestJoinGame.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestJoinGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestJoinGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestJoinGame.toObject = function(includeInstance, msg) {
  var f, obj = {
    race: jspb.Message.getField(msg, 1),
    observedPlayerId: jspb.Message.getField(msg, 2),
    options: (f = msg.getOptions()) && proto.SC2APIProtocol.InterfaceOptions.toObject(includeInstance, f),
    serverPorts: (f = msg.getServerPorts()) && proto.SC2APIProtocol.PortSet.toObject(includeInstance, f),
    clientPortsList: jspb.Message.toObjectList(msg.getClientPortsList(),
    proto.SC2APIProtocol.PortSet.toObject, includeInstance),
    sharedPort: jspb.Message.getField(msg, 6),
    playerName: jspb.Message.getField(msg, 7),
    hostIp: jspb.Message.getField(msg, 8)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestJoinGame}
 */
proto.SC2APIProtocol.RequestJoinGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestJoinGame;
  return proto.SC2APIProtocol.RequestJoinGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestJoinGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestJoinGame}
 */
proto.SC2APIProtocol.RequestJoinGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SC2APIProtocol.Race} */ (reader.readEnum());
      msg.setRace(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setObservedPlayerId(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.InterfaceOptions;
      reader.readMessage(value,proto.SC2APIProtocol.InterfaceOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 4:
      var value = new proto.SC2APIProtocol.PortSet;
      reader.readMessage(value,proto.SC2APIProtocol.PortSet.deserializeBinaryFromReader);
      msg.setServerPorts(value);
      break;
    case 5:
      var value = new proto.SC2APIProtocol.PortSet;
      reader.readMessage(value,proto.SC2APIProtocol.PortSet.deserializeBinaryFromReader);
      msg.addClientPorts(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSharedPort(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostIp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestJoinGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestJoinGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestJoinGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SC2APIProtocol.Race} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.SC2APIProtocol.InterfaceOptions.serializeBinaryToWriter
    );
  }
  f = message.getServerPorts();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.SC2APIProtocol.PortSet.serializeBinaryToWriter
    );
  }
  f = message.getClientPortsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.SC2APIProtocol.PortSet.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional Race race = 1;
 * @return {!proto.SC2APIProtocol.Race}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.getRace = function() {
  return /** @type {!proto.SC2APIProtocol.Race} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.SC2APIProtocol.Race} value */
proto.SC2APIProtocol.RequestJoinGame.prototype.setRace = function(value) {
  jspb.Message.setOneofField(this, 1, proto.SC2APIProtocol.RequestJoinGame.oneofGroups_[0], value);
};


proto.SC2APIProtocol.RequestJoinGame.prototype.clearRace = function() {
  jspb.Message.setOneofField(this, 1, proto.SC2APIProtocol.RequestJoinGame.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.hasRace = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 observed_player_id = 2;
 * @return {number}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.getObservedPlayerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.RequestJoinGame.prototype.setObservedPlayerId = function(value) {
  jspb.Message.setOneofField(this, 2, proto.SC2APIProtocol.RequestJoinGame.oneofGroups_[0], value);
};


proto.SC2APIProtocol.RequestJoinGame.prototype.clearObservedPlayerId = function() {
  jspb.Message.setOneofField(this, 2, proto.SC2APIProtocol.RequestJoinGame.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.hasObservedPlayerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InterfaceOptions options = 3;
 * @return {?proto.SC2APIProtocol.InterfaceOptions}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.getOptions = function() {
  return /** @type{?proto.SC2APIProtocol.InterfaceOptions} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.InterfaceOptions, 3));
};


/** @param {?proto.SC2APIProtocol.InterfaceOptions|undefined} value */
proto.SC2APIProtocol.RequestJoinGame.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.SC2APIProtocol.RequestJoinGame.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PortSet server_ports = 4;
 * @return {?proto.SC2APIProtocol.PortSet}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.getServerPorts = function() {
  return /** @type{?proto.SC2APIProtocol.PortSet} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.PortSet, 4));
};


/** @param {?proto.SC2APIProtocol.PortSet|undefined} value */
proto.SC2APIProtocol.RequestJoinGame.prototype.setServerPorts = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.SC2APIProtocol.RequestJoinGame.prototype.clearServerPorts = function() {
  this.setServerPorts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.hasServerPorts = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated PortSet client_ports = 5;
 * @return {!Array.<!proto.SC2APIProtocol.PortSet>}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.getClientPortsList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.PortSet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.PortSet, 5));
};


/** @param {!Array.<!proto.SC2APIProtocol.PortSet>} value */
proto.SC2APIProtocol.RequestJoinGame.prototype.setClientPortsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.SC2APIProtocol.PortSet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.PortSet}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.addClientPorts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.SC2APIProtocol.PortSet, opt_index);
};


proto.SC2APIProtocol.RequestJoinGame.prototype.clearClientPortsList = function() {
  this.setClientPortsList([]);
};


/**
 * optional int32 shared_port = 6;
 * @return {number}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.getSharedPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.RequestJoinGame.prototype.setSharedPort = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.SC2APIProtocol.RequestJoinGame.prototype.clearSharedPort = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.hasSharedPort = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string player_name = 7;
 * @return {string}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.getPlayerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.RequestJoinGame.prototype.setPlayerName = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.SC2APIProtocol.RequestJoinGame.prototype.clearPlayerName = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.hasPlayerName = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string host_ip = 8;
 * @return {string}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.getHostIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.RequestJoinGame.prototype.setHostIp = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.SC2APIProtocol.RequestJoinGame.prototype.clearHostIp = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestJoinGame.prototype.hasHostIp = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.PortSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.PortSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.PortSet.displayName = 'proto.SC2APIProtocol.PortSet';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.PortSet.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.PortSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.PortSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.PortSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    gamePort: jspb.Message.getField(msg, 1),
    basePort: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.PortSet}
 */
proto.SC2APIProtocol.PortSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.PortSet;
  return proto.SC2APIProtocol.PortSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.PortSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.PortSet}
 */
proto.SC2APIProtocol.PortSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGamePort(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBasePort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.PortSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.PortSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.PortSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.PortSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 game_port = 1;
 * @return {number}
 */
proto.SC2APIProtocol.PortSet.prototype.getGamePort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PortSet.prototype.setGamePort = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.PortSet.prototype.clearGamePort = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PortSet.prototype.hasGamePort = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 base_port = 2;
 * @return {number}
 */
proto.SC2APIProtocol.PortSet.prototype.getBasePort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PortSet.prototype.setBasePort = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.PortSet.prototype.clearBasePort = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PortSet.prototype.hasBasePort = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseJoinGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseJoinGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseJoinGame.displayName = 'proto.SC2APIProtocol.ResponseJoinGame';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseJoinGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseJoinGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseJoinGame.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getField(msg, 1),
    error: jspb.Message.getField(msg, 2),
    errorDetails: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseJoinGame}
 */
proto.SC2APIProtocol.ResponseJoinGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseJoinGame;
  return proto.SC2APIProtocol.ResponseJoinGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseJoinGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseJoinGame}
 */
proto.SC2APIProtocol.ResponseJoinGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerId(value);
      break;
    case 2:
      var value = /** @type {!proto.SC2APIProtocol.ResponseJoinGame.Error} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseJoinGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseJoinGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseJoinGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.ResponseJoinGame.Error} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SC2APIProtocol.ResponseJoinGame.Error = {
  MISSINGPARTICIPATION: 1,
  INVALIDOBSERVEDPLAYERID: 2,
  MISSINGOPTIONS: 3,
  MISSINGPORTS: 4,
  GAMEFULL: 5,
  LAUNCHERROR: 6,
  FEATUREUNSUPPORTED: 7,
  NOSPACEFORUSER: 8,
  MAPDOESNOTEXIST: 9,
  CANNOTOPENMAP: 10,
  CHECKSUMERROR: 11,
  NETWORKERROR: 12,
  OTHERERROR: 13
};

/**
 * optional uint32 player_id = 1;
 * @return {number}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.getPlayerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.ResponseJoinGame.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponseJoinGame.prototype.clearPlayerId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.hasPlayerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error error = 2;
 * @return {!proto.SC2APIProtocol.ResponseJoinGame.Error}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.getError = function() {
  return /** @type {!proto.SC2APIProtocol.ResponseJoinGame.Error} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/** @param {!proto.SC2APIProtocol.ResponseJoinGame.Error} value */
proto.SC2APIProtocol.ResponseJoinGame.prototype.setError = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ResponseJoinGame.prototype.clearError = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string error_details = 3;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.getErrorDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseJoinGame.prototype.setErrorDetails = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SC2APIProtocol.ResponseJoinGame.prototype.clearErrorDetails = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseJoinGame.prototype.hasErrorDetails = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestRestartGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestRestartGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestRestartGame.displayName = 'proto.SC2APIProtocol.RequestRestartGame';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestRestartGame.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestRestartGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestRestartGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestRestartGame.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestRestartGame}
 */
proto.SC2APIProtocol.RequestRestartGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestRestartGame;
  return proto.SC2APIProtocol.RequestRestartGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestRestartGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestRestartGame}
 */
proto.SC2APIProtocol.RequestRestartGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestRestartGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestRestartGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestRestartGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestRestartGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseRestartGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseRestartGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseRestartGame.displayName = 'proto.SC2APIProtocol.ResponseRestartGame';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseRestartGame.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseRestartGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseRestartGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseRestartGame.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getField(msg, 1),
    errorDetails: jspb.Message.getField(msg, 2),
    needHardReset: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseRestartGame}
 */
proto.SC2APIProtocol.ResponseRestartGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseRestartGame;
  return proto.SC2APIProtocol.ResponseRestartGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseRestartGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseRestartGame}
 */
proto.SC2APIProtocol.ResponseRestartGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SC2APIProtocol.ResponseRestartGame.Error} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorDetails(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeedHardReset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseRestartGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseRestartGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseRestartGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseRestartGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SC2APIProtocol.ResponseRestartGame.Error} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SC2APIProtocol.ResponseRestartGame.Error = {
  LAUNCHERROR: 1
};

/**
 * optional Error error = 1;
 * @return {!proto.SC2APIProtocol.ResponseRestartGame.Error}
 */
proto.SC2APIProtocol.ResponseRestartGame.prototype.getError = function() {
  return /** @type {!proto.SC2APIProtocol.ResponseRestartGame.Error} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/** @param {!proto.SC2APIProtocol.ResponseRestartGame.Error} value */
proto.SC2APIProtocol.ResponseRestartGame.prototype.setError = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponseRestartGame.prototype.clearError = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseRestartGame.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error_details = 2;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseRestartGame.prototype.getErrorDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseRestartGame.prototype.setErrorDetails = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ResponseRestartGame.prototype.clearErrorDetails = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseRestartGame.prototype.hasErrorDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool need_hard_reset = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.ResponseRestartGame.prototype.getNeedHardReset = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.ResponseRestartGame.prototype.setNeedHardReset = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SC2APIProtocol.ResponseRestartGame.prototype.clearNeedHardReset = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseRestartGame.prototype.hasNeedHardReset = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestStartReplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.SC2APIProtocol.RequestStartReplay.oneofGroups_);
};
goog.inherits(proto.SC2APIProtocol.RequestStartReplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestStartReplay.displayName = 'proto.SC2APIProtocol.RequestStartReplay';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SC2APIProtocol.RequestStartReplay.oneofGroups_ = [[1,5]];

/**
 * @enum {number}
 */
proto.SC2APIProtocol.RequestStartReplay.ReplayCase = {
  REPLAY_NOT_SET: 0,
  REPLAY_PATH: 1,
  REPLAY_DATA: 5
};

/**
 * @return {proto.SC2APIProtocol.RequestStartReplay.ReplayCase}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getReplayCase = function() {
  return /** @type {proto.SC2APIProtocol.RequestStartReplay.ReplayCase} */(jspb.Message.computeOneofCase(this, proto.SC2APIProtocol.RequestStartReplay.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestStartReplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestStartReplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestStartReplay.toObject = function(includeInstance, msg) {
  var f, obj = {
    replayPath: jspb.Message.getField(msg, 1),
    replayData: msg.getReplayData_asB64(),
    mapData: msg.getMapData_asB64(),
    observedPlayerId: jspb.Message.getField(msg, 2),
    options: (f = msg.getOptions()) && proto.SC2APIProtocol.InterfaceOptions.toObject(includeInstance, f),
    disableFog: jspb.Message.getField(msg, 4),
    realtime: jspb.Message.getField(msg, 7),
    recordReplay: jspb.Message.getField(msg, 8)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestStartReplay}
 */
proto.SC2APIProtocol.RequestStartReplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestStartReplay;
  return proto.SC2APIProtocol.RequestStartReplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestStartReplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestStartReplay}
 */
proto.SC2APIProtocol.RequestStartReplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplayPath(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReplayData(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMapData(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setObservedPlayerId(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.InterfaceOptions;
      reader.readMessage(value,proto.SC2APIProtocol.InterfaceOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableFog(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRealtime(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecordReplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestStartReplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestStartReplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestStartReplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.SC2APIProtocol.InterfaceOptions.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string replay_path = 1;
 * @return {string}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getReplayPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.RequestStartReplay.prototype.setReplayPath = function(value) {
  jspb.Message.setOneofField(this, 1, proto.SC2APIProtocol.RequestStartReplay.oneofGroups_[0], value);
};


proto.SC2APIProtocol.RequestStartReplay.prototype.clearReplayPath = function() {
  jspb.Message.setOneofField(this, 1, proto.SC2APIProtocol.RequestStartReplay.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.hasReplayPath = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes replay_data = 5;
 * @return {!(string|Uint8Array)}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getReplayData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes replay_data = 5;
 * This is a type-conversion wrapper around `getReplayData()`
 * @return {string}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getReplayData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReplayData()));
};


/**
 * optional bytes replay_data = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReplayData()`
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getReplayData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReplayData()));
};


/** @param {!(string|Uint8Array)} value */
proto.SC2APIProtocol.RequestStartReplay.prototype.setReplayData = function(value) {
  jspb.Message.setOneofField(this, 5, proto.SC2APIProtocol.RequestStartReplay.oneofGroups_[0], value);
};


proto.SC2APIProtocol.RequestStartReplay.prototype.clearReplayData = function() {
  jspb.Message.setOneofField(this, 5, proto.SC2APIProtocol.RequestStartReplay.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.hasReplayData = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes map_data = 6;
 * @return {!(string|Uint8Array)}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getMapData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes map_data = 6;
 * This is a type-conversion wrapper around `getMapData()`
 * @return {string}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getMapData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMapData()));
};


/**
 * optional bytes map_data = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMapData()`
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getMapData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMapData()));
};


/** @param {!(string|Uint8Array)} value */
proto.SC2APIProtocol.RequestStartReplay.prototype.setMapData = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.SC2APIProtocol.RequestStartReplay.prototype.clearMapData = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.hasMapData = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 observed_player_id = 2;
 * @return {number}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getObservedPlayerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.RequestStartReplay.prototype.setObservedPlayerId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.RequestStartReplay.prototype.clearObservedPlayerId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.hasObservedPlayerId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InterfaceOptions options = 3;
 * @return {?proto.SC2APIProtocol.InterfaceOptions}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getOptions = function() {
  return /** @type{?proto.SC2APIProtocol.InterfaceOptions} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.InterfaceOptions, 3));
};


/** @param {?proto.SC2APIProtocol.InterfaceOptions|undefined} value */
proto.SC2APIProtocol.RequestStartReplay.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.SC2APIProtocol.RequestStartReplay.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool disable_fog = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getDisableFog = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestStartReplay.prototype.setDisableFog = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SC2APIProtocol.RequestStartReplay.prototype.clearDisableFog = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.hasDisableFog = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool realtime = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getRealtime = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestStartReplay.prototype.setRealtime = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.SC2APIProtocol.RequestStartReplay.prototype.clearRealtime = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.hasRealtime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool record_replay = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.getRecordReplay = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestStartReplay.prototype.setRecordReplay = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.SC2APIProtocol.RequestStartReplay.prototype.clearRecordReplay = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestStartReplay.prototype.hasRecordReplay = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseStartReplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseStartReplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseStartReplay.displayName = 'proto.SC2APIProtocol.ResponseStartReplay';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseStartReplay.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseStartReplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseStartReplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseStartReplay.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getField(msg, 1),
    errorDetails: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseStartReplay}
 */
proto.SC2APIProtocol.ResponseStartReplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseStartReplay;
  return proto.SC2APIProtocol.ResponseStartReplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseStartReplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseStartReplay}
 */
proto.SC2APIProtocol.ResponseStartReplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SC2APIProtocol.ResponseStartReplay.Error} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseStartReplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseStartReplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseStartReplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseStartReplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SC2APIProtocol.ResponseStartReplay.Error} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SC2APIProtocol.ResponseStartReplay.Error = {
  MISSINGREPLAY: 1,
  INVALIDREPLAYPATH: 2,
  INVALIDREPLAYDATA: 3,
  INVALIDMAPDATA: 4,
  INVALIDOBSERVEDPLAYERID: 5,
  MISSINGOPTIONS: 6,
  LAUNCHERROR: 7
};

/**
 * optional Error error = 1;
 * @return {!proto.SC2APIProtocol.ResponseStartReplay.Error}
 */
proto.SC2APIProtocol.ResponseStartReplay.prototype.getError = function() {
  return /** @type {!proto.SC2APIProtocol.ResponseStartReplay.Error} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/** @param {!proto.SC2APIProtocol.ResponseStartReplay.Error} value */
proto.SC2APIProtocol.ResponseStartReplay.prototype.setError = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponseStartReplay.prototype.clearError = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseStartReplay.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error_details = 2;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseStartReplay.prototype.getErrorDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseStartReplay.prototype.setErrorDetails = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ResponseStartReplay.prototype.clearErrorDetails = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseStartReplay.prototype.hasErrorDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestMapCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestMapCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestMapCommand.displayName = 'proto.SC2APIProtocol.RequestMapCommand';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestMapCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestMapCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestMapCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestMapCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    triggerCmd: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestMapCommand}
 */
proto.SC2APIProtocol.RequestMapCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestMapCommand;
  return proto.SC2APIProtocol.RequestMapCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestMapCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestMapCommand}
 */
proto.SC2APIProtocol.RequestMapCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerCmd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestMapCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestMapCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestMapCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestMapCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string trigger_cmd = 1;
 * @return {string}
 */
proto.SC2APIProtocol.RequestMapCommand.prototype.getTriggerCmd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.RequestMapCommand.prototype.setTriggerCmd = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.RequestMapCommand.prototype.clearTriggerCmd = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestMapCommand.prototype.hasTriggerCmd = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseMapCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseMapCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseMapCommand.displayName = 'proto.SC2APIProtocol.ResponseMapCommand';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseMapCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseMapCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseMapCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseMapCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getField(msg, 1),
    errorDetails: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseMapCommand}
 */
proto.SC2APIProtocol.ResponseMapCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseMapCommand;
  return proto.SC2APIProtocol.ResponseMapCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseMapCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseMapCommand}
 */
proto.SC2APIProtocol.ResponseMapCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SC2APIProtocol.ResponseMapCommand.Error} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseMapCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseMapCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseMapCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseMapCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SC2APIProtocol.ResponseMapCommand.Error} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SC2APIProtocol.ResponseMapCommand.Error = {
  NOTRIGGERERROR: 1
};

/**
 * optional Error error = 1;
 * @return {!proto.SC2APIProtocol.ResponseMapCommand.Error}
 */
proto.SC2APIProtocol.ResponseMapCommand.prototype.getError = function() {
  return /** @type {!proto.SC2APIProtocol.ResponseMapCommand.Error} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/** @param {!proto.SC2APIProtocol.ResponseMapCommand.Error} value */
proto.SC2APIProtocol.ResponseMapCommand.prototype.setError = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponseMapCommand.prototype.clearError = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseMapCommand.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error_details = 2;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseMapCommand.prototype.getErrorDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseMapCommand.prototype.setErrorDetails = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ResponseMapCommand.prototype.clearErrorDetails = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseMapCommand.prototype.hasErrorDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestLeaveGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestLeaveGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestLeaveGame.displayName = 'proto.SC2APIProtocol.RequestLeaveGame';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestLeaveGame.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestLeaveGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestLeaveGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestLeaveGame.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestLeaveGame}
 */
proto.SC2APIProtocol.RequestLeaveGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestLeaveGame;
  return proto.SC2APIProtocol.RequestLeaveGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestLeaveGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestLeaveGame}
 */
proto.SC2APIProtocol.RequestLeaveGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestLeaveGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestLeaveGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestLeaveGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestLeaveGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseLeaveGame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseLeaveGame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseLeaveGame.displayName = 'proto.SC2APIProtocol.ResponseLeaveGame';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseLeaveGame.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseLeaveGame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseLeaveGame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseLeaveGame.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseLeaveGame}
 */
proto.SC2APIProtocol.ResponseLeaveGame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseLeaveGame;
  return proto.SC2APIProtocol.ResponseLeaveGame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseLeaveGame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseLeaveGame}
 */
proto.SC2APIProtocol.ResponseLeaveGame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseLeaveGame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseLeaveGame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseLeaveGame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseLeaveGame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestQuickSave = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestQuickSave, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestQuickSave.displayName = 'proto.SC2APIProtocol.RequestQuickSave';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestQuickSave.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestQuickSave.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestQuickSave} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestQuickSave.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestQuickSave}
 */
proto.SC2APIProtocol.RequestQuickSave.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestQuickSave;
  return proto.SC2APIProtocol.RequestQuickSave.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestQuickSave} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestQuickSave}
 */
proto.SC2APIProtocol.RequestQuickSave.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestQuickSave.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestQuickSave.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestQuickSave} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestQuickSave.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseQuickSave = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseQuickSave, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseQuickSave.displayName = 'proto.SC2APIProtocol.ResponseQuickSave';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseQuickSave.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseQuickSave.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseQuickSave} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseQuickSave.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseQuickSave}
 */
proto.SC2APIProtocol.ResponseQuickSave.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseQuickSave;
  return proto.SC2APIProtocol.ResponseQuickSave.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseQuickSave} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseQuickSave}
 */
proto.SC2APIProtocol.ResponseQuickSave.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseQuickSave.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseQuickSave.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseQuickSave} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseQuickSave.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestQuickLoad = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestQuickLoad, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestQuickLoad.displayName = 'proto.SC2APIProtocol.RequestQuickLoad';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestQuickLoad.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestQuickLoad.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestQuickLoad} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestQuickLoad.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestQuickLoad}
 */
proto.SC2APIProtocol.RequestQuickLoad.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestQuickLoad;
  return proto.SC2APIProtocol.RequestQuickLoad.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestQuickLoad} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestQuickLoad}
 */
proto.SC2APIProtocol.RequestQuickLoad.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestQuickLoad.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestQuickLoad.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestQuickLoad} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestQuickLoad.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseQuickLoad = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseQuickLoad, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseQuickLoad.displayName = 'proto.SC2APIProtocol.ResponseQuickLoad';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseQuickLoad.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseQuickLoad.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseQuickLoad} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseQuickLoad.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseQuickLoad}
 */
proto.SC2APIProtocol.ResponseQuickLoad.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseQuickLoad;
  return proto.SC2APIProtocol.ResponseQuickLoad.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseQuickLoad} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseQuickLoad}
 */
proto.SC2APIProtocol.ResponseQuickLoad.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseQuickLoad.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseQuickLoad.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseQuickLoad} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseQuickLoad.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestQuit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestQuit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestQuit.displayName = 'proto.SC2APIProtocol.RequestQuit';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestQuit.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestQuit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestQuit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestQuit.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestQuit}
 */
proto.SC2APIProtocol.RequestQuit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestQuit;
  return proto.SC2APIProtocol.RequestQuit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestQuit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestQuit}
 */
proto.SC2APIProtocol.RequestQuit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestQuit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestQuit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestQuit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestQuit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseQuit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseQuit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseQuit.displayName = 'proto.SC2APIProtocol.ResponseQuit';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseQuit.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseQuit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseQuit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseQuit.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseQuit}
 */
proto.SC2APIProtocol.ResponseQuit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseQuit;
  return proto.SC2APIProtocol.ResponseQuit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseQuit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseQuit}
 */
proto.SC2APIProtocol.ResponseQuit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseQuit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseQuit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseQuit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseQuit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestGameInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestGameInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestGameInfo.displayName = 'proto.SC2APIProtocol.RequestGameInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestGameInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestGameInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestGameInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestGameInfo.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestGameInfo}
 */
proto.SC2APIProtocol.RequestGameInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestGameInfo;
  return proto.SC2APIProtocol.RequestGameInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestGameInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestGameInfo}
 */
proto.SC2APIProtocol.RequestGameInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestGameInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestGameInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestGameInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestGameInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseGameInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.ResponseGameInfo.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseGameInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseGameInfo.displayName = 'proto.SC2APIProtocol.ResponseGameInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.ResponseGameInfo.repeatedFields_ = [6,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseGameInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseGameInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseGameInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapName: jspb.Message.getField(msg, 1),
    modNamesList: jspb.Message.getRepeatedField(msg, 6),
    localMapPath: jspb.Message.getField(msg, 2),
    playerInfoList: jspb.Message.toObjectList(msg.getPlayerInfoList(),
    proto.SC2APIProtocol.PlayerInfo.toObject, includeInstance),
    startRaw: (f = msg.getStartRaw()) && s2clientprotocol_raw_pb.StartRaw.toObject(includeInstance, f),
    options: (f = msg.getOptions()) && proto.SC2APIProtocol.InterfaceOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseGameInfo}
 */
proto.SC2APIProtocol.ResponseGameInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseGameInfo;
  return proto.SC2APIProtocol.ResponseGameInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseGameInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseGameInfo}
 */
proto.SC2APIProtocol.ResponseGameInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addModNames(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalMapPath(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.PlayerInfo;
      reader.readMessage(value,proto.SC2APIProtocol.PlayerInfo.deserializeBinaryFromReader);
      msg.addPlayerInfo(value);
      break;
    case 4:
      var value = new s2clientprotocol_raw_pb.StartRaw;
      reader.readMessage(value,s2clientprotocol_raw_pb.StartRaw.deserializeBinaryFromReader);
      msg.setStartRaw(value);
      break;
    case 5:
      var value = new proto.SC2APIProtocol.InterfaceOptions;
      reader.readMessage(value,proto.SC2APIProtocol.InterfaceOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseGameInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseGameInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseGameInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayerInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.SC2APIProtocol.PlayerInfo.serializeBinaryToWriter
    );
  }
  f = message.getStartRaw();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      s2clientprotocol_raw_pb.StartRaw.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.SC2APIProtocol.InterfaceOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string map_name = 1;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.getMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseGameInfo.prototype.setMapName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponseGameInfo.prototype.clearMapName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.hasMapName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string mod_names = 6;
 * @return {!Array.<string>}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.getModNamesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array.<string>} value */
proto.SC2APIProtocol.ResponseGameInfo.prototype.setModNamesList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.addModNames = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


proto.SC2APIProtocol.ResponseGameInfo.prototype.clearModNamesList = function() {
  this.setModNamesList([]);
};


/**
 * optional string local_map_path = 2;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.getLocalMapPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseGameInfo.prototype.setLocalMapPath = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ResponseGameInfo.prototype.clearLocalMapPath = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.hasLocalMapPath = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PlayerInfo player_info = 3;
 * @return {!Array.<!proto.SC2APIProtocol.PlayerInfo>}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.getPlayerInfoList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.PlayerInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.PlayerInfo, 3));
};


/** @param {!Array.<!proto.SC2APIProtocol.PlayerInfo>} value */
proto.SC2APIProtocol.ResponseGameInfo.prototype.setPlayerInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.SC2APIProtocol.PlayerInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.PlayerInfo}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.addPlayerInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.SC2APIProtocol.PlayerInfo, opt_index);
};


proto.SC2APIProtocol.ResponseGameInfo.prototype.clearPlayerInfoList = function() {
  this.setPlayerInfoList([]);
};


/**
 * optional StartRaw start_raw = 4;
 * @return {?proto.SC2APIProtocol.StartRaw}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.getStartRaw = function() {
  return /** @type{?proto.SC2APIProtocol.StartRaw} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_raw_pb.StartRaw, 4));
};


/** @param {?proto.SC2APIProtocol.StartRaw|undefined} value */
proto.SC2APIProtocol.ResponseGameInfo.prototype.setStartRaw = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.SC2APIProtocol.ResponseGameInfo.prototype.clearStartRaw = function() {
  this.setStartRaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.hasStartRaw = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional InterfaceOptions options = 5;
 * @return {?proto.SC2APIProtocol.InterfaceOptions}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.getOptions = function() {
  return /** @type{?proto.SC2APIProtocol.InterfaceOptions} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.InterfaceOptions, 5));
};


/** @param {?proto.SC2APIProtocol.InterfaceOptions|undefined} value */
proto.SC2APIProtocol.ResponseGameInfo.prototype.setOptions = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.SC2APIProtocol.ResponseGameInfo.prototype.clearOptions = function() {
  this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseGameInfo.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestObservation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestObservation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestObservation.displayName = 'proto.SC2APIProtocol.RequestObservation';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestObservation.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestObservation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestObservation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestObservation.toObject = function(includeInstance, msg) {
  var f, obj = {
    disableFog: jspb.Message.getField(msg, 1),
    gameLoop: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestObservation}
 */
proto.SC2APIProtocol.RequestObservation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestObservation;
  return proto.SC2APIProtocol.RequestObservation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestObservation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestObservation}
 */
proto.SC2APIProtocol.RequestObservation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableFog(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameLoop(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestObservation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestObservation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestObservation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestObservation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional bool disable_fog = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestObservation.prototype.getDisableFog = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestObservation.prototype.setDisableFog = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.RequestObservation.prototype.clearDisableFog = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestObservation.prototype.hasDisableFog = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 game_loop = 2;
 * @return {number}
 */
proto.SC2APIProtocol.RequestObservation.prototype.getGameLoop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.RequestObservation.prototype.setGameLoop = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.RequestObservation.prototype.clearGameLoop = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestObservation.prototype.hasGameLoop = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseObservation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.ResponseObservation.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseObservation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseObservation.displayName = 'proto.SC2APIProtocol.ResponseObservation';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.ResponseObservation.repeatedFields_ = [1,2,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseObservation.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseObservation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseObservation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseObservation.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.SC2APIProtocol.Action.toObject, includeInstance),
    actionErrorsList: jspb.Message.toObjectList(msg.getActionErrorsList(),
    proto.SC2APIProtocol.ActionError.toObject, includeInstance),
    observation: (f = msg.getObservation()) && proto.SC2APIProtocol.Observation.toObject(includeInstance, f),
    playerResultList: jspb.Message.toObjectList(msg.getPlayerResultList(),
    proto.SC2APIProtocol.PlayerResult.toObject, includeInstance),
    chatList: jspb.Message.toObjectList(msg.getChatList(),
    proto.SC2APIProtocol.ChatReceived.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseObservation}
 */
proto.SC2APIProtocol.ResponseObservation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseObservation;
  return proto.SC2APIProtocol.ResponseObservation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseObservation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseObservation}
 */
proto.SC2APIProtocol.ResponseObservation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SC2APIProtocol.Action;
      reader.readMessage(value,proto.SC2APIProtocol.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    case 2:
      var value = new proto.SC2APIProtocol.ActionError;
      reader.readMessage(value,proto.SC2APIProtocol.ActionError.deserializeBinaryFromReader);
      msg.addActionErrors(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.Observation;
      reader.readMessage(value,proto.SC2APIProtocol.Observation.deserializeBinaryFromReader);
      msg.setObservation(value);
      break;
    case 4:
      var value = new proto.SC2APIProtocol.PlayerResult;
      reader.readMessage(value,proto.SC2APIProtocol.PlayerResult.deserializeBinaryFromReader);
      msg.addPlayerResult(value);
      break;
    case 5:
      var value = new proto.SC2APIProtocol.ChatReceived;
      reader.readMessage(value,proto.SC2APIProtocol.ChatReceived.deserializeBinaryFromReader);
      msg.addChat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseObservation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseObservation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseObservation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseObservation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.SC2APIProtocol.Action.serializeBinaryToWriter
    );
  }
  f = message.getActionErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.SC2APIProtocol.ActionError.serializeBinaryToWriter
    );
  }
  f = message.getObservation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.SC2APIProtocol.Observation.serializeBinaryToWriter
    );
  }
  f = message.getPlayerResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.SC2APIProtocol.PlayerResult.serializeBinaryToWriter
    );
  }
  f = message.getChatList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.SC2APIProtocol.ChatReceived.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Action actions = 1;
 * @return {!Array.<!proto.SC2APIProtocol.Action>}
 */
proto.SC2APIProtocol.ResponseObservation.prototype.getActionsList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.Action, 1));
};


/** @param {!Array.<!proto.SC2APIProtocol.Action>} value */
proto.SC2APIProtocol.ResponseObservation.prototype.setActionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.SC2APIProtocol.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.Action}
 */
proto.SC2APIProtocol.ResponseObservation.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.SC2APIProtocol.Action, opt_index);
};


proto.SC2APIProtocol.ResponseObservation.prototype.clearActionsList = function() {
  this.setActionsList([]);
};


/**
 * repeated ActionError action_errors = 2;
 * @return {!Array.<!proto.SC2APIProtocol.ActionError>}
 */
proto.SC2APIProtocol.ResponseObservation.prototype.getActionErrorsList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.ActionError>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.ActionError, 2));
};


/** @param {!Array.<!proto.SC2APIProtocol.ActionError>} value */
proto.SC2APIProtocol.ResponseObservation.prototype.setActionErrorsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.SC2APIProtocol.ActionError=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.ActionError}
 */
proto.SC2APIProtocol.ResponseObservation.prototype.addActionErrors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.SC2APIProtocol.ActionError, opt_index);
};


proto.SC2APIProtocol.ResponseObservation.prototype.clearActionErrorsList = function() {
  this.setActionErrorsList([]);
};


/**
 * optional Observation observation = 3;
 * @return {?proto.SC2APIProtocol.Observation}
 */
proto.SC2APIProtocol.ResponseObservation.prototype.getObservation = function() {
  return /** @type{?proto.SC2APIProtocol.Observation} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.Observation, 3));
};


/** @param {?proto.SC2APIProtocol.Observation|undefined} value */
proto.SC2APIProtocol.ResponseObservation.prototype.setObservation = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.SC2APIProtocol.ResponseObservation.prototype.clearObservation = function() {
  this.setObservation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseObservation.prototype.hasObservation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated PlayerResult player_result = 4;
 * @return {!Array.<!proto.SC2APIProtocol.PlayerResult>}
 */
proto.SC2APIProtocol.ResponseObservation.prototype.getPlayerResultList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.PlayerResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.PlayerResult, 4));
};


/** @param {!Array.<!proto.SC2APIProtocol.PlayerResult>} value */
proto.SC2APIProtocol.ResponseObservation.prototype.setPlayerResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.SC2APIProtocol.PlayerResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.PlayerResult}
 */
proto.SC2APIProtocol.ResponseObservation.prototype.addPlayerResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.SC2APIProtocol.PlayerResult, opt_index);
};


proto.SC2APIProtocol.ResponseObservation.prototype.clearPlayerResultList = function() {
  this.setPlayerResultList([]);
};


/**
 * repeated ChatReceived chat = 5;
 * @return {!Array.<!proto.SC2APIProtocol.ChatReceived>}
 */
proto.SC2APIProtocol.ResponseObservation.prototype.getChatList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.ChatReceived>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.ChatReceived, 5));
};


/** @param {!Array.<!proto.SC2APIProtocol.ChatReceived>} value */
proto.SC2APIProtocol.ResponseObservation.prototype.setChatList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.SC2APIProtocol.ChatReceived=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.ChatReceived}
 */
proto.SC2APIProtocol.ResponseObservation.prototype.addChat = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.SC2APIProtocol.ChatReceived, opt_index);
};


proto.SC2APIProtocol.ResponseObservation.prototype.clearChatList = function() {
  this.setChatList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ChatReceived = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ChatReceived, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ChatReceived.displayName = 'proto.SC2APIProtocol.ChatReceived';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ChatReceived.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ChatReceived.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ChatReceived} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ChatReceived.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getField(msg, 1),
    message: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ChatReceived}
 */
proto.SC2APIProtocol.ChatReceived.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ChatReceived;
  return proto.SC2APIProtocol.ChatReceived.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ChatReceived} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ChatReceived}
 */
proto.SC2APIProtocol.ChatReceived.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ChatReceived.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ChatReceived.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ChatReceived} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ChatReceived.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 player_id = 1;
 * @return {number}
 */
proto.SC2APIProtocol.ChatReceived.prototype.getPlayerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.ChatReceived.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ChatReceived.prototype.clearPlayerId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ChatReceived.prototype.hasPlayerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.SC2APIProtocol.ChatReceived.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ChatReceived.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ChatReceived.prototype.clearMessage = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ChatReceived.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.RequestAction.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.RequestAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestAction.displayName = 'proto.SC2APIProtocol.RequestAction';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.RequestAction.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestAction.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.SC2APIProtocol.Action.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestAction}
 */
proto.SC2APIProtocol.RequestAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestAction;
  return proto.SC2APIProtocol.RequestAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestAction}
 */
proto.SC2APIProtocol.RequestAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SC2APIProtocol.Action;
      reader.readMessage(value,proto.SC2APIProtocol.Action.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.SC2APIProtocol.Action.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Action actions = 1;
 * @return {!Array.<!proto.SC2APIProtocol.Action>}
 */
proto.SC2APIProtocol.RequestAction.prototype.getActionsList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.Action>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.Action, 1));
};


/** @param {!Array.<!proto.SC2APIProtocol.Action>} value */
proto.SC2APIProtocol.RequestAction.prototype.setActionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.SC2APIProtocol.Action=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.Action}
 */
proto.SC2APIProtocol.RequestAction.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.SC2APIProtocol.Action, opt_index);
};


proto.SC2APIProtocol.RequestAction.prototype.clearActionsList = function() {
  this.setActionsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.ResponseAction.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseAction.displayName = 'proto.SC2APIProtocol.ResponseAction';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.ResponseAction.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseAction.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseAction}
 */
proto.SC2APIProtocol.ResponseAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseAction;
  return proto.SC2APIProtocol.ResponseAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseAction}
 */
proto.SC2APIProtocol.ResponseAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SC2APIProtocol.ActionResult} */ (reader.readEnum());
      msg.addResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedEnum(
      1,
      f
    );
  }
};


/**
 * repeated ActionResult result = 1;
 * @return {!Array.<!proto.SC2APIProtocol.ActionResult>}
 */
proto.SC2APIProtocol.ResponseAction.prototype.getResultList = function() {
  return /** @type {!Array.<!proto.SC2APIProtocol.ActionResult>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array.<!proto.SC2APIProtocol.ActionResult>} value */
proto.SC2APIProtocol.ResponseAction.prototype.setResultList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.SC2APIProtocol.ActionResult} value
 * @param {number=} opt_index
 */
proto.SC2APIProtocol.ResponseAction.prototype.addResult = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.SC2APIProtocol.ResponseAction.prototype.clearResultList = function() {
  this.setResultList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestObserverAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.RequestObserverAction.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.RequestObserverAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestObserverAction.displayName = 'proto.SC2APIProtocol.RequestObserverAction';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.RequestObserverAction.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestObserverAction.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestObserverAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestObserverAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestObserverAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.SC2APIProtocol.ObserverAction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestObserverAction}
 */
proto.SC2APIProtocol.RequestObserverAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestObserverAction;
  return proto.SC2APIProtocol.RequestObserverAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestObserverAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestObserverAction}
 */
proto.SC2APIProtocol.RequestObserverAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SC2APIProtocol.ObserverAction;
      reader.readMessage(value,proto.SC2APIProtocol.ObserverAction.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestObserverAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestObserverAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestObserverAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestObserverAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.SC2APIProtocol.ObserverAction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ObserverAction actions = 1;
 * @return {!Array.<!proto.SC2APIProtocol.ObserverAction>}
 */
proto.SC2APIProtocol.RequestObserverAction.prototype.getActionsList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.ObserverAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.ObserverAction, 1));
};


/** @param {!Array.<!proto.SC2APIProtocol.ObserverAction>} value */
proto.SC2APIProtocol.RequestObserverAction.prototype.setActionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.SC2APIProtocol.ObserverAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.ObserverAction}
 */
proto.SC2APIProtocol.RequestObserverAction.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.SC2APIProtocol.ObserverAction, opt_index);
};


proto.SC2APIProtocol.RequestObserverAction.prototype.clearActionsList = function() {
  this.setActionsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseObserverAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseObserverAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseObserverAction.displayName = 'proto.SC2APIProtocol.ResponseObserverAction';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseObserverAction.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseObserverAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseObserverAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseObserverAction.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseObserverAction}
 */
proto.SC2APIProtocol.ResponseObserverAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseObserverAction;
  return proto.SC2APIProtocol.ResponseObserverAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseObserverAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseObserverAction}
 */
proto.SC2APIProtocol.ResponseObserverAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseObserverAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseObserverAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseObserverAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseObserverAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestStep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestStep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestStep.displayName = 'proto.SC2APIProtocol.RequestStep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestStep.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestStep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestStep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestStep.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestStep}
 */
proto.SC2APIProtocol.RequestStep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestStep;
  return proto.SC2APIProtocol.RequestStep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestStep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestStep}
 */
proto.SC2APIProtocol.RequestStep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestStep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestStep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestStep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestStep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 count = 1;
 * @return {number}
 */
proto.SC2APIProtocol.RequestStep.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.RequestStep.prototype.setCount = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.RequestStep.prototype.clearCount = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestStep.prototype.hasCount = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseStep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseStep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseStep.displayName = 'proto.SC2APIProtocol.ResponseStep';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseStep.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseStep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseStep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseStep.toObject = function(includeInstance, msg) {
  var f, obj = {
    simulationLoop: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseStep}
 */
proto.SC2APIProtocol.ResponseStep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseStep;
  return proto.SC2APIProtocol.ResponseStep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseStep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseStep}
 */
proto.SC2APIProtocol.ResponseStep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSimulationLoop(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseStep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseStep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseStep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseStep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 simulation_loop = 1;
 * @return {number}
 */
proto.SC2APIProtocol.ResponseStep.prototype.getSimulationLoop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.ResponseStep.prototype.setSimulationLoop = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponseStep.prototype.clearSimulationLoop = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseStep.prototype.hasSimulationLoop = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestData.displayName = 'proto.SC2APIProtocol.RequestData';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestData.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestData.toObject = function(includeInstance, msg) {
  var f, obj = {
    abilityId: jspb.Message.getField(msg, 1),
    unitTypeId: jspb.Message.getField(msg, 2),
    upgradeId: jspb.Message.getField(msg, 3),
    buffId: jspb.Message.getField(msg, 4),
    effectId: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestData}
 */
proto.SC2APIProtocol.RequestData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestData;
  return proto.SC2APIProtocol.RequestData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestData}
 */
proto.SC2APIProtocol.RequestData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAbilityId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnitTypeId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpgradeId(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBuffId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEffectId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool ability_id = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestData.prototype.getAbilityId = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestData.prototype.setAbilityId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.RequestData.prototype.clearAbilityId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestData.prototype.hasAbilityId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool unit_type_id = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestData.prototype.getUnitTypeId = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestData.prototype.setUnitTypeId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.RequestData.prototype.clearUnitTypeId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestData.prototype.hasUnitTypeId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool upgrade_id = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestData.prototype.getUpgradeId = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestData.prototype.setUpgradeId = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SC2APIProtocol.RequestData.prototype.clearUpgradeId = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestData.prototype.hasUpgradeId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool buff_id = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestData.prototype.getBuffId = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestData.prototype.setBuffId = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SC2APIProtocol.RequestData.prototype.clearBuffId = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestData.prototype.hasBuffId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool effect_id = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestData.prototype.getEffectId = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestData.prototype.setEffectId = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SC2APIProtocol.RequestData.prototype.clearEffectId = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestData.prototype.hasEffectId = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.ResponseData.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseData.displayName = 'proto.SC2APIProtocol.ResponseData';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.ResponseData.repeatedFields_ = [1,2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseData.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseData.toObject = function(includeInstance, msg) {
  var f, obj = {
    abilitiesList: jspb.Message.toObjectList(msg.getAbilitiesList(),
    s2clientprotocol_data_pb.AbilityData.toObject, includeInstance),
    unitsList: jspb.Message.toObjectList(msg.getUnitsList(),
    s2clientprotocol_data_pb.UnitTypeData.toObject, includeInstance),
    upgradesList: jspb.Message.toObjectList(msg.getUpgradesList(),
    s2clientprotocol_data_pb.UpgradeData.toObject, includeInstance),
    buffsList: jspb.Message.toObjectList(msg.getBuffsList(),
    s2clientprotocol_data_pb.BuffData.toObject, includeInstance),
    effectsList: jspb.Message.toObjectList(msg.getEffectsList(),
    s2clientprotocol_data_pb.EffectData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseData}
 */
proto.SC2APIProtocol.ResponseData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseData;
  return proto.SC2APIProtocol.ResponseData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseData}
 */
proto.SC2APIProtocol.ResponseData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new s2clientprotocol_data_pb.AbilityData;
      reader.readMessage(value,s2clientprotocol_data_pb.AbilityData.deserializeBinaryFromReader);
      msg.addAbilities(value);
      break;
    case 2:
      var value = new s2clientprotocol_data_pb.UnitTypeData;
      reader.readMessage(value,s2clientprotocol_data_pb.UnitTypeData.deserializeBinaryFromReader);
      msg.addUnits(value);
      break;
    case 3:
      var value = new s2clientprotocol_data_pb.UpgradeData;
      reader.readMessage(value,s2clientprotocol_data_pb.UpgradeData.deserializeBinaryFromReader);
      msg.addUpgrades(value);
      break;
    case 4:
      var value = new s2clientprotocol_data_pb.BuffData;
      reader.readMessage(value,s2clientprotocol_data_pb.BuffData.deserializeBinaryFromReader);
      msg.addBuffs(value);
      break;
    case 5:
      var value = new s2clientprotocol_data_pb.EffectData;
      reader.readMessage(value,s2clientprotocol_data_pb.EffectData.deserializeBinaryFromReader);
      msg.addEffects(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAbilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      s2clientprotocol_data_pb.AbilityData.serializeBinaryToWriter
    );
  }
  f = message.getUnitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      s2clientprotocol_data_pb.UnitTypeData.serializeBinaryToWriter
    );
  }
  f = message.getUpgradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      s2clientprotocol_data_pb.UpgradeData.serializeBinaryToWriter
    );
  }
  f = message.getBuffsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      s2clientprotocol_data_pb.BuffData.serializeBinaryToWriter
    );
  }
  f = message.getEffectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      s2clientprotocol_data_pb.EffectData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AbilityData abilities = 1;
 * @return {!Array.<!proto.SC2APIProtocol.AbilityData>}
 */
proto.SC2APIProtocol.ResponseData.prototype.getAbilitiesList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.AbilityData>} */ (
    jspb.Message.getRepeatedWrapperField(this, s2clientprotocol_data_pb.AbilityData, 1));
};


/** @param {!Array.<!proto.SC2APIProtocol.AbilityData>} value */
proto.SC2APIProtocol.ResponseData.prototype.setAbilitiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.SC2APIProtocol.AbilityData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.AbilityData}
 */
proto.SC2APIProtocol.ResponseData.prototype.addAbilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.SC2APIProtocol.AbilityData, opt_index);
};


proto.SC2APIProtocol.ResponseData.prototype.clearAbilitiesList = function() {
  this.setAbilitiesList([]);
};


/**
 * repeated UnitTypeData units = 2;
 * @return {!Array.<!proto.SC2APIProtocol.UnitTypeData>}
 */
proto.SC2APIProtocol.ResponseData.prototype.getUnitsList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.UnitTypeData>} */ (
    jspb.Message.getRepeatedWrapperField(this, s2clientprotocol_data_pb.UnitTypeData, 2));
};


/** @param {!Array.<!proto.SC2APIProtocol.UnitTypeData>} value */
proto.SC2APIProtocol.ResponseData.prototype.setUnitsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.SC2APIProtocol.UnitTypeData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.UnitTypeData}
 */
proto.SC2APIProtocol.ResponseData.prototype.addUnits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.SC2APIProtocol.UnitTypeData, opt_index);
};


proto.SC2APIProtocol.ResponseData.prototype.clearUnitsList = function() {
  this.setUnitsList([]);
};


/**
 * repeated UpgradeData upgrades = 3;
 * @return {!Array.<!proto.SC2APIProtocol.UpgradeData>}
 */
proto.SC2APIProtocol.ResponseData.prototype.getUpgradesList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.UpgradeData>} */ (
    jspb.Message.getRepeatedWrapperField(this, s2clientprotocol_data_pb.UpgradeData, 3));
};


/** @param {!Array.<!proto.SC2APIProtocol.UpgradeData>} value */
proto.SC2APIProtocol.ResponseData.prototype.setUpgradesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.SC2APIProtocol.UpgradeData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.UpgradeData}
 */
proto.SC2APIProtocol.ResponseData.prototype.addUpgrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.SC2APIProtocol.UpgradeData, opt_index);
};


proto.SC2APIProtocol.ResponseData.prototype.clearUpgradesList = function() {
  this.setUpgradesList([]);
};


/**
 * repeated BuffData buffs = 4;
 * @return {!Array.<!proto.SC2APIProtocol.BuffData>}
 */
proto.SC2APIProtocol.ResponseData.prototype.getBuffsList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.BuffData>} */ (
    jspb.Message.getRepeatedWrapperField(this, s2clientprotocol_data_pb.BuffData, 4));
};


/** @param {!Array.<!proto.SC2APIProtocol.BuffData>} value */
proto.SC2APIProtocol.ResponseData.prototype.setBuffsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.SC2APIProtocol.BuffData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.BuffData}
 */
proto.SC2APIProtocol.ResponseData.prototype.addBuffs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.SC2APIProtocol.BuffData, opt_index);
};


proto.SC2APIProtocol.ResponseData.prototype.clearBuffsList = function() {
  this.setBuffsList([]);
};


/**
 * repeated EffectData effects = 5;
 * @return {!Array.<!proto.SC2APIProtocol.EffectData>}
 */
proto.SC2APIProtocol.ResponseData.prototype.getEffectsList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.EffectData>} */ (
    jspb.Message.getRepeatedWrapperField(this, s2clientprotocol_data_pb.EffectData, 5));
};


/** @param {!Array.<!proto.SC2APIProtocol.EffectData>} value */
proto.SC2APIProtocol.ResponseData.prototype.setEffectsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.SC2APIProtocol.EffectData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.EffectData}
 */
proto.SC2APIProtocol.ResponseData.prototype.addEffects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.SC2APIProtocol.EffectData, opt_index);
};


proto.SC2APIProtocol.ResponseData.prototype.clearEffectsList = function() {
  this.setEffectsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestSaveReplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestSaveReplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestSaveReplay.displayName = 'proto.SC2APIProtocol.RequestSaveReplay';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestSaveReplay.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestSaveReplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestSaveReplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestSaveReplay.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestSaveReplay}
 */
proto.SC2APIProtocol.RequestSaveReplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestSaveReplay;
  return proto.SC2APIProtocol.RequestSaveReplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestSaveReplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestSaveReplay}
 */
proto.SC2APIProtocol.RequestSaveReplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestSaveReplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestSaveReplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestSaveReplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestSaveReplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseSaveReplay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseSaveReplay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseSaveReplay.displayName = 'proto.SC2APIProtocol.ResponseSaveReplay';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseSaveReplay.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseSaveReplay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseSaveReplay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseSaveReplay.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseSaveReplay}
 */
proto.SC2APIProtocol.ResponseSaveReplay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseSaveReplay;
  return proto.SC2APIProtocol.ResponseSaveReplay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseSaveReplay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseSaveReplay}
 */
proto.SC2APIProtocol.ResponseSaveReplay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseSaveReplay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseSaveReplay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseSaveReplay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseSaveReplay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.SC2APIProtocol.ResponseSaveReplay.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.SC2APIProtocol.ResponseSaveReplay.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseSaveReplay.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/** @param {!(string|Uint8Array)} value */
proto.SC2APIProtocol.ResponseSaveReplay.prototype.setData = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponseSaveReplay.prototype.clearData = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseSaveReplay.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestReplayInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_);
};
goog.inherits(proto.SC2APIProtocol.RequestReplayInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestReplayInfo.displayName = 'proto.SC2APIProtocol.RequestReplayInfo';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.SC2APIProtocol.RequestReplayInfo.ReplayCase = {
  REPLAY_NOT_SET: 0,
  REPLAY_PATH: 1,
  REPLAY_DATA: 2
};

/**
 * @return {proto.SC2APIProtocol.RequestReplayInfo.ReplayCase}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.getReplayCase = function() {
  return /** @type {proto.SC2APIProtocol.RequestReplayInfo.ReplayCase} */(jspb.Message.computeOneofCase(this, proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestReplayInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestReplayInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestReplayInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    replayPath: jspb.Message.getField(msg, 1),
    replayData: msg.getReplayData_asB64(),
    downloadData: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestReplayInfo}
 */
proto.SC2APIProtocol.RequestReplayInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestReplayInfo;
  return proto.SC2APIProtocol.RequestReplayInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestReplayInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestReplayInfo}
 */
proto.SC2APIProtocol.RequestReplayInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplayPath(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReplayData(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDownloadData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestReplayInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestReplayInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestReplayInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string replay_path = 1;
 * @return {string}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.getReplayPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.RequestReplayInfo.prototype.setReplayPath = function(value) {
  jspb.Message.setOneofField(this, 1, proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_[0], value);
};


proto.SC2APIProtocol.RequestReplayInfo.prototype.clearReplayPath = function() {
  jspb.Message.setOneofField(this, 1, proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.hasReplayPath = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes replay_data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.getReplayData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes replay_data = 2;
 * This is a type-conversion wrapper around `getReplayData()`
 * @return {string}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.getReplayData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReplayData()));
};


/**
 * optional bytes replay_data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReplayData()`
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.getReplayData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReplayData()));
};


/** @param {!(string|Uint8Array)} value */
proto.SC2APIProtocol.RequestReplayInfo.prototype.setReplayData = function(value) {
  jspb.Message.setOneofField(this, 2, proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_[0], value);
};


proto.SC2APIProtocol.RequestReplayInfo.prototype.clearReplayData = function() {
  jspb.Message.setOneofField(this, 2, proto.SC2APIProtocol.RequestReplayInfo.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.hasReplayData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool download_data = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.getDownloadData = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.RequestReplayInfo.prototype.setDownloadData = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SC2APIProtocol.RequestReplayInfo.prototype.clearDownloadData = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestReplayInfo.prototype.hasDownloadData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.PlayerInfoExtra = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.PlayerInfoExtra, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.PlayerInfoExtra.displayName = 'proto.SC2APIProtocol.PlayerInfoExtra';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.PlayerInfoExtra.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.PlayerInfoExtra} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.PlayerInfoExtra.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerInfo: (f = msg.getPlayerInfo()) && proto.SC2APIProtocol.PlayerInfo.toObject(includeInstance, f),
    playerResult: (f = msg.getPlayerResult()) && proto.SC2APIProtocol.PlayerResult.toObject(includeInstance, f),
    playerMmr: jspb.Message.getField(msg, 3),
    playerApm: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.PlayerInfoExtra}
 */
proto.SC2APIProtocol.PlayerInfoExtra.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.PlayerInfoExtra;
  return proto.SC2APIProtocol.PlayerInfoExtra.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.PlayerInfoExtra} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.PlayerInfoExtra}
 */
proto.SC2APIProtocol.PlayerInfoExtra.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SC2APIProtocol.PlayerInfo;
      reader.readMessage(value,proto.SC2APIProtocol.PlayerInfo.deserializeBinaryFromReader);
      msg.setPlayerInfo(value);
      break;
    case 2:
      var value = new proto.SC2APIProtocol.PlayerResult;
      reader.readMessage(value,proto.SC2APIProtocol.PlayerResult.deserializeBinaryFromReader);
      msg.setPlayerResult(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerMmr(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlayerApm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.PlayerInfoExtra.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.PlayerInfoExtra} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.PlayerInfoExtra.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.SC2APIProtocol.PlayerInfo.serializeBinaryToWriter
    );
  }
  f = message.getPlayerResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.SC2APIProtocol.PlayerResult.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional PlayerInfo player_info = 1;
 * @return {?proto.SC2APIProtocol.PlayerInfo}
 */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.getPlayerInfo = function() {
  return /** @type{?proto.SC2APIProtocol.PlayerInfo} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.PlayerInfo, 1));
};


/** @param {?proto.SC2APIProtocol.PlayerInfo|undefined} value */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.setPlayerInfo = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.SC2APIProtocol.PlayerInfoExtra.prototype.clearPlayerInfo = function() {
  this.setPlayerInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.hasPlayerInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlayerResult player_result = 2;
 * @return {?proto.SC2APIProtocol.PlayerResult}
 */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.getPlayerResult = function() {
  return /** @type{?proto.SC2APIProtocol.PlayerResult} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.PlayerResult, 2));
};


/** @param {?proto.SC2APIProtocol.PlayerResult|undefined} value */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.setPlayerResult = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.SC2APIProtocol.PlayerInfoExtra.prototype.clearPlayerResult = function() {
  this.setPlayerResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.hasPlayerResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 player_mmr = 3;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.getPlayerMmr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.setPlayerMmr = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SC2APIProtocol.PlayerInfoExtra.prototype.clearPlayerMmr = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.hasPlayerMmr = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 player_apm = 4;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.getPlayerApm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.setPlayerApm = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SC2APIProtocol.PlayerInfoExtra.prototype.clearPlayerApm = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerInfoExtra.prototype.hasPlayerApm = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseReplayInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.ResponseReplayInfo.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseReplayInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseReplayInfo.displayName = 'proto.SC2APIProtocol.ResponseReplayInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.ResponseReplayInfo.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseReplayInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseReplayInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseReplayInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapName: jspb.Message.getField(msg, 1),
    localMapPath: jspb.Message.getField(msg, 2),
    playerInfoList: jspb.Message.toObjectList(msg.getPlayerInfoList(),
    proto.SC2APIProtocol.PlayerInfoExtra.toObject, includeInstance),
    gameDurationLoops: jspb.Message.getField(msg, 4),
    gameDurationSeconds: jspb.Message.getOptionalFloatingPointField(msg, 5),
    gameVersion: jspb.Message.getField(msg, 6),
    dataVersion: jspb.Message.getField(msg, 11),
    dataBuild: jspb.Message.getField(msg, 7),
    baseBuild: jspb.Message.getField(msg, 8),
    error: jspb.Message.getField(msg, 9),
    errorDetails: jspb.Message.getField(msg, 10)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseReplayInfo}
 */
proto.SC2APIProtocol.ResponseReplayInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseReplayInfo;
  return proto.SC2APIProtocol.ResponseReplayInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseReplayInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseReplayInfo}
 */
proto.SC2APIProtocol.ResponseReplayInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalMapPath(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.PlayerInfoExtra;
      reader.readMessage(value,proto.SC2APIProtocol.PlayerInfoExtra.deserializeBinaryFromReader);
      msg.addPlayerInfo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameDurationLoops(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGameDurationSeconds(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameVersion(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataVersion(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDataBuild(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBaseBuild(value);
      break;
    case 9:
      var value = /** @type {!proto.SC2APIProtocol.ResponseReplayInfo.Error} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseReplayInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseReplayInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseReplayInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlayerInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.SC2APIProtocol.PlayerInfoExtra.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.ResponseReplayInfo.Error} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SC2APIProtocol.ResponseReplayInfo.Error = {
  MISSINGREPLAY: 1,
  INVALIDREPLAYPATH: 2,
  INVALIDREPLAYDATA: 3,
  PARSINGERROR: 4,
  DOWNLOADERROR: 5
};

/**
 * optional string map_name = 1;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.getMapName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.setMapName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponseReplayInfo.prototype.clearMapName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.hasMapName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string local_map_path = 2;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.getLocalMapPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.setLocalMapPath = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ResponseReplayInfo.prototype.clearLocalMapPath = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.hasLocalMapPath = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated PlayerInfoExtra player_info = 3;
 * @return {!Array.<!proto.SC2APIProtocol.PlayerInfoExtra>}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.getPlayerInfoList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.PlayerInfoExtra>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SC2APIProtocol.PlayerInfoExtra, 3));
};


/** @param {!Array.<!proto.SC2APIProtocol.PlayerInfoExtra>} value */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.setPlayerInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.SC2APIProtocol.PlayerInfoExtra=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.PlayerInfoExtra}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.addPlayerInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.SC2APIProtocol.PlayerInfoExtra, opt_index);
};


proto.SC2APIProtocol.ResponseReplayInfo.prototype.clearPlayerInfoList = function() {
  this.setPlayerInfoList([]);
};


/**
 * optional uint32 game_duration_loops = 4;
 * @return {number}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.getGameDurationLoops = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.setGameDurationLoops = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SC2APIProtocol.ResponseReplayInfo.prototype.clearGameDurationLoops = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.hasGameDurationLoops = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional float game_duration_seconds = 5;
 * @return {number}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.getGameDurationSeconds = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.setGameDurationSeconds = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SC2APIProtocol.ResponseReplayInfo.prototype.clearGameDurationSeconds = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.hasGameDurationSeconds = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string game_version = 6;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.getGameVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.setGameVersion = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.SC2APIProtocol.ResponseReplayInfo.prototype.clearGameVersion = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.hasGameVersion = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string data_version = 11;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.getDataVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.setDataVersion = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.SC2APIProtocol.ResponseReplayInfo.prototype.clearDataVersion = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.hasDataVersion = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint32 data_build = 7;
 * @return {number}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.getDataBuild = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.setDataBuild = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.SC2APIProtocol.ResponseReplayInfo.prototype.clearDataBuild = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.hasDataBuild = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 base_build = 8;
 * @return {number}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.getBaseBuild = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.setBaseBuild = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.SC2APIProtocol.ResponseReplayInfo.prototype.clearBaseBuild = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.hasBaseBuild = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Error error = 9;
 * @return {!proto.SC2APIProtocol.ResponseReplayInfo.Error}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.getError = function() {
  return /** @type {!proto.SC2APIProtocol.ResponseReplayInfo.Error} */ (jspb.Message.getFieldWithDefault(this, 9, 1));
};


/** @param {!proto.SC2APIProtocol.ResponseReplayInfo.Error} value */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.setError = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.SC2APIProtocol.ResponseReplayInfo.prototype.clearError = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.hasError = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string error_details = 10;
 * @return {string}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.getErrorDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.setErrorDetails = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.SC2APIProtocol.ResponseReplayInfo.prototype.clearErrorDetails = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseReplayInfo.prototype.hasErrorDetails = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestAvailableMaps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestAvailableMaps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestAvailableMaps.displayName = 'proto.SC2APIProtocol.RequestAvailableMaps';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestAvailableMaps.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestAvailableMaps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestAvailableMaps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestAvailableMaps.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestAvailableMaps}
 */
proto.SC2APIProtocol.RequestAvailableMaps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestAvailableMaps;
  return proto.SC2APIProtocol.RequestAvailableMaps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestAvailableMaps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestAvailableMaps}
 */
proto.SC2APIProtocol.RequestAvailableMaps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestAvailableMaps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestAvailableMaps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestAvailableMaps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestAvailableMaps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseAvailableMaps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.ResponseAvailableMaps.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseAvailableMaps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseAvailableMaps.displayName = 'proto.SC2APIProtocol.ResponseAvailableMaps';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.ResponseAvailableMaps.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseAvailableMaps.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseAvailableMaps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseAvailableMaps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseAvailableMaps.toObject = function(includeInstance, msg) {
  var f, obj = {
    localMapPathsList: jspb.Message.getRepeatedField(msg, 1),
    battlenetMapNamesList: jspb.Message.getRepeatedField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseAvailableMaps}
 */
proto.SC2APIProtocol.ResponseAvailableMaps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseAvailableMaps;
  return proto.SC2APIProtocol.ResponseAvailableMaps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseAvailableMaps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseAvailableMaps}
 */
proto.SC2APIProtocol.ResponseAvailableMaps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLocalMapPaths(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addBattlenetMapNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseAvailableMaps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseAvailableMaps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseAvailableMaps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseAvailableMaps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocalMapPathsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getBattlenetMapNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string local_map_paths = 1;
 * @return {!Array.<string>}
 */
proto.SC2APIProtocol.ResponseAvailableMaps.prototype.getLocalMapPathsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array.<string>} value */
proto.SC2APIProtocol.ResponseAvailableMaps.prototype.setLocalMapPathsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.SC2APIProtocol.ResponseAvailableMaps.prototype.addLocalMapPaths = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.SC2APIProtocol.ResponseAvailableMaps.prototype.clearLocalMapPathsList = function() {
  this.setLocalMapPathsList([]);
};


/**
 * repeated string battlenet_map_names = 2;
 * @return {!Array.<string>}
 */
proto.SC2APIProtocol.ResponseAvailableMaps.prototype.getBattlenetMapNamesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array.<string>} value */
proto.SC2APIProtocol.ResponseAvailableMaps.prototype.setBattlenetMapNamesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.SC2APIProtocol.ResponseAvailableMaps.prototype.addBattlenetMapNames = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.SC2APIProtocol.ResponseAvailableMaps.prototype.clearBattlenetMapNamesList = function() {
  this.setBattlenetMapNamesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestSaveMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestSaveMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestSaveMap.displayName = 'proto.SC2APIProtocol.RequestSaveMap';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestSaveMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestSaveMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestSaveMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapPath: jspb.Message.getField(msg, 1),
    mapData: msg.getMapData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestSaveMap}
 */
proto.SC2APIProtocol.RequestSaveMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestSaveMap;
  return proto.SC2APIProtocol.RequestSaveMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestSaveMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestSaveMap}
 */
proto.SC2APIProtocol.RequestSaveMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapPath(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMapData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestSaveMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestSaveMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestSaveMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string map_path = 1;
 * @return {string}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.getMapPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.RequestSaveMap.prototype.setMapPath = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.RequestSaveMap.prototype.clearMapPath = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.hasMapPath = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes map_data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.getMapData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes map_data = 2;
 * This is a type-conversion wrapper around `getMapData()`
 * @return {string}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.getMapData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMapData()));
};


/**
 * optional bytes map_data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMapData()`
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.getMapData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMapData()));
};


/** @param {!(string|Uint8Array)} value */
proto.SC2APIProtocol.RequestSaveMap.prototype.setMapData = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.RequestSaveMap.prototype.clearMapData = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.RequestSaveMap.prototype.hasMapData = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseSaveMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseSaveMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseSaveMap.displayName = 'proto.SC2APIProtocol.ResponseSaveMap';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseSaveMap.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseSaveMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseSaveMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseSaveMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseSaveMap}
 */
proto.SC2APIProtocol.ResponseSaveMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseSaveMap;
  return proto.SC2APIProtocol.ResponseSaveMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseSaveMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseSaveMap}
 */
proto.SC2APIProtocol.ResponseSaveMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SC2APIProtocol.ResponseSaveMap.Error} */ (reader.readEnum());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseSaveMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseSaveMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseSaveMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseSaveMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SC2APIProtocol.ResponseSaveMap.Error} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SC2APIProtocol.ResponseSaveMap.Error = {
  INVALIDMAPDATA: 1
};

/**
 * optional Error error = 1;
 * @return {!proto.SC2APIProtocol.ResponseSaveMap.Error}
 */
proto.SC2APIProtocol.ResponseSaveMap.prototype.getError = function() {
  return /** @type {!proto.SC2APIProtocol.ResponseSaveMap.Error} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/** @param {!proto.SC2APIProtocol.ResponseSaveMap.Error} value */
proto.SC2APIProtocol.ResponseSaveMap.prototype.setError = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponseSaveMap.prototype.clearError = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponseSaveMap.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestPing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.RequestPing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestPing.displayName = 'proto.SC2APIProtocol.RequestPing';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestPing.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestPing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestPing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestPing.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestPing}
 */
proto.SC2APIProtocol.RequestPing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestPing;
  return proto.SC2APIProtocol.RequestPing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestPing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestPing}
 */
proto.SC2APIProtocol.RequestPing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestPing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestPing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestPing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestPing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponsePing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponsePing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponsePing.displayName = 'proto.SC2APIProtocol.ResponsePing';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponsePing.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponsePing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponsePing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponsePing.toObject = function(includeInstance, msg) {
  var f, obj = {
    gameVersion: jspb.Message.getField(msg, 1),
    dataVersion: jspb.Message.getField(msg, 2),
    dataBuild: jspb.Message.getField(msg, 3),
    baseBuild: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponsePing}
 */
proto.SC2APIProtocol.ResponsePing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponsePing;
  return proto.SC2APIProtocol.ResponsePing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponsePing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponsePing}
 */
proto.SC2APIProtocol.ResponsePing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataVersion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDataBuild(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBaseBuild(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponsePing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponsePing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponsePing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponsePing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string game_version = 1;
 * @return {string}
 */
proto.SC2APIProtocol.ResponsePing.prototype.getGameVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponsePing.prototype.setGameVersion = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ResponsePing.prototype.clearGameVersion = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponsePing.prototype.hasGameVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string data_version = 2;
 * @return {string}
 */
proto.SC2APIProtocol.ResponsePing.prototype.getDataVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ResponsePing.prototype.setDataVersion = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ResponsePing.prototype.clearDataVersion = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponsePing.prototype.hasDataVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 data_build = 3;
 * @return {number}
 */
proto.SC2APIProtocol.ResponsePing.prototype.getDataBuild = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.ResponsePing.prototype.setDataBuild = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SC2APIProtocol.ResponsePing.prototype.clearDataBuild = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponsePing.prototype.hasDataBuild = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 base_build = 4;
 * @return {number}
 */
proto.SC2APIProtocol.ResponsePing.prototype.getBaseBuild = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.ResponsePing.prototype.setBaseBuild = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SC2APIProtocol.ResponsePing.prototype.clearBaseBuild = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ResponsePing.prototype.hasBaseBuild = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.RequestDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.RequestDebug.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.RequestDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.RequestDebug.displayName = 'proto.SC2APIProtocol.RequestDebug';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.RequestDebug.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.RequestDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.RequestDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.RequestDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestDebug.toObject = function(includeInstance, msg) {
  var f, obj = {
    debugList: jspb.Message.toObjectList(msg.getDebugList(),
    s2clientprotocol_debug_pb.DebugCommand.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.RequestDebug}
 */
proto.SC2APIProtocol.RequestDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.RequestDebug;
  return proto.SC2APIProtocol.RequestDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.RequestDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.RequestDebug}
 */
proto.SC2APIProtocol.RequestDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new s2clientprotocol_debug_pb.DebugCommand;
      reader.readMessage(value,s2clientprotocol_debug_pb.DebugCommand.deserializeBinaryFromReader);
      msg.addDebug(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.RequestDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.RequestDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.RequestDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.RequestDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDebugList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      s2clientprotocol_debug_pb.DebugCommand.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DebugCommand debug = 1;
 * @return {!Array.<!proto.SC2APIProtocol.DebugCommand>}
 */
proto.SC2APIProtocol.RequestDebug.prototype.getDebugList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.DebugCommand>} */ (
    jspb.Message.getRepeatedWrapperField(this, s2clientprotocol_debug_pb.DebugCommand, 1));
};


/** @param {!Array.<!proto.SC2APIProtocol.DebugCommand>} value */
proto.SC2APIProtocol.RequestDebug.prototype.setDebugList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.SC2APIProtocol.DebugCommand=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.DebugCommand}
 */
proto.SC2APIProtocol.RequestDebug.prototype.addDebug = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.SC2APIProtocol.DebugCommand, opt_index);
};


proto.SC2APIProtocol.RequestDebug.prototype.clearDebugList = function() {
  this.setDebugList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ResponseDebug = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ResponseDebug, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ResponseDebug.displayName = 'proto.SC2APIProtocol.ResponseDebug';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ResponseDebug.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ResponseDebug.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ResponseDebug} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseDebug.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ResponseDebug}
 */
proto.SC2APIProtocol.ResponseDebug.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ResponseDebug;
  return proto.SC2APIProtocol.ResponseDebug.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ResponseDebug} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ResponseDebug}
 */
proto.SC2APIProtocol.ResponseDebug.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ResponseDebug.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ResponseDebug.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ResponseDebug} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ResponseDebug.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.PlayerSetup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.PlayerSetup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.PlayerSetup.displayName = 'proto.SC2APIProtocol.PlayerSetup';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.PlayerSetup.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.PlayerSetup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.PlayerSetup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.PlayerSetup.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    race: jspb.Message.getField(msg, 2),
    difficulty: jspb.Message.getField(msg, 3),
    playerName: jspb.Message.getField(msg, 4),
    aiBuild: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.PlayerSetup}
 */
proto.SC2APIProtocol.PlayerSetup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.PlayerSetup;
  return proto.SC2APIProtocol.PlayerSetup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.PlayerSetup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.PlayerSetup}
 */
proto.SC2APIProtocol.PlayerSetup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SC2APIProtocol.PlayerType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!proto.SC2APIProtocol.Race} */ (reader.readEnum());
      msg.setRace(value);
      break;
    case 3:
      var value = /** @type {!proto.SC2APIProtocol.Difficulty} */ (reader.readEnum());
      msg.setDifficulty(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerName(value);
      break;
    case 5:
      var value = /** @type {!proto.SC2APIProtocol.AIBuild} */ (reader.readEnum());
      msg.setAiBuild(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.PlayerSetup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.PlayerSetup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.PlayerSetup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.PlayerSetup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SC2APIProtocol.PlayerType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.Race} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.Difficulty} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.AIBuild} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional PlayerType type = 1;
 * @return {!proto.SC2APIProtocol.PlayerType}
 */
proto.SC2APIProtocol.PlayerSetup.prototype.getType = function() {
  return /** @type {!proto.SC2APIProtocol.PlayerType} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/** @param {!proto.SC2APIProtocol.PlayerType} value */
proto.SC2APIProtocol.PlayerSetup.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.PlayerSetup.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerSetup.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Race race = 2;
 * @return {!proto.SC2APIProtocol.Race}
 */
proto.SC2APIProtocol.PlayerSetup.prototype.getRace = function() {
  return /** @type {!proto.SC2APIProtocol.Race} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.SC2APIProtocol.Race} value */
proto.SC2APIProtocol.PlayerSetup.prototype.setRace = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.PlayerSetup.prototype.clearRace = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerSetup.prototype.hasRace = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Difficulty difficulty = 3;
 * @return {!proto.SC2APIProtocol.Difficulty}
 */
proto.SC2APIProtocol.PlayerSetup.prototype.getDifficulty = function() {
  return /** @type {!proto.SC2APIProtocol.Difficulty} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/** @param {!proto.SC2APIProtocol.Difficulty} value */
proto.SC2APIProtocol.PlayerSetup.prototype.setDifficulty = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SC2APIProtocol.PlayerSetup.prototype.clearDifficulty = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerSetup.prototype.hasDifficulty = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string player_name = 4;
 * @return {string}
 */
proto.SC2APIProtocol.PlayerSetup.prototype.getPlayerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.PlayerSetup.prototype.setPlayerName = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SC2APIProtocol.PlayerSetup.prototype.clearPlayerName = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerSetup.prototype.hasPlayerName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AIBuild ai_build = 5;
 * @return {!proto.SC2APIProtocol.AIBuild}
 */
proto.SC2APIProtocol.PlayerSetup.prototype.getAiBuild = function() {
  return /** @type {!proto.SC2APIProtocol.AIBuild} */ (jspb.Message.getFieldWithDefault(this, 5, 1));
};


/** @param {!proto.SC2APIProtocol.AIBuild} value */
proto.SC2APIProtocol.PlayerSetup.prototype.setAiBuild = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SC2APIProtocol.PlayerSetup.prototype.clearAiBuild = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerSetup.prototype.hasAiBuild = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.SpatialCameraSetup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.SpatialCameraSetup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.SpatialCameraSetup.displayName = 'proto.SC2APIProtocol.SpatialCameraSetup';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.SpatialCameraSetup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.SpatialCameraSetup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.SpatialCameraSetup.toObject = function(includeInstance, msg) {
  var f, obj = {
    resolution: (f = msg.getResolution()) && s2clientprotocol_common_pb.Size2DI.toObject(includeInstance, f),
    minimapResolution: (f = msg.getMinimapResolution()) && s2clientprotocol_common_pb.Size2DI.toObject(includeInstance, f),
    width: jspb.Message.getOptionalFloatingPointField(msg, 1),
    cropToPlayableArea: jspb.Message.getField(msg, 4),
    allowCheatingLayers: jspb.Message.getField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.SpatialCameraSetup}
 */
proto.SC2APIProtocol.SpatialCameraSetup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.SpatialCameraSetup;
  return proto.SC2APIProtocol.SpatialCameraSetup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.SpatialCameraSetup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.SpatialCameraSetup}
 */
proto.SC2APIProtocol.SpatialCameraSetup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new s2clientprotocol_common_pb.Size2DI;
      reader.readMessage(value,s2clientprotocol_common_pb.Size2DI.deserializeBinaryFromReader);
      msg.setResolution(value);
      break;
    case 3:
      var value = new s2clientprotocol_common_pb.Size2DI;
      reader.readMessage(value,s2clientprotocol_common_pb.Size2DI.deserializeBinaryFromReader);
      msg.setMinimapResolution(value);
      break;
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWidth(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCropToPlayableArea(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowCheatingLayers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.SpatialCameraSetup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.SpatialCameraSetup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.SpatialCameraSetup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResolution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      s2clientprotocol_common_pb.Size2DI.serializeBinaryToWriter
    );
  }
  f = message.getMinimapResolution();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      s2clientprotocol_common_pb.Size2DI.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional Size2DI resolution = 2;
 * @return {?proto.SC2APIProtocol.Size2DI}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.getResolution = function() {
  return /** @type{?proto.SC2APIProtocol.Size2DI} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_common_pb.Size2DI, 2));
};


/** @param {?proto.SC2APIProtocol.Size2DI|undefined} value */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.setResolution = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.SC2APIProtocol.SpatialCameraSetup.prototype.clearResolution = function() {
  this.setResolution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.hasResolution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Size2DI minimap_resolution = 3;
 * @return {?proto.SC2APIProtocol.Size2DI}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.getMinimapResolution = function() {
  return /** @type{?proto.SC2APIProtocol.Size2DI} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_common_pb.Size2DI, 3));
};


/** @param {?proto.SC2APIProtocol.Size2DI|undefined} value */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.setMinimapResolution = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.SC2APIProtocol.SpatialCameraSetup.prototype.clearMinimapResolution = function() {
  this.setMinimapResolution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.hasMinimapResolution = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float width = 1;
 * @return {number}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.getWidth = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.setWidth = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.SpatialCameraSetup.prototype.clearWidth = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool crop_to_playable_area = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.getCropToPlayableArea = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.setCropToPlayableArea = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SC2APIProtocol.SpatialCameraSetup.prototype.clearCropToPlayableArea = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.hasCropToPlayableArea = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool allow_cheating_layers = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.getAllowCheatingLayers = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.setAllowCheatingLayers = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SC2APIProtocol.SpatialCameraSetup.prototype.clearAllowCheatingLayers = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.SpatialCameraSetup.prototype.hasAllowCheatingLayers = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.InterfaceOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.InterfaceOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.InterfaceOptions.displayName = 'proto.SC2APIProtocol.InterfaceOptions';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.InterfaceOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.InterfaceOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.InterfaceOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getField(msg, 1),
    score: jspb.Message.getField(msg, 2),
    featureLayer: (f = msg.getFeatureLayer()) && proto.SC2APIProtocol.SpatialCameraSetup.toObject(includeInstance, f),
    render: (f = msg.getRender()) && proto.SC2APIProtocol.SpatialCameraSetup.toObject(includeInstance, f),
    showCloaked: jspb.Message.getField(msg, 5),
    showBurrowedShadows: jspb.Message.getField(msg, 9),
    showPlaceholders: jspb.Message.getField(msg, 8),
    rawAffectsSelection: jspb.Message.getField(msg, 6),
    rawCropToPlayableArea: jspb.Message.getField(msg, 7)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.InterfaceOptions}
 */
proto.SC2APIProtocol.InterfaceOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.InterfaceOptions;
  return proto.SC2APIProtocol.InterfaceOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.InterfaceOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.InterfaceOptions}
 */
proto.SC2APIProtocol.InterfaceOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRaw(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setScore(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.SpatialCameraSetup;
      reader.readMessage(value,proto.SC2APIProtocol.SpatialCameraSetup.deserializeBinaryFromReader);
      msg.setFeatureLayer(value);
      break;
    case 4:
      var value = new proto.SC2APIProtocol.SpatialCameraSetup;
      reader.readMessage(value,proto.SC2APIProtocol.SpatialCameraSetup.deserializeBinaryFromReader);
      msg.setRender(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowCloaked(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowBurrowedShadows(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowPlaceholders(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRawAffectsSelection(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRawCropToPlayableArea(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.InterfaceOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.InterfaceOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.InterfaceOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getFeatureLayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.SC2APIProtocol.SpatialCameraSetup.serializeBinaryToWriter
    );
  }
  f = message.getRender();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.SC2APIProtocol.SpatialCameraSetup.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional bool raw = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.getRaw = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.InterfaceOptions.prototype.setRaw = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.InterfaceOptions.prototype.clearRaw = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.hasRaw = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool score = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.getScore = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.InterfaceOptions.prototype.setScore = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.InterfaceOptions.prototype.clearScore = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.hasScore = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SpatialCameraSetup feature_layer = 3;
 * @return {?proto.SC2APIProtocol.SpatialCameraSetup}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.getFeatureLayer = function() {
  return /** @type{?proto.SC2APIProtocol.SpatialCameraSetup} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.SpatialCameraSetup, 3));
};


/** @param {?proto.SC2APIProtocol.SpatialCameraSetup|undefined} value */
proto.SC2APIProtocol.InterfaceOptions.prototype.setFeatureLayer = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.SC2APIProtocol.InterfaceOptions.prototype.clearFeatureLayer = function() {
  this.setFeatureLayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.hasFeatureLayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SpatialCameraSetup render = 4;
 * @return {?proto.SC2APIProtocol.SpatialCameraSetup}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.getRender = function() {
  return /** @type{?proto.SC2APIProtocol.SpatialCameraSetup} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.SpatialCameraSetup, 4));
};


/** @param {?proto.SC2APIProtocol.SpatialCameraSetup|undefined} value */
proto.SC2APIProtocol.InterfaceOptions.prototype.setRender = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.SC2APIProtocol.InterfaceOptions.prototype.clearRender = function() {
  this.setRender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.hasRender = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool show_cloaked = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.getShowCloaked = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.InterfaceOptions.prototype.setShowCloaked = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SC2APIProtocol.InterfaceOptions.prototype.clearShowCloaked = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.hasShowCloaked = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool show_burrowed_shadows = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.getShowBurrowedShadows = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.InterfaceOptions.prototype.setShowBurrowedShadows = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.SC2APIProtocol.InterfaceOptions.prototype.clearShowBurrowedShadows = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.hasShowBurrowedShadows = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool show_placeholders = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.getShowPlaceholders = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.InterfaceOptions.prototype.setShowPlaceholders = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.SC2APIProtocol.InterfaceOptions.prototype.clearShowPlaceholders = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.hasShowPlaceholders = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool raw_affects_selection = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.getRawAffectsSelection = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.InterfaceOptions.prototype.setRawAffectsSelection = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.SC2APIProtocol.InterfaceOptions.prototype.clearRawAffectsSelection = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.hasRawAffectsSelection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool raw_crop_to_playable_area = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.getRawCropToPlayableArea = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.SC2APIProtocol.InterfaceOptions.prototype.setRawCropToPlayableArea = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.SC2APIProtocol.InterfaceOptions.prototype.clearRawCropToPlayableArea = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.InterfaceOptions.prototype.hasRawCropToPlayableArea = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.PlayerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.PlayerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.PlayerInfo.displayName = 'proto.SC2APIProtocol.PlayerInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.PlayerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.PlayerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.PlayerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2),
    raceRequested: jspb.Message.getField(msg, 3),
    raceActual: jspb.Message.getField(msg, 4),
    difficulty: jspb.Message.getField(msg, 5),
    aiBuild: jspb.Message.getField(msg, 7),
    playerName: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.PlayerInfo}
 */
proto.SC2APIProtocol.PlayerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.PlayerInfo;
  return proto.SC2APIProtocol.PlayerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.PlayerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.PlayerInfo}
 */
proto.SC2APIProtocol.PlayerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerId(value);
      break;
    case 2:
      var value = /** @type {!proto.SC2APIProtocol.PlayerType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {!proto.SC2APIProtocol.Race} */ (reader.readEnum());
      msg.setRaceRequested(value);
      break;
    case 4:
      var value = /** @type {!proto.SC2APIProtocol.Race} */ (reader.readEnum());
      msg.setRaceActual(value);
      break;
    case 5:
      var value = /** @type {!proto.SC2APIProtocol.Difficulty} */ (reader.readEnum());
      msg.setDifficulty(value);
      break;
    case 7:
      var value = /** @type {!proto.SC2APIProtocol.AIBuild} */ (reader.readEnum());
      msg.setAiBuild(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayerName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.PlayerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.PlayerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.PlayerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.PlayerType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.Race} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.Race} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.Difficulty} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.AIBuild} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional uint32 player_id = 1;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.getPlayerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerInfo.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.PlayerInfo.prototype.clearPlayerId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.hasPlayerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlayerType type = 2;
 * @return {!proto.SC2APIProtocol.PlayerType}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.getType = function() {
  return /** @type {!proto.SC2APIProtocol.PlayerType} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/** @param {!proto.SC2APIProtocol.PlayerType} value */
proto.SC2APIProtocol.PlayerInfo.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.PlayerInfo.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Race race_requested = 3;
 * @return {!proto.SC2APIProtocol.Race}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.getRaceRequested = function() {
  return /** @type {!proto.SC2APIProtocol.Race} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.SC2APIProtocol.Race} value */
proto.SC2APIProtocol.PlayerInfo.prototype.setRaceRequested = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SC2APIProtocol.PlayerInfo.prototype.clearRaceRequested = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.hasRaceRequested = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Race race_actual = 4;
 * @return {!proto.SC2APIProtocol.Race}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.getRaceActual = function() {
  return /** @type {!proto.SC2APIProtocol.Race} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.SC2APIProtocol.Race} value */
proto.SC2APIProtocol.PlayerInfo.prototype.setRaceActual = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SC2APIProtocol.PlayerInfo.prototype.clearRaceActual = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.hasRaceActual = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Difficulty difficulty = 5;
 * @return {!proto.SC2APIProtocol.Difficulty}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.getDifficulty = function() {
  return /** @type {!proto.SC2APIProtocol.Difficulty} */ (jspb.Message.getFieldWithDefault(this, 5, 1));
};


/** @param {!proto.SC2APIProtocol.Difficulty} value */
proto.SC2APIProtocol.PlayerInfo.prototype.setDifficulty = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SC2APIProtocol.PlayerInfo.prototype.clearDifficulty = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.hasDifficulty = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AIBuild ai_build = 7;
 * @return {!proto.SC2APIProtocol.AIBuild}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.getAiBuild = function() {
  return /** @type {!proto.SC2APIProtocol.AIBuild} */ (jspb.Message.getFieldWithDefault(this, 7, 1));
};


/** @param {!proto.SC2APIProtocol.AIBuild} value */
proto.SC2APIProtocol.PlayerInfo.prototype.setAiBuild = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.SC2APIProtocol.PlayerInfo.prototype.clearAiBuild = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.hasAiBuild = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string player_name = 6;
 * @return {string}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.getPlayerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.PlayerInfo.prototype.setPlayerName = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.SC2APIProtocol.PlayerInfo.prototype.clearPlayerName = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerInfo.prototype.hasPlayerName = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.PlayerCommon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.PlayerCommon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.PlayerCommon.displayName = 'proto.SC2APIProtocol.PlayerCommon';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.PlayerCommon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.PlayerCommon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.PlayerCommon.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getField(msg, 1),
    minerals: jspb.Message.getField(msg, 2),
    vespene: jspb.Message.getField(msg, 3),
    foodCap: jspb.Message.getField(msg, 4),
    foodUsed: jspb.Message.getField(msg, 5),
    foodArmy: jspb.Message.getField(msg, 6),
    foodWorkers: jspb.Message.getField(msg, 7),
    idleWorkerCount: jspb.Message.getField(msg, 8),
    armyCount: jspb.Message.getField(msg, 9),
    warpGateCount: jspb.Message.getField(msg, 10),
    larvaCount: jspb.Message.getField(msg, 11)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.PlayerCommon}
 */
proto.SC2APIProtocol.PlayerCommon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.PlayerCommon;
  return proto.SC2APIProtocol.PlayerCommon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.PlayerCommon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.PlayerCommon}
 */
proto.SC2APIProtocol.PlayerCommon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinerals(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVespene(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFoodCap(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFoodUsed(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFoodArmy(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFoodWorkers(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIdleWorkerCount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setArmyCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWarpGateCount(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLarvaCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.PlayerCommon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.PlayerCommon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.PlayerCommon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint32(
      11,
      f
    );
  }
};


/**
 * optional uint32 player_id = 1;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.getPlayerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerCommon.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.PlayerCommon.prototype.clearPlayerId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.hasPlayerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 minerals = 2;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.getMinerals = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerCommon.prototype.setMinerals = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.PlayerCommon.prototype.clearMinerals = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.hasMinerals = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 vespene = 3;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.getVespene = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerCommon.prototype.setVespene = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SC2APIProtocol.PlayerCommon.prototype.clearVespene = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.hasVespene = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 food_cap = 4;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.getFoodCap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerCommon.prototype.setFoodCap = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.SC2APIProtocol.PlayerCommon.prototype.clearFoodCap = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.hasFoodCap = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 food_used = 5;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.getFoodUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerCommon.prototype.setFoodUsed = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.SC2APIProtocol.PlayerCommon.prototype.clearFoodUsed = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.hasFoodUsed = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 food_army = 6;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.getFoodArmy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerCommon.prototype.setFoodArmy = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.SC2APIProtocol.PlayerCommon.prototype.clearFoodArmy = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.hasFoodArmy = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 food_workers = 7;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.getFoodWorkers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerCommon.prototype.setFoodWorkers = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.SC2APIProtocol.PlayerCommon.prototype.clearFoodWorkers = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.hasFoodWorkers = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint32 idle_worker_count = 8;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.getIdleWorkerCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerCommon.prototype.setIdleWorkerCount = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.SC2APIProtocol.PlayerCommon.prototype.clearIdleWorkerCount = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.hasIdleWorkerCount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 army_count = 9;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.getArmyCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerCommon.prototype.setArmyCount = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.SC2APIProtocol.PlayerCommon.prototype.clearArmyCount = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.hasArmyCount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 warp_gate_count = 10;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.getWarpGateCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerCommon.prototype.setWarpGateCount = function(value) {
  jspb.Message.setField(this, 10, value);
};


proto.SC2APIProtocol.PlayerCommon.prototype.clearWarpGateCount = function() {
  jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.hasWarpGateCount = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 larva_count = 11;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.getLarvaCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerCommon.prototype.setLarvaCount = function(value) {
  jspb.Message.setField(this, 11, value);
};


proto.SC2APIProtocol.PlayerCommon.prototype.clearLarvaCount = function() {
  jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerCommon.prototype.hasLarvaCount = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.Observation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.Observation.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.Observation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.Observation.displayName = 'proto.SC2APIProtocol.Observation';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.Observation.repeatedFields_ = [10,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.Observation.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.Observation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.Observation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.Observation.toObject = function(includeInstance, msg) {
  var f, obj = {
    gameLoop: jspb.Message.getField(msg, 9),
    playerCommon: (f = msg.getPlayerCommon()) && proto.SC2APIProtocol.PlayerCommon.toObject(includeInstance, f),
    alertsList: jspb.Message.getRepeatedField(msg, 10),
    abilitiesList: jspb.Message.toObjectList(msg.getAbilitiesList(),
    s2clientprotocol_common_pb.AvailableAbility.toObject, includeInstance),
    score: (f = msg.getScore()) && s2clientprotocol_score_pb.Score.toObject(includeInstance, f),
    rawData: (f = msg.getRawData()) && s2clientprotocol_raw_pb.ObservationRaw.toObject(includeInstance, f),
    featureLayerData: (f = msg.getFeatureLayerData()) && s2clientprotocol_spatial_pb.ObservationFeatureLayer.toObject(includeInstance, f),
    renderData: (f = msg.getRenderData()) && s2clientprotocol_spatial_pb.ObservationRender.toObject(includeInstance, f),
    uiData: (f = msg.getUiData()) && s2clientprotocol_ui_pb.ObservationUI.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.Observation}
 */
proto.SC2APIProtocol.Observation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.Observation;
  return proto.SC2APIProtocol.Observation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.Observation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.Observation}
 */
proto.SC2APIProtocol.Observation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameLoop(value);
      break;
    case 1:
      var value = new proto.SC2APIProtocol.PlayerCommon;
      reader.readMessage(value,proto.SC2APIProtocol.PlayerCommon.deserializeBinaryFromReader);
      msg.setPlayerCommon(value);
      break;
    case 10:
      var value = /** @type {!proto.SC2APIProtocol.Alert} */ (reader.readEnum());
      msg.addAlerts(value);
      break;
    case 3:
      var value = new s2clientprotocol_common_pb.AvailableAbility;
      reader.readMessage(value,s2clientprotocol_common_pb.AvailableAbility.deserializeBinaryFromReader);
      msg.addAbilities(value);
      break;
    case 4:
      var value = new s2clientprotocol_score_pb.Score;
      reader.readMessage(value,s2clientprotocol_score_pb.Score.deserializeBinaryFromReader);
      msg.setScore(value);
      break;
    case 5:
      var value = new s2clientprotocol_raw_pb.ObservationRaw;
      reader.readMessage(value,s2clientprotocol_raw_pb.ObservationRaw.deserializeBinaryFromReader);
      msg.setRawData(value);
      break;
    case 6:
      var value = new s2clientprotocol_spatial_pb.ObservationFeatureLayer;
      reader.readMessage(value,s2clientprotocol_spatial_pb.ObservationFeatureLayer.deserializeBinaryFromReader);
      msg.setFeatureLayerData(value);
      break;
    case 7:
      var value = new s2clientprotocol_spatial_pb.ObservationRender;
      reader.readMessage(value,s2clientprotocol_spatial_pb.ObservationRender.deserializeBinaryFromReader);
      msg.setRenderData(value);
      break;
    case 8:
      var value = new s2clientprotocol_ui_pb.ObservationUI;
      reader.readMessage(value,s2clientprotocol_ui_pb.ObservationUI.deserializeBinaryFromReader);
      msg.setUiData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.Observation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.Observation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.Observation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.Observation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getPlayerCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.SC2APIProtocol.PlayerCommon.serializeBinaryToWriter
    );
  }
  f = message.getAlertsList();
  if (f.length > 0) {
    writer.writeRepeatedEnum(
      10,
      f
    );
  }
  f = message.getAbilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      s2clientprotocol_common_pb.AvailableAbility.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      s2clientprotocol_score_pb.Score.serializeBinaryToWriter
    );
  }
  f = message.getRawData();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      s2clientprotocol_raw_pb.ObservationRaw.serializeBinaryToWriter
    );
  }
  f = message.getFeatureLayerData();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      s2clientprotocol_spatial_pb.ObservationFeatureLayer.serializeBinaryToWriter
    );
  }
  f = message.getRenderData();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      s2clientprotocol_spatial_pb.ObservationRender.serializeBinaryToWriter
    );
  }
  f = message.getUiData();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      s2clientprotocol_ui_pb.ObservationUI.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 game_loop = 9;
 * @return {number}
 */
proto.SC2APIProtocol.Observation.prototype.getGameLoop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.Observation.prototype.setGameLoop = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.SC2APIProtocol.Observation.prototype.clearGameLoop = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Observation.prototype.hasGameLoop = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PlayerCommon player_common = 1;
 * @return {?proto.SC2APIProtocol.PlayerCommon}
 */
proto.SC2APIProtocol.Observation.prototype.getPlayerCommon = function() {
  return /** @type{?proto.SC2APIProtocol.PlayerCommon} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.PlayerCommon, 1));
};


/** @param {?proto.SC2APIProtocol.PlayerCommon|undefined} value */
proto.SC2APIProtocol.Observation.prototype.setPlayerCommon = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.SC2APIProtocol.Observation.prototype.clearPlayerCommon = function() {
  this.setPlayerCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Observation.prototype.hasPlayerCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Alert alerts = 10;
 * @return {!Array.<!proto.SC2APIProtocol.Alert>}
 */
proto.SC2APIProtocol.Observation.prototype.getAlertsList = function() {
  return /** @type {!Array.<!proto.SC2APIProtocol.Alert>} */ (jspb.Message.getRepeatedField(this, 10));
};


/** @param {!Array.<!proto.SC2APIProtocol.Alert>} value */
proto.SC2APIProtocol.Observation.prototype.setAlertsList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!proto.SC2APIProtocol.Alert} value
 * @param {number=} opt_index
 */
proto.SC2APIProtocol.Observation.prototype.addAlerts = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


proto.SC2APIProtocol.Observation.prototype.clearAlertsList = function() {
  this.setAlertsList([]);
};


/**
 * repeated AvailableAbility abilities = 3;
 * @return {!Array.<!proto.SC2APIProtocol.AvailableAbility>}
 */
proto.SC2APIProtocol.Observation.prototype.getAbilitiesList = function() {
  return /** @type{!Array.<!proto.SC2APIProtocol.AvailableAbility>} */ (
    jspb.Message.getRepeatedWrapperField(this, s2clientprotocol_common_pb.AvailableAbility, 3));
};


/** @param {!Array.<!proto.SC2APIProtocol.AvailableAbility>} value */
proto.SC2APIProtocol.Observation.prototype.setAbilitiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.SC2APIProtocol.AvailableAbility=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SC2APIProtocol.AvailableAbility}
 */
proto.SC2APIProtocol.Observation.prototype.addAbilities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.SC2APIProtocol.AvailableAbility, opt_index);
};


proto.SC2APIProtocol.Observation.prototype.clearAbilitiesList = function() {
  this.setAbilitiesList([]);
};


/**
 * optional Score score = 4;
 * @return {?proto.SC2APIProtocol.Score}
 */
proto.SC2APIProtocol.Observation.prototype.getScore = function() {
  return /** @type{?proto.SC2APIProtocol.Score} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_score_pb.Score, 4));
};


/** @param {?proto.SC2APIProtocol.Score|undefined} value */
proto.SC2APIProtocol.Observation.prototype.setScore = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.SC2APIProtocol.Observation.prototype.clearScore = function() {
  this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Observation.prototype.hasScore = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ObservationRaw raw_data = 5;
 * @return {?proto.SC2APIProtocol.ObservationRaw}
 */
proto.SC2APIProtocol.Observation.prototype.getRawData = function() {
  return /** @type{?proto.SC2APIProtocol.ObservationRaw} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_raw_pb.ObservationRaw, 5));
};


/** @param {?proto.SC2APIProtocol.ObservationRaw|undefined} value */
proto.SC2APIProtocol.Observation.prototype.setRawData = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.SC2APIProtocol.Observation.prototype.clearRawData = function() {
  this.setRawData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Observation.prototype.hasRawData = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ObservationFeatureLayer feature_layer_data = 6;
 * @return {?proto.SC2APIProtocol.ObservationFeatureLayer}
 */
proto.SC2APIProtocol.Observation.prototype.getFeatureLayerData = function() {
  return /** @type{?proto.SC2APIProtocol.ObservationFeatureLayer} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_spatial_pb.ObservationFeatureLayer, 6));
};


/** @param {?proto.SC2APIProtocol.ObservationFeatureLayer|undefined} value */
proto.SC2APIProtocol.Observation.prototype.setFeatureLayerData = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.SC2APIProtocol.Observation.prototype.clearFeatureLayerData = function() {
  this.setFeatureLayerData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Observation.prototype.hasFeatureLayerData = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ObservationRender render_data = 7;
 * @return {?proto.SC2APIProtocol.ObservationRender}
 */
proto.SC2APIProtocol.Observation.prototype.getRenderData = function() {
  return /** @type{?proto.SC2APIProtocol.ObservationRender} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_spatial_pb.ObservationRender, 7));
};


/** @param {?proto.SC2APIProtocol.ObservationRender|undefined} value */
proto.SC2APIProtocol.Observation.prototype.setRenderData = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.SC2APIProtocol.Observation.prototype.clearRenderData = function() {
  this.setRenderData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Observation.prototype.hasRenderData = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ObservationUI ui_data = 8;
 * @return {?proto.SC2APIProtocol.ObservationUI}
 */
proto.SC2APIProtocol.Observation.prototype.getUiData = function() {
  return /** @type{?proto.SC2APIProtocol.ObservationUI} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_ui_pb.ObservationUI, 8));
};


/** @param {?proto.SC2APIProtocol.ObservationUI|undefined} value */
proto.SC2APIProtocol.Observation.prototype.setUiData = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.SC2APIProtocol.Observation.prototype.clearUiData = function() {
  this.setUiData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Observation.prototype.hasUiData = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.Action.displayName = 'proto.SC2APIProtocol.Action';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionRaw: (f = msg.getActionRaw()) && s2clientprotocol_raw_pb.ActionRaw.toObject(includeInstance, f),
    actionFeatureLayer: (f = msg.getActionFeatureLayer()) && s2clientprotocol_spatial_pb.ActionSpatial.toObject(includeInstance, f),
    actionRender: (f = msg.getActionRender()) && s2clientprotocol_spatial_pb.ActionSpatial.toObject(includeInstance, f),
    actionUi: (f = msg.getActionUi()) && s2clientprotocol_ui_pb.ActionUI.toObject(includeInstance, f),
    actionChat: (f = msg.getActionChat()) && proto.SC2APIProtocol.ActionChat.toObject(includeInstance, f),
    gameLoop: jspb.Message.getField(msg, 7)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.Action}
 */
proto.SC2APIProtocol.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.Action;
  return proto.SC2APIProtocol.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.Action}
 */
proto.SC2APIProtocol.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new s2clientprotocol_raw_pb.ActionRaw;
      reader.readMessage(value,s2clientprotocol_raw_pb.ActionRaw.deserializeBinaryFromReader);
      msg.setActionRaw(value);
      break;
    case 2:
      var value = new s2clientprotocol_spatial_pb.ActionSpatial;
      reader.readMessage(value,s2clientprotocol_spatial_pb.ActionSpatial.deserializeBinaryFromReader);
      msg.setActionFeatureLayer(value);
      break;
    case 3:
      var value = new s2clientprotocol_spatial_pb.ActionSpatial;
      reader.readMessage(value,s2clientprotocol_spatial_pb.ActionSpatial.deserializeBinaryFromReader);
      msg.setActionRender(value);
      break;
    case 4:
      var value = new s2clientprotocol_ui_pb.ActionUI;
      reader.readMessage(value,s2clientprotocol_ui_pb.ActionUI.deserializeBinaryFromReader);
      msg.setActionUi(value);
      break;
    case 6:
      var value = new proto.SC2APIProtocol.ActionChat;
      reader.readMessage(value,proto.SC2APIProtocol.ActionChat.deserializeBinaryFromReader);
      msg.setActionChat(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGameLoop(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionRaw();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      s2clientprotocol_raw_pb.ActionRaw.serializeBinaryToWriter
    );
  }
  f = message.getActionFeatureLayer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      s2clientprotocol_spatial_pb.ActionSpatial.serializeBinaryToWriter
    );
  }
  f = message.getActionRender();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      s2clientprotocol_spatial_pb.ActionSpatial.serializeBinaryToWriter
    );
  }
  f = message.getActionUi();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      s2clientprotocol_ui_pb.ActionUI.serializeBinaryToWriter
    );
  }
  f = message.getActionChat();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.SC2APIProtocol.ActionChat.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional ActionRaw action_raw = 1;
 * @return {?proto.SC2APIProtocol.ActionRaw}
 */
proto.SC2APIProtocol.Action.prototype.getActionRaw = function() {
  return /** @type{?proto.SC2APIProtocol.ActionRaw} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_raw_pb.ActionRaw, 1));
};


/** @param {?proto.SC2APIProtocol.ActionRaw|undefined} value */
proto.SC2APIProtocol.Action.prototype.setActionRaw = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.SC2APIProtocol.Action.prototype.clearActionRaw = function() {
  this.setActionRaw(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Action.prototype.hasActionRaw = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ActionSpatial action_feature_layer = 2;
 * @return {?proto.SC2APIProtocol.ActionSpatial}
 */
proto.SC2APIProtocol.Action.prototype.getActionFeatureLayer = function() {
  return /** @type{?proto.SC2APIProtocol.ActionSpatial} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_spatial_pb.ActionSpatial, 2));
};


/** @param {?proto.SC2APIProtocol.ActionSpatial|undefined} value */
proto.SC2APIProtocol.Action.prototype.setActionFeatureLayer = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.SC2APIProtocol.Action.prototype.clearActionFeatureLayer = function() {
  this.setActionFeatureLayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Action.prototype.hasActionFeatureLayer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ActionSpatial action_render = 3;
 * @return {?proto.SC2APIProtocol.ActionSpatial}
 */
proto.SC2APIProtocol.Action.prototype.getActionRender = function() {
  return /** @type{?proto.SC2APIProtocol.ActionSpatial} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_spatial_pb.ActionSpatial, 3));
};


/** @param {?proto.SC2APIProtocol.ActionSpatial|undefined} value */
proto.SC2APIProtocol.Action.prototype.setActionRender = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.SC2APIProtocol.Action.prototype.clearActionRender = function() {
  this.setActionRender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Action.prototype.hasActionRender = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ActionUI action_ui = 4;
 * @return {?proto.SC2APIProtocol.ActionUI}
 */
proto.SC2APIProtocol.Action.prototype.getActionUi = function() {
  return /** @type{?proto.SC2APIProtocol.ActionUI} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_ui_pb.ActionUI, 4));
};


/** @param {?proto.SC2APIProtocol.ActionUI|undefined} value */
proto.SC2APIProtocol.Action.prototype.setActionUi = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.SC2APIProtocol.Action.prototype.clearActionUi = function() {
  this.setActionUi(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Action.prototype.hasActionUi = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ActionChat action_chat = 6;
 * @return {?proto.SC2APIProtocol.ActionChat}
 */
proto.SC2APIProtocol.Action.prototype.getActionChat = function() {
  return /** @type{?proto.SC2APIProtocol.ActionChat} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ActionChat, 6));
};


/** @param {?proto.SC2APIProtocol.ActionChat|undefined} value */
proto.SC2APIProtocol.Action.prototype.setActionChat = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.SC2APIProtocol.Action.prototype.clearActionChat = function() {
  this.setActionChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Action.prototype.hasActionChat = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 game_loop = 7;
 * @return {number}
 */
proto.SC2APIProtocol.Action.prototype.getGameLoop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.Action.prototype.setGameLoop = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.SC2APIProtocol.Action.prototype.clearGameLoop = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.Action.prototype.hasGameLoop = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ActionChat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ActionChat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ActionChat.displayName = 'proto.SC2APIProtocol.ActionChat';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ActionChat.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ActionChat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ActionChat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ActionChat.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getField(msg, 1),
    message: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ActionChat}
 */
proto.SC2APIProtocol.ActionChat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ActionChat;
  return proto.SC2APIProtocol.ActionChat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ActionChat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ActionChat}
 */
proto.SC2APIProtocol.ActionChat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SC2APIProtocol.ActionChat.Channel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ActionChat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ActionChat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ActionChat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ActionChat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SC2APIProtocol.ActionChat.Channel} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SC2APIProtocol.ActionChat.Channel = {
  BROADCAST: 1,
  TEAM: 2
};

/**
 * optional Channel channel = 1;
 * @return {!proto.SC2APIProtocol.ActionChat.Channel}
 */
proto.SC2APIProtocol.ActionChat.prototype.getChannel = function() {
  return /** @type {!proto.SC2APIProtocol.ActionChat.Channel} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/** @param {!proto.SC2APIProtocol.ActionChat.Channel} value */
proto.SC2APIProtocol.ActionChat.prototype.setChannel = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ActionChat.prototype.clearChannel = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ActionChat.prototype.hasChannel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.SC2APIProtocol.ActionChat.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.SC2APIProtocol.ActionChat.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ActionChat.prototype.clearMessage = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ActionChat.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ActionError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ActionError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ActionError.displayName = 'proto.SC2APIProtocol.ActionError';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ActionError.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ActionError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ActionError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ActionError.toObject = function(includeInstance, msg) {
  var f, obj = {
    unitTag: jspb.Message.getField(msg, 1),
    abilityId: jspb.Message.getField(msg, 2),
    result: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ActionError}
 */
proto.SC2APIProtocol.ActionError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ActionError;
  return proto.SC2APIProtocol.ActionError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ActionError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ActionError}
 */
proto.SC2APIProtocol.ActionError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUnitTag(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAbilityId(value);
      break;
    case 3:
      var value = /** @type {!proto.SC2APIProtocol.ActionResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ActionError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ActionError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ActionError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ActionError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.ActionResult} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional uint64 unit_tag = 1;
 * @return {number}
 */
proto.SC2APIProtocol.ActionError.prototype.getUnitTag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.ActionError.prototype.setUnitTag = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ActionError.prototype.clearUnitTag = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ActionError.prototype.hasUnitTag = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 ability_id = 2;
 * @return {number}
 */
proto.SC2APIProtocol.ActionError.prototype.getAbilityId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.ActionError.prototype.setAbilityId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ActionError.prototype.clearAbilityId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ActionError.prototype.hasAbilityId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ActionResult result = 3;
 * @return {!proto.SC2APIProtocol.ActionResult}
 */
proto.SC2APIProtocol.ActionError.prototype.getResult = function() {
  return /** @type {!proto.SC2APIProtocol.ActionResult} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/** @param {!proto.SC2APIProtocol.ActionResult} value */
proto.SC2APIProtocol.ActionError.prototype.setResult = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.SC2APIProtocol.ActionError.prototype.clearResult = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ActionError.prototype.hasResult = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ObserverAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.SC2APIProtocol.ObserverAction.oneofGroups_);
};
goog.inherits(proto.SC2APIProtocol.ObserverAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ObserverAction.displayName = 'proto.SC2APIProtocol.ObserverAction';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SC2APIProtocol.ObserverAction.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.SC2APIProtocol.ObserverAction.ActionCase = {
  ACTION_NOT_SET: 0,
  PLAYER_PERSPECTIVE: 1,
  CAMERA_MOVE: 2,
  CAMERA_FOLLOW_PLAYER: 3,
  CAMERA_FOLLOW_UNITS: 4
};

/**
 * @return {proto.SC2APIProtocol.ObserverAction.ActionCase}
 */
proto.SC2APIProtocol.ObserverAction.prototype.getActionCase = function() {
  return /** @type {proto.SC2APIProtocol.ObserverAction.ActionCase} */(jspb.Message.computeOneofCase(this, proto.SC2APIProtocol.ObserverAction.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ObserverAction.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ObserverAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ObserverAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ObserverAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerPerspective: (f = msg.getPlayerPerspective()) && proto.SC2APIProtocol.ActionObserverPlayerPerspective.toObject(includeInstance, f),
    cameraMove: (f = msg.getCameraMove()) && proto.SC2APIProtocol.ActionObserverCameraMove.toObject(includeInstance, f),
    cameraFollowPlayer: (f = msg.getCameraFollowPlayer()) && proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.toObject(includeInstance, f),
    cameraFollowUnits: (f = msg.getCameraFollowUnits()) && proto.SC2APIProtocol.ActionObserverCameraFollowUnits.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ObserverAction}
 */
proto.SC2APIProtocol.ObserverAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ObserverAction;
  return proto.SC2APIProtocol.ObserverAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ObserverAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ObserverAction}
 */
proto.SC2APIProtocol.ObserverAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SC2APIProtocol.ActionObserverPlayerPerspective;
      reader.readMessage(value,proto.SC2APIProtocol.ActionObserverPlayerPerspective.deserializeBinaryFromReader);
      msg.setPlayerPerspective(value);
      break;
    case 2:
      var value = new proto.SC2APIProtocol.ActionObserverCameraMove;
      reader.readMessage(value,proto.SC2APIProtocol.ActionObserverCameraMove.deserializeBinaryFromReader);
      msg.setCameraMove(value);
      break;
    case 3:
      var value = new proto.SC2APIProtocol.ActionObserverCameraFollowPlayer;
      reader.readMessage(value,proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.deserializeBinaryFromReader);
      msg.setCameraFollowPlayer(value);
      break;
    case 4:
      var value = new proto.SC2APIProtocol.ActionObserverCameraFollowUnits;
      reader.readMessage(value,proto.SC2APIProtocol.ActionObserverCameraFollowUnits.deserializeBinaryFromReader);
      msg.setCameraFollowUnits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ObserverAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ObserverAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ObserverAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ObserverAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerPerspective();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.SC2APIProtocol.ActionObserverPlayerPerspective.serializeBinaryToWriter
    );
  }
  f = message.getCameraMove();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.SC2APIProtocol.ActionObserverCameraMove.serializeBinaryToWriter
    );
  }
  f = message.getCameraFollowPlayer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.serializeBinaryToWriter
    );
  }
  f = message.getCameraFollowUnits();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.SC2APIProtocol.ActionObserverCameraFollowUnits.serializeBinaryToWriter
    );
  }
};


/**
 * optional ActionObserverPlayerPerspective player_perspective = 1;
 * @return {?proto.SC2APIProtocol.ActionObserverPlayerPerspective}
 */
proto.SC2APIProtocol.ObserverAction.prototype.getPlayerPerspective = function() {
  return /** @type{?proto.SC2APIProtocol.ActionObserverPlayerPerspective} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ActionObserverPlayerPerspective, 1));
};


/** @param {?proto.SC2APIProtocol.ActionObserverPlayerPerspective|undefined} value */
proto.SC2APIProtocol.ObserverAction.prototype.setPlayerPerspective = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.SC2APIProtocol.ObserverAction.oneofGroups_[0], value);
};


proto.SC2APIProtocol.ObserverAction.prototype.clearPlayerPerspective = function() {
  this.setPlayerPerspective(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ObserverAction.prototype.hasPlayerPerspective = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ActionObserverCameraMove camera_move = 2;
 * @return {?proto.SC2APIProtocol.ActionObserverCameraMove}
 */
proto.SC2APIProtocol.ObserverAction.prototype.getCameraMove = function() {
  return /** @type{?proto.SC2APIProtocol.ActionObserverCameraMove} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ActionObserverCameraMove, 2));
};


/** @param {?proto.SC2APIProtocol.ActionObserverCameraMove|undefined} value */
proto.SC2APIProtocol.ObserverAction.prototype.setCameraMove = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.SC2APIProtocol.ObserverAction.oneofGroups_[0], value);
};


proto.SC2APIProtocol.ObserverAction.prototype.clearCameraMove = function() {
  this.setCameraMove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ObserverAction.prototype.hasCameraMove = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ActionObserverCameraFollowPlayer camera_follow_player = 3;
 * @return {?proto.SC2APIProtocol.ActionObserverCameraFollowPlayer}
 */
proto.SC2APIProtocol.ObserverAction.prototype.getCameraFollowPlayer = function() {
  return /** @type{?proto.SC2APIProtocol.ActionObserverCameraFollowPlayer} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ActionObserverCameraFollowPlayer, 3));
};


/** @param {?proto.SC2APIProtocol.ActionObserverCameraFollowPlayer|undefined} value */
proto.SC2APIProtocol.ObserverAction.prototype.setCameraFollowPlayer = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.SC2APIProtocol.ObserverAction.oneofGroups_[0], value);
};


proto.SC2APIProtocol.ObserverAction.prototype.clearCameraFollowPlayer = function() {
  this.setCameraFollowPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ObserverAction.prototype.hasCameraFollowPlayer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ActionObserverCameraFollowUnits camera_follow_units = 4;
 * @return {?proto.SC2APIProtocol.ActionObserverCameraFollowUnits}
 */
proto.SC2APIProtocol.ObserverAction.prototype.getCameraFollowUnits = function() {
  return /** @type{?proto.SC2APIProtocol.ActionObserverCameraFollowUnits} */ (
    jspb.Message.getWrapperField(this, proto.SC2APIProtocol.ActionObserverCameraFollowUnits, 4));
};


/** @param {?proto.SC2APIProtocol.ActionObserverCameraFollowUnits|undefined} value */
proto.SC2APIProtocol.ObserverAction.prototype.setCameraFollowUnits = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.SC2APIProtocol.ObserverAction.oneofGroups_[0], value);
};


proto.SC2APIProtocol.ObserverAction.prototype.clearCameraFollowUnits = function() {
  this.setCameraFollowUnits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ObserverAction.prototype.hasCameraFollowUnits = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ActionObserverPlayerPerspective = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ActionObserverPlayerPerspective, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ActionObserverPlayerPerspective.displayName = 'proto.SC2APIProtocol.ActionObserverPlayerPerspective';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ActionObserverPlayerPerspective.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ActionObserverPlayerPerspective.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ActionObserverPlayerPerspective} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ActionObserverPlayerPerspective.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ActionObserverPlayerPerspective}
 */
proto.SC2APIProtocol.ActionObserverPlayerPerspective.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ActionObserverPlayerPerspective;
  return proto.SC2APIProtocol.ActionObserverPlayerPerspective.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ActionObserverPlayerPerspective} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ActionObserverPlayerPerspective}
 */
proto.SC2APIProtocol.ActionObserverPlayerPerspective.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ActionObserverPlayerPerspective.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ActionObserverPlayerPerspective.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ActionObserverPlayerPerspective} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ActionObserverPlayerPerspective.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 player_id = 1;
 * @return {number}
 */
proto.SC2APIProtocol.ActionObserverPlayerPerspective.prototype.getPlayerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.ActionObserverPlayerPerspective.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ActionObserverPlayerPerspective.prototype.clearPlayerId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ActionObserverPlayerPerspective.prototype.hasPlayerId = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ActionObserverCameraMove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ActionObserverCameraMove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ActionObserverCameraMove.displayName = 'proto.SC2APIProtocol.ActionObserverCameraMove';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ActionObserverCameraMove.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ActionObserverCameraMove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ActionObserverCameraMove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ActionObserverCameraMove.toObject = function(includeInstance, msg) {
  var f, obj = {
    worldPos: (f = msg.getWorldPos()) && s2clientprotocol_common_pb.Point2D.toObject(includeInstance, f),
    distance: jspb.Message.getOptionalFloatingPointField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ActionObserverCameraMove}
 */
proto.SC2APIProtocol.ActionObserverCameraMove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ActionObserverCameraMove;
  return proto.SC2APIProtocol.ActionObserverCameraMove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ActionObserverCameraMove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ActionObserverCameraMove}
 */
proto.SC2APIProtocol.ActionObserverCameraMove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new s2clientprotocol_common_pb.Point2D;
      reader.readMessage(value,s2clientprotocol_common_pb.Point2D.deserializeBinaryFromReader);
      msg.setWorldPos(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDistance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ActionObserverCameraMove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ActionObserverCameraMove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ActionObserverCameraMove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ActionObserverCameraMove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorldPos();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      s2clientprotocol_common_pb.Point2D.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional Point2D world_pos = 1;
 * @return {?proto.SC2APIProtocol.Point2D}
 */
proto.SC2APIProtocol.ActionObserverCameraMove.prototype.getWorldPos = function() {
  return /** @type{?proto.SC2APIProtocol.Point2D} */ (
    jspb.Message.getWrapperField(this, s2clientprotocol_common_pb.Point2D, 1));
};


/** @param {?proto.SC2APIProtocol.Point2D|undefined} value */
proto.SC2APIProtocol.ActionObserverCameraMove.prototype.setWorldPos = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.SC2APIProtocol.ActionObserverCameraMove.prototype.clearWorldPos = function() {
  this.setWorldPos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ActionObserverCameraMove.prototype.hasWorldPos = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float distance = 2;
 * @return {number}
 */
proto.SC2APIProtocol.ActionObserverCameraMove.prototype.getDistance = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.SC2APIProtocol.ActionObserverCameraMove.prototype.setDistance = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.ActionObserverCameraMove.prototype.clearDistance = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ActionObserverCameraMove.prototype.hasDistance = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ActionObserverCameraFollowPlayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.ActionObserverCameraFollowPlayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.displayName = 'proto.SC2APIProtocol.ActionObserverCameraFollowPlayer';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ActionObserverCameraFollowPlayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ActionObserverCameraFollowPlayer}
 */
proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ActionObserverCameraFollowPlayer;
  return proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ActionObserverCameraFollowPlayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ActionObserverCameraFollowPlayer}
 */
proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ActionObserverCameraFollowPlayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 player_id = 1;
 * @return {number}
 */
proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.prototype.getPlayerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.prototype.clearPlayerId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.ActionObserverCameraFollowPlayer.prototype.hasPlayerId = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.ActionObserverCameraFollowUnits = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SC2APIProtocol.ActionObserverCameraFollowUnits.repeatedFields_, null);
};
goog.inherits(proto.SC2APIProtocol.ActionObserverCameraFollowUnits, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.ActionObserverCameraFollowUnits.displayName = 'proto.SC2APIProtocol.ActionObserverCameraFollowUnits';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SC2APIProtocol.ActionObserverCameraFollowUnits.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.ActionObserverCameraFollowUnits.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.ActionObserverCameraFollowUnits.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.ActionObserverCameraFollowUnits} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ActionObserverCameraFollowUnits.toObject = function(includeInstance, msg) {
  var f, obj = {
    unitTagsList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.ActionObserverCameraFollowUnits}
 */
proto.SC2APIProtocol.ActionObserverCameraFollowUnits.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.ActionObserverCameraFollowUnits;
  return proto.SC2APIProtocol.ActionObserverCameraFollowUnits.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.ActionObserverCameraFollowUnits} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.ActionObserverCameraFollowUnits}
 */
proto.SC2APIProtocol.ActionObserverCameraFollowUnits.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.addUnitTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.ActionObserverCameraFollowUnits.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.ActionObserverCameraFollowUnits.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.ActionObserverCameraFollowUnits} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.ActionObserverCameraFollowUnits.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnitTagsList();
  if (f.length > 0) {
    writer.writeRepeatedUint64(
      1,
      f
    );
  }
};


/**
 * repeated uint64 unit_tags = 1;
 * @return {!Array.<number>}
 */
proto.SC2APIProtocol.ActionObserverCameraFollowUnits.prototype.getUnitTagsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array.<number>} value */
proto.SC2APIProtocol.ActionObserverCameraFollowUnits.prototype.setUnitTagsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.SC2APIProtocol.ActionObserverCameraFollowUnits.prototype.addUnitTags = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.SC2APIProtocol.ActionObserverCameraFollowUnits.prototype.clearUnitTagsList = function() {
  this.setUnitTagsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SC2APIProtocol.PlayerResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SC2APIProtocol.PlayerResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SC2APIProtocol.PlayerResult.displayName = 'proto.SC2APIProtocol.PlayerResult';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SC2APIProtocol.PlayerResult.prototype.toObject = function(opt_includeInstance) {
  return proto.SC2APIProtocol.PlayerResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SC2APIProtocol.PlayerResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.PlayerResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getField(msg, 1),
    result: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SC2APIProtocol.PlayerResult}
 */
proto.SC2APIProtocol.PlayerResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SC2APIProtocol.PlayerResult;
  return proto.SC2APIProtocol.PlayerResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SC2APIProtocol.PlayerResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SC2APIProtocol.PlayerResult}
 */
proto.SC2APIProtocol.PlayerResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlayerId(value);
      break;
    case 2:
      var value = /** @type {!proto.SC2APIProtocol.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SC2APIProtocol.PlayerResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SC2APIProtocol.PlayerResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SC2APIProtocol.PlayerResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SC2APIProtocol.PlayerResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.SC2APIProtocol.Result} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional uint32 player_id = 1;
 * @return {number}
 */
proto.SC2APIProtocol.PlayerResult.prototype.getPlayerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SC2APIProtocol.PlayerResult.prototype.setPlayerId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.SC2APIProtocol.PlayerResult.prototype.clearPlayerId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerResult.prototype.hasPlayerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Result result = 2;
 * @return {!proto.SC2APIProtocol.Result}
 */
proto.SC2APIProtocol.PlayerResult.prototype.getResult = function() {
  return /** @type {!proto.SC2APIProtocol.Result} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/** @param {!proto.SC2APIProtocol.Result} value */
proto.SC2APIProtocol.PlayerResult.prototype.setResult = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.SC2APIProtocol.PlayerResult.prototype.clearResult = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SC2APIProtocol.PlayerResult.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.SC2APIProtocol.Status = {
  LAUNCHED: 1,
  INIT_GAME: 2,
  IN_GAME: 3,
  IN_REPLAY: 4,
  ENDED: 5,
  QUIT: 6,
  UNKNOWN: 99
};

/**
 * @enum {number}
 */
proto.SC2APIProtocol.Difficulty = {
  VERYEASY: 1,
  EASY: 2,
  MEDIUM: 3,
  MEDIUMHARD: 4,
  HARD: 5,
  HARDER: 6,
  VERYHARD: 7,
  CHEATVISION: 8,
  CHEATMONEY: 9,
  CHEATINSANE: 10
};

/**
 * @enum {number}
 */
proto.SC2APIProtocol.PlayerType = {
  PARTICIPANT: 1,
  COMPUTER: 2,
  OBSERVER: 3
};

/**
 * @enum {number}
 */
proto.SC2APIProtocol.AIBuild = {
  RANDOMBUILD: 1,
  RUSH: 2,
  TIMING: 3,
  POWER: 4,
  MACRO: 5,
  AIR: 6
};

/**
 * @enum {number}
 */
proto.SC2APIProtocol.Alert = {
  ALERTERROR: 3,
  ADDONCOMPLETE: 4,
  BUILDINGCOMPLETE: 5,
  BUILDINGUNDERATTACK: 6,
  LARVAHATCHED: 7,
  MERGECOMPLETE: 8,
  MINERALSEXHAUSTED: 9,
  MORPHCOMPLETE: 10,
  MOTHERSHIPCOMPLETE: 11,
  MULEEXPIRED: 12,
  NUCLEARLAUNCHDETECTED: 1,
  NUKECOMPLETE: 13,
  NYDUSWORMDETECTED: 2,
  RESEARCHCOMPLETE: 14,
  TRAINERROR: 15,
  TRAINUNITCOMPLETE: 16,
  TRAINWORKERCOMPLETE: 17,
  TRANSFORMATIONCOMPLETE: 18,
  UNITUNDERATTACK: 19,
  UPGRADECOMPLETE: 20,
  VESPENEEXHAUSTED: 21,
  WARPINCOMPLETE: 22
};

/**
 * @enum {number}
 */
proto.SC2APIProtocol.Result = {
  VICTORY: 1,
  DEFEAT: 2,
  TIE: 3,
  UNDECIDED: 4
};

goog.object.extend(exports, proto.SC2APIProtocol);
