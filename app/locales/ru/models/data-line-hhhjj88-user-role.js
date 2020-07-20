export default {
  projections: {
    user_roleE: {
      user_id: {
        __caption__: 'User_id',
        login: {
          __caption__: 'Login'
        }
      },
      role_id: {
        __caption__: 'Role_id',
        description: {
          __caption__: 'Description'
        }
      }
    },
    user_roleL: {
      user_id: {
        __caption__: 'Login',
        login: {
          __caption__: 'Login'
        }
      },
      role_id: {
        __caption__: 'Description',
        description: {
          __caption__: 'Description'
        }
      }
    }
  },
  validations: {
    user_id: {
      __caption__: 'User_id'
    },
    role_id: {
      __caption__: 'Role_id'
    }
  }
};
