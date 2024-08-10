import { getUserInfo } from '@/utils/storage';

export default async function authMiddleware({ to, from, next }) {
  console.log('auth middleware')
  // Call loading on store

  // Check userInfo
  const userInfo = getUserInfo();

  // If userInfo is undefined and the target route is not 'Login', redirect to 'Login'
  if (!userInfo && to.name !== 'Login') {
    return next({ name: 'Login' });
  }
  // If userInfo is present and the target route is 'Login', redirect to 'Home'
  if (userInfo && to.name === 'Login') {
    return next({ name: 'Home' });
  }

  return next();
}
