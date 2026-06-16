const http = require("http");

const PORT = process.env.PORT || 8080;

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Naveed ur Rehman - DevOps Engineer</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 40px auto;
            padding: 20px;
            background: #f4f4f4;
        }
        .card {
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2c3e50;
        }
        h2 {
            color: #34495e;
        }
        ul {
            line-height: 1.8;
        }
    </style>
</head>
<body>
    <div class="card">
        <h1>Naveed ur Rehman</h1>
        <h2>DevOps Engineer</h2>

        <p>
            Passionate DevOps Engineer with hands-on experience in
            Linux Administration, Docker, Kubernetes, AWS, Terraform,
            Ansible, CI/CD Automation, and Cloud Infrastructure.
        </p>

        <h2>Technical Skills</h2>
        <ul>
            <li>Linux Administration</li>
            <li>Docker & Containerization</li>
            <li>Kubernetes</li>
            <li>AWS Cloud</li>
            <li>Terraform (Infrastructure as Code)</li>
            <li>Ansible Automation</li>
            <li>Git & GitHub</li>
            <li>Jenkins CI/CD</li>
            <li>Bash Scripting</li>
            <li>Python Automation</li>
        </ul>

        <h2>Projects</h2>
        <ul>
            <li>Dockerized Node.js Applications</li>
            <li>AWS Infrastructure Automation using Terraform</li>
            <li>Ansible Configuration Management Labs</li>
            <li>CI/CD Pipeline Implementation</li>
            <li>Container Security and DevSecOps Labs</li>
        </ul>

        <h2>Contact</h2>
        <p>Email: naveedurrehman959@gmail.com</p>
        <p>GitHub: github.com/naveedurrehman959</p>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
});

server.listen(PORT, () => {
    console.log(\`Portfolio running on port \${PORT}\`);
});
