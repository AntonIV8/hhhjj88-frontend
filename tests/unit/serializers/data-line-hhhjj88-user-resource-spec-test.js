import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-line-hhhjj88-user-resource-spec', 'Unit | Serializer | data-line-hhhjj88-user-resource-spec', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:data-line-hhhjj88-user-resource-spec',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:data-line-hhhjj88-cardinality-type',
    'model:data-line-hhhjj88-catalog',
    'model:data-line-hhhjj88-characteristic-type',
    'model:data-line-hhhjj88-contragent',
    'model:data-line-hhhjj88-customer-acl',
    'model:data-line-hhhjj88-customer',
    'model:data-line-hhhjj88-dba',
    'model:data-line-hhhjj88-dictionary-value',
    'model:data-line-hhhjj88-dictionary',
    'model:data-line-hhhjj88-grp',
    'model:data-line-hhhjj88-order-item',
    'model:data-line-hhhjj88-order-state',
    'model:data-line-hhhjj88-product-catalog',
    'model:data-line-hhhjj88-resource-characteristic-log',
    'model:data-line-hhhjj88-resource-characteristic',
    'model:data-line-hhhjj88-resource-common',
    'model:data-line-hhhjj88-resource-log',
    'model:data-line-hhhjj88-resource-shared',
    'model:data-line-hhhjj88-resource-spec-characteristic',
    'model:data-line-hhhjj88-resource-spec',
    'model:data-line-hhhjj88-resource-usage-spec',
    'model:data-line-hhhjj88-resource',
    'model:data-line-hhhjj88-role',
    'model:data-line-hhhjj88-service-characteristic-log',
    'model:data-line-hhhjj88-service-characteristic',
    'model:data-line-hhhjj88-service-log',
    'model:data-line-hhhjj88-service-order',
    'model:data-line-hhhjj88-service-spec-acl',
    'model:data-line-hhhjj88-service-spec-characteristic',
    'model:data-line-hhhjj88-service-spec',
    'model:data-line-hhhjj88-service-state',
    'model:data-line-hhhjj88-service-usage-spec',
    'model:data-line-hhhjj88-service',
    'model:data-line-hhhjj88-user-group',
    'model:data-line-hhhjj88-user-resource-spec',
    'model:data-line-hhhjj88-user-role',
    'model:data-line-hhhjj88-user-service-order',
    'model:data-line-hhhjj88-user-service-spec',
    'model:data-line-hhhjj88-usr',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
