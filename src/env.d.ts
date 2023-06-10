/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_GOOGLE_LOGIN_CLIENT_ID: string;
  readonly VITE_GOOGLE_LOGIN_REDIRECT_URI: string;
  readonly VITE_GOOGLE_LOGIN_HOST_DOMAIN: string;
  readonly VITE_GOOGLE_LOGIN_SCOPES: string;
}
