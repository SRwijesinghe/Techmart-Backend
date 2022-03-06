
export const API_GATEWAY =  `http://localhost:8080`;
export const environment = {
  production: false,
  API_URL: {
    AUTH: {
      LOGIN: `${API_GATEWAY}/api/auth/signin`,
      REGISTER: `${API_GATEWAY}/api/auth/signup`
    }
  }
};
