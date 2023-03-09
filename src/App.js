import { useState } from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { RiArrowUpSFill } from 'react-icons/ri'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const handleMode = (e) => {
    setDarkMode(e.target.checked);
  }

  return (
    <div className={darkMode && 'dark'}>
    <div className='text-slate-400 dark:text-slate-300 pb-8 dark:bg-darkbg-dark'>
    {/*Header*/}
    <div className='bg-bg dark:bg-darkbg pb-40'>
    <div className='container py-9 flex justify-between items-center'>
      <div>
        <h1 className='text-2xl font-bold text-slate-800 dark:text-white'>Socail Media Dashboard</h1>
        <p className='text-sm'>Total Followers: 23,555</p>
      </div>
      <div>
        <label htmlFor='checkbox' className='mx-2'>Dark Mode</label>
        <span>
          <input id='checkbox' type='checkbox' onChange={handleMode}/>
        </span>
      </div>
    </div>
    </div>
    <div className='container -mt-40'>
        {/* Start Cards */}
    <div className='grid grid-cols-4 gap-6 lg:gap-8'>
    {/* Start card */}
      <div className='card before:bg-facebook'>
        <div className='flex justify-center items-center gap-1 font-bold pb-5'>
          <span className=' text-facebook'><AiFillFacebook size={30}/></span>
          <span>@felo</span>
        </div>
        <h2 className='text-6xl text-slate-800 dark:text-white'>1988</h2>
        <p className=' font-medium uppercase tracking-[0.3em]'>Followers</p>
        <div className='flex justify-center items-center gap-1 font-bold pt-5 text-facebook'>
          <span className=''><RiArrowUpSFill /></span>
          <span>Today</span>
        </div>
      </div>
    {/* End card */}
        {/* Start card */}
        <div className='card before:bg-twitter'>
        <div className='flex justify-center items-center gap-1 font-bold pb-5'>
          <span className=' text-twitter'><AiOutlineTwitter size={30}/></span>
          <span>@felo</span>
        </div>
        <h2 className='text-6xl text-slate-800 dark:text-white'>1988</h2>
        <p className=' font-medium uppercase tracking-[0.3em]'>Followers</p>
        <div className='flex justify-center items-center gap-1 font-bold pt-5 text-twitter'>
          <span className=''><RiArrowUpSFill /></span>
          <span>Today</span>
        </div>
      </div>
    {/* End card */}
        {/* Start card */}
        <div className='card before:bg-gradient-to-r before:from-amber-500 via-fuchsia-600 before:to-instegram'>
        <div className='flex justify-center items-center gap-1 font-bold pb-5'>
          <span className=' text-instegram'><AiFillInstagram size={30}/></span>
          <span>@felo</span>
        </div>
        <h2 className='text-6xl text-slate-800 dark:text-white'>1988</h2>
        <p className=' font-medium uppercase tracking-[0.3em]'>Followers</p>
        <div className='flex justify-center items-center gap-1 font-bold pt-5 text-instegram'>
          <span className=''><RiArrowUpSFill /></span>
          <span>Today</span>
        </div>
      </div>
    {/* End card */}
        {/* Start card */}
        <div className='card before:bg-youtube'>
        <div className='flex justify-center items-center gap-1 font-bold pb-5'>
          <span className=' text-youtube'><AiFillYoutube size={30}/></span>
          <span>@felo</span>
        </div>
        <h2 className='text-6xl text-slate-800 dark:text-white'>1988</h2>
        <p className=' font-medium uppercase tracking-[0.3em]'>Followers</p>
        <div className='flex justify-center items-center gap-1 font-bold pt-5 text-youtube'>
          <span className=''><RiArrowUpSFill /></span>
          <span>Today</span>
        </div>
      </div>
    {/* End card */}
    </div>
    {/* End Cards */}
    {/* Start min Cards */}
    <div className="mt-12">
    <h2 className="text-2xl font-bold"> Overview - Today </h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-6 mt-6 '>
      {
        Array(8).fill(' ').map((e) => (
          <div className='card-sm'>
            <div className=' flex justify-between items-center'>
              <h4 className=" font-bold">Pages Views</h4>
              <AiFillFacebook className=" text-facebook" size={30}/>
            </div>
            <div className="flex items-center justify-between mt-8">
              <h3 className=" font-black text-2xl text-slate-800 dark:text-white">101</h3>
              <div className="flex items-center gap-1 text-maingreen text-sm">
                <span><RiArrowUpSFill /></span>
                <span>300%</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    {/* End min Cards */}
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
