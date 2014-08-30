/* global describe, it, expect, beforeEach */
"use strict";

require("../web-audio-mock");

describe("AnalyserNode", function() {
  var ctx = null;
  var node = null;

  beforeEach(function() {
    ctx = new AudioContext();
    node = ctx.createAnalyser();
  });

  describe("#fftSize", function() {
    it("should be exist", function() {
      expect(node).to.have.property("fftSize");
    });
    it("should be number", function() {
      expect(function() {
        node.fftSize = 512;
      }).to.not.throw();
      expect(function() {
        node.fftSize = "INVALID";
      }).to.throw(TypeError);
    });
  });

  describe("#frequencyBinCount", function() {
    it("should be exist", function() {
      expect(node).to.have.property("frequencyBinCount");
    });
    it("should be readonly", function() {
      expect(function() {
        node.frequencyBinCount = 0;
      }).to.throw(Error, "readonly");
    });
    it("should be a number", function() {
      expect(node.frequencyBinCount).to.be.a("number");
    });
  });

  describe("#minDecibels", function() {
    it("should be exist", function() {
      expect(node).to.have.property("minDecibels");
    });
    it("should be type of number", function() {
      expect(function() {
        node.minDecibels = 0;
      }).to.not.throw();
      expect(function() {
        node.minDecibels = "INVALID";
      }).to.throw(TypeError);
    });
  });

  describe("#maxDecibels", function() {
    it("should be exist", function() {
      expect(node).to.have.property("maxDecibels");
    });
    it("should be type of number", function() {
      expect(function() {
        node.maxDecibels = 0;
      }).to.not.throw();
      expect(function() {
        node.maxDecibels = "INVALID";
      }).to.throw(TypeError);
    });
  });

  describe("#smoothingTimeConstant", function() {
    it("should be exist", function() {
      expect(node).to.have.property("smoothingTimeConstant");
    });
    it("should be type of number", function() {
      expect(function() {
        node.maxDecibels = 0;
      }).to.not.throw();
      expect(function() {
        node.maxDecibels = "INVALID";
      }).to.throw(TypeError);
    });
  });

  describe("#getFloatFrequencyData(array)", function() {
    it("should work", function() {
      node.getFloatFrequencyData(new Float32Array(128));
    });
    it("throw error", function() {
      expect(function() {
        node.getFloatFrequencyData("INVALID");
      }).to.throw(Error, "AnalyserNode#getFloatFrequencyData: 'array' should be a Float32Array");
    });
  });

  describe("#getByteFrequencyData(array)", function() {
    it("should work", function() {
      node.getByteFrequencyData(new Uint8Array(128));
    });
    it("throw error", function() {
      expect(function() {
        node.getByteFrequencyData("INVALID");
      }).to.throw(Error, "AnalyserNode#getByteFrequencyData: 'array' should be a Uint8Array");
    });
  });

  describe("#getByteTimeDomainData(array)", function() {
    it("should work", function() {
      node.getByteTimeDomainData(new Uint8Array(128));
    });
    it("throw error", function() {
      expect(function() {
        node.getByteTimeDomainData("INVALID");
      }).to.throw(Error, "AnalyserNode#getByteTimeDomainData: 'array' should be a Uint8Array");
    });
  });

});