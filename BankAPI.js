// middleware
app.use(express.json())

let users = []
let accounts = []

app.get('/user', (req, res) => {
  console.log("got all users")
  res.status(200).send(JSON.stringify({Users: users}))
})

app.post('/user', (req, res) => {
  users.push(req.body);
  res.status(201).send(JSON.stringify({id: req.body.id}))
})

app.get('/account', (req, res) => {
  console.log("got all accounts")
  res.status(200).send(JSON.stringify({Accounts: accounts}))
})

app.post('/account', (req, res) => {
  accounts.push(req.body);
  res.status(201).send(JSON.stringify({id: req.body.id}))
})

app.get('/user/id', (req, res) => { 
  let go = 0
  console.log('I will get a single user by id and return empty if no user is found')
  for(go = 0; go < users.length; go++) {
    if (req.body.id == users[go].id) {
      return res.status(200).json({message:"user found:", user: users[go]})
    }
  }
  res.status(400).json("user not found id incorrect")
})

app.delete('/user/id', (req, res) => {
  let go = 0
  console.log('I will delete a single user by id and return empty if no user is found')
  for(go = 0; go < users.length; go++) {
    if (req.body.id == users[go].id) {
      users.splice(go, 1)
      return res.status(200).json("user deleted")
    }
  }
  res.status(400).json("User not found id incorrect")
})

app.get('/account/id', (req, res) => {
  let go = 0
  console.log('I will get a single account by id and return empty if no user is found')
  for(go = 0; go < accounts.length; go++) {
    if (req.body.id == accounts[go].id) {
      return res.status(200).json({message:"account found:", account: accounts[go]})
    }
  }
  res.status(400).json("account not found id incorrect")

})

app.delete('/account/id', (req, res) => {
  let go = 0
  console.log('I will delete a single account by id and return empty if no user is found')
  for(go = 0; go < accounts.length; go++) {
    if (req.body.id == accounts[go].id) {
      accounts.splice(go, 1)
      return res.status(200).json("account deleted")
    }
  }
  res.status(400).json("account not found id incorrect")
})
