const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>CloudOps Dashboard</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body { background:#eef3f8; font-family: Arial, sans-serif; }
    .sidebar { width:240px; min-height:100vh; background:#07111f; color:white; position:fixed; padding:25px; }
    .sidebar h3 { margin-bottom:30px; }
    .sidebar div { margin:18px 0; color:#cbd5e1; }
    .main { margin-left:260px; padding:35px; }
    .card { border:0; border-radius:16px; box-shadow:0 8px 20px rgba(0,0,0,.08); }
    .metric { font-size:32px; font-weight:700; }
    .good { color:#0a8f3c; }
    .warn { color:#e59e21; }
    .bad { color:#d93025; }
    .badge-soft { background:#e8f2ff; color:#0b5ed7; padding:8px 12px; border-radius:20px; }
  </style>
</head>

<body>
  <div class="sidebar">
    <h3>☁️ CloudOps</h3>
    <div>📊 Dashboard</div>
    <div>🖥 Servers</div>
    <div>🌐 Applications</div>
    <div>🔒 Security</div>
    <div>☁️ Cloudflare</div>
    <div>💾 Backups</div>
    <div>⚙️ Settings</div>
  </div>

  <div class="main">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h1>CloudOps Dashboard</h1>
        <p class="text-muted">A Node.js demo dashboard for cloud operations, security, and customer success workflows.</p>
      </div>
      <span class="badge-soft">Demo Environment</span>
    </div>

    <div class="row g-4 mb-4">
      <div class="col-md-3">
        <div class="card p-4">
          <div class="text-muted">Servers</div>
          <div class="metric">12</div>
          <small class="good">11 healthy</small>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card p-4">
          <div class="text-muted">Applications</div>
          <div class="metric">48</div>
          <small class="good">46 online</small>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card p-4">
          <div class="text-muted">SSL Certificates</div>
          <div class="metric good">Healthy</div>
          <small>No expiring certs</small>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card p-4">
          <div class="text-muted">Security Alerts</div>
          <div class="metric warn">2</div>
          <small>Needs review</small>
        </div>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header bg-white">
            <strong>Infrastructure Health</strong>
          </div>
          <table class="table table-hover mb-0">
            <thead>
              <tr>
                <th>Application</th>
                <th>Stack</th>
                <th>Status</th>
                <th>CPU</th>
                <th>Memory</th>
                <th>Backup</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>WordPress Store</td>
                <td>WordPress</td>
                <td>🟢 Healthy</td>
                <td>22%</td>
                <td>48%</td>
                <td>✅ Complete</td>
              </tr>
              <tr>
                <td>Node API</td>
                <td>Node.js</td>
                <td>🟢 Healthy</td>
                <td>41%</td>
                <td>63%</td>
                <td>✅ Complete</td>
              </tr>
              <tr>
                <td>Laravel CRM</td>
                <td>PHP/Laravel</td>
                <td>🟡 Warning</td>
                <td>78%</td>
                <td>81%</td>
                <td>✅ Complete</td>
              </tr>
              <tr>
                <td>Agency Client Site</td>
                <td>WooCommerce</td>
                <td>🔴 Critical</td>
                <td>91%</td>
                <td>88%</td>
                <td>⚠️ Delayed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card p-4 mb-4">
          <h5>Cloudflare Status</h5>
          <p class="mb-1">CDN: <strong class="good">Active</strong></p>
          <p class="mb-1">WAF: <strong class="good">Enabled</strong></p>
          <p class="mb-1">Bot Protection: <strong class="warn">Review Suggested</strong></p>
        </div>

        <div class="card p-4">
          <h5>Security Recommendations</h5>
          <ul class="mb-0">
            <li>Review high CPU usage on WooCommerce site</li>
            <li>Validate backup delay for agency client</li>
            <li>Monitor bot traffic and WAF events</li>
            <li>Confirm SSL renewal status weekly</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card p-4 mt-4">
      <h5>Demo Story</h5>
      <p class="mb-0">
        This project was built to demonstrate hands-on understanding of cloud operations, infrastructure health,
        application monitoring, SSL, backups, CDN/WAF concepts, and customer-facing technical enablement.
      </p>
    </div>
  </div>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log("CloudOps Dashboard running at http://localhost:3000");
});