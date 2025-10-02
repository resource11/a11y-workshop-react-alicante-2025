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

- Sign up: [assistivlabs.com/signup](https://assistivlabs.com/signup)  
- Use the **Free Trial**
- Select: NVDA, Version 2025.3, Chrome version 140, AssistivTunnel Disabled

---

## 3. Install AssistivTunnel

### macOS / Linux

```bash
brew tap assistivlabs/tap
brew install assistivlabs/tunnel
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
