<button onclick="login()">Login</button>

<script>
function login() {
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(() => alert("Logged in"))
    .catch(err => alert(err.message));
}
</script>
