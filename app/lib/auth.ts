export const authenticateUser = async (email: string, password: string) => {
    // Implement your actual authentication logic here
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };