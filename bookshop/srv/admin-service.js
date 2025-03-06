const cds = require('@sap/cds')

module.exports = class AdminService extends cds.ApplicationService {
  async init() {
    const db = await cds.connect.to('db');
    const { Books } = db.entities

    this.on('createBook', async req => {

      let add = {}

      if (req.data.title) add.title = req.data.title
      if (req.data.author) add.author_ID = req.data.author
      if (req.data.genre) add.genre_ID = req.data.genre
      if (req.data.stock) add.stock = req.data.stock
      if (req.data.price) add.price = req.data.price
      if (req.data.currency) add.currency_code = req.data.currency
      if (req.data.descr) add.descr = req.data.descr

      try {
        const result = await INSERT(add).into(Books)
        console.log(result)
      } catch (error) {
        console.log(error)
      }

    })

    this.on('updateBook', async (req, res) => {

      let update = {}

      if (req.data.title) update.title = req.data.title
      if (req.data.author) update.author_ID = req.data.author
      if (req.data.genre) update.genre_ID = req.data.genre
      if (req.data.stock) update.stock = req.data.stock
      if (req.data.price) update.price = req.data.price
      if (req.data.currency) update.currency_code = req.data.currency
      if (req.data.descr) update.descr = req.data.descr

      try {
        const result = await UPDATE(Books, req.data.book)
          .set(update)
      } catch (error) {
        console.log(error)
      }
    })

    this.on('deleteBook', async req => {

      if (req.data.book) {
        const book = req.data.book

        await DELETE.from(Books, book)

      }
    })

    this.on('deleteAll', async req => {
      await DELETE.from(Books)
    })
    return super.init()
  }
}
