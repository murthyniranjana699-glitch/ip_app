const express = require("express");
const os = require("os");

const app = express();
const port = 8000;

function getIp() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "127.0.0.1";
}

app.get("/", (_req, res) => {
  const ip = getIp();
  res.json({ ip, message: `The IP address is: ${ip}` });
});

app.get("/greet", (_req, res) => {
  res.json({ message: "Hi how are you" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on port ${port}`);
});
