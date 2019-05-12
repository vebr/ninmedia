import Store from '../store/member';

export const initialState = Store;

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case 'POST_DATA': {
      if (action.data) {
        return {
          ...state,
          nama: action.data.nama,
          noTlp: action.data.noTlp,
          email: action.data.email,
          areaDomisili: action.data.areaDomisili,
        };
      }
      return {};
    }
    case 'USER_LOGIN': {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: null,
          uid: action.data.uid,
          email: action.data.email,
          emailVerified: action.data.emailVerified,
          member: true,
        };
      }
      return initialState;
    }
    case 'DATA_REPLACE': {
      let datas = {};
      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        const result = Object.keys(action.data).map(function(key,value) {
          return action.data[key];
        });
        datas = result.map(data => ({
          nama: data.nama,
          email: data.email,
          noTlp: data.noTlp,
          areaDomisili: data.areaDomisili,
          tanggal: data.tanggal,
        }));
      }
      return {
        ...state,
        error: null,
        loading: false,
        datas,
      };
    }
    case 'USER_RESET': {
      return initialState;
    }

    default:
      return state;
  }

}
