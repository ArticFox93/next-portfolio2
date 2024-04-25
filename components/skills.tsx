import React from 'react'

export default function Skills() {
  return (
    <section className="max-w-screen-2xl mx-auto py-8 px-4">
    <h1 className="text-3xl font-semibold">My skills.</h1>
    <p className="text-xl">
      Check out my skills. I only work moderntechnologies.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      <div className="flex flex-col items-center text-center border-2 p-4 py-8">
        <div className="bg-gray-700 rounded-full p-4">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 30L32.7 28.0467C32.287 27.4762 31.7039 27.0512 31.0344 26.8326C30.3649 26.6141 29.6433 26.6132 28.9733 26.8302C28.3032 27.0471 27.7191 27.4707 27.3047 28.0402C26.8903 28.6096 26.667 29.2957 26.6667 30H30ZM50 93.3333C38.5073 93.3333 27.4853 88.7679 19.3587 80.6413C11.2321 72.5147 6.66667 61.4927 6.66667 50H0C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100V93.3333ZM93.3333 50C93.3333 55.6906 92.2125 61.3255 90.0348 66.5829C87.8571 71.8404 84.6652 76.6174 80.6413 80.6413C76.6174 84.6652 71.8404 87.8571 66.5829 90.0348C61.3255 92.2125 55.6906 93.3333 50 93.3333V100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50H93.3333ZM50 6.66667C55.6906 6.66667 61.3255 7.78752 66.5829 9.96522C71.8404 12.1429 76.6174 15.3348 80.6413 19.3587C84.6652 23.3826 87.8571 28.1596 90.0348 33.417C92.2125 38.6745 93.3333 44.3094 93.3333 50H100C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0V6.66667ZM50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50H6.66667C6.66667 38.5073 11.2321 27.4853 19.3587 19.3587C27.4853 11.2321 38.5073 6.66667 50 6.66667V0ZM33.3333 80V30H26.6667V80H33.3333ZM27.3 31.9533L70.6333 91.9533L76.0333 88.0467L32.7 28.0467L27.3 31.9533ZM66.6667 26.6667V66.6667H73.3333V26.6667H66.6667Z" fill="white"/>
            </svg>
        </div>
          
        <h1 className="text-xl font-semibold">NextJS</h1>
        <p>I use this framework beacause I know what is good</p>
      </div>

      <div className="flex flex-col items-center text-center border-2 p-4 py-8">
        <div className="bg-gray-700 rounded-full p-4">
          <svg width="80" height="80" viewBox="0 0 256 384" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_103_2)">
            <path d="M64 384C99.328 384 128 355.328 128 320V256H64C28.672 256 0 284.672 0 320C0 355.328 28.672 384 64 384Z" fill="#0ACF83"/>
            <path d="M0 192C0 156.672 28.672 128 64 128H128V256H64C28.672 256 0 227.328 0 192Z" fill="#A259FF"/>
            <path d="M0 64C0 28.672 28.672 0 64 0H128V128H64C28.672 128 0 99.328 0 64Z" fill="#F24E1E"/>
            <path d="M128 0H192C227.328 0 256 28.672 256 64C256 99.328 227.328 128 192 128H128V0Z" fill="#FF7262"/>
            <path d="M256 192C256 227.328 227.328 256 192 256C156.672 256 128 227.328 128 192C128 156.672 156.672 128 192 128C227.328 128 256 156.672 256 192Z" fill="#1ABCFE"/>
            </g>
            <defs>
            <clipPath id="clip0_103_2">
            <rect width="256" height="384" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            
        </div>
          
          
        <h1 className="text-xl font-semibold">Figma</h1>
        <p>I use this framework beacause I know what is good</p>
      </div>

      <div className="flex flex-col items-center text-center border-2 p-4 py-8">
        <div className="bg-gray-700 rounded-full p-4">
          <svg width="80" height="80" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C36.65 0 28.35 5.54167 25 16.6667C30 11.125 35.85 9.04167 42.5 10.4167C46.3 11.2083 49.05 13.5 52.05 16.0417C56.95 20.2083 62.5 25 75 25C88.35 25 96.65 19.4583 100 8.33333C95 13.875 89.15 15.9583 82.5 14.5833C78.7 13.7917 76 11.5 72.95 8.95833C68.05 4.79167 62.5 0 50 0ZM25 25C11.65 25 3.35 30.5417 0 41.6667C5 36.125 10.85 34.0417 17.5 35.4167C21.3 36.2083 24 38.5 27.05 41.0417C31.95 45.2083 37.5 50 50 50C63.35 50 71.65 44.4583 75 33.3333C70 38.875 64.15 40.9583 57.5 39.5833C53.7 38.7917 51 36.5 47.95 33.9583C43.05 29.7917 37.5 25 25 25Z" fill="#36b6f2"/>
            </svg>
        </div>

          
          
        <h1 className="text-xl font-semibold">TailwindCSS</h1>
        <p>I use this framework beacause I know what is good</p>
      </div>
    </div>
    <div role="button" className="px-4 py-3 bg-black text-white w-fit mx-auto mt-8 rounded-md">More about my skills</div>
  </section>
  )
}
