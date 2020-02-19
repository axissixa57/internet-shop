import React from 'react'
import { Checkbox, Input } from 'antd'
import PropTypes from 'prop-types'

import { Slider } from '@/components/blocks'
import { FilterWrapper } from './styles'

const Filter = ({
  types,
  sizes,
  colors,
  handleChangeCheckbox,
  handleChangeFromRangeInput,
  handleChangeToRangeInput,
  min,
  max,
  tagsGoods,
  sizeGoods,
  colorGoods,
}) => {
  return (
    <FilterWrapper>
      <div className="filtr-product-type">
        <p>Product type</p>
        <div>
          {types.map(type => (
            <Checkbox
              key={type}
              checked={tagsGoods.some(tag => tag === type)}
              filterName="tags"
              val={type}
              onChange={handleChangeCheckbox}
            >
              {type}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="filtr-product-size">
        <p>Product size</p>
        <div>
          {sizes.map(size => (
            <Checkbox
              key={size}
              checked={sizeGoods.some(s => s === size)}
              filterName="size"
              val={size}
              onChange={handleChangeCheckbox}
            >
              {size}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="filtr-product-color">
        <p>Product color</p>
        <div>
          {colors.map(color => (
            <Checkbox
              key={color}
              checked={colorGoods.some(c => c === color)}
              filterName="color"
              val={color}
              onChange={handleChangeCheckbox}
            >
              {color}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="filtr-product-cost">
        <p>Product cost</p>
        <div>
          <Input
            type="number"
            placeholder="от"
            onChange={handleChangeFromRangeInput}
            value={min} />
          <Input
            type="number"
            placeholder="до"
            onChange={handleChangeToRangeInput}
            value={max} />
        </div>
      </div>
      <Slider />
    </FilterWrapper>
  )
}

Filter.propTypes = {
  types: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  handleChangeCheckbox: PropTypes.func.isRequired,
  handleChangeFromRangeInput: PropTypes.func.isRequired,
  handleChangeToRangeInput: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  tagsGoods: PropTypes.arrayOf(PropTypes.string),
  sizeGoods: PropTypes.arrayOf(PropTypes.string),
  colorGoods: PropTypes.arrayOf(PropTypes.string),
}

export default Filter
