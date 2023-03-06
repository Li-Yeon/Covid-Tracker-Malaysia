import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'

// Assets
import malaysia_flag from '../public/malaysia_flag2.png'

// Components
import CovidCards from '../components/CovidCards'

export default function Home() {

  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    GetAPI();
  }, [])

  async function GetAPI() {
    const res = await axios('https://api.apify.com/v2/key-value-stores/6t65lJVfs3d8s6aKc/records/LATEST?disableRedirect=true');
    setCovidData(res.data);
  }

  return (
    <div className='flex flex-col md:justify-center h-screen items-center pt-10 md:pt-0 bg-gray-200 px-10 md:px-0'>

      <div className="flex items-center gap-5">
        <Image src={malaysia_flag} height={100} width={100} />
        <div className="flex flex-col">
          <p className='font-Poppins text-zinc-800 text-xl'>Malaysia Covid Cases</p>
          <p className='font-Poppins text-zinc-800 text-sm'>Last Updated At: {covidData.lastUpdatedAtApify?.slice(0, -14)}</p>
        </div>

      </div>

      <div className='flex mt-10 gap-3 flex-col md:flex-row md:flex-wrap'>
        <CovidCards title="Total Cases" body={covidData.testedPositive} color="text-red-600" />
        <CovidCards title="Active Cases" body={covidData.activeCases} color="text-red-700" />
        <CovidCards title="Recovered" body={covidData.recovered} color="text-green-700" />
        <CovidCards title="Deceased" body={covidData.deceased} color="text-zinc-500" />
      </div>

    </div>
  )
}