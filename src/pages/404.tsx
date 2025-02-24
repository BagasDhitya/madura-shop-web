import React from 'react'
import { useRouter } from 'next/router'

export default function NotFoundPage() {

    const router = useRouter()

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-center gap-y-5'>
            <h1 className='text-6xl font-bold text-amber-700'>404</h1>
            <p className='text-xl font-bold text-amber-500'>Halaman tidak ditemukan</p>
            <button className='bg-amber-700 hover:bg-amber-900 font-semibold text-white p-3 rounded-md' onClick={() => router.push('/product')}>
                Silahkan kembali ke halaman utama
            </button>
        </div>
    )
}
