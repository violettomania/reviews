import { FaQuoteRight } from 'react-icons/fa';

interface ReviewProps {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
}

export default function Review({ name, job, image, text }: ReviewProps) {
  return (
    <>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
    </>
  );
}
