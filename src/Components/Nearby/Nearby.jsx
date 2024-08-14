// import Clock from "./Clock"

export default function Homepage() {
  return (
    <>
      <h1 className="md:text-3xl text-l text-center font-medium m-6 text-gray-900">Namaz Timings in Nearby Masajid</h1>
      <main className="m-4 flex flex-col title-font font-light overflow-auto">
        <div id="time-table" className="monospace my-4 mid:my-8 mx-auto flex flex-col text-center md:text-2xl text-l border-2 border-gray-800 rounded-xl">
          <div id="headind-row" className="flex flex-row m-2 mb-4 font-bold underline">
            <div className="w-32 md:w-64 pl-2 text-left">Masjid</div>
            <div className="w-16 md:w-32">Jumuah</div>
            <div className="w-16 md:w-32">Fajr</div>
            <div className="w-16 md:w-32">Zuhr</div>
            <div className="w-16 md:w-32">Asr</div>
            <div className="w-16 md:w-32">Maghrib</div>
            <div className="w-16 md:w-32">Isha</div>
          </div>
          {/* Dummy for row element */}
          <div id="data-row-0" className="flex flex-row m-1 bg-[#a0aec0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          {/* Now repeat this some K times */}
          <div id="data-row-0" className="flex flex-row m-1 bg-[#cbd5e0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#a0aec0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#cbd5e0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#a0aec0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#cbd5e0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#a0aec0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#cbd5e0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#a0aec0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#cbd5e0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#a0aec0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#cbd5e0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#a0aec0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#cbd5e0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#a0aec0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
          <div id="data-row-0" className="flex flex-row m-1 bg-[#cbd5e0]">
            <div className="w-32 md:w-64 pl-2 text-left">Hari Masjid</div>
            <div className="w-16 md:w-32">01:35</div>
            <div className="w-16 md:w-32">06:30</div>
            <div className="w-16 md:w-32">01:30</div>
            <div className="w-16 md:w-32">04:30</div>
            <div className="w-16 md:w-32">05:45</div>
            <div className="w-16 md:w-32">07:45</div>
          </div>
        </div>
      </main>
    </>
  )
}