export default (namespace) => {
  const toObject = JSON.parse
  const toString = JSON.stringify

  const store = window.localStorage
  const cache = toObject(store.getItem(namespace)) || {}

  return {
    get,
    set,
    remove,
    clear,
    exists
  }

  // helpers

  function update() {
    store.setItem(namespace, toString(cache))
  }

  // API

  function get(name) {
    return cache[name] || null
  }

  function set(name, value) {
    cache[name] = value
    update()
  }

  function remove(name) {
    delete cache[name]
    update()
  }

  function clear() {
    store.removeItem(namespace)
  }

  function exists(name) {
    return get(name) !== null
  }
}
