import React from 'react';

const Product = ({ product }) => {
  return (
    <div style={{ display: 'flex', width: '30%', border: '1px solid white', justifyContent: 'center', flexDirection: 'column', margin: '1rem' }}>
      <img
        src={product.imagenes[0]?.url ?? './sinimagen.jpg'}
        style={{ width: '100%', height: '20vh', objectFit: 'contain' }}
        alt={product.nombre}
      />
      <hr />
      <div style={{ height: '30vh' }}>
        <h3 style={{ overflowX: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.nombre}</h3>
        <p style={{ overflow: 'hidden', maxHeight: '15vh', textOverflow: 'ellipsis' }}>{product.descripcion}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Precio: ${product.precio}</span>
        <span>SKU: {product.sku}</span>
      </div>
    </div>
  );
};

export default Product;
