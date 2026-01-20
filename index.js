const express = require("express")
const app = express()

app.use(express.json())

const guid = "9d162aa2-9308-4927-97d9-3f47aef8ccc6";
const users = [
    {
        id: 1,
        name: "Alex Morgan",
        role: "tester"
    },
    {
        id: 2,
        name: "Liam Parker",
        role: "admin"
    },
    {
        id: 3,
        name: "Sophia Turner",
        role: "developer"
    },
    {
        id: 4,
        name: "Ethan Smith",
        role: "tester"
    }
]

app.get("/liveness", (req, res) => {
    res.json({ success: true })
});

app.post("/login", (req, res) => {
    const { username, password } = req.body

    if (username === "admin" && password === "admin") {
        return res.json({
            token: guid
        })
    }

    res.status(401).json({ error: "Invalid credentials" })
})

app.get("/users", (req, res) => {
    const { token } = req.headers
    if (token !== guid) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    res.json(users)
})

app.get("/user/:id", (req, res) => {
    const userId = parseInt(req.params.id)

    const { token } = req.headers
    if (token !== guid) {
        return res.status(401).json({ error: "Unauthorized" })
    }

    const user = users.find(u => u.id === userId)
    if (!user) {
        return res.status(404).json({ error: "User not found" })
    }

    res.json(user)
});

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
