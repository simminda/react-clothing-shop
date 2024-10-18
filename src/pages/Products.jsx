import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { products } from '../products';
import SideFilter from '../components/SideFilter';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Group the products by category
  const groupedProducts = {};
  products.forEach((product) => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });

  return (
    <>
    <div className="container" id="products" style={{ marginTop: '25px', alignItems: 'center'}}>
        <h1>Our Products</h1><br></br>
        </div>

        <div className="container" style={{ marginTop: '40px', marginBottom: '50px', display: 'flex' }}>

            {/* Filter */}
            <SideFilter/>

            {/* Map through the groupedProducts */}
            <div >
                {Object.entries(groupedProducts).map(([category, products]) => (
                    <React.Fragment key={category}>
                        <h3>{category}</h3>
                        <table className='table table-hover'>
                        <tbody>
                            <tr>
                            {products.map((product) => (
                                <td className='text-center' key={product.id} onClick={() => handleProductClick(product)}>
                                    <a href='#landing-page' className="prodLinks" >
                                    <div className="product-container">
                                        <img src={product.image} alt={product.name} className="img-fluid img-thumbnail"/> 
                                        <i className="bi bi-heart heart-icon"></i>
                                        <h5>{product.name}</h5>
                                        <h5>R {product.price},00</h5>
                                    </div>
                                    </a>
                                </td>
                            ))}
                            </tr>
                            <br></br>
                        </tbody>
                        </table>
                    </React.Fragment>
                ))}
            </div>

    
            {/* Show a modal of selected product */}
            <Modal show={selectedProduct !== null} onHide={() => setSelectedProduct(null)}>
                <Modal.Header closeButton>
                <Modal.Title>{selectedProduct && selectedProduct.definition}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {selectedProduct && <img src={selectedProduct.image} alt={selectedProduct.definition} className='img-fluid' />}
                </Modal.Body>
            </Modal> 
        </div>
        </>
  );
};

export default Products;
