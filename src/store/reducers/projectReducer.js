const initState = {
  projects: [
    { id: "1", title: "This is a redux app", content: "This is for content" },
    { id: "2", title: "This is a redux app", content: "This is for content" },
    { id: "3", title: "This is a redux app", content: "This is for content" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
