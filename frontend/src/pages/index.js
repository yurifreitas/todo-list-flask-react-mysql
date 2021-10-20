import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { Header, TodoList, Wrapper, AddNew, ResetAll } from '../components';
import { GlobalContext } from '../context/GlobalState';
import Loading from '../components/Loading';

function Home() {
  const { taskList, getItemList } = useContext(GlobalContext);
  useEffect(() => {
    return async () => {
      await getItemList();
    };
  }, [taskList]);
  return (
    <>
      <Helmet>
        <meta name="description" content="Criador de lista de Tarefas" />
        <title>Criador de Tarefas</title>
      </Helmet>
      <Header />
      <Wrapper className="p-4 my-5">
        <div className="container">
          <AddNew />
          {taskList ? <TodoList /> : <Loading />}
          <ResetAll />
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
