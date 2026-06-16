const http = require("http");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
res.writeHead(200, {
"Content-Type": "text/html"
});

res.end(`

<!DOCTYPE html>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Naveed ur Rehman | DevOps Engineer</title>

<style>

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:Arial, Helvetica, sans-serif;
  color:white;
  min-height:100vh;
  background:linear-gradient(
    -45deg,
    #0f172a,
    #1e293b,
    #2563eb,
    #0ea5e9
  );
  background-size:400% 400%;
  animation:bgMove 12s ease infinite;
}

@keyframes bgMove{
  0%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
  100%{background-position:0% 50%;}
}

.container{
  max-width:1200px;
  margin:auto;
  padding:60px 20px;
}

.hero{
  text-align:center;
  animation:fadeIn 2s ease;
}

@keyframes fadeIn{
  from{
    opacity:0;
    transform:translateY(40px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

.hero h1{
  font-size:4rem;
  margin-bottom:10px;
}

.typing{
  color:#38bdf8;
  font-size:2rem;
  font-weight:bold;
  overflow:hidden;
  white-space:nowrap;
  border-right:3px solid white;
  width:0;
  margin:auto;
  animation:
    typing 4s steps(30,end) forwards,
    blink .8s infinite;
}

@keyframes typing{
  from{width:0}
  to{width:340px}
}

@keyframes blink{
  50%{
    border-color:transparent;
  }
}

.hero p{
  margin-top:25px;
  font-size:1.2rem;
  line-height:1.8;
}

.skills{
  margin-top:60px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.card{
  background:rgba(255,255,255,0.08);
  backdrop-filter:blur(10px);
  padding:25px;
  border-radius:15px;
  transition:.4s;
}

.card:hover{
  transform:translateY(-10px);
  box-shadow:0 0 25px rgba(56,189,248,.8);
}

.card h2{
  margin-bottom:10px;
}

.projects{
  margin-top:70px;
}

.projects-title{
  text-align:center;
  margin-bottom:30px;
  font-size:2rem;
}

.project-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:20px;
}

.project{
  background:rgba(255,255,255,0.08);
  padding:25px;
  border-radius:15px;
  transition:.4s;
}

.project:hover{
  transform:scale(1.05);
}

.contact{
  text-align:center;
  margin-top:70px;
}

.contact a{
  color:#38bdf8;
  text-decoration:none;
}

.footer{
  margin-top:50px;
  text-align:center;
  opacity:.8;
}

</style>

</head>

<body>

<div class="container">

  <section class="hero">

```
<h1>Naveed ur Rehman</h1>

<div class="typing">
  DevOps Engineer 🚀
</div>

<p>
  Passionate about Linux, Docker, Kubernetes, AWS,
  Terraform, Ansible, GitHub Actions, CI/CD and
  Cloud Infrastructure Automation.
</p>
```

  </section>

  <section class="skills">

```
<div class="card">
  <h2>🐳 Docker</h2>
  <p>Containerization & Application Deployment</p>
</div>

<div class="card">
  <h2>☸ Kubernetes</h2>
  <p>Container Orchestration & Scaling</p>
</div>

<div class="card">
  <h2>☁ AWS</h2>
  <p>Cloud Architecture & Infrastructure</p>
</div>

<div class="card">
  <h2>🏗 Terraform</h2>
  <p>Infrastructure as Code Automation</p>
</div>

<div class="card">
  <h2>⚙ Ansible</h2>
  <p>Server Configuration & Automation</p>
</div>

<div class="card">
  <h2>🔄 CI/CD</h2>
  <p>GitHub Actions & Jenkins Pipelines</p>
</div>
```

  </section>

  <section class="projects">

```
<h2 class="projects-title">Featured Projects</h2>

<div class="project-grid">

  <div class="project">
    <h3>Dockerized Applications</h3>
    <br>
    <p>Built and deployed Node.js applications using Docker containers.</p>
  </div>

  <div class="project">
    <h3>AWS Infrastructure</h3>
    <br>
    <p>Designed cloud environments using EC2, VPC, Load Balancers and Auto Scaling.</p>
  </div>

  <div class="project">
    <h3>Terraform Automation</h3>
    <br>
    <p>Provisioned AWS infrastructure using Infrastructure as Code.</p>
  </div>

  <div class="project">
    <h3>Ansible Automation</h3>
    <br>
    <p>Automated Linux server configuration and deployments.</p>
  </div>

</div>
```

  </section>

  <section class="contact">

```
<h2>Contact</h2>

<br>

<p>Email: naveedurrehman959@gmail.com</p>

<br>

<p>
  GitHub:
  <a href="https://github.com/naveedurrehman959" target="_blank">
    github.com/naveedurrehman959
  </a>
</p>
```

  </section>

  <div class="footer">
    <p>Powered by Node.js + Docker 🚀</p>
  </div>

</div>

</body>
</html>
  `);
});

server.listen(PORT, () => {
console.log(`🚀 Portfolio running on port ${PORT}`);
});

