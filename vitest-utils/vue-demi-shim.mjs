// Shim that re-exports everything from the single vue instance
// used by @vue/test-utils, avoiding version mismatch issues
export * from '../node_modules/.pnpm/vue@3.2.44/node_modules/vue'

export const isVue2 = false
export const isVue3 = true
export const Vue2 = undefined
export const install = () => {}
export function set(target, key, val) {
  target[key] = val
  return val
}
export function del(target, key) {
  delete target[key]
}
