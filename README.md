# Cypress Demo

#### Basic demo of test automation using Cypress and TypeScript.  

## Table of Contents

- [Setup](#setup)
- [How to Run the Tests](#how-to-run-the-tests)
- [Project Structure](#project-structure)
- [Best Practices](best-practices.md)



## Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Install Dependencies
```bash
npm install
```

This will install the required dependencies based on the package.json file.

## How to Run the Tests
You can run the tests using the following commands:

#### Run tests using production URL [https://www.saucedemo.com]:

```
npm run test-pro
```

#### Run tests using a specific environment:

```
npx cypress open --env version="your-env-value"
```
> Replace your-env-value with the desired environment value.

## Project Structure
`TBD`

