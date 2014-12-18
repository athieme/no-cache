/**
 * Copyright (c) MuleSoft, Inc.  All rights reserved.  http://www.mulesoft.com
 */

'use strict';

var Promise = require('bluebird');

module.exports = function (config) {
  return {
    get : function (key) {
      return Promise.resolve();
    },
    put : function (key, value, ttl) {
      return Promise.resolve(value);
    },
    cached : function (key, ttl, handler) {
      return handler();
    },
    invalidate : function (key) {
      return Promise.resolve();
    },
    forBucket : function (hash) {
      return {
        get : function (key) {
          return Promise.resolve();
        },
        put : function (key, value, ttl) {
          return Promise.resolve(value);
        },
        cached : function (key, ttl, handler) {
          return handler();
        },
        invalidate : function (key) {
          return Promise.resolve();
        },
        invalidateAll : function () {
          return Promise.resolve();
        }
      };
    }
  };
};
