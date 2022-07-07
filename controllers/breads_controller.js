// INDEX
breads.get(' / ', (req, res) => {
    res.render('index',
      {
        breads: 'data from our models',
        username: 'John doE',
        asdf: 'jkl;'
      }
      
    )
   res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.send('404')
  }
})


