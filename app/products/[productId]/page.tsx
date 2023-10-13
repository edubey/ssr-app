
interface ProductData {
  [key: string]: {
    name: string;
    description: string;
    price: number;
  };
}

function Page({ params }: { params: { productId: string } }) {
  const productId = params.productId;
  // In a real application, you would fetch product details using the "productId"

  // For this example, let's assume we have a mock product data
  const productData: ProductData = {
    laptop: {
      name: 'Laptop',
      description: 'A powerful laptop for work and play.',
      price: 999.99,
    },
    smartphone: {
      name: 'Smartphone',
      description: 'An advanced smartphone with a high-resolution screen.',
      price: 499.99,
    },
  };

  const product = productData[productId] || {};

  const productNotFound = !product.name;
  return (
    <div>
      <h2>{productNotFound && 'Product not found'}</h2>
      {! productNotFound && 
       <div>
         <h1>Product Details</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      }
    </div>
  );
}

export default Page;