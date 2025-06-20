import axios from "axios";

// Інтерфейс для поста
interface Post {
  id: number;
  title: string;
  body: string;
}

// Функція, яка повертає Promise<Post[]>
async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "<https://jsonplaceholder.typicode.com/posts>"
  );
  return response.data;
}

// Виклик функції та робота з даними
fetchPosts().then((posts: Post[]) => {
  console.log(posts[0].title);
});
