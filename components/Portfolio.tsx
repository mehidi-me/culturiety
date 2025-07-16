import { urlForImage } from '@/sanity/lib/utils';
import React, { useState } from 'react';

function Portfolio({ portfolioCategory, data }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter data based on selected category
  const filteredData =
    selectedCategory === 'All'
      ? data
      : data.filter((item) => item.portfolioCategory.title === selectedCategory);

  return (
    <>
      {/* Category Tabs */}
      <div className="tabs">
        <button
          className={`tab ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        {portfolioCategory?.map((category,i) => (
          <button
            key={i}
            className={`tab ${selectedCategory === category.title ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.title)}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid-3">
        {filteredData?.map((item,i) => (
          <div className="card-4" key={i}>
            <div className="frame">
              <img src={urlForImage(item.coverImage)?.url()} alt={item.title} />
            </div>
            <div className="body">
              <div className="tag-2">{item.portfolioCategory.title}</div>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
