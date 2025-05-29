import React, { useState, useEffect } from 'react';
import Product from './Product';
const productos = [
  {
    "_id": "1",
    "nombre": "The Complete Common Core: State Standards Kit, Grade 5",
    "sku": "D82015FFBF",
    "precio": 12.88,
    "descripcion": "Kit completo de estándares escolares. Incluye material didáctico, guías para profesores y recursos para estudiantes de quinto grado.",
    "imagenes": [
      {
        "_id": "img1",
        "url": "https://images-na.ssl-images-amazon.com/images/I/41gxkFaSFfL.jpg",
        "nombre": "Portada del libro"
      }
    ]
  },
  {
    "_id": "2",
    "nombre": "Flash Furniture Activity Table",
    "sku": "39F1B8A212",
    "precio": 117.26,
    "descripcion": "Mesa ajustable ideal para actividades escolares. Fabricada con materiales duraderos y fácil de limpiar.",
    "imagenes": [
      {
        "_id": "img2",
        "url": "https://images-na.ssl-images-amazon.com/images/I/31WxfYlS8XL.jpg",
        "nombre": "Mesa roja"
      }
    ]
  },
  {
    "_id": "3",
    "nombre": "Laptop HP Pavilion 15",
    "sku": "HP15X789",
    "precio": 699.99,
    "descripcion": "Laptop con procesador Intel Core i5, 8GB RAM, 512GB SSD, pantalla de 15.6 pulgadas Full HD y Windows 11.",
    "imagenes": [
      {
        "_id": "img3",
        "url": "https://images-na.ssl-images-amazon.com/images/I/61Hh-0F7AbL._AC_SL1500_.jpg",
        "nombre": "Laptop HP"
      }
    ]
  },
  {
    "_id": "4",
    "nombre": "Samsung Galaxy S23 Ultra",
    "sku": "SAMS23ULTRA",
    "precio": 1199.99,
    "descripcion": "Smartphone de última generación con cámara de 108MP, pantalla AMOLED de 6.8 pulgadas, 12GB RAM y 256GB de almacenamiento.",
    "imagenes": [
      {
        "_id": "img4",
        "url": "https://images-na.ssl-images-amazon.com/images/I/71HtN4qqLZL._AC_SL1500_.jpg",
        "nombre": "Samsung Galaxy"
      }
    ]
  },
  {
    "_id": "5",
    "nombre": "Zapatillas Nike Air Max 270",
    "sku": "NK270BLK42",
    "precio": 150.00,
    "descripcion": "Zapatillas deportivas con tecnología Air Max para mayor comodidad. Ideales para running y uso casual.",
    "imagenes": [
      {
        "_id": "img5",
        "url": "https://images-na.ssl-images-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
        "nombre": "Nike Air Max"
      }
    ]
  },
  {
    "_id": "6",
    "nombre": "Cafetera Nespresso Vertuo",
    "sku": "NSPVRT001",
    "precio": 189.95,
    "descripcion": "Cafetera de cápsulas con tecnología Centrifusion para preparar café con crema perfecta. Incluye set de cápsulas de regalo.",
    "imagenes": [
      {
        "_id": "img6",
        "url": "https://via.placeholder.com/300/FF5733/FFFFFF?text=Cafetera+Nespresso",
        "nombre": "Nespresso"
      }
    ]
  },
  {
    "_id": "7",
    "nombre": "Silla Ergonómica de Oficina",
    "sku": "ERGOCHAIR22",
    "precio": 299.00,
    "descripcion": "Silla de oficina con soporte lumbar ajustable, reposacabezas, apoyabrazos 4D y malla transpirable para mayor comodidad durante largas jornadas de trabajo.",
    "imagenes": [
      {
        "_id": "img7",
        "url": "https://via.placeholder.com/300/3398DB/FFFFFF?text=Silla+Ergonomica",
        "nombre": "Silla ergonómica"
      }
    ]
  },
  {
    "_id": "8",
    "nombre": "Smart TV Samsung 55 pulgadas",
    "sku": "SMTV55Q60",
    "precio": 699.99,
    "descripcion": "Televisor QLED 4K con tecnología Quantum HDR, asistente de voz integrado y sistema operativo Tizen para acceder a todas tus aplicaciones favoritas.",
    "imagenes": [
      {
        "_id": "img8",
        "url": "https://via.placeholder.com/300/17202A/FFFFFF?text=Smart+TV+Samsung",
        "nombre": "TV Samsung"
      }
    ]
  }
];

const Gallery = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://apiexpress-x7sl.onrender.com/productos');
        if (!res.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        const data = await res.json();
        setListaProductos([...data]);
        setError(false);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        setError(true);
        // Usar los productos locales como respaldo cuando la API falla
        setListaProductos([...productos]);
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, []);

  if (loading) {
    return <h1>Cargando productos...</h1>;
  }

  if (error) {
    return (
      <div>
        <h2>Usando datos locales (la API no está disponible)</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
          {listaProductos.map((producto, index) => (
            <Product key={producto._id || index} product={producto} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
      {listaProductos.map((producto, index) => (
        <Product key={producto._id || index} product={producto} />
      ))}
    </div>
  );
};

export default Gallery;
