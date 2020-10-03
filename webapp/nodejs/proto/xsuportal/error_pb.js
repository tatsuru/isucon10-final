// source: xsuportal/error.proto
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

goog.exportSymbol('proto.xsuportal.proto.Error', null, global);
goog.exportSymbol('proto.xsuportal.proto.Error.DebugInfo', null, global);
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
proto.xsuportal.proto.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xsuportal.proto.Error.repeatedFields_, null);
};
goog.inherits(proto.xsuportal.proto.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.Error.displayName = 'proto.xsuportal.proto.Error';
}
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
proto.xsuportal.proto.Error.DebugInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xsuportal.proto.Error.DebugInfo.repeatedFields_, null);
};
goog.inherits(proto.xsuportal.proto.Error.DebugInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.Error.DebugInfo.displayName = 'proto.xsuportal.proto.Error.DebugInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xsuportal.proto.Error.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xsuportal.proto.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    humanMessage: jspb.Message.getFieldWithDefault(msg, 3, ""),
    humanDescriptionsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    debugInfo: (f = msg.getDebugInfo()) && proto.xsuportal.proto.Error.DebugInfo.toObject(includeInstance, f)
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
 * @return {!proto.xsuportal.proto.Error}
 */
proto.xsuportal.proto.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.Error;
  return proto.xsuportal.proto.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.Error}
 */
proto.xsuportal.proto.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHumanMessage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addHumanDescriptions(value);
      break;
    case 16:
      var value = new proto.xsuportal.proto.Error.DebugInfo;
      reader.readMessage(value,proto.xsuportal.proto.Error.DebugInfo.deserializeBinaryFromReader);
      msg.setDebugInfo(value);
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
proto.xsuportal.proto.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHumanMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHumanDescriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getDebugInfo();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.xsuportal.proto.Error.DebugInfo.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xsuportal.proto.Error.DebugInfo.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.Error.DebugInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.Error.DebugInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.Error.DebugInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    exception: jspb.Message.getFieldWithDefault(msg, 1, ""),
    traceList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    applicationTraceList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    frameworkTraceList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.xsuportal.proto.Error.DebugInfo}
 */
proto.xsuportal.proto.Error.DebugInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.Error.DebugInfo;
  return proto.xsuportal.proto.Error.DebugInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.Error.DebugInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.Error.DebugInfo}
 */
proto.xsuportal.proto.Error.DebugInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setException(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTrace(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addApplicationTrace(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addFrameworkTrace(value);
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
proto.xsuportal.proto.Error.DebugInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.Error.DebugInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.Error.DebugInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.Error.DebugInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getException();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTraceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getApplicationTraceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getFrameworkTraceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string exception = 1;
 * @return {string}
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.getException = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xsuportal.proto.Error.DebugInfo} returns this
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.setException = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string trace = 2;
 * @return {!Array<string>}
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.getTraceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xsuportal.proto.Error.DebugInfo} returns this
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.setTraceList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xsuportal.proto.Error.DebugInfo} returns this
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.addTrace = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xsuportal.proto.Error.DebugInfo} returns this
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.clearTraceList = function() {
  return this.setTraceList([]);
};


/**
 * repeated string application_trace = 3;
 * @return {!Array<string>}
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.getApplicationTraceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xsuportal.proto.Error.DebugInfo} returns this
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.setApplicationTraceList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xsuportal.proto.Error.DebugInfo} returns this
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.addApplicationTrace = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xsuportal.proto.Error.DebugInfo} returns this
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.clearApplicationTraceList = function() {
  return this.setApplicationTraceList([]);
};


/**
 * repeated string framework_trace = 4;
 * @return {!Array<string>}
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.getFrameworkTraceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xsuportal.proto.Error.DebugInfo} returns this
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.setFrameworkTraceList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xsuportal.proto.Error.DebugInfo} returns this
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.addFrameworkTrace = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xsuportal.proto.Error.DebugInfo} returns this
 */
proto.xsuportal.proto.Error.DebugInfo.prototype.clearFrameworkTraceList = function() {
  return this.setFrameworkTraceList([]);
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.xsuportal.proto.Error.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.xsuportal.proto.Error} returns this
 */
proto.xsuportal.proto.Error.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.xsuportal.proto.Error.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xsuportal.proto.Error} returns this
 */
proto.xsuportal.proto.Error.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string human_message = 3;
 * @return {string}
 */
proto.xsuportal.proto.Error.prototype.getHumanMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xsuportal.proto.Error} returns this
 */
proto.xsuportal.proto.Error.prototype.setHumanMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string human_descriptions = 4;
 * @return {!Array<string>}
 */
proto.xsuportal.proto.Error.prototype.getHumanDescriptionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xsuportal.proto.Error} returns this
 */
proto.xsuportal.proto.Error.prototype.setHumanDescriptionsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xsuportal.proto.Error} returns this
 */
proto.xsuportal.proto.Error.prototype.addHumanDescriptions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xsuportal.proto.Error} returns this
 */
proto.xsuportal.proto.Error.prototype.clearHumanDescriptionsList = function() {
  return this.setHumanDescriptionsList([]);
};


/**
 * optional DebugInfo debug_info = 16;
 * @return {?proto.xsuportal.proto.Error.DebugInfo}
 */
proto.xsuportal.proto.Error.prototype.getDebugInfo = function() {
  return /** @type{?proto.xsuportal.proto.Error.DebugInfo} */ (
    jspb.Message.getWrapperField(this, proto.xsuportal.proto.Error.DebugInfo, 16));
};


/**
 * @param {?proto.xsuportal.proto.Error.DebugInfo|undefined} value
 * @return {!proto.xsuportal.proto.Error} returns this
*/
proto.xsuportal.proto.Error.prototype.setDebugInfo = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xsuportal.proto.Error} returns this
 */
proto.xsuportal.proto.Error.prototype.clearDebugInfo = function() {
  return this.setDebugInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xsuportal.proto.Error.prototype.hasDebugInfo = function() {
  return jspb.Message.getField(this, 16) != null;
};


goog.object.extend(exports, proto.xsuportal.proto);
