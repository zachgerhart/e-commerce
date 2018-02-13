module.exports = {
  getAllUsers: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.getAllUsers()
    .then(users => res.status(200).json(users))
    .catch( () => res.status(500).json())
  },

  getAllFeatured: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.getAllFeatured()
    .then(featured => res.status(200).json(featured))
    .catch( () => res.status(500).json())
  },

  getProducts: (req,res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.getProducts()
    .then(products => res.status(200).json(products))
    .catch( () => res.status(500).json()) 
  }

}
