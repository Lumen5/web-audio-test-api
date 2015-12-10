import utils from "./utils";
import Immigration from "./utils/Immigration";
import AudioNode from "./AudioNode";
import AudioParam from "./AudioParam";

let immigration = Immigration.getInstance();

export default class DelayNode extends AudioNode {
  constructor(admission, context, maxDelayTime) {
    super(admission, {
      name: "DelayNode",
      context: context,
      numberOfInputs: 1,
      numberOfOutputs: 1,
      channelCount: 2,
      channelCountMode: "max",
      channelInterpretation: "speakers",
    });

    this._.inspector.describe("constructor", ($assert) => {
      $assert(utils.isPositiveNumber(maxDelayTime), (fmt) => {
        throw new TypeError(fmt.plain `
          ${fmt.form};
          ${fmt.butGot(maxDelayTime, "maxDelayTime", "positive number")}
        `);
      });
    });

    this._.delayTime = immigration.apply(admission =>
      new AudioParam(admission, this, "delayTime", 0, 0, maxDelayTime)
    );
    this._.maxDelayTime = maxDelayTime;
    this._.JSONKeys = DelayNode.$JSONKeys.slice();
  }

  get delayTime() {
    return this._.delayTime;
  }

  set delayTime(value) {
    this._.inspector.describe("delayTime", ($assert) => {
      $assert.throwReadOnlyTypeError(value);
    });
  }

  get $maxDelayTime() {
    return this._.maxDelayTime;
  }
}

DelayNode.$JSONKeys = [
  "delayTime",
];
