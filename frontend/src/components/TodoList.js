import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineTrash, HiOutlineCheck } from 'react-icons/hi';
import { GlobalContext } from '../context/GlobalState';

function TodoList() {
  const { taskList, removeItemFromList, getItemList } = useContext(GlobalContext);
  useEffect(() => {
    return async () => {
      await getItemList();
    };
  }, [taskList]);
  return (
    <div className="max-w-xl pt-8 pb-12 mx-auto">
      {taskList.length === 0 ? (
        <p className="italic text-gray-600">Nenhuma Tarefa encontrada.</p>
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <h6 className="text-base font-medium text-gray-600">Sua Lista</h6>
            <p className="text-sm font-light text-gray-500">
              {taskList.length} item{taskList.length > 1 && 's'}
            </p>
          </div>
          <ul className="pt-5">
            {taskList.map((item) => (
              <li key={item.id} className="flex flex-row items-start justify-between py-2.5">
                <div className="flex flex-col items-start justify-start gap-x-5">
                  <Link to={`/detail/${item.id}`} id={item.id} htmlFor={item.title}>
                    {item.isCompleted && (
                      <HiOutlineCheck className="inline mr-1.5 text-gray-600" size={14} />
                    )}
                    <h6
                      className={`${
                        item.isCompleted ? 'text-gray-600' : 'text-indigo-600'
                      } hover:text-indigo-400 inline transition duration-300 ease-in-out text-base md:text-lg font-medium`}
                    >
                      {item.title}
                    </h6>

                    <p
                      className={`text-sm text-gray-500 font-light ${
                        item.descript ? 'not-italic' : 'italic'
                      }`}
                    >
                      {item.descript ? item.descript : 'Sem Descrição'}
                    </p>
                  </Link>
                </div>
                <div className="flex flex-row items-center gap-x-4">
                  <button
                    type="button"
                    className="transition duration-300 ease-in-out"
                    onClick={() => {
                      removeItemFromList(item);
                    }}
                  >
                    <HiOutlineTrash
                      className="text-gray-600 transition duration-300 ease-in-out rounded-full hover:text-red-500"
                      size={20}
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TodoList;
