
const QuerySchema = require('../QuerySchema');
const { Validator } = require('./utils');

const { retention, labels, uncompressed } = require('./fragments');

const TS_CREATE = 'TS.CREATE';


/**
 * TS.CREATE key [RETENTION retentionTime] [UNCOMPRESSED] [LABELS field value..]
 */
module.exports = QuerySchema
  .create(TS_CREATE)
  .data({ executable: true })
  .methodName('create')
  .param(
    'key',
    (value) => !Validator.isUndefined(value) && Validator.isString(value)
  )
  .subquery(retention)
  .subquery(uncompressed)
  .subquery(labels);
