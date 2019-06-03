export const transformAccessToken = token => ({
  token: token.access_token,
  refreshToken: token.refresh_token,
  tokenType: token.token_type,
  expiresIn: token.expires_in
});
