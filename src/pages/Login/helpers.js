/**
 * @returns {string}
 */
export const generateGoogleOAuthUrl = () => {
  const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');

  authUrl.searchParams.append('access_type', 'offline');
  authUrl.searchParams.append('include_granted_scopes', true);
  authUrl.searchParams.append('response_type', 'code');
  authUrl.searchParams.append(
    'scope',
    import.meta.env.VITE_GOOGLE_LOGIN_SCOPES.toString(),
  );
  authUrl.searchParams.append(
    'hd',
    import.meta.env.VITE_GOOGLE_LOGIN_HOST_DOMAIN.toString(),
  );
  authUrl.searchParams.append(
    'redirect_uri',
    import.meta.env.VITE_GOOGLE_LOGIN_REDIRECT_URI.toString(),
  );
  authUrl.searchParams.append(
    'client_id',
    import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_ID.toString(),
  );

  return authUrl.toString();
};
