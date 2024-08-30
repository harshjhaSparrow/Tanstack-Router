export function fetchPosts() {
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