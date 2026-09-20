# ProofLoop 🚀

**ProofLoop** is a decentralized, proof-of-work ecosystem and problem-solving marketplace. It connects problem submitters, builders, and community validators through transparent build logging, proof-of-work verification, and public recognition.

🌐 **Live AWS Amplify App:** [https://main.d3ml6oteprk0g8.amplifyapp.com](https://main.d3ml6oteprk0g8.amplifyapp.com)  
🌐 **Live Vercel Mirror:** [https://proofloop-sigma.vercel.app](https://proofloop-sigma.vercel.app)

---

## 💡 Overview

In traditional platforms, claims of skill or project completion are hard to verify. **ProofLoop** solves this by establishing a verifiable feedback loop:
1. **Problem Discovery**: Creators and organizations post real-world problems and set bounties or pledges.
2. **Claim & Build**: Builders claim tasks and record continuous **Build Logs** as they build solutions.
3. **Submit Proof**: Builders submit live demo links, repository links, and media proof (screenshots, videos).
4. **Validation & Proof Wall**: Reviewers validate the submitted proof. Once verified, achievements are published to the **Proof Wall** and bounties are awarded.

---

## ✨ Key Features

- 🎯 **Problem Marketplace**: Browse, filter, and search open problems across multiple categories and difficulty levels.
- 🛠️ **Build Logs & Milestones**: Builders log progress, milestones, and development updates transparently.
- 📸 **Proof-of-Work Submissions**: S3-backed presigned uploads for media screenshots, live site URLs, and demo videos.
- ✅ **Community & Admin Validation**: Peer and reviewer validation workflows to ensure submitted solutions satisfy problem requirements.
- 🏆 **Public Proof Wall**: A curated showcase of verified, completed projects and community accomplishments.
- 👥 **Multi-Role User Dashboard**: Roles tailored for Builders, Problem Creators, Reviewers, and Admins.
- 🎓 **Student Verification**: Verification workflows for students to claim student-tier bounties and perks.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS v4
- **Icons & Graphics**: Lucide React, Three.js
- **Routing**: React Router v7

### **Backend & Cloud Infrastructure (AWS Serverless)**
- **IaC Framework**: AWS Serverless Application Model (AWS SAM)
- **Functions**: AWS Lambda (Node.js 20, bundled with `esbuild`)
- **Database**: AWS DynamoDB (Single-Table Design pattern)
- **Storage**: AWS S3 (Presigned URLs for media upload)
- **Authentication**: AWS Cognito User Pool (with custom role attributes)
- **API Gateway**: REST API routing for Lambda handlers
- **Dev Server**: Express.js local server fallback for development

---

## 📁 Repository Structure

```
proofloop/
├── backend/
│   ├── lambdas/            # AWS Lambda entry points
│   │   ├── claim/          # Problem claiming logic
│   │   ├── logs/           # Build log submission
│   │   ├── problems/       # Problem CRUD (list, create, get)
│   │   ├── proof/          # Proof submission & validation
│   │   ├── storage/        # S3 presigned URL generation
│   │   └── wall/           # Public proof wall data
│   └── server.ts           # Local Express development server
├── src/
│   ├── components/         # Reusable React components (Navbar, Footer, Cards)
│   ├── context/            # React Context (AuthContext, ThemeContext)
│   ├── pages/              # App pages (Home, Problems, Dashboards, Proof Wall)
│   ├── services/           # API client services & AWS integration
│   ├── types/              # TypeScript type definitions
│   └── App.tsx             # Main routing & application shell
├── aws-template.yaml       # AWS SAM CloudFormation Infrastructure Template
├── package.json            # Scripts & dependencies
└── vite.config.ts          # Vite bundling configuration
```

---

## 🚦 Getting Started

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/) (v10 or higher)
- *(Optional)* [AWS SAM CLI](https://aws.amazon.com/serverless/sam/) (for cloud deployment)

---

### **1. Installation**

Clone the repository and install dependencies:

```bash
git clone https://github.com/manjunathcm9980-spec/proofloop.git
cd proofloop
npm install
```

---

### **2. Development**

Run the local Vite frontend server:

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

Optionally run the local API dev server:

```bash
npm run server
```

---

### **3. Build**

Build both Lambda bundles and the React production app:

```bash
npm run build
```

This executes:
1. `npm run build:lambdas` - Bundles AWS Lambda code with `esbuild` into `dist/lambdas`.
2. `tsc -b` - Runs TypeScript type checking.
3. `vite build` - Compiles the frontend into `dist/`.

---

## ☁️ AWS Cloud Deployment

To deploy the AWS serverless infrastructure:

```bash
# Build SAM application
sam build -t aws-template.yaml

# Deploy to AWS Account
sam deploy --guided
```

The SAM template automatically provisions:
- **DynamoDB Table**: `ProofLoopData` (Single-Table Design with GSI1)
- **Cognito User Pool**: `ProofLoopUserPool` & Client `ProofLoopWebClient`
- **S3 Bucket**: `proofloop-media-<AccountId>`
- **API Gateway & Lambdas**: Node.js 20 Lambda functions mapped to REST endpoints

---

## 📜 License

This project is licensed under the MIT License.
