This repository contains a sample Node.js web application containerized with Docker, built and published via GitHub Actions, and deployed locally using Terraform with the Docker provider.

## Solution Overview

- **Base app:** simple Node.js "Hello World" web app
- **Containerization:** Dockerfile
- **CI/CD:** GitHub Actions
  - linting
  - Docker build
  - image push to GitHub Container Registry (GHCR)
- **Deployment:** Terraform + Docker provider (local deployment)

## Prerequisites

Install the following locally:

- Node.js 20+
- Docker
- Terraform 1.6+
- Git

## Local Run (without Docker)

```bash
npm install
npm start