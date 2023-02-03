import "./app.scss";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

// const link = document.createElement("link");
// link.rel = "stylesheet";
// link.href =
// "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css";
// document.head.appendChild(link);

export default app;
