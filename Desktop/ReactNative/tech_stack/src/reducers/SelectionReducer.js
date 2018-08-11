/*records what the currently selected library is*/
export default (state = null, action) => {
  /*state has to be set to a value or else will result as undefined
  and would create an error*/
  /*boiler plate for mst reducers*/
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
/*if an action is called that the reducer does not care it will
return back to the last succesful state */
  }
};
