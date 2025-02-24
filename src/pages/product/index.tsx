import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/layout.module'
import Card from '@/components/card/card.module'

import { data, DataProduct } from '@/dummy/data'

export default function Product() {

    const [search, setSearch] = useState<string>("")
    const [category, setCategory] = useState<string>("All")
    const [sort, setSort] = useState<string>("None")
    const router = useRouter()

    const categories = ['All', 'Beras', 'Minyak', 'Gula', 'Telur']
    const sortOptions = ['None', 'Harga Terendah ke Harga Tertinggi', 'Harga Tertinggi ke Terendah']

    const filteredProducts = data
        .filter((product) =>
            category === "All" ? true : product.category === category
        )
        .filter((product) =>
            [product.title, product.description, product.price.toString()].some((field) =>
                field.toLowerCase().includes(search.toLowerCase())
            )
        )
        .sort((low, high) => {
            if (sort === "Harga Terendah ke Harga Tertinggi") {
                return low.price - high.price
            } else if (sort === "Harga Tertinggi ke Terendah") {
                return high.price - low.price
            } else {
                return 0
            }
        })

    console.log('filtered : ', filteredProducts)

    return (
        <Layout>
            <div className='w-full h-full flex gap-x-5 p-5 bg-red-500 text-black'>
                <input
                    type="text"
                    placeholder='Search ...'
                    onChange={(e) => setSearch(e.target.value)}
                    className='border p-2 rounded-md w-1/2'
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='border p-2 rounded-md'
                >
                    {
                        categories.map((item, key) => (
                            <option key={key}>{item}</option>
                        ))
                    }
                </select>
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className='border p-2 rounded-md'
                >
                    {
                        sortOptions.map((item, key) => (
                            <option key={key}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div className='grid grid-cols-3 gap-5 p-5'>
                {
                    filteredProducts.length > 0 ?
                        filteredProducts.map((item: DataProduct, key: number) => {
                            return (
                                <Card
                                    key={key}
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    price={item.price}
                                    category={item.category}
                                    onClick={() => router.push(`product/${item.id}`)}
                                />
                            )
                        }) :
                        <div className='w-screen h-screen flex justify-center items-center text-center'>
                            <p className='text-lg font-semibold text-amber-700'>Produk yang anda cari tidak ditemukan</p>
                        </div>
                }
            </div>
        </Layout>
    )
}
