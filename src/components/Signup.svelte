<script lang="ts">
  import { Link, navigate } from "svelte-routing";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    reload,
  } from "firebase/auth";
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";

  onMount(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
  });
  let email: string;
  let password: string;
  let password2: string;

  const auth = getAuth();
  // regEX for email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitHandle = () => {
    if (password != password2) {
      alert("Passwords are not matching!!");
      // window.location.reload();
    } else if (!validateEmail(email)) alert("invalid email");
    else if (password == null) alert("password cannot be empty");
    else if (password.length <= 5) alert("password should be min 6 characters");
    else {
      console.log("email :>> ", email);
      console.log("password :>> ", password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          if (user) {
            alert("Account has been successfully created, You can Login now!");
            navigate("/login");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
</script>

<main>
  <section class="bg-main">
    <div class="container py-5 h-100" in:fly={{ x: -200, duration: 2000 }}>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Sign Up</h2>
                <p class="text-white-50 mb-5">
                  Please enter your email and password and register!
                </p>

                <div class="form-outline form-white mb-4 my-5">
                  <input
                    type="email"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                    placeholder="Enter email"
                    bind:value={email}
                  />
                </div>
                <div class="form-outline form-white mb-4 my-5">
                  <input
                    type="password"
                    id="typePasswordX"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                    bind:value={password}
                  />
                </div>
                <div class="form-outline form-white mb-4 my-3">
                  <input
                    type="password"
                    id="typePasswordX2"
                    class="form-control form-control-lg"
                    placeholder="Enter password again"
                    bind:value={password2}
                  />
                </div>
                <button
                  class="btn btn-outline-light btn-lg px-5"
                  type="submit"
                  on:click={submitHandle}>Sign Up</button
                >
              </div>
              <div>
                <p class="mb-0">
                  Already have an account?
                  <Link to="/login">
                    <span class="text-white-50 fw-bold">Log In</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
</style>
