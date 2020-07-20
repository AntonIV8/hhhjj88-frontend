import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  external_id: DS.attr('string'),
  cfs_id: DS.belongsTo('data-line-hhhjj88-service', { inverse: null, async: false }),
  parent_id: DS.belongsTo('data-line-hhhjj88-resource', { inverse: null, async: false }),
  resource_spec_id: DS.belongsTo('data-line-hhhjj88-resource-spec', { inverse: null, async: false }),
  resource_shared_id: DS.belongsTo('data-line-hhhjj88-resource-shared', { inverse: null, async: false }),
  contragent_id: DS.belongsTo('data-line-hhhjj88-contragent', { inverse: null, async: false }),
  parent_service_id: DS.belongsTo('data-line-hhhjj88-service', { inverse: null, async: false }),
  cfs_id: DS.belongsTo('data-line-hhhjj88-service', { inverse: null, async: false }),
  customer_id: DS.belongsTo('data-line-hhhjj88-customer', { inverse: null, async: false }),
  resource_spec_id: DS.belongsTo('data-line-hhhjj88-resource-spec', { inverse: null, async: false }),
  resource_shared_id: DS.belongsTo('data-line-hhhjj88-resource-shared', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-hhhjj88-resource.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-hhhjj88-resource.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  external_id: {
    descriptionKey: 'models.data-line-hhhjj88-resource.validations.external_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  cfs_id: {
    descriptionKey: 'models.data-line-hhhjj88-resource.validations.cfs_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-hhhjj88-resource.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  resource_spec_id: {
    descriptionKey: 'models.data-line-hhhjj88-resource.validations.resource_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  resource_shared_id: {
    descriptionKey: 'models.data-line-hhhjj88-resource.validations.resource_shared_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  contragent_id: {
    descriptionKey: 'models.data-line-hhhjj88-resource.validations.contragent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  parent_service_id: {
    descriptionKey: 'models.data-line-hhhjj88-resource.validations.parent_service_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  customer_id: {
    descriptionKey: 'models.data-line-hhhjj88-resource.validations.customer_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resourceE', 'data-line-hhhjj88-resource', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    external_id: attr('External_id', { index: 2 }),
    cfs_id: belongsTo('data-line-hhhjj88-service', 'Cfs_id', {
      name: attr('Name', { index: 4 })
    }, { index: 3 }),
    parent_id: belongsTo('data-line-hhhjj88-resource', 'Parent_id', {
      name: attr('Name', { index: 6 })
    }, { index: 5 }),
    resource_spec_id: belongsTo('data-line-hhhjj88-resource-spec', 'Resource_spec_id', {
      name: attr('Name', { index: 8 })
    }, { index: 7 }),
    resource_shared_id: belongsTo('data-line-hhhjj88-resource-shared', 'Resource_shared_id', {
      name: attr('Name', { index: 10 })
    }, { index: 9 }),
    contragent_id: belongsTo('data-line-hhhjj88-contragent', 'Contragent_id', {
      contragent: attr('Contragent', { index: 12 })
    }, { index: 11 }),
    parent_service_id: belongsTo('data-line-hhhjj88-service', 'Parent_service_id', {
      name: attr('Name', { index: 14 })
    }, { index: 13 }),
    customer_id: belongsTo('data-line-hhhjj88-customer', 'Customer_id', {
      customer: attr('Customer', { index: 18 })
    }, { index: 17 })
  });

  modelClass.defineProjection('resourceL', 'data-line-hhhjj88-resource', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    external_id: attr('External_id', { index: 2 }),
    cfs_id: belongsTo('data-line-hhhjj88-service', 'Name', {

    }, { index: 3, hidden: true }),
    parent_id: belongsTo('data-line-hhhjj88-resource', 'Name', {

    }, { index: 4, hidden: true }),
    resource_spec_id: belongsTo('data-line-hhhjj88-resource-spec', 'Name', {

    }, { index: 5, hidden: true }),
    resource_shared_id: belongsTo('data-line-hhhjj88-resource-shared', 'Name', {

    }, { index: 6, hidden: true }),
    contragent_id: belongsTo('data-line-hhhjj88-contragent', 'Contragent', {

    }, { index: 7, hidden: true }),
    parent_service_id: belongsTo('data-line-hhhjj88-service', 'Name', {

    }, { index: 8, hidden: true }),
    customer_id: belongsTo('data-line-hhhjj88-customer', 'Customer', {

    }, { index: 10, hidden: true })
  });
};
