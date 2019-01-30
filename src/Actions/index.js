export const items = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(items =>
        dispatch({
          type: "FETCH_ITEMS",
          items
        })
      );
  };
};
