# Practical Accessibility in React: The Sand Dollar Approach  

### 🏖 Workshop Setup Guide

Welcome! Please complete these steps **before the workshop begins** so you’re ready to dive in.  

---

## 1. Node.js 20 with nvm

We require **Node.js v20 LTS**.

### macOS / Linux

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20
nvm use 20
```

### Windows

Install [nvm-windows](https://github.com/coreybutler/nvm-windows) and run:

```powershell
nvm install 20
nvm use 20
```

Verify installation:

```bash
node -v   # should show v20.x.x
npm -v
```

---

## 2. AssistivLabs Account

- Sign up: [assistivlabs.com/sign-up](https://assistivlabs.com/sign-up)  
- Use the **Free Trial**
- Select: NVDA, Version 2025.3, Chrome version 140, AssistivTunnel Disabled

---

## 3. Install AssistivTunnel

### macOS

```bash
curl -L https://assistivlabs.com/cli/mac.zip -o mac.zip && unzip mac.zip && rm mac.zip && ./AssistivTunnel --version && echo 'Install complete!'.
```

Verify AssistiveLabs version
```bash
./AssistivTunnel --version
```

### Linux

```bash
curl -L https://assistivlabs.com/cli/linux.zip -o linux.zip && unzip linux.zip && rm linux.zip && ./AssistivTunnel --version && echo 'Install complete!'.
```

Verify AssistiveLabs version
```bash
./AssistivTunnel --version
```

### Windows

```powershell
winget install AssistivLabs.Tunnel
```

Or download the binary: [AssistivTunnel Releases](https://github.com/assistivlabs/tunnel/releases)

Verify:

```bash
assistivtunnel --version
```

### Connect to the Tunnel
Go to your [AssistivLabs dashboard](https://assistivlabs.com/dashboard) to get your personal access ke (Reveal the key). Then, run the command in your terminal to start the tunnel connection: 
Code

```bash
./AssistivTunnel --accessKey YOUR_ACCESS_KEY
```

Replace YOUR_ACCESS_KEY with your actual access key from the dashboard. The command will then show you output similar to the example provided in the documentation, indicating that the connection is being established. 

**You will see something like this if successful:**
```bash
Connecting...
✅ Connected successfully
You can now start testing from https://assistivlabs.com/dashboard.
Select the tunnel named "Kathleens-13in-MacBook-Pro.local" from the dropdown
```

---

## 4. Log In + Run

```bash
assistivtunnel login
npm run dev
assistivtunnel --port 5173
```

👉 Copy the tunnel URL (e.g., `https://abc123.assistivlabs.dev`) into AssistivLabs to test your app.

---

## 5. Join the Community

💬 Join our Discord to ask questions and share resources:  
👉 [https://discord.gg/G9ZNsfwK](https://discord.gg/G9ZNsfwK)

Scan QR code:  
![Discord QR Code](discord-qr.png)

---

✅ That’s it! Please have Node 20, AssistivLabs, and AssistivTunnel installed **before the workshop**.
