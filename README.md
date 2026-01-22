# 🚀 API Testing Lab (Node.js + Express + Postman)

A small demo project that shows how to properly test APIs using Postman scripts, environments, and automated checks.
Built to help developers move beyond manual testing and start building reliable, repeatable API tests.

## 📦 What’s Included

- A demo Node.js + Express API
- A ready-to-use Postman Collection
- A Postman Environment

## 🧰 Prerequisites

Make sure you have:

- ✅ Node.js (v20+ recommended)
- ✅ npm
- ✅ Postman

## ⚙️ Getting Started
1️⃣ Clone the repo

```
git clone https://github.com/ThatDeanGuy/api-testing-lab.git
cd <your-repo-folder>
````
2️⃣ Install dependencies
```
npm install
````
3️⃣ Run the API
```
npm start
````

or (if using nodemon):
```
npm run dev
````

Your API should now be running at:
```
http://localhost:3000
````

## 📬 Importing Postman Collection & Environment

To follow along with the examples:

1. Open Postman

2. Click Import (top left)

3. Import both files from this repo:
```
📄 postman/Collection/API Testing Lab.postman_collection.json

🌍 postman/Environment/local.postman_environment.json
```
4. Select the environment from the dropdown (top-right corner)

## 🧪 Where are the scripts?

Each request contains example scripts already set up for you.

You’ll find them here:

- Request → Scripts tab → Post-request section

This is where things like:

- Saving tokens to environment variables
- Running tests
- Validating responses happen automatically after each request.

## ▶️ Run Everything at Once (Collection Runner)

You don’t have to run requests one by one.

You can run the entire test suite like this:

1. Open the collection

2. Click Run collection

3. Click Run

Postman will:

- Execute every request
- Share environment variables
- Run all tests
- Show you a pass/fail summary

## ⏰ Bonus: Schedule Automated Runs (Monitors)

You can also use Postman Monitors to:
- Run your collection automatically (e.g. every hour/day)
- Get notified when tests fail
- Continuously validate external APIs

This is extremely useful when working with:

- External integrations
- Client systems
- Production-critical APIs

## 🎯 What This Demo Teaches

- This project demonstrates how to:
- Store values from responses (like tokens)
- Reuse environment variables across requests
- Validate status codes
- Validate response times
- Check fields exist
- Assert data types and values
- Validate arrays and list endpoints
- Run full test suites automatically

## 💡 Why This Matters

Postman isn’t just a tool for “sending requests manually”.

Used properly, it becomes:

- A lightweight testing framework
- Living API documentation
- A safety net for integrations
- A confidence booster when working with external systems
