const express = require("express");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>CloudOps Dashboard</title>

<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
rel="stylesheet">

<style>

body{
    background:#eef2f7;
}

.card{
    border:none;
    border-radius:15px;
}

.metric{
    font-size:32px;
    font-weight:bold;
}

.status-good{
    color:green;
}

.status-warning{
    color:#f0ad4e;
}

</style>

</head>

<body>

<div class="container mt-5">

<h1 class="mb-4">
☁️ CloudOps Dashboard
</h1>

<div class="row">

<div class="col-md-3">
<div class="card shadow p-3">
<h6>Servers</h6>
<div class="metric">12</div>
</div>
</div>

<div class="col-md-3">
<div class="card shadow p-3">
<h6>Applications</h6>
<div class="metric">48</div>
</div>
</div>

<div class="col-md-3">
<div class="card shadow p-3">
<h6>SSL Certificates</h6>
<div class="metric status-good">Healthy</div>
</div>
</div>

<div class="col-md-3">
<div class="card shadow p-3">
<h6>Security Alerts</h6>
<div class="metric status-warning">2</div>
</div>
</div>

</div>

<div class="card shadow mt-4">

<div class="card-header">
Recent Infrastructure Events
</div>

<table class="table table-hover mb-0">

<thead>

<tr>

<th>Application</th>

<th>Status</th>

<th>CPU</th>

<th>Memory</th>

</tr>

</thead>

<tbody>

<tr>

<td>WordPress Store</td>

<td>🟢 Healthy</td>

<td>22%</td>

<td>48%</td>

</tr>

<tr>

<td>Node API</td>

<td>🟢 Healthy</td>

<td>41%</td>

<td>63%</td>

</tr>

<tr>

<td>Laravel CRM</td>

<td>🟡 Warning</td>

<td>78%</td>

<td>81%</td>

</tr>

</tbody>

</table>

</div>

</div>

</body>

</html>
`);
});

app.listen(PORT, () => {
    console.log("CloudOps Dashboard running on http://localhost:3000");
});