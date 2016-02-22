export default (namespace) => {
  const toObject = JSON.parse
  const toString = JSON.stringify

  const store = window.localStorage
  const cache = toObject(store.getItem(namespace)) || {}

  return {
    get: get,
    set: set,
    remove: remove,
    clear: clear,
    exists: exists
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
    return !!this.get(name)
  }
}


