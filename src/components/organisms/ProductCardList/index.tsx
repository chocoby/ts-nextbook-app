import Grid from 'components/layout/Grid'

interface ProductCardListProps {
  numberPerRow?: number
  numberPerRowForMobile?: number
}

/**
 * 商品カードリスト
 */
const ProductCardList: React.FC<ProductCardListProps> = ({
  numberPerRow = 4,
  numberPerRowForMobile = 2,
  children,
}: React.PropsWithChildren<ProductCardListProps>) => {
  return (
    <Grid
      gridGap="16px"
      gridTemplateColumns={{
        _: `repeat(${numberPerRowForMobile}, 1fr)`,
        md: `repeat(${numberPerRow}, 1fr)`,
      }}
    >
      {children}
    </Grid>
  )
}

export default ProductCardList