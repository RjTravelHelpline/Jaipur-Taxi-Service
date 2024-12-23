import { exec } from 'child_process';

export default async function handler(req, res) {
  // GitHub Webhook Secret (if you're using one)
  const secret = process.env.GITHUB_WEBHOOK_SECRET;

  // Validate the incoming request
  const signature = req.headers['x-hub-signature'];

  // If the signature is provided, verify it (optional but recommended)
  if (secret && signature) {
    const crypto = require('crypto');
    const hmac = crypto.createHmac('sha1', secret);
    const digest = 'sha1=' + hmac.update(JSON.stringify(req.body)).digest('hex');

    if (signature !== digest) {
      return res.status(403).send('Forbidden');
    }
  }

  // Make sure it's a push event to the master/main branch
  if (req.method === 'POST' && req.body.ref === 'refs/heads/master') {
    try {
      // Execute the deploy script
      exec('/deploy.sh', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return res.status(500).send(`Deployment failed: ${error.message}`);
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return res.status(500).send(`Deployment failed: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        return res.status(200).send('Deployment triggered successfully!');
      });
    } catch (err) {
      return res.status(500).send(`Error executing deploy script: ${err.message}`);
    }
  } else {
    return res.status(400).send('Invalid event or branch');
  }
}
