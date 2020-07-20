import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  dt_created: DS.attr('date'),
  dt_started: DS.attr('date'),
  dt_ended: DS.attr('date'),
  cfs_id: DS.belongsTo('data-line-hhhjj88-service', { inverse: null, async: false }),
  parent_id: DS.belongsTo('data-line-hhhjj88-service', { inverse: null, async: false }),
  service_spec_id: DS.belongsTo('data-line-hhhjj88-service-spec', { inverse: null, async: false }),
  contragent_id: DS.belongsTo('data-line-hhhjj88-contragent', { inverse: null, async: false }),
  state: DS.belongsTo('data-line-hhhjj88-service-state', { inverse: null, async: false }),
  cfs_id: DS.belongsTo('data-line-hhhjj88-service', { inverse: null, async: false }),
  customer_id: DS.belongsTo('data-line-hhhjj88-customer', { inverse: null, async: false }),
  contragent_id: DS.belongsTo('data-line-hhhjj88-contragent', { inverse: null, async: false }),
  state: DS.belongsTo('data-line-hhhjj88-service-state', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-hhhjj88-service.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-hhhjj88-service.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-hhhjj88-service.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dt_started: {
    descriptionKey: 'models.data-line-hhhjj88-service.validations.dt_started.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dt_ended: {
    descriptionKey: 'models.data-line-hhhjj88-service.validations.dt_ended.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  cfs_id: {
    descriptionKey: 'models.data-line-hhhjj88-service.validations.cfs_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-hhhjj88-service.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  service_spec_id: {
    descriptionKey: 'models.data-line-hhhjj88-service.validations.service_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  contragent_id: {
    descriptionKey: 'models.data-line-hhhjj88-service.validations.contragent_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  state: {
    descriptionKey: 'models.data-line-hhhjj88-service.validations.state.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  customer_id: {
    descriptionKey: 'models.data-line-hhhjj88-service.validations.customer_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('serviceE', 'data-line-hhhjj88-service', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    dt_created: attr('Dt_created', { index: 2 }),
    dt_started: attr('Dt_started', { index: 3 }),
    dt_ended: attr('Dt_ended', { index: 4 }),
    cfs_id: belongsTo('data-line-hhhjj88-service', 'Cfs_id', {
      name: attr('Name', { index: 6 })
    }, { index: 5 }),
    parent_id: belongsTo('data-line-hhhjj88-service', 'Parent_id', {
      name: attr('Name', { index: 8 })
    }, { index: 7 }),
    service_spec_id: belongsTo('data-line-hhhjj88-service-spec', 'Service_spec_id', {
      name: attr('Name', { index: 10 })
    }, { index: 9 }),
    contragent_id: belongsTo('data-line-hhhjj88-contragent', 'Contragent_id', {
      contragent: attr('Contragent', { index: 12 })
    }, { index: 11 }),
    state: belongsTo('data-line-hhhjj88-service-state', 'State', {
      description: attr('Description', { index: 14 })
    }, { index: 13 }),
    customer_id: belongsTo('data-line-hhhjj88-customer', 'Customer_id', {
      customer: attr('Customer', { index: 18 })
    }, { index: 17 })
  });

  modelClass.defineProjection('serviceL', 'data-line-hhhjj88-service', {
    name: attr('Name', { index: 0 }),
    description: attr('Description', { index: 1 }),
    dt_created: attr('Dt_created', { index: 2 }),
    dt_started: attr('Dt_started', { index: 3 }),
    dt_ended: attr('Dt_ended', { index: 4 }),
    cfs_id: belongsTo('data-line-hhhjj88-service', 'Name', {

    }, { index: 5, hidden: true }),
    parent_id: belongsTo('data-line-hhhjj88-service', 'Name', {

    }, { index: 6, hidden: true }),
    service_spec_id: belongsTo('data-line-hhhjj88-service-spec', 'Name', {

    }, { index: 7, hidden: true }),
    contragent_id: belongsTo('data-line-hhhjj88-contragent', 'Contragent', {

    }, { index: 8, hidden: true }),
    state: belongsTo('data-line-hhhjj88-service-state', 'Description', {

    }, { index: 9, hidden: true }),
    customer_id: belongsTo('data-line-hhhjj88-customer', 'Customer', {

    }, { index: 11, hidden: true })
  });
};
