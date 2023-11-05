import NextIcon from './NextIcon';
import PrevIcon from './PrevIcon';

interface StepButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function StepButtons({ onPrev, onNext }: StepButtonsProps) {
  return (
    <div className='btn-container'>
      <button className='prev-btn' onClick={onPrev}>
        <PrevIcon />
      </button>
      <button className='next-btn' onClick={onNext}>
        <NextIcon />
      </button>
    </div>
  );
}
