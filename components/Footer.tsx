const Footer = () => (
    <div className='bg-slate-900'>
    <div className='container mx-auto px-6 py-4'>
      <div className='flex flex-wrap items-center md:justify-between justify-center'>
        <div className='w-full md:w-4/12 px-4'>
          <div className='text-sm text-center md:text-left text-white'>
          © 2022 RippleMatch, All Rights Reserved
          </div>
        </div>
        <div className='w-full md:w-8/12 px-4'>
          <ul className='flex flex-wrap list-none md:justify-end  justify-center'>
            <li>
              <a
                className='text-white hover:text-primary-500 text-sm font-semibold block py-1 px-3'
                href='https://ripplematch.com/?r=RjM6MT'
                target='_blank'
                rel="noreferrer"
              >
                Ripplematch
              </a>
            </li>
            <li>
              <a
                className='text-white hover:text-primary-500 text-sm font-semibold block py-1 px-3'
                href='https://app.ripplematch.com/privacy'
                target='_blank'
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className='text-white hover:text-primary-500 text-sm font-semibold block py-1 px-3'
                href='https://app.ripplematch.com/tos'
                target='_blank'
                rel="noreferrer"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>   
)

export default Footer;