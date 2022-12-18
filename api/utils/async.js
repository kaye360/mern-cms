


export const tryAsync = (func) => {
  return async (req, res) => {
    try {
      await func(req, res)
    } catch (error) {
      return res.status(500).json( { msg: error} )
    }
  }
}