import { User } from './types';

/**
 * Fetches a list of posts with dummy data.
 * @returns {Promise<Array<{ id: string, title: string }>>} A promise that resolves to an array of post objects.
 * Each post object has an `id` and a `title`.
 */
export function fetchPosts() {
  // Create an array of 5 posts with unique ids and titles
  const posts = Array.from({ length: 5 }, (_, index) => ({
    id: `post-${index + 1}`,
    title: `Random Post Title ${index + 1}`,
  }));
  
  // Return a promise that resolves with the posts after a 500ms delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 500); 
  });
}

/**
 * Fetches user data by userId.
 * @param {string} userId - The ID of the user to fetch.
 * @returns {Promise<User>} A promise that resolves to a user object with the given userId.
 * The returned user object includes `userId`, `name`, and `email` fields.
 */
const dummyUserData: User = {
  userId: '123',
  name: 'John Doe',
  email: 'john.doe@example.com'
};

export const fetchUser = async (userId: string): Promise<User> => {
  // Simulate a delay to fetch user data
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return a user object with the provided userId and dummy data
  return {
    ...dummyUserData,
    userId
  };
};
