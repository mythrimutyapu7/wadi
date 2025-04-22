// src/auth.js
export const auth = {
    isAuthenticated: false,
    login(cb) {
      auth.isAuthenticated = true;
      setTimeout(cb, 100); // simulate async
    },
    logout(cb) {
      auth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  