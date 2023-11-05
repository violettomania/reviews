import React from 'react';
import Review from './Review';
import StepButtons from './StepButtons';
import reviews from './data';

export default function App() {
  const [reviewIndex, setReviewIndex] = React.useState(0);

  const handleRandom = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * reviews.length);
    } while (newIndex === reviewIndex && reviews.length > 1);
    setReviewIndex(newIndex);
  };

  const handlePrev = () => {
    setReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main>
      <article className='review'>
        <Review {...reviews[reviewIndex]} />
        <div className='btn-container'>
          <StepButtons onPrev={handlePrev} onNext={handleNext} />
        </div>
        <button className='btn btn-hipster' onClick={handleRandom}>
          surprise me
        </button>
      </article>
    </main>
  );
}
