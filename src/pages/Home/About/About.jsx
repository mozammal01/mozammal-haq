import photo from '../../../assets/photo.png'
import LeftToRight from '../../../components/button/LeftToRight';
import RightToLeft from '../../../components/button/RightToLeft';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const About = () => {
  return (
    <section className="bg-base-200 min-h-screen my-10">
      <div className='max-w-6xl mx-auto py-5'>

        <SectionTitle heading='About Me' />
        {/* <h1 className="text-5xl font-bold text-green-400">About Me</h1> */}
        <div id="about" className="flex justify-between items-center">

          <div className="space-y-5 w-1/2">
            <h3 className="text-3xl font-bold">I am a JR. Web Developer</h3>
            <p className='text-xl'>Hello, My name is <span className='font-semibold'>Mozammal Haq</span>. I live in Bangladesh. Now i am studying in Government adomjeenagar MW collage in Narayongonj, Bangladesh.</p>
            <p className='text-xl'>My interest in web development started in 2023 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>

            <div className='flex items-center gap-5'>
              <LeftToRight btnText='My Skills' />
              <RightToLeft btnText='Download cv' />
            </div>
          </div>
          <div className='-mt-60'>
            <img src={photo} height={200} width={500} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;