import { Helmet } from 'react-helmet';
import { Header, TodoList, Wrapper, AddNew, ResetAll } from '../components';

function Home() {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='Criador de lista de Tarefas'
        />
        <title>Criador de Tarefas</title>
      </Helmet>
      <Header />
      <Wrapper className='p-4 my-5'>
        <div className='container'>
          <AddNew />
          <TodoList />
          <ResetAll />
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
