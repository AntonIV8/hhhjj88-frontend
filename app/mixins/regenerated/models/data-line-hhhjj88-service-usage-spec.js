import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  value: DS.attr('string'),
  map: DS.attr('boolean'),
  unit: DS.attr('string'),
  service_spec_id: DS.belongsTo('data-line-hhhjj88-service-spec', { inverse: null, async: false }),
  type: DS.belongsTo('data-line-hhhjj88-characteristic-type', { inverse: null, async: false }),
  type: DS.belongsTo('data-line-hhhjj88-characteristic-type', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.data-line-hhhjj88-service-usage-spec.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  value: {
    descriptionKey: 'models.data-line-hhhjj88-service-usage-spec.validations.value.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  map: {
    descriptionKey: 'models.data-line-hhhjj88-service-usage-spec.validations.map.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  unit: {
    descriptionKey: 'models.data-line-hhhjj88-service-usage-spec.validations.unit.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  service_spec_id: {
    descriptionKey: 'models.data-line-hhhjj88-service-usage-spec.validations.service_spec_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  type: {
    descriptionKey: 'models.data-line-hhhjj88-service-usage-spec.validations.type.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('service_usage_specE', 'data-line-hhhjj88-service-usage-spec', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    map: attr('Map', { index: 2 }),
    unit: attr('Unit', { index: 3 }),
    service_spec_id: belongsTo('data-line-hhhjj88-service-spec', 'Service_spec_id', {
      name: attr('Name', { index: 5 })
    }, { index: 4 }),
    type: belongsTo('data-line-hhhjj88-characteristic-type', 'Type', {
      regex: attr('Regex', { index: 7 })
    }, { index: 6 })
  });

  modelClass.defineProjection('service_usage_specL', 'data-line-hhhjj88-service-usage-spec', {
    name: attr('Name', { index: 0 }),
    value: attr('Value', { index: 1 }),
    map: attr('Map', { index: 2 }),
    unit: attr('Unit', { index: 3 }),
    service_spec_id: belongsTo('data-line-hhhjj88-service-spec', 'Name', {
      name: attr('Name', { index: 4 })
    }, { index: -1, hidden: true }),
    type: belongsTo('data-line-hhhjj88-characteristic-type', 'Regex', {
      regex: attr('Regex', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
