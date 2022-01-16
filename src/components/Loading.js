import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => {
  return (
    <div className='text-center loading'>
      <Spinner type='grow' className='mx-2' size='sm' />
      <Spinner type='grow' className='mx-2' size='sm' />
      <Spinner type='grow' className='mx-2' size='sm' />
      <Spinner type='grow' className='mx-2' size='sm' />
      <Spinner type='grow' className='mx-2' size='sm' />
      <Spinner type='grow' className='mx-2' size='sm' />
      <Spinner type='grow' className='mx-2' size='sm' />
      <Spinner type='grow' className='mx-2' size='sm' />
      <Spinner type='grow' className='mx-2' size='sm' />
      <Spinner type='grow' className='mx-2' size='sm' />
      <Spinner type='grow' className='mx-2' size='sm' />
      <Spinner type='grow' className='mx-2' size='sm' />
      <h4 className='mt-3'>Photos might take sometimes to be fully rendered</h4>
    </div>
  );
};

export default Loading;
