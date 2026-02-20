# Shuttlers Playwright Automation Framework

Playwright + TypeScript test automation framework built with the Page Object Model (POM). Implemented with scalable architecture, reusable fixtures, CI/CD via GitHub Actions, and production-ready QA best practices.

## 🚀 Tech Stack
- Playwright
- TypeScript
- Page Object Model (POM)
- GitHub Actions CI

## 📂 Project Structure
- `pages/` – Page Objects
- `tests/` – Test specs
- `fixtures/` – Test dependency injection
- `utils/` – Test data & helpers

## 🛠️ Setup

### 1. Clone the repo
```bash
git clone https://github.com/ralfudx/playwright-web-automation.git
cd playwright-web-automation
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install
```

## ▶️ Running Tests
### Headless
```bash
npm test
```

### Headed (UI mode)
```bash
npm run test:headed
```

### Debug
```bash
npm run test:debug
```

### View Report
```bash
npm run report
```

## 🔐 Authentication Setup

Create a `.env` file and add the following:

SHUTTLERS_EMAIL=your_email

SHUTTLERS_PASSWORD=your_password

For the CI, we have already configured GitHub secrets on this repository.


## 🔁 CI/CD

- Tests run automatically on every push and PR

- HTML reports are uploaded as GitHub Action artifacts

## 🧠 Best Practices Applied

- Page Object Model

- Test data separation

- Fixtures for dependency injection

- CI-ready & scalable architecture

- Failure diagnostics (screenshots + traces)