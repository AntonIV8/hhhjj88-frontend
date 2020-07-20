import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  user_id: DS.belongsTo('data-line-hhhjj88-usr', { inverse: null, async: false }),
  role_id: DS.belongsTo('data-line-hhhjj88-role', { inverse: null, async: false })
});

export let ValidationRules = {
  user_id: {
    descriptionKey: 'models.data-line-hhhjj88-user-role.validations.user_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  role_id: {
    descriptionKey: 'models.data-line-hhhjj88-user-role.validations.role_id.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('user_roleE', 'data-line-hhhjj88-user-role', {
    user_id: belongsTo('data-line-hhhjj88-usr', 'User_id', {
      login: attr('Login', { index: 1 })
    }, { index: 0 }),
    role_id: belongsTo('data-line-hhhjj88-role', 'Role_id', {
      description: attr('Description', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('user_roleL', 'data-line-hhhjj88-user-role', {
    user_id: belongsTo('data-line-hhhjj88-usr', 'Login', {
      login: attr('Login', { index: 0 })
    }, { index: -1, hidden: true }),
    role_id: belongsTo('data-line-hhhjj88-role', 'Description', {
      description: attr('Description', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
