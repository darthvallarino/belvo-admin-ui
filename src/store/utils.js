const setAuthHeader = (headers, getState) => {
  const {
    auth
  } = getState();
  console.log('auth', auth);
  if (auth) {
    const { access_token } = auth;
    if (access_token) {
      headers.set('authorization', `Bearer ${access_token}`);
    }
  }
  return headers;
};

export { setAuthHeader }