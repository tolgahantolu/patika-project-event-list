import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./components/App/index.jsx";
import "./index.css";
import client from "./apolloClient.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
