<script lang="ts">
  import Navbar from "./layout/Navbar.svelte";
  import Login from "./components/Login.svelte";
  import Signup from "./components/Signup.svelte";
  import Landing from "./components/Landing.svelte";
  import Home from "./components/Home.svelte";
  import { Router, Route, navigate } from "svelte-routing";
  import { firebaseConfig } from "./firebaseConfig";
  import { initializeApp } from "firebase/app";
  import { onMount } from "svelte";
  onMount(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
  });
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>

<main>
  <Router>
    <Navbar />
    <Route path="/"><Landing /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/signup"><Signup /></Route>
    <Route path="/home"><Home /></Route>
  </Router>
</main>

<style>
</style>
