import React from 'react'
import { Card, Rate, Button } from 'antd'
import PropTypes from 'prop-types'

import { Filter } from '@/components/blocks/'
import {
  SectionCatalog,
  FilterDiv,
  PaginationBlock,
  Goods,
  Column,
  CardComponent,
  PriceHeader,
  Icons,
  Tags,
  StyledTag,
} from './styles'

const { Meta } = Card

const Catalog = ({ goods, onChangePage }) => {
  return (
    <SectionCatalog>
      <FilterDiv>
        <Filter />
      </FilterDiv>
      <Goods>
        {goods.map(item => {
          return (
            <Column
              key={item._id.$oid} xs={24} sm={24} md={12}
              lg={8} xl={6}
            >
              <CardComponent
                hoverable
                cover={<img alt={item.title} src={item.images[0]} />}
              >
                <PriceHeader>
                  <span>{item.price + '$'}</span>
                  <Icons>
                    <Button type="link" shape="circle" icon="heart" />
                    <Button type="link" shape="circle" icon="shopping-cart" />
                  </Icons>
                </PriceHeader>
                <Meta title={item.title} description={item.description} />
                <Rate disabled allowHalf defaultValue={item.rating} />
                <Tags>
                  {item.color.map(color => (
                    <StyledTag color={color} key={color}>
                      {color.toUpperCase()}
                    </StyledTag>
                  ))}
                </Tags>
              </CardComponent>
            </Column>
          )
        })}
      </Goods>
      <PaginationBlock
        defaultCurrent={1}
        total={34}
        pageSize={8}
        size="small"
        onChange={onChangePage} />
    </SectionCatalog>
  )
}

Catalog.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.shape({
        $oid: PropTypes.string,
      }),
      title: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.string),
      color: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  onChangePage: PropTypes.func.isRequired,
}

export default Catalog
