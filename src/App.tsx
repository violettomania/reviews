import React from 'react';
import Review from './Review';
import StepButtons from './StepButtons';
import reviews from './data';

export default function App() {
  const [reviewIndex, setReviewIndex] = React.useState(0);

  return (
    <main>
      <article className='review'>
        <Review {...reviews[reviewIndex]} />
        <div className='btn-container'>
          <StepButtons />
        </div>
        <button
          className='btn btn-hipster'
          onClick={() =>
            setReviewIndex(Math.floor(Math.random() * reviews.length))
          }
        >
          surprise me
        </button>
      </article>
    </main>
  );
}
