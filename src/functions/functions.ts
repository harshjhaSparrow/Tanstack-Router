import { User } from '../types/types';
export function fetchPosts(postId: any) {
    const posts = Array.from({ length: 5 }, (_, index) => ({
      id: `post-${index + 1}`,
      title: `Random Post Title ${index + 1}`,
    }));
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts);
      }, 500); 
    });
  }

const dummyUserData: User = {
  userId: '123',
  name: 'John Doe',
  email: 'john.doe@example.com'
};

export const fetchUser = async (userId: string): Promise<any> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    ...dummyUserData,
    userId
  };
};

