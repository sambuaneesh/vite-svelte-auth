<script lang="ts">
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  let userData: object;
  onMount(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
    userData = JSON.parse(localStorage.getItem("user")) || {};
  });
  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
</script>

<main>
  <div
    class="container my-5"
    in:fly={{ x: -150, y: -300, duration: 1000 }}
    out:fade
  >
    <h1 class="text-center">Welcome to Our Website</h1>
    <p class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <div class="row my-5">
      <div class="col-md-4">
        <div class="card">
          <img
            src="https://via.placeholder.com/300x200"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Feature 1</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img
            src="https://via.placeholder.com/300x200"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Feature 2</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <img
            src="https://via.placeholder.com/300x200"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Feature 3</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-primary" on:click={logoutHandler}>Log Out</button>
    </div>
  </div>
</main>
