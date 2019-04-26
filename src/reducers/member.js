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
    default:
      return state;
  }
}
