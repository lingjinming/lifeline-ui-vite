import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LWrap from '../index.vue'

describe('LWrap', () => {
  it('renders wrap container', () => {
    const wrapper = mount(LWrap)
    expect(wrapper.find('section.l-wrap').exists()).toBe(true)
  })

  it('renders title text', () => {
    const wrapper = mount(LWrap, {
      props: { tit: 'My Title' },
    })
    expect(wrapper.find('h4').text()).toContain('My Title')
  })

  it('renders default slot content', () => {
    const wrapper = mount(LWrap, {
      slots: { default: '<p>Content</p>' },
    })
    expect(wrapper.find('.l-wrap-con').html()).toContain('Content')
  })

  it('renders btn slot', () => {
    const wrapper = mount(LWrap, {
      slots: { btn: '<button>Action</button>' },
    })
    expect(wrapper.find('h4').html()).toContain('Action')
  })

  it('hides close button when btn slot is provided', () => {
    const wrapper = mount(LWrap, {
      props: { showBtn: true },
      slots: { btn: '<button>Action</button>' },
    })
    expect(wrapper.find('.img').exists()).toBe(false)
  })

  it('shows close button by default', () => {
    const wrapper = mount(LWrap)
    expect(wrapper.find('.img').exists()).toBe(true)
  })

  it('hides close button when showBtn is false', () => {
    const wrapper = mount(LWrap, {
      props: { showBtn: false },
    })
    expect(wrapper.find('.img').exists()).toBe(false)
  })

  it('emits close and hides on close click', async () => {
    const wrapper = mount(LWrap)
    await wrapper.find('.img').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
    expect(wrapper.find('section.l-wrap').exists()).toBe(false)
  })

  it('applies data-theme attribute', () => {
    const wrapper = mount(LWrap, {
      props: { dataTheme: 'dark' },
    })
    expect(wrapper.find('section.l-wrap').attributes('data-theme')).toBe('dark')
  })
})
