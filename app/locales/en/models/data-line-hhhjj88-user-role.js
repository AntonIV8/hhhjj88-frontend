export default {
  projections: {
    user_roleE: {
      user_id: {
        __caption__: 'user_id',
        login: {
          __caption__: 'login'
        }
      },
      role_id: {
        __caption__: 'role_id',
        description: {
          __caption__: 'description'
        }
      }
    },
    user_roleL: {
      user_id: {
        __caption__: 'user_id',
        login: {
          __caption__: 'login'
        }
      },
      role_id: {
        __caption__: 'role_id',
        description: {
          __caption__: 'description'
        }
      }
    }
  },
  validations: {
    user_id: {
      __caption__: 'user_id'
    },
    role_id: {
      __caption__: 'role_id'
    }
  }
};
