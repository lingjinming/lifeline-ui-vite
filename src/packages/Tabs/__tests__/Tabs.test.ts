import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LTabs from '../index.vue'

const mockTabs = [
  { label: 'Tab1', subTit: 'Description 1' },
  { label: 'Tab2', subTit: 'Description 2' },
  { label: 'Tab3', subTit: 'Description 3' },
]

describe('LTabs', () => {
  it('renders tab items', () => {
    const wrapper = mount(LTabs, {
      props: { tabs: mockTabs },
    })
    const items = wrapper.findAll('.l-tabs-box-item')
    expect(items.length).toBe(3)
  })

  it('renders tab labels', () => {
    const wrapper = mount(LTabs, {
      props: { tabs: mockTabs },
    })
    expect(wrapper.text()).toContain('Tab1')
    expect(wrapper.text()).toContain('Tab2')
    expect(wrapper.text()).toContain('Tab3')
  })

  it('renders sub titles', () => {
    const wrapper = mount(LTabs, {
      props: { tabs: mockTabs },
    })
    expect(wrapper.text()).toContain('Description 1')
    expect(wrapper.text()).toContain('Description 2')
  })

  it('sets first tab as active by default', () => {
    const wrapper = mount(LTabs, {
      props: { tabs: mockTabs },
    })
    const items = wrapper.findAll('.l-tabs-box-item')
    expect(items[0].classes()).toContain('act')
    expect(items[1].classes()).not.toContain('act')
  })

  it('activates tab based on modelValue', () => {
    const wrapper = mount(LTabs, {
      props: { tabs: mockTabs, modelValue: 'Tab2' },
    })
    const items = wrapper.findAll('.l-tabs-box-item')
    expect(items[0].classes()).not.toContain('act')
    expect(items[1].classes()).toContain('act')
  })

  it('emits update:modelValue and tab-click on click', async () => {
    const wrapper = mount(LTabs, {
      props: { tabs: mockTabs },
    })
    const items = wrapper.findAll('.l-tabs-box-item')
    await items[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['Tab3'])
    expect(wrapper.emitted('tab-click')![0][0].label).toBe('Tab3')
  })

  it('does not emit events when clickable is false', async () => {
    const wrapper = mount(LTabs, {
      props: { tabs: mockTabs, clickable: false },
    })
    const items = wrapper.findAll('.l-tabs-box-item')
    await items[0].trigger('click')
    expect(wrapper.emitted('tab-click')).toBeFalsy()
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('applies disabled class when clickable is false', () => {
    const wrapper = mount(LTabs, {
      props: { tabs: mockTabs, clickable: false },
    })
    expect(wrapper.find('.l-tabs-box').classes()).toContain('disabled')
  })

  it('applies gap class when gap is set', () => {
    const wrapper = mount(LTabs, {
      props: { tabs: mockTabs, gap: 10 },
    })
    expect(wrapper.find('.l-tabs-box').classes()).toContain('is-gap')
  })

  it('applies flex-wrap class when wrap is true', () => {
    const wrapper = mount(LTabs, {
      props: { tabs: mockTabs, wrap: true },
    })
    expect(wrapper.find('.l-tabs-box').classes()).toContain('flex-wrap')
  })

  it('renders tab images when provided', () => {
    const tabsWithImg = [
      { label: 'Tab1', img: 'https://example.com/img.png', subTit: 'Desc' },
    ]
    const wrapper = mount(LTabs, {
      props: { tabs: tabsWithImg },
    })
    expect(wrapper.find('img.l-tabs-box-img').exists()).toBe(true)
    expect(wrapper.find('img.l-tabs-box-img').attributes('src')).toBe('https://example.com/img.png')
  })
})
