# Security Guidelines

## Dependency Management

This project uses pinned dependency versions to ensure consistent and secure builds across all workshop environments.

### Before Starting

1. **Use Node.js version 20**:

   **If you have nvm installed:**

   ```bash
   nvm install 20     # Install Node.js v20 if not already installed
   nvm use 20         # Switch to Node.js v20
   # OR simply: nvm use (uses .nvmrc file)
   ```

   **If you DON'T have nvm:**
   - Install Node.js v20 directly from [nodejs.org](https://nodejs.org/)
   - Choose "20.x.x LTS" version
   - Verify installation: `node --version` (should show v20.x.x)

   **Want to start using nvm? (Recommended for developers)**

   ```bash
   # Install nvm (macOS/Linux):
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   
   # Or with Homebrew (macOS):
   brew install nvm
   
   # Restart terminal, then:
   nvm install 20
   nvm use 20
   ```

   **Windows users:** Install [nvm-windows](https://github.com/coreybutler/nvm-windows)

2. **Optional - Check for high-severity vulnerabilities**:

   ```bash
   npm run security:check  # Only shows high-severity issues
   ```

3. **Install dependencies**:

   ```bash
   npm ci  # Uses package-lock.json for consistent installs
   ```

### During Development

- **Optional security checks**: `npm run security:check` (only for instructors)
- **Focus on accessibility**: This workshop prioritizes accessibility over security tooling
- **Pre-audited dependencies**: All packages have been security-reviewed

### Package Security

All dependencies in this project have been:

- ✅ Scanned for known vulnerabilities
- ✅ Pinned to specific secure versions
- ✅ Tested for compatibility with accessibility tools

### Dependencies Overview

- **Vite**: Fast build tool optimized for development
- **React**: Latest stable version for component development
- **Storybook**: Updated to resolve esbuild vulnerabilities
- **ESLint**: Updated to resolve ReDoS vulnerabilities
- **Playwright**: Latest for browser security features
- **All @storybook packages**: Synchronized versions to prevent conflicts

## Workshop Environment

This configuration ensures:

- Consistent dependency versions across all student machines
- No known security vulnerabilities in development tools
- Proper isolation of development vs production dependencies
