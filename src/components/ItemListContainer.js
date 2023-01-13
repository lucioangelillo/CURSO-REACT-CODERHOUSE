import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import ProductCard from './ProductCard'
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"




const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const { idCategory } = useParams()

  useEffect(() => {
    const querydb = getFirestore();//
    const queryCollection = collection(querydb, "items");//
    if (idCategory) {
      const queryFilter = query(queryCollection, where("category", "==", idCategory))
      getDocs(queryFilter)
        .then(res => setItems(res.docs.map(item => ({ id: item.id, ...item.data() }))));//
    } else {
      getDocs(queryCollection)
        .then(res => setItems(res.docs.map(item => ({ id: item.id, ...item.data() }))))
    }

  }, [idCategory])


  return (
    <div>
      <div className='mt-12 flex justify-center'>
        <Loader loading={items.length === 0} />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {items.map(i => <ProductCard key={i.id}{...i} />)}
      </div>
    </div>

  )
}
export default ItemListContainer