"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.details = void 0;
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
var details = function () { return ({
    name: 'Require Review',
    description: "Makes the flow pause.\n  The file will stay in the staging section on the Tdarr tab until the review is completed.\n\n  Output 1: Approve / Continue\n  Output 2: Reject\n\n  Note: The 'Auto accept successful transcodes' option on the Tdarr tab will cause this plugin to be skipped.\n  ",
    style: {
        borderColor: 'yellow',
    },
    tags: '',
    isStartPlugin: false,
    pType: '',
    requiresVersion: '2.11.01',
    sidebarPosition: -1,
    icon: 'faHand',
    inputs: [],
    outputs: [
        {
            number: 1,
            tooltip: 'Approve / continue to next plugin',
        },
        {
            number: 2,
            tooltip: 'Reject',
        },
    ],
}); };
exports.details = details;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var plugin = function (args) {
    var lib = require('../../../../../methods/lib')();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-param-reassign
    args.inputs = lib.loadDefaultValues(args.inputs, details);
    return {
        outputFileObj: args.inputFileObj,
        outputNumber: 1,
        variables: args.variables,
    };
};
exports.plugin = plugin;
