var Joi = require('joi')

var validations = module.exports = {}

validations.bearerTokenHeader = Joi.object({
  authorization: Joi.string().required().regex(/^Bearer [a-zA-Z0-9_\-]+$/)
}).unknown().required().meta({
  statusCode: 403
})

validations.bearerTokenHeaderForbidden = Joi.object({
  authorization: Joi.forbidden()
}).unknown().required().meta({
  statusCode: 403
})
validations.sessionQuery = Joi.object({
  include: Joi.any().only(['account', 'account.profile'])
}).unknown().meta({
  statusCode: 403
})

validations.accountQuery = Joi.object({
  include: Joi.any().only(['profile'])
}).unknown().meta({
  statusCode: 403
})

validations.accountPayload = Joi.object({
  data: Joi.object({
    type: Joi.any().required().only(['account'])
  }).unknown()
}).unknown().required().meta({
  statusCode: 409
})

validations.sessionPayload = Joi.object({
  data: Joi.object({
    type: Joi.any().required().only(['session'])
  }).unknown()
}).unknown().required().meta({
  statusCode: 409
})
