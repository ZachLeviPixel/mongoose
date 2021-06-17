
'use strict';
exports['index.pug'] = require('./home');
exports['docs/api.pug'] = require('./api');
exports['docs/prior.pug'] = require('./prior');
exports['docs/search.pug'] = { title: 'Search' };

exports['docs/advanced_schemas.md'] = { title: 'Advanced Schemas', acquit: true, markdown: true, vue: true };
exports['docs/validation.md'] = { title: 'Validation', acquit: true, markdown: true, vue: true };
exports['docs/customschematypes.md'] = { title: 'Custom Schema Types', acquit: true, markdown: true, vue: true };
exports['docs/promises.md'] = { title: 'Promises', acquit: true, markdown: true, vue: true };
exports['docs/discriminators.md'] = { title: 'Discriminators', acquit: true, markdown: true, vue: true };
exports['docs/defaults.md'] = { title: 'Defaults', acquit: true, markdown: true, vue: true };
exports['docs/index.md'] = { title: 'Getting Started', markdown: true, vue: true };
exports['docs/browser.md'] = { guide: true, title: 'Browser Library', acquit: true, markdown: true, vue: true };
exports['docs/guides.md'] = { guide: true, schema: true, title: 'Schemas', markdown: true, vue: true };
exports['docs/guide.md'] = { guide: true, schema: true, title: 'Schemas', acquit: true, markdown: true, vue: true };
exports['docs/schematypes.md'] = { guide: true, schema: true, title: 'SchemaTypes', markdown: true, vue: true };
exports['docs/middleware.md'] = { guide: true, title: 'Middleware', acquit: true, markdown: true, vue: true };
exports['docs/plugins.md'] = { guide: true, title: 'Plugins', markdown: true, vue: true };
exports['docs/subdocs.md'] = { guide: true, docs: true, title: 'SubDocuments', markdown: true, vue: true };
exports['docs/documents.md'] = { guide: true, docs: true, title: 'Documents', markdown: true, vue: true };
exports['docs/models.md'] = { guide: true, title: 'Models', markdown: true, vue: true };
exports['docs/queries.md'] = { guide: true, title: 'Queries', markdown: true, vue: true };
exports['docs/populate.md'] = { guide: true, title: 'Query Population', markdown: true, vue: true };
exports['docs/migration.md'] = { guide: true, title: 'Migration Guide', markdown: true, vue: true };
exports['docs/migrating_to_5.md'] = { guide: true, title: 'Migrating to Mongoose 5', markdown: true, vue: true };
exports['docs/contributing.md'] = { guide: true, title: 'Contributing', markdown: true, vue: true };
exports['docs/connections.md'] = { guide: true, title: 'Connecting to MongoDB', markdown: true, vue: true };
exports['docs/lambda.md'] = { guide: true, title: 'Using Mongoose With AWS Lambda', markdown: true, vue: true };
exports['docs/geojson.md'] = { guide: true, title: 'Using GeoJSON', acquit: true, markdown: true, vue: true };
exports['docs/transactions.md'] = { guide: true, title: 'Transactions', acquit: true, markdown: true, vue: true };
exports['docs/deprecations.md'] = { guide: true, title: 'Deprecation Warnings', markdown: true, vue: true };
exports['docs/further_reading.md'] = { title: 'Further Reading', markdown: true, vue: true };
exports['docs/jest.md'] = { title: 'Testing Mongoose with Jest', markdown: true, vue: true };
exports['docs/faq.md'] = { guide: true, title: 'FAQ', markdown: true, vue: true };
exports['docs/typescript.md'] = {
  guide: true,
  title: 'Using TypeScript with Mongoose',
  markdown: true,
  vue: true
};
exports['docs/compatibility.md'] = {
  title: 'MongoDB Version Compatibility',
  guide: true,
  markdown: true,
  vue: true
};
exports['docs/enterprise.md'] = { title: 'Mongoose for Enterprise', markdown: true, vue: true };
exports['docs/built-with-mongoose.md'] = { title: 'Built with Mongoose', markdown: true, vue: true };
exports['docs/async-await.md'] = { title: 'Using Async/Await with Mongoose', markdown: true, vue: true };