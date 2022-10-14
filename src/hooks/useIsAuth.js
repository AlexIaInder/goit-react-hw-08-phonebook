export const useIsAuth = () => {
  const token = localStorage.getItem('token');

  return !!token;
};
