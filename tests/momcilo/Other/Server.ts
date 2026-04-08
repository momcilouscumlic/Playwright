import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';

//run : npx ts-node Server.ts

const PORT = 3000;

// Mock data
let users = [
  { id: 1, name: 'Admin', role: 'admin' },
  { id: 2, name: 'User', role: 'user' },
];

// Helper to send JSON
function sendJson(res: ServerResponse, status: number, data: any) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

// Helper to read request body
function getRequestBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve) => {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
  });
}

const server = createServer(async (req, res) => {
  const parsedUrl = parse(req.url || '', true);
  const path = parsedUrl.pathname || '';
  const method = req.method || 'GET';

  // --- ROUTES ---

  // Health
  if (path === '/health' && method === 'GET') {
    return sendJson(res, 200, { status: 'ok' });
  }

  // GET /users
  if (path === '/users' && method === 'GET') {
    return sendJson(res, 200, users);
  }

  // GET /users/:id
  if (path.startsWith('/users/') && method === 'GET') {
    const id = Number(path.split('/')[2]);
    const user = users.find(u => u.id === id);

    if (!user) {
      return sendJson(res, 404, { message: 'User not found' });
    }

    return sendJson(res, 200, user);
  }

  // POST /users
  if (path === '/users' && method === 'POST') {
    const body = await getRequestBody(req);

    const newUser = {
      id: users.length + 1,
      name: body.name,
      role: body.role,
    };

    users.push(newUser);

    return sendJson(res, 201, newUser);
  }

  // DELETE /users/:id
  if (path.startsWith('/users/') && method === 'DELETE') {
    const id = Number(path.split('/')[2]);
    users = users.filter(u => u.id !== id);

    return sendJson(res, 200, { message: 'User deleted' });
  }

  // Fallback
  sendJson(res, 404, { message: 'Route not found' });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});