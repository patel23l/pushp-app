import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct, listProducts } from '../actions/productAction';

function ProductsScreen(props) {
const [modalVisible, setModalVisible] = useState(false);
const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const productList = useSelector (state => state.productList);
  const {loading, products, error} = productList;
  const productSave = useSelector(state => state.productSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch (listProducts());
    return () => {   
    };
  }, []);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImage(product.image);
    setCategory(product.category);
    setCountInStock(product.countInStock);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct({name, price, image, brand, category, countInStock, description}));
  }
  
  return <div className= "content content-margined">
      <div className='product-header'>
          <h3>Products</h3>
          <button onClick={() => openModal({})}>Create Product</button>
      </div>

    {modalVisible && 
    <div className = "form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Create Product</h2>
        </li>
        <li>
          {loadingSave && <div>Loading...</div>}
          {errorSave && <div>{errorSave}</div>}
        </li>
        <li>
          <label htmlFor="name"> Name </label>
          <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" onChange={(e) => setPrice(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="Image">Image</label>
          <input type="text" id="image" name="image" onChange={(e) => setImage(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="brand">Brand</label>
          <input type="text" id="brand" name="brand" onChange={(e) => setBrand(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="category">Category</label>
          <input type="text" id="category" name="category" onChange={(e) => setCategory(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="countInStock">Count In Stock</label>
          <input type="text" id="countInStock" name="countInStock" onChange={(e) => setCountInStock(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="description">Description</label>
          <textarea type="text" id="description" name="description" onChange={(e) => setDescription(e.target.value)}></textarea>
        </li>
        <li>
          <button type="submit" className="button primary">Create</button>
        </li>
      </ul>
    </form> 
    </div> }

      <div className = "product-list">
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {products.map(product => (
              <tr>
                      <td>{product._id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                      <td>
                          <button onClick={() => openModal(product)}> Edit </button>
                          <button> Delete </button>
                      </td>
                  </tr>))}
              </tbody>
          </table>
      </div>
  </div>
}
export default ProductsScreen;