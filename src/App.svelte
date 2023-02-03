<script lang="ts">
  import Navbar from "./layout/Navbar.svelte";
  import Login from "./components/Login.svelte";
  import Signup from "./components/Signup.svelte";
  import Landing from "./components/Landing.svelte";
  import { Router, Route } from "svelte-routing";
</script>

<main>
  <Router>
    <Navbar />
    <Route path="/"><Landing /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/signup"><Signup /></Route>
  </Router>
</main>

<style>
</style>
