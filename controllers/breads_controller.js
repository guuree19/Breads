// INDEX
breads.get('/', (req, res) => {
    res.render('index',
      {
        breads: 'data from our models',
        username: 'John doE',
        asdf: 'jkl;'
      }
      
    )
   res.send(Bread)
})
