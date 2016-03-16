'use strict';

import mongoose from 'mongoose';

var CompanyNameSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('CompanyName', CompanyNameSchema);
