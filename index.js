const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const html = `
    <div style="
      max-width:350px;
      margin:60px auto;
      padding:20px;
      border-radius:10px;
      background:#f5f5f5;
      box-shadow:0 0 10px rgba(0,0,0,0.1);
      font-family:Arial;">
      
      <h2 style="text-align:center; color:#007bff;">Login</h2>

      <form>
        <label>Username</label><br>
        <input type="text" style="width:100%; padding:10px; margin:8px 0; border-radius:5px; border:1px solid #ccc;"><br>

        <label>Password</label><br>
        <input type="password" style="width:100%; padding:10px; margin:8px 0; border-radius:5px; border:1px solid #ccc;"><br>

        <button style="
          width:100%;
          padding:10px;
          background:#007bff;
          color:white;
          border:none;
          border-radius:5px;
          margin-top:10px;
          cursor:pointer;">
          Login
        </button>
      </form>
    </div>
  `;

  res.end(html);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
