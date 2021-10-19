import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import {GlobalContext} from '../context/GlobalState';

function AddNew() {
  const { register, handleSubmit } = useForm();
  const { addItemToList } = useContext(GlobalContext);

  const postNewData = async (data) => {
    addItemToList(data)
  };

  return (
    <div className='max-w-xl mx-auto border border-gray-200 rounded-md bg-gray-50'>
      <form onSubmit={handleSubmit(postNewData)}>
        <div className='flex items-center justify-between p-2'>
          <div className='flex flex-col'>
            <div className='flex items-center py-1.5 flex-1'>
              <label
                htmlFor='title'
                className='mr-5 text-sm text-right text-gray-700 w-min'
              >
                Titulo
              </label>
              <input
                type='text'
                {...register('title', { required: true })}
                placeholder='Titulo da tarefa'
                className='flex-1 p-0 text-base text-gray-900 bg-transparent border-transparent rounded-md focus:border-transparent focus:bg-transparent focus:ring-0'
              />
            </div>
            <div className='flex items-center py-1.5 flex-1'>
              <label
                htmlFor='descript'
                className='mr-5 text-sm text-right text-gray-700 w-min'
              >
                Descrição
              </label>
              <input
                type='text'
                {...register('descript')}
                placeholder='Breve descrição da tarefa'
                className='flex-1 p-0 text-base text-gray-900 bg-transparent border-transparent rounded-md focus:border-transparent focus:bg-transparent focus:ring-0'
              />
            </div>
          </div>
          <button className='px-5 py-2.5 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 transition duration-300 ease-in-out rounded-md'>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNew;
