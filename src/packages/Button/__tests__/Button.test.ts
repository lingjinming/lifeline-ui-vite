import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LButton from '../index.vue'

describe('LButton', () => {
  it('renders default button', () => {
    const wrapper = mount(LButton)
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button.l-button').exists()).toBe(true)
  })

  it('applies circle class when isCircle is true', () => {
    const wrapper = mount(LButton, { props: { isCircle: true } })
    expect(wrapper.find('button.l-button-circle').exists()).toBe(true)
  })

  it('does not apply circle class by default', () => {
    const wrapper = mount(LButton)
    expect(wrapper.find('button.l-button-circle').exists()).toBe(false)
  })

  it('renders slot content', () => {
    const wrapper = mount(LButton, {
      slots: { default: 'Click Me' },
    })
    expect(wrapper.text()).toContain('Click Me')
  })

  it('renders left and right icons', () => {
    const wrapper = mount(LButton, {
      props: { lIcon: 'plus', rIcon: 'arrow' },
    })
    const icons = wrapper.findAll('i.l-iconfont')
    expect(icons.length).toBe(2)
    expect(icons[0].classes()).toContain('l-icon-plus')
    expect(icons[1].classes()).toContain('l-icon-arrow')
  })

  it('renders name text', () => {
    const wrapper = mount(LButton, {
      props: { name: 'Submit' },
    })
    expect(wrapper.find('.l-button-span').text()).toBe('Submit')
  })

  it('applies inline styles from props', () => {
    const wrapper = mount(LButton, {
      props: { color: '#fff', bgColor: '#000' },
    })
    const btn = wrapper.find('button')
    expect(btn.attributes('style')).toContain('background-color: rgb(0, 0, 0)')
    expect(btn.attributes('style')).toContain('color: rgb(255, 255, 255)')
  })

  it('emits click event', async () => {
    const wrapper = mount(LButton)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')!.length).toBeGreaterThanOrEqual(1)
  })

  it('passes through attrs', () => {
    const wrapper = mount(LButton, {
      attrs: { disabled: true, 'aria-label': 'test' },
    })
    const btn = wrapper.find('button')
    expect(btn.attributes('disabled')).toBeDefined()
    expect(btn.attributes('aria-label')).toBe('test')
  })
})
