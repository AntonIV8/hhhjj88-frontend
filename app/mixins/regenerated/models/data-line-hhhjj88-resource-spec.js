import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  enum: DS.attr('string'),
  type: DS.attr('string'),
  existent: DS.attr('boolean'),
  shared: DS.attr('boolean'),
  version: DS.attr('number'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  dt_created: DS.attr('date'),
  dt_modified: DS.attr('date'),
  resource_common_id: DS.belongsTo('data-line-hhhjj88-resource-common', { inverse: null, async: false }),
  parent_id: DS.belongsTo('data-line-hhhjj88-resource-spec', { inverse: null, async: false }),
  cardinality: DS.belongsTo('data-line-hhhjj88-cardinality-type', { inverse: null, async: false }),
  cardinality: DS.belongsTo('data-line-hhhjj88-cardinality-type', { inverse: null, async: false }),
  parent_service_spec_id: DS.belongsTo('data-line-hhhjj88-service-spec', { inverse: null, async: false }),
  resource_common_id: DS.belongsTo('data-line-hhhjj88-resource-common', { inverse: null, async: false }),
  parent_service_spec_id: DS.belongsTo('data-line-hhhjj88-service-spec', { inverse: null, async: false })
});

export let ValidationRules = {
  enum: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.enum.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  type: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.type.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  existent: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.existent.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  shared: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.shared.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  version: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.version.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  name: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  description: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  category: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.category.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  dt_created: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.dt_created.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  dt_modified: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.dt_modified.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  resource_common_id: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.resource_common_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  parent_id: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.parent_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  cardinality: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.cardinality.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  parent_service_spec_id: {
    descriptionKey: 'models.data-line-hhhjj88-resource-spec.validations.parent_service_spec_id.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('resource_specE', 'data-line-hhhjj88-resource-spec', {
    enum: attr('Enum', { index: 0 }),
    type: attr('Type', { index: 1 }),
    existent: attr('Existent', { index: 2 }),
    shared: attr('Shared', { index: 3 }),
    version: attr('Version', { index: 4 }),
    name: attr('Name', { index: 5 }),
    description: attr('Description', { index: 6 }),
    category: attr('Category', { index: 7 }),
    dt_created: attr('Dt_created', { index: 8 }),
    dt_modified: attr('Dt_modified', { index: 9 }),
    resource_common_id: belongsTo('data-line-hhhjj88-resource-common', 'Resource_common_id', {
      name: attr('Name', { index: 11 })
    }, { index: 10 }),
    parent_id: belongsTo('data-line-hhhjj88-resource-spec', 'Parent_id', {
      name: attr('Name', { index: 13 })
    }, { index: 12 }),
    cardinality: belongsTo('data-line-hhhjj88-cardinality-type', 'Cardinality', {
      description: attr('Description', { index: 15 })
    }, { index: 14 }),
    parent_service_spec_id: belongsTo('data-line-hhhjj88-service-spec', 'Parent_service_spec_id', {
      name: attr('Name', { index: 19 })
    }, { index: 18 })
  });

  modelClass.defineProjection('resource_specL', 'data-line-hhhjj88-resource-spec', {
    enum: attr('Enum', { index: 0 }),
    type: attr('Type', { index: 1 }),
    existent: attr('Existent', { index: 2 }),
    shared: attr('Shared', { index: 3 }),
    version: attr('Version', { index: 4 }),
    name: attr('Name', { index: 5 }),
    description: attr('Description', { index: 6 }),
    category: attr('Category', { index: 7 }),
    dt_created: attr('Dt_created', { index: 8 }),
    dt_modified: attr('Dt_modified', { index: 9 }),
    resource_common_id: belongsTo('data-line-hhhjj88-resource-common', 'Name', {

    }, { index: 10, hidden: true }),
    parent_id: belongsTo('data-line-hhhjj88-resource-spec', 'Name', {

    }, { index: 11, hidden: true }),
    cardinality: belongsTo('data-line-hhhjj88-cardinality-type', 'Description', {

    }, { index: 12, hidden: true }),
    parent_service_spec_id: belongsTo('data-line-hhhjj88-service-spec', 'Name', {

    }, { index: 14, hidden: true })
  });
};
