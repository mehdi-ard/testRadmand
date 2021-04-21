export const register = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then((register) => {
      console.log('register', register);
    });
  }
};

var flag = /iPhone|iPad|iPod/i.test(navigator.userAgent);
