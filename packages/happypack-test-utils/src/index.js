exports.VERSION_1 = /^1/;
exports.VERSION_2 = /^2/;
exports.VERSION_3 = /^3/;
exports.HAPPY_LOADER_PATH = require('./root').join('lib/HappyLoader.js');

exports.injectRPCHandler = require('./RPCHandlerShim').set;

exports.assert = require('chai').assert;
exports.fixturePath = require('./fixturePath');
exports.fixture = require('./fixture');
exports.assertNoWebpackErrors = require('./assertNoWebpackErrors');
exports.createIntegrationSuite = require('./createIntegrationSuite');
exports.composeWebpackConfig = require('./composeWebpackConfig');
exports.getWebpackVersion = require('./getWebpackVersion');
exports.getModuleLoaders = require('./getModuleLoaders');
exports.multiWebpackAssert = require('./multiWebpackAssert');
