import React from 'react'

const OSinput = () => {
  return (
    <form className="bg-white p-6 border border-blue-500 rounded-md dark:bg-dark">
      <div className="mb-4">
        <label htmlFor="atendente" className="block text-black dark:text-light font-bold mb-2">Atendente:</label>
        <select id="atendente" name="atendente" className="w-full p-2 border rounded-md">
          
          <option value="1">Atendente 1</option>
          <option value="2">Atendente 2</option>
          
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="cliente" className="block text-black dark:text-light font-bold mb-2">Cliente:</label>
        <select id="cliente" name="cliente" className="w-full p-2 border rounded-md">
          
          <option value="1">Cliente 1</option>
          <option value="2">Cliente 2</option>
          
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="placa" className="block text-black dark:text-light font-bold mb-2">Placa do Veículo:</label>
        <input type="text" id="placa" name="placa" className="w-full p-2 border rounded-md" placeholder="Digite a placa do veículo" />
      </div>

      <div className="mb-4">
        <label htmlFor="produtos" className="block text-black dark:text-light font-bold mb-2">Produtos:</label>
        <select id="produtos" name="produtos" multiple className="w-full p-2 border rounded-md">
          
          <option value="1">Produto 1</option>
          <option value="2">Produto 2</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="servicos" className="block text-black dark:text-light font-bold mb-2">Serviços:</label>
        <select id="servicos" name="servicos" multiple className="w-full p-2 border rounded-md">
          
          <option value="1">Serviço 1</option>
          <option value="2">Serviço 2</option>
          
        </select>
      </div>

      

      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Enviar</button>
    </form>
  )
}

export default OSinput