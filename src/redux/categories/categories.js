const initialState = [];
const CHECK = 'CHECK_STATUS';

export default function categories(state = initialState, action) {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default:
      return state;
  }
}

export const checkStatus = () => ({
  type: CHECK,
});
