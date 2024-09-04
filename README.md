# PickUp-bn

Welcome to the PickUp-bn project! This repository contains the backend code for the PickUp project, aimed at digitalizing Rwanda's transportation system.

## Table of Contents

- [PickUp-mobile](#pickup-mobile)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Scripts](#scripts)
  - [Contributing](#contributing)
    - [Fork the Repository](#fork-the-repository)
    - [Create a Branch](#create-a-branch)
    - [Make Changes](#make-changes)
    - [Commit and Push](#commit-and-push)
    - [Create a Pull Request](#create-a-pull-request)
    - [Pull Request Template](#pull-request-template)
  - [Developer](#developer)

## Introduction

The PickUp-mobile project is the cross-platform mobile application part of the PickUp platform, which aims to provide real-time information, efficient management, and better service for Rwanda's public transportation system. This project is built using React Native Expo and includes tools for linting, formatting, continuous integration, and styling with Tailwind CSS.

## Project Structure

The project is structured as follows:

```bash
PickUp-mobile/
├── node_modules/ # Node.js modules
├── app/ # All pages with expo-router
├── assets/ # Asset files
│ ├── fonts/ # fonts
│ ├── images/ # images and pictures
├── components # Reusable functions and components
├── app.json # App Configuration
├── .gitignore # Git ignore file
├── .tailwind.config.js # Tailwind configuration
├── package.json # Node.js dependencies and scripts
├── package-lock.json # Lock file for Node.js dependencies
├── README.md # Project documentation
├── tsconfig.json # TypeScript configuration
└── yarn.lock # Lock file for Yarn dependencies
```

## Getting Started

Follow these steps to get a local copy of the project up and running.

### Prerequisites

- Node.js (v14 or above)
- npm or Yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/PickUp-Rw/PickUp-mobile.git
   cd pickup-fn
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run start
   ```

## Scripts

Here are the main scripts you can use in the project:

- **Start the development server**:

  ```bash
  npm run start
  ```

- **Run the android build**:

  ```bash
  npm run android
  ```

- **Run the iOS build**:

  ```bash
  npm run ios
  ```

- **Run the web version**:

  ```bash
  npm run web
  ```

- **Run tests**:

  ```bash
  npm test
  ```

- **Lint the code**:

  ```bash
  npm run lint
  ```

## Contributing

We welcome contributions to improve the PickUp-mobile project! To get started, please follow these guidelines:

### Fork the Repository

1. Fork the repository on GitHub.
2. Clone your forked repository:
   ```bash
   git clone https://github.com/PickUp-Rw/PickUp-mobile.git
   cd pickup-mobile
   ```

### Create a Branch

1. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Make Changes

1. Make your changes to the codebase.
2. Ensure your changes pass linting and tests:
   ```bash
   npm run lint
   npm test
   npm build
   ```

### Commit and Push

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add your meaningful commit message"
   ```
2. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

### Create a Pull Request

1. Navigate to the original repository on GitHub.
2. Create a new pull request from your branch.

### Pull Request Template

When creating a pull request, please use the following template:

```markdown
## Description

Please include a summary of the changes and the related issue. Please also include relevant motivation and context.

## Type of change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update

## Checklist

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published in downstream modules

## Screenshots (if applicable)

Please add screenshots to help explain your changes.
```

## Developer

- Name: Perfect Gift IZIHIRWE
