export const parseUrlToUserInput = urlQuery => {
  return urlQuery.replace(/[^A-Za-z0-9]/g, " ");
};

export const parseUserInputToUrl = userSearchTextInput => {
  return userSearchTextInput.replace(/[^A-Za-z0-9]/g, "+");
};
