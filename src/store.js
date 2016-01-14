import knot from 'knot.js'

export default (namespace) => {
  const store = window.localStorage

  const instance = knot({
    get: get,
    set: set,
    remove: remove,
    clear: clear
  })

  return instance

  function get() {

  }

  function set() {

  }

  function remove() {

  }

  function clear() {
    store.removeItem(namespace)
  }
}
