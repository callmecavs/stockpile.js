const stockpile = namespace => {
  const toObject = JSON.parse
  const toString = JSON.stringify

  const storage = window.localStorage
  const cache = toObject(storage.getItem(namespace)) || {}

  // helper

  const save = () => storage.setItem(namespace, toString(cache))

  // API

  const get = key => cache[key] || null

  const set = (key, val) => {
    cache[key] = val
    save()
  }

  const remove = key => {
    delete cache[key]
    save()
  }

  const clear = () => storage.removeItem(namespace)

  const exists = key => get(key) !== null

  return {
    get,
    set,
    remove,
    clear,
    exists
  }
}

export default stockpile
