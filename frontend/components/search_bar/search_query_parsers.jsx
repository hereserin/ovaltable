export const parseUrlToUserInput = urlQuery => {
  // const urlQuery = this.props.match.params.query;
  return urlQuery.replace(/[^A-Za-z0-9]/g, " ");
};

export const parseUserInputToUrl = userSearchTextInput => {
  // const userSearchTextInput = this.state.searchTextInput;
  return userSearchTextInput.replace(/[^A-Za-z0-9]/g, "+");
};
