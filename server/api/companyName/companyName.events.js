/**
 * CompanyName model events
 */

'use strict';

import {EventEmitter} from 'events';
var CompanyName = require('./companyName.model');
var CompanyNameEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CompanyNameEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  CompanyName.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    CompanyNameEvents.emit(event + ':' + doc._id, doc);
    CompanyNameEvents.emit(event, doc);
  }
}

export default CompanyNameEvents;
