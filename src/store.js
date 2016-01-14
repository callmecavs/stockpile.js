import knot from 'knot.js'

export default (namespace) => {
  const store = window.localStorage
  let local = toObject(store.getItem(namespace)) || {}

  const instance = knot({
    get: get,
    set: set,
    remove: remove,
    clear: clear
  })

  return instance

  // helpers

  function toObject(input) {
    return JSON.parse(input)
  }

  function toString(input) {
    return JSON.stringify(input)
  }

  // API

  function get(name) {
    return local[name] || null
  }

  function set(name, value) {
    local[name] = value
    store.setItem(namespace, toString(local))
  }

  function remove(name) {
    delete local[name]
    store.setItem(namespace, toString(local))
  }

  function clear() {
    store.removeItem(namespace)
  }
}
