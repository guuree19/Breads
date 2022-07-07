const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
  console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
            and it

            {
                bread.hasGluten

                ? <span>does</span>

                : <span>does not</span>

            }

            have gluten
        </p>
        <img src={bread.image} alt={bread.name} />
        <Li><a href="/ breads"> Go home</a></Li>

        <body>
  <div className="wrapper">
    <header>
      <h1><a href="/breads">BreadCRUD</a></h1>
    </header>
    <div className="container">
      {html.children}
    </div>
  </div>
</body>

      </Default>
    )
}

module.exports = Show
