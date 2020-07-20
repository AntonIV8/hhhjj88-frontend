import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  action: DS.attr('string'),
  price: DS.attr('string'),
  dt_created: DS.attr('date'),
  dt_modified: DS.attr('date'),
  log: DS.attr('string'),
  service_id: DS.belongsTo('data-line-hhhjj88-service', { inverse: null, async: false }),
  parent_id: DS.belongsTo('data-line-hhhjj88-order-item', { inverse: null, async: false }),
  state: DS.belongsTo('data-line-hhhjj88-order-state', { inverse: null, async: false }),
  service_order_id: DS.belongsTo('data-line-hhhjj88-service-order', { inverse: null, async: false }),
  service_id: DS.belongsTo('data-line-hhhjj88-service', { inverse: null, async: false }),
  creator_id: DS.belongsTo('data-line-hhhjj88-usr', { inverse: null, async: false }),
  modifier_id: DS.belongsTo('data-line-hhhjj88-usr', { inverse: null, async: false }),
  clone_service_id: DS.belongsTo('data-line-hhhjj88-service', { inverse: null, async: false }),
  creator_id: DS.belongsTo('data-line-hhhjj88-usr', { inverse: null, async: false }),
  state: DS.belongsTo('data-line-hhhjj88-order-state', { inverse: null, async: false }),
  clone_service_id: DS.belongsTo('data-line-hhhjj88-service', { inverse: null, async: false })
});

export let ValidationRules = {
  action: {
    descriptionKey: 'models.data-line-hhhjj88-order-item.validations.action.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  price: {
    descriptionKey: 'models.data-line-hhhjj88-order-item.validations.price.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-hhhjj88-order-item.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dt_modified: {
    descriptionKey: 'models.data-line-hhhjj88-order-item.validations.dt_modified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  log: {
    descriptionKey: 'models.data-line-hhhjj88-order-item.validations.log.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  service_id: {
    descriptionKey: 'models.data-line-hhhjj88-order-item.validations.service_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-hhhjj88-order-item.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  state: {
    descriptionKey: 'models.data-line-hhhjj88-order-item.validations.state.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  service_order_id: {
    descriptionKey: 'models.data-line-hhhjj88-order-item.validations.service_order_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  creator_id: {
    descriptionKey: 'models.data-line-hhhjj88-order-item.validations.creator_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  modifier_id: {
    descriptionKey: 'models.data-line-hhhjj88-order-item.validations.modifier_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  clone_service_id: {
    descriptionKey: 'models.data-line-hhhjj88-order-item.validations.clone_service_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('order_itemE', 'data-line-hhhjj88-order-item', {
    action: attr('Action', { index: 0 }),
    price: attr('Price', { index: 1 }),
    dt_created: attr('Dt_created', { index: 2 }),
    dt_modified: attr('Dt_modified', { index: 3 }),
    log: attr('Log', { index: 4 }),
    service_id: belongsTo('data-line-hhhjj88-service', 'Service_id', {
      name: attr('Name', { index: 6 })
    }, { index: 5 }),
    parent_id: belongsTo('data-line-hhhjj88-order-item', 'Parent_id', {
      action: attr('Action', { index: 8 })
    }, { index: 7 }),
    state: belongsTo('data-line-hhhjj88-order-state', 'State', {
      description: attr('Description', { index: 10 })
    }, { index: 9 }),
    service_order_id: belongsTo('data-line-hhhjj88-service-order', 'Service_order_id', {
      description: attr('Description', { index: 12 })
    }, { index: 11 }),
    creator_id: belongsTo('data-line-hhhjj88-usr', 'Creator_id', {
      login: attr('Login', { index: 16 })
    }, { index: 15 }),
    modifier_id: belongsTo('data-line-hhhjj88-usr', 'Modifier_id', {
      login: attr('Login', { index: 18 })
    }, { index: 17 }),
    clone_service_id: belongsTo('data-line-hhhjj88-service', 'Clone_service_id', {
      name: attr('Name', { index: 20 })
    }, { index: 19 })
  });

  modelClass.defineProjection('order_itemL', 'data-line-hhhjj88-order-item', {
    action: attr('Action', { index: 0 }),
    price: attr('Price', { index: 1 }),
    dt_created: attr('Dt_created', { index: 2 }),
    dt_modified: attr('Dt_modified', { index: 3 }),
    log: attr('Log', { index: 4 }),
    service_id: belongsTo('data-line-hhhjj88-service', 'Name', {

    }, { index: 5, hidden: true }),
    parent_id: belongsTo('data-line-hhhjj88-order-item', 'Action', {

    }, { index: 6, hidden: true }),
    state: belongsTo('data-line-hhhjj88-order-state', 'Description', {

    }, { index: 7, hidden: true }),
    service_order_id: belongsTo('data-line-hhhjj88-service-order', 'Description', {

    }, { index: 8, hidden: true }),
    creator_id: belongsTo('data-line-hhhjj88-usr', 'Login', {

    }, { index: 10, hidden: true }),
    modifier_id: belongsTo('data-line-hhhjj88-usr', 'Login', {

    }, { index: 11, hidden: true }),
    clone_service_id: belongsTo('data-line-hhhjj88-service', 'Name', {

    }, { index: 12, hidden: true })
  });
};
