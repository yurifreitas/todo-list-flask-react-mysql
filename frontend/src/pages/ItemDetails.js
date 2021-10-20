import React from 'react';
import { useContext } from "react";
import { Helmet } from 'react-helmet';
import { Header, BackHeader, Wrapper } from '../components';
import { HiOutlineTrash, HiOutlineCheck } from "react-icons/hi";
import { GlobalContext } from "../context/GlobalState";
function ItemDetails() {
  const { taskList, removeItemFromList } =
    useContext(GlobalContext);
  const task = taskList[window.location.pathname.split('/').pop()];
  return (
    <>
      <Helmet>
        <meta name='description' content='Detalhe da tarefa no gerenciador' />
        <title>Tarefa {task.title} {task.descript}</title>
      </Helmet>
      <Header />
      <BackHeader link='/' />
      <Wrapper className='p-4'>
        <div className='container'>
          <div className='max-w-xl mx-auto'>
          <ul className="pt-5">
              <li
                key={task.id}
                className="flex flex-row items-start justify-between py-2.5"
              >
                <div className="flex flex-col items-start justify-start gap-x-5">
                    {task.isCompleted && (
                      <HiOutlineCheck
                        className="inline mr-1.5 text-gray-600"
                        size={14}
                      />
                    )}
                    <h6
                      className={`${
                        task.isCompleted ? "text-gray-600" : "text-indigo-600"
                      } hover:text-indigo-400 inline transition duration-300 ease-in-out text-base md:text-lg font-medium`}
                    >
                      {task.title}
                    </h6>

                    <p
                      className={`text-sm text-gray-500 font-light ${
                        task.descript ? "not-italic" : "italic"
                      }`}
                    >
                      {task.descript ? task.descript : "Sem Descrição"}
                    </p>
                </div>
                <div className="flex flex-row items-center gap-x-4">
                  <button
                    type="button"
                    className="transition duration-300 ease-in-out"
                    onClick={() => {
                      removeItemFromList(task);
                    }}
                  >
                    <HiOutlineTrash
                      className="text-gray-600 transition duration-300 ease-in-out rounded-full hover:text-red-500"
                      size={20}
                    />
                  </button>
                </div>
              </li>
          </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default ItemDetails;
