This repository contains a simple Node.js web application that is:

- containerized with Docker,
- linted with ESLint,
- built and published to GitHub Container Registry (GHCR) using GitHub Actions,
- Deployed locally with Terraform using the Docker provider.

The goal of this project is to demonstrate a simple but complete DevOps workflow for a containerized application.

---

# Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Run the Application Locally Using npm](#run-the-application-locally-using-npm)
- [Lint the Application](#lint-the-application)
- [Build and Run the Docker Image Locally](#build-and-run-the-docker-image-locally)
- [Push the Image to GitHub Container Registry (GHCR)](#push-the-image-to-github-container-registry-ghcr)
- [GitHub Actions CI/CD Workflow](#github-actions-cicd-workflow)
- [Deploy the Container Locally Using Terraform](#deploy-the-container-locally-using-terraform)
- [Terraform Outputs](#terraform-outputs)
- [Access the Website After Deployment](#access-the-website-after-deployment)

---

# Project Overview

This project demonstrates the following DevOps tasks:

1. Run the application locally using `npm`
2. Add linting using ESLint
3. Containerize the application with Docker
4. Push the container image to GitHub Container Registry (GHCR)
5. Automate lint/build/push using GitHub Actions
6. Deploy the container with Terraform using the Docker provider

---

# Architecture

The workflow is:

1. Developer pushes code to GitHub
2. GitHub Actions runs:
   - checkout
   - Node.js setup
   - dependency installation
   - lint
   - Docker build
   - Docker push to GHCR
3. Terraform deploys the image using the Docker provider
4. The application becomes accessible through the exposed local port

---

# Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
├── Dockerfile
├── eslint.config.cjs
├── index.js
├── package.json
├── package-lock.json
└── README.md
``
