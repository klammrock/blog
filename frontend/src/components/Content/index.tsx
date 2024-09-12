import React from 'react';

import Article from './Article';

function Content() {
  const items = [...Array(10).fill('article')]
  const items_tags = items.map(item => <Article />)

  return (
    <div>
    { items_tags }
    </div>
  );
}

export default Content;
