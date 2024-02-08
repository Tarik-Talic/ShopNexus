import { ProductCard } from '../../components';
import { InfinitySpin } from 'react-loader-spinner';
import { useCategoryProductsData } from '../../services/productsApi';
type CategoryProps = {
  data: any;
  categoryName: string | null;
  active: boolean;
};
function Category({ data, categoryName, active }: CategoryProps) {
  const { data: categoryProducts, isLoading } =
    useCategoryProductsData(categoryName);

  if (isLoading)
    return (
      <div className="loader">
        <InfinitySpin width="200" color="#41b9fb" />
      </div>
    );

  const categoryProductsElements = categoryProducts
    ? categoryProducts.data.map((item: any) => {
        return (
          <ProductCard
            item={item}
            data={data.data}
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            img={item.image}
            rating={item.rating.rate}
            count={item.rating.count}
          />
        );
      })
    : console.log('none');
  const productsElemenets = data?.data.map((item: any) => {
    return (
      <ProductCard
        item={item}
        data={data.data}
        key={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        img={item.image}
        rating={item.rating.rate}
        count={item.rating.count}
      />
    );
  });

  return (
    <div className="productContainer">
      {active ? categoryProductsElements : productsElemenets}
    </div>
  );
}

export default Category;
