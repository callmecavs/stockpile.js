export default (namespace) => {
  const toString = JSON.stringify
  const toObject = JSON.parse

  const store = window.localStorage
  let cache   = toObject(store.getItem(namespace)) || {}

  return {
    get: get,
    set: set,
    remove: remove,
    clear: clear
  }

  // API

  function get(name) {
    return cache[name] || null
  }

  function set(name, value) {
    cache[name] = value
    store.setItem(namespace, toString(cache))
  }

  function remove(name) {
    delete cache[name]
    store.setItem(namespace, toString(cache))
  }

  function clear() {
    store.removeItem(namespace)
  }
}
