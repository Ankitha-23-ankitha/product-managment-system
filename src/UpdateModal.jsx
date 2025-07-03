import React from 'react'

export default function UpdateModal({ products, setProducts, index, setShowUpdateModal }) {

    const [current, setCurrent] = React.useState({
        name: products[index].name,
        category: products[index].category,
        stock: products[index].stock
    })

    const handleUpdate = ()=>{
        if(isNaN(current.stock)){
            alert('Please enter a valid number in stock')
            return
        }
        const updated = products
        updated[index].stock = current.stock
        setProducts(updated)
        alert('Updated')
        setTimeout(()=>{
            setShowUpdateModal(false)
        }, 500)
    }

    return (
        <div className='w-full h-full absolute top-0 left-0 bg-slate-500 opacity-90 flex items-center justify-center'>
            <div className='bg-white p-4 rounded-lg w-[300px] space-y-4 opacity-100'>
                <h2 className='text-lg font-semibold'>Update Product</h2>
                <div className='flex flex-col space-y-2'>
                    <label className='text-sm'>Name</label>
                    <input disabled value={current.name} className='border p-2 rounded cursor-not-allowed' />

                    <label className='text-sm'>Category</label>
                    <input disabled value={current.category} className='border p-2 rounded cursor-not-allowed' />

                    <label className='text-sm'>Stock</label>
                    <input
                        value={current.stock}
                        onChange={(e) =>
                            setCurrent((curr) => ({
                                ...curr,
                                stock: e.target.value
                            }))
                        }
                        className='border p-2 rounded'
                    />
                </div>
                <div className='flex justify-between pt-4'>
                    <button onClick={() => setShowUpdateModal(false)} className='px-4 py-2 bg-gray-300 rounded'>Cancel</button>
                    <button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={()=>handleUpdate()}>Update</button>
                </div>
            </div>
        </div>
    )
}
