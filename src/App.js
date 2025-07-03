import logo from './logo.svg';
import './App.css';
import React from 'react';
import UpdateModal from './UpdateModal';
import AddModal from './AddModal';

function App() {


    const [products, setProducts] = React.useState([
        { name: "Wireless Headphones", category: "Electronics", stock: 25 },
        { name: "Blender", category: "Kitchen", stock: 40 },
        { name: "T-Shirt", category: "Clothing", stock: 100 },
        { name: "Microwave Oven", category: "Kitchen", stock: 15 },
        { name: "Smartwatch", category: "Electronics", stock: 30 }
    ])

    const [showUpdateModal, setShowUpdateModal] = React.useState(false)
    const [updateIndex, setUpdateIndex] = React.useState(-1)

    const [showAddModal, setShowAddModal] = React.useState(false)

    const [filterCategory, setFilterCatrgory] = React.useState('All')


    const [show, setShow] = React.useState(products)

    const handleDelete = (idx)=>{
        console.log(idx)
        const newProducts = products.filter((item, i)=>i!==idx)
        setProducts(newProducts)
        setShow(products)
        console.log(products)
    }

    React.useEffect(()=>{
        if(filterCategory==='All')  setShow(products)
        else
        setShow(products.filter(item=>item.category===filterCategory))
    }, [filterCategory, products, show])

    return (
        <div className="flex items-center flex-col">
            <div className='p-5 bg-orange-600 w-full text-white text-center text-3xl'>E-Commerce Dashboard</div>
            <div className='w-full'>
                <div className='text-center w-[10rem] mx-auto text-white p-5 bg-blue-700 rounded-xl m-3 text-2xl'>Products</div>
                <div 
                    className='text-center w-fit cursor-pointer mx-auto text-white p-2 bg-green-600 rounded-xl m-3 text-lg'
                    onClick={()=>setShowAddModal(true)}
                >
                    Add product +
                </div>
                <div className='flex justify-center gap-3'>
                    <div className={`p-2 text-md bg-slate-200 rounded-xl cursor-pointer ${filterCategory==='All' && 'bg-slate-400'}`} onClick={()=>setFilterCatrgory('All')}>All</div>
                    <div className={`p-2 text-md bg-slate-200 rounded-xl  cursor-pointer ${filterCategory==='Electronics' && 'bg-slate-400'}`} onClick={()=>setFilterCatrgory('Electronics')}>Electronics</div>
                    <div className={`p-2 text-md bg-slate-200 rounded-xl  cursor-pointer ${filterCategory==='Kitchen' && 'bg-slate-400'}`} onClick={()=>setFilterCatrgory('Kitchen')}>Kitchen</div>
                    <div className={`p-2 text-md bg-slate-200 rounded-xl cursor-pointer  ${filterCategory==='Clothing' && 'bg-slate-400'}`} onClick={()=>setFilterCatrgory('Clothing')}>Clothing</div>
                </div>
                <div className='w-[70%] flex mx-auto justify-between m-3 p-3 text-2xl underline'>
                    <div className='me-5'>Sl.No</div>
                    <div className='flex-4'>Name</div>
                    <div className='flex-1'>Category</div>
                    <div className='flex-1'>Stock</div>
                    <div className='flex-1'></div>
                    <div className='flex-1'></div>
                </div>
                <div className='w-full flex justify-center flex-col items-center'>
                    {
                        show.map((item, i)=>{
                            return(
                                <div className='w-[70%] flex justify-between m-3 p-3 bg-slate-400 rounded-xl text-xl'>
                                    <div className='me-5'>{i+1}</div>
                                    <div className='flex-4'>{item.name}</div>
                                    <div className='flex-1'>{item.category}</div>
                                    <div className='flex-1'>{item.stock}</div>
                                    <div 
                                        className='flex-1 text-lg bg-blue-800 text-center text-white rounded-lg cursor-pointer me-2'
                                        onClick={()=>{
                                            setShowUpdateModal(true)
                                            setUpdateIndex(i)
                                        }}
                                    >
                                        Update
                                    </div>
                                    <div className='flex-1 text-lg bg-red-500 text-center text-white rounded-lg cursor-pointer' onClick={()=>handleDelete(i)}>Delete</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {
            showUpdateModal &&
                <UpdateModal 
                    setShowUpdateModal={setShowUpdateModal}
                    index={updateIndex} 
                    products={products} 
                    setProducts={setProducts}
                />
            }
            {
            showAddModal &&
                <AddModal 
                    setShowAddModal={setShowAddModal}
                    setProducts={setProducts}
                    setShow={setShow}
                    products={products}
                />
            }
        </div>
    );
}

export default App;
