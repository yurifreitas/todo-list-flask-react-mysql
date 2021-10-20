import React from 'react';
import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Wrapper } from '../components';

function NoMatch() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <meta name='description' content='pagina não foi encontrada' />
        <title>{`Error 404: ${location.pathname} não encontrada`}</title>
      </Helmet>
      <Wrapper className='p-4'>
        <div className='container'>
          <div className='max-w-xl mx-auto'>
            <div className='py-4'>
              <h1 className='mb-4 text-2xl font-semibold'>
                404 Error, pagina não encontrada
              </h1>
              <h3 className='text-lg font-normal text-gray-700'>
                A Pagina  <code>{location.pathname}</code> não foi encontrada
              </h3>
              <div className='mt-5'>
                <Link
                  to='/'
                  className='font-medium text-gray-800 border-b border-black hover:text-indigo-500 hover:border-indigo-500'
                >
                  Return to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default NoMatch;
