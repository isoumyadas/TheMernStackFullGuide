function SetUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // so here, call mean you getting reference form the SetUsername but due to execution context it clears everthing for that you need to use this as first argument. and then username. What it does is after the Setusername EC is done it hanndover the value to createUser or it uses createuser this as a reference and give the value to createUser to execute and call helps to get the reference or call the SeetUsername.

  this.email = email;
  this.password = password;
}

const chai = new createUser("ookok", "ok@fb.com", "123");
console.log(chai);
