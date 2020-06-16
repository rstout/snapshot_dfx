import snapshot_dfx from 'ic:canisters/snapshot_dfx';

snapshot_dfx.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
