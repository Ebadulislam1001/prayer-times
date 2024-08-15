import React, { useState, useEffect } from "react";
import MasjidData from "./MasjidData";

// defining constants
const SHEET_ID = "1V3c2-kDkehR_ViJdsJsgWkpK9vAn233j6Gm7lPOVueM";
const SHEET_TITLE = "mosque_table";
const SHEET_RANGE = "A1:J11";
const FULL_URL = "https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/gviz/tq?sheet=" + SHEET_TITLE + "&range=" + SHEET_RANGE;

async function fetchDataFromSheet() {
  try {
    const res = await fetch(FULL_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch sheet data: ${res.statusText}`);
    }
    const rep = await res.text();
    const data_text = rep.substr(47).slice(0, -2);
    const data_JSON = JSON.parse(data_text);
    const table = data_JSON.table.rows.map(row => ({
      name: row.c[0].v,
      area: row.c[1].v,
      latitude: row.c[2].v,
      longitude: row.c[3].v,
      jumah: row.c[4].v,
      fajr: row.c[5].v,
      zuhr: row.c[6].v,
      asr: row.c[7].v,
      maghrib: row.c[8].v,
      isha: row.c[9].v,
    }));
    return table;
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    throw error;
  }
}

function Nearby() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const fetchedTable = await fetchDataFromSheet();
        setTable(fetchedTable);
      } catch (error) {
        console.error("Error occurred in fetching data:", error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <h1 className="md:text-3xl text-l text-center font-medium m-6 text-gray-900">
        Namaz Timings in Nearby Masajid
      </h1>
      <main className="m-4 flex flex-col title-font font-light overflow-auto">
        <div id="time-table" className="monospace my-4 mid:my-8 mx-auto flex flex-col text-center md:text-2xl text-l border-2 border-gray-800 rounded-xl">
          <div id="heading-row" className="flex flex-row m-2 mb-4 font-bold underline">
            <div className="w-32 md:w-64 pl-2 text-left">Masjid</div>
            <div className="w-16 md:w-32">Jumuah</div>
            <div className="w-16 md:w-32">Fajr</div>
            <div className="w-16 md:w-32">Zuhr</div>
            <div className="w-16 md:w-32">Asr</div>
            <div className="w-16 md:w-32">Maghrib</div>
            <div className="w-16 md:w-32">Isha</div>
          </div>

          {table.length > 0 ? (
            table.map((masjid, index) => (
              <MasjidData key={index} {...masjid} rowIndex={index} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
    </>
  );
}

export default Nearby;
