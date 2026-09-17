// Shim that re-exports everything from the single vue instance,
// 走 vitest.config.ts 中 'vue' 的 alias，确保与 @vue/test-utils、@vue/* 子包
// 使用同一个 Vue 实例，避免 pnpm 多版本冲突
export * from 'vue'

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
