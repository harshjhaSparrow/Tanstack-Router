export function fetchPosts(postId: any) {
    // Generate an array of random posts
    const posts = Array.from({ length: 5 }, (_, index) => ({
      id: `post-${index + 1}`,
      title: `Random Post Title ${index + 1}`,
    }));
  
    // Simulate a network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts);
      }, 500); // 500ms delay
    });
  }

  // dummyFetchPost.js

// Dummy data to simulate a fetch response
const dummyData = {
  userId: '123',
  name: 'John Doe',
  email: 'john.doe@example.com'
};

// Dummy fetch function
// fetchUser.ts

import { User } from '../types/types';

// Dummy data to simulate a fetch response
const dummyUserData: User = {
  userId: '123',
  name: 'John Doe',
  email: 'john.doe@example.com'
};

// Dummy fetch function
export const fetchUser = async (userId: string): Promise<any> => {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Return dummy data
  return {
    ...dummyUserData,
    userId
  };
};

