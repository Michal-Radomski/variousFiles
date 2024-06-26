import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({}),
  // defaultOptions: { query: { fetchPolicy: "network-only" }, watchQuery: { fetchPolicy: "network-only" } },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// client
//   .query({
//     query: gql`
//       query sharksFromDB {
//         sharks {
//           ID
//           name
//           color
//           weight
//         }
//       }
//     `,
//   })
//   .then((result) => console.log("result:", result))
//   .catch((err) => console.log(err));
