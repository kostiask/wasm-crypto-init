"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWasm = void 0;
Object.defineProperty(exports, "packageInfo", {
  enumerable: true,
  get: function () {
    return _packageInfo.packageInfo;
  }
});
var _wasmBridge = require("@polkadot/wasm-bridge");
var _wasmCryptoAsmjs = require("@polkadot/wasm-crypto-asmjs");
var _packageInfo = require("./packageInfo");
// Copyright 2019-2022 @polkadot/wasm-crypto-init authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name createWasm
 * @description
 * Creates an interface using only ASM.js
 */
const createWasm = (0, _wasmBridge.createWasmFn)('crypto', null, _wasmCryptoAsmjs.asmJsInit);
exports.createWasm = createWasm;