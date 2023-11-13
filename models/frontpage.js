// Handle the form submission and insert data into the User table
app.post('/insertUser', async (req, res) => {
    try {
      const { firstName, lastName, email } = req.body; // Extract data from the form fields
      const newUser = await User.create({ firstName, lastName, email });
      res.json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to insert user' });
    }
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });