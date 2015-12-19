const testapi = require("./testapi");
const utils = require("./utils");
const AudioNode = require("./AudioNode");

module.exports = class PannerNode extends AudioNode {
  static $JSONKeys = [
    "panningModel", "distanceModel", "refDistance", "maxDistance",
    "rolloffFactor", "coneInnerAngle", "coneOuterAngle", "coneOuterGain"
  ];

  static $new(...args) {
    return utils.auth.request((token) => {
      return new PannerNode(token, ...args);
    });
  }

  constructor(token, context) {
    super(token, {
      name: "PannerNode",
      context: context,
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: 2,
      channelCountMode: "clamped-max",
      channelInterpretation: "speakers"
    });
  }

  @testapi.props.typed(testapi.isEnum([ "HRTF", "equalpower" ]), "HRTF")
  panningModel() {}

  @testapi.props.typed(testapi.isEnum([ "inverse", "linear", "exponential" ]), "inverse")
  distanceModel() {}

  @testapi.props.typed(testapi.isNumber, 1)
  refDistance() {}

  @testapi.props.typed(testapi.isNumber, 10000)
  maxDistance() {}

  @testapi.props.typed(testapi.isNumber, 1)
  rolloffFactor() {}

  @testapi.props.typed(testapi.isNumber, 360)
  coneInnerAngle() {}

  @testapi.props.typed(testapi.isNumber, 360)
  coneOuterAngle() {}

  @testapi.props.typed(testapi.isNumber, 0)
  coneOuterGain() {}

  @testapi.methods.param("x", testapi.isNumber)
  @testapi.methods.param("y", testapi.isNumber)
  @testapi.methods.param("z", testapi.isNumber)
  setPosition() {}

  @testapi.methods.param("x", testapi.isNumber)
  @testapi.methods.param("y", testapi.isNumber)
  @testapi.methods.param("z", testapi.isNumber)
  setOrientation() {}

  @testapi.methods.param("x", testapi.isNumber)
  @testapi.methods.param("y", testapi.isNumber)
  @testapi.methods.param("z", testapi.isNumber)
  setVelocity() {}
};
