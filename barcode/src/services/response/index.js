export const success = (res, entity, status) => {
  if (entity) {
    res.status(status || 200).json(entity)
  }
  return null
}

export const notFound = (res, entity) =>  {
  if (entity) {
    return entity
  }
  res.status(404).end()
  return null
}

export const error = (res, error, status) => {
  const errMsg = error.errors && error.errors.length > 0 ? error.errors.map(err => err.message).join(', ') : ''
  
  res.status(status || 400).json({
    error: errMsg ? errMsg : error.message ? error.message : error
  })
}