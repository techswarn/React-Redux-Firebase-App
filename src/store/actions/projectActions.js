// Normal way of doing it if there is no middleware
// export const createProject = () => {
//   return {
//     type: "ADD_PROJECT",
//     project: project,
//   };
// };

export const createProject = (project) => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: "CREATE_PROJECT", project: project });
  };
};
