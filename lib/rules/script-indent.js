/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const indentCommon = require('../utils/indent-common')

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  create (context) {
    return indentCommon.defineVisitor(context, context.getSourceCode(), {})
  },
  meta: {
    docs: {
      description: 'enforce consistent indentation in `<template>`',
      category: 'strongly-recommended'
    },
    fixable: 'whitespace',
    schema: [
      {
        anyOf: [
          { type: 'integer', minimum: 1 },
          { enum: ['tab'] }
        ]
      },
      {
        type: 'object',
        properties: {
          'baseIndent': { type: 'integer', minimum: 0 },
          'switchCase': { type: 'integer', minimum: 0 },
          'ignores': {
            type: 'array',
            items: {
              allOf: [
                { type: 'string' },
                { not: { type: 'string', pattern: ':exit$' }},
                { not: { type: 'string', pattern: '^\\s*$' }}
              ]
            },
            uniqueItems: true,
            additionalItems: false
          }
        },
        additionalProperties: false
      }
    ]
  }
}