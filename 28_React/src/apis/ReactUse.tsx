//* React with experimental features enabled
// import React from "react";

// interface PostI {
//   body: string;
//   id: number;
//   title: string;
//   userId: number;
// }

// // A fetch function that returns a Promise
// const fetchData = async (): Promise<PostI> => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = (await response.json()) as PostI;
//   // console.log("data:", data);
//   return data;
// };

// // Wrap the fetch function with a resource loader
// const resource: Promise<PostI> = fetchData();

// const Post = (): JSX.Element => {
//   // Use the `use` function to suspend rendering until the Promise resolves
//   const post: PostI = React.use(resource);
//   // console.log("post:", post);

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// };

// const ReactUse = (): JSX.Element => {
//   return (
//     <React.Fragment>
//       <React.Suspense fallback={<div>Loading...</div>}>
//         <Post />
//       </React.Suspense>
//     </React.Fragment>
//   );
// };

// export default ReactUse;
