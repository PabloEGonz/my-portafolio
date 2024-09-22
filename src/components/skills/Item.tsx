import React from 'react';

const Item = ({ item }: { item: string }) => {
  return (
    <li className='rounded bg-white/30 p-2 text-sm text-black shadow-2xl backdrop-blur-xl transition-colors duration-500 hover:bg-black/40 hover:text-white lg:text-lg'>
      {item}
    </li>
  );
};

export default Item;
