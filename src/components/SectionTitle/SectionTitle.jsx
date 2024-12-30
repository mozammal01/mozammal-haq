import BottomLine from '../BottomLine/BottomLine';
import TopLine from '../TopLine/TopLine';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className='text-center space-y-3 my-10'>
      <TopLine />
      <h1 className='font-bold text-5xl'>{heading}</h1>
      {
        subHeading && <h3 className='text-xl font-semibold'>Sub Header</h3>
      }
      <BottomLine />
    </div>
  );
};

SectionTitle.propTypes = {

};

export default SectionTitle;
