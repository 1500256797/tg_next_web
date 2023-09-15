"use client"; 
import React, { useState } from 'react'


export default function Page() {

    const [formData, setFormData] = useState({
        tokenName: '',
        tokenSymbol: '',
        totalSupply: '',
      });
      const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(JSON.stringify(formData, null, 2));
        window.Telegram.WebApp.sendData(JSON.stringify(formData, null, 2));
      };

  return (
    <>

    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-6">表单</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="tokenName" className="block text-gray-700 text-sm font-bold mb-2">代币全称</label>
        <input
          type="text"
          id="tokenName"
          name="tokenName"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          placeholder="请输入代币全称"
          onChange={handleInputChange}
          value={formData.tokenName}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="tokenSymbol" className="block text-gray-700 text-sm font-bold mb-2">代币简称</label>
        <input
          type="text"
          id="tokenSymbol"
          name="tokenSymbol"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          placeholder="请输入代币简称"
          onChange={handleInputChange}
          value={formData.tokenSymbol}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="totalSupply" className="block text-gray-700 text-sm font-bold mb-2">发行量</label>
        <input
          type="text"
          id="totalSupply"
          name="totalSupply"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          placeholder="请输入发行量"
          onChange={handleInputChange}
          value={formData.totalSupply}
        />
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          提交
        </button>
      </div>
    </form>
  </div>
  </>
  )
}
