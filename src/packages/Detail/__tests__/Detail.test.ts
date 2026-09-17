import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LDetail from '../index.vue'

const mockDetails = [
  { label: 'Name', val: 'Alice', clickable: false },
  { label: 'Age', val: '25', clickable: false },
  { label: 'Email', val: 'alice@example.com', clickable: true },
]

describe('LDetail', () => {
  it('renders detail container', () => {
    const wrapper = mount(LDetail, {
      props: { details: mockDetails },
    })
    expect(wrapper.find('section.l-detail-box').exists()).toBe(true)
  })

  it('renders title when provided', () => {
    const wrapper = mount(LDetail, {
      props: { tit: 'User Info', details: mockDetails },
    })
    expect(wrapper.find('h5.l-detail-box-tit').text()).toBe('User Info')
  })

  it('does not render title when tit is empty', () => {
    const wrapper = mount(LDetail, {
      props: { details: mockDetails },
    })
    expect(wrapper.find('h5.l-detail-box-tit').exists()).toBe(false)
  })

  it('renders all detail items', () => {
    const wrapper = mount(LDetail, {
      props: { details: mockDetails },
    })
    const items = wrapper.findAll('.l-detail-box-li')
    expect(items.length).toBe(3)
  })

  it('renders labels and values', () => {
    const wrapper = mount(LDetail, {
      props: { details: mockDetails },
    })
    const labels = wrapper.findAll('.label')
    const vals = wrapper.findAll('.val')
    expect(labels[0].text()).toContain('Name')
    expect(vals[0].text()).toBe('Alice')
    expect(labels[2].text()).toContain('Email')
    expect(vals[2].text()).toBe('alice@example.com')
  })

  it('applies clickable class to clickable items', () => {
    const wrapper = mount(LDetail, {
      props: { details: mockDetails },
    })
    const vals = wrapper.findAll('.val')
    expect(vals[0].classes()).not.toContain('clickable')
    expect(vals[2].classes()).toContain('clickable')
  })

  it('emits click event on clickable item click', async () => {
    const wrapper = mount(LDetail, {
      props: { details: mockDetails },
    })
    const clickableVal = wrapper.findAll('.val.clickable')[0]
    await clickableVal.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')![0][0]).toEqual(mockDetails[2])
  })

  it('does not emit click on non-clickable items', async () => {
    const wrapper = mount(LDetail, {
      props: { details: mockDetails },
    })
    const nonClickableVal = wrapper.findAll('.val')[0]
    await nonClickableVal.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('applies grid columns based on cols prop', () => {
    const wrapper = mount(LDetail, {
      props: { details: mockDetails, cols: 2 },
    })
    const ul = wrapper.find('.l-detail-box-ul')
    expect(ul.attributes('style')).toContain('repeat(2,1fr)')
  })

  it('defaults cols to 3', () => {
    const wrapper = mount(LDetail, {
      props: { details: mockDetails },
    })
    const ul = wrapper.find('.l-detail-box-ul')
    expect(ul.attributes('style')).toContain('repeat(3,1fr)')
  })

  it('applies data-theme attribute', () => {
    const wrapper = mount(LDetail, {
      props: { details: mockDetails, dataTheme: 'dark' },
    })
    expect(wrapper.find('section.l-detail-box').attributes('data-theme')).toBe('dark')
  })

  it('renders default slot', () => {
    const wrapper = mount(LDetail, {
      props: { details: [] },
      slots: { default: '<p>Custom content</p>' },
    })
    expect(wrapper.find('.l-detail-box-con').html()).toContain('Custom content')
  })
})
