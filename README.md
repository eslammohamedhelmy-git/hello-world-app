This repository contains a simple Node.js web application that is:

- run locally with npm
- linted using ESLint
- containerized with Docker
- pushed to GitHub Container Registry (GHCR)
- automated using GitHub Actions
- deployed locally using Terraform with the Docker provider
- monitored with New Relic

The goal of this repository is to demonstrate a simple end-to-end DevOps workflow for a containerized application.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Run the Application Locally Using npm](#run-the-application-locally-using-npm)
- [GitHub Actions CI/CD Workflow](#github-actions-cicd-workflow)
- [Deploy the Container Locally Using Terraform](#deploy-the-container-locally-using-terraform)
- [Access the Website After Deployment](#access-the-website-after-deployment)
- [Monitoring and Logging](#monitoring-and-logging)
- [Troubleshooting](#troubleshooting)
- [Summary](#summary)

---

## Project Overview

This project demonstrates the following DevOps tasks:

1. Run the application locally using `npm`
2. Lint the code using ESLint
3. Build the Docker image locally
4. Push the image to GHCR
5. Automate lint/build/push using GitHub Actions
6. Deploy the image locally using Terraform and the Docker provider
7. Optionally collect monitoring and logging data with New Relic

---

## Repository Structure

Repository structure for this project:

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

## Prerequisites

Install the following tools locally before running this project:

Node.js
npm
Docker
Terraform
Git

Optional but useful:

A GitHub account
A GitHub Personal Access Token (classic) if you want to manually log in to GHCR from your machine
A New Relic account and license key if you want to enable the optional monitoring integration

## Run the Application Locally Using npm

Install dependencies:
npm install

Start the application:
npm start

Open the application in your browser:
http://localhost:3000

## Build and Run the Docker Image Locally

Build the image locally:
docker build -t hello-world-app:local .

Run the container locally:
docker run --rm -p 3000:3000 hello-world-app:local

Open the application in your browser:
http://localhost:3000

## GitHub Actions CI/CD Workflow

A typical workflow for this repository performs the following automation:

# Build and Push Job

Checkout repository
Setup Node.js
Install dependencies
Run lint
Login to GHCR
Build Docker image
Push Docker image to GHCR

# Deploy Job

Checkout repository
Login to GHCR
Setup Terraform
Run terraform init
Run terraform apply

## Deploy the Container Locally Using Terraform

Go to the Terraform directory:
cd terraform

Initialize Terraform:
terraform init -upgrade

Apply the configuration:
terraform apply -auto-approve -input=false 

# Access the Website After Deployment

You can access the website in your browser using:
http://localhost:3000

## Note 

If Terraform is run inside GitHub Actions
The container runs on the GitHub-hosted runner, not on your own machine.
That means:

the deployment still runs successfully inside the workflow
but you cannot directly open the runner’s localhost from your browser

If you want to access the website yourself, run the Terraform deployment locally on your machine.

## Monitoring and Logging

This project can optionally run the New Relic Infrastructure agent using Terraform alongside the application container.
New Relic’s free tier includes:

100 GB of free data ingest
1 free full platform user
observability features such as APM, tracing, and logs

# How to access New Relic

Create a New Relic account
Verify your email and sign in
Open the New Relic UI
After the Infrastructure agent starts, look for Docker/container metrics and logs in the New Relic UI

## Troubleshooting


1- Terraform cannot connect to Docker daemon

If Terraform cannot connect to Docker:
docker info

Make sure Docker Desktop is running and the correct Docker socket is being used.

2- Terraform init fails because the provider lock file is outdated

Run:
terraform init -upgrade

Then commit the updated .terraform.lock.hcl.

## Summary

This repository demonstrates a complete DevOps workflow for a simple Node.js application:

run locally using npm
lint with ESLint
build and run with Docker
push to GHCR
automate CI/CD with GitHub Actions
deploy locally using Terraform with the Docker provider
optionally enable New Relic monitoring and logs
