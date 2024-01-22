import React, { useState, ChangeEvent } from 'react';

interface ProductData {
  sku: string;
  model: string;
  price: string;
  description: string;
  imageUrls: string[];
}

function ProductForm() {
  const [productData, setProductData] = useState<ProductData>({
    sku: '',
    model: '',
    price: '',
    description: '',
    imageUrls: [''],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target;

    if (name === 'imageUrls' && index !== undefined) {
      const updatedUrls = [...productData.imageUrls];
      updatedUrls[index] = value;
      setProductData({ ...productData, imageUrls: updatedUrls });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleAddUrlField = () => {
    setProductData({ ...productData, imageUrls: [...productData.imageUrls, ''] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log('Product data submitted:', productData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="sku">SKU:</label>
        <input
          type="text"
          id="sku"
          name="sku"
          value={productData.sku}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={productData.model}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={productData.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={productData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Image URLs:</label>
        {productData.imageUrls.map((url, index) => (
          <div key={index}>
            <input
              type="text"
              name="imageUrls"
              value={url}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddUrlField}>+</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;