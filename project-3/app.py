import http.server
import socketserver
import socket

PORT = 5000

class MyHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/plain")
        self.end_headers()

        message = f"Hello from Docker!\nHostname: {socket.gethostname()}\n"
        self.wfile.write(message.encode())

with socketserver.TCPServer(("", PORT), MyHandler) as server:
    print(f"Server running on port {PORT}")
    server.serve_forever()
