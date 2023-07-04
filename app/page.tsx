"use client";
import React, { useState } from "react";
import HeaderTable from "@components/header_table";
import Mahasiswa from "@components/mahasiswa";

const Home = () => {
  const [dataState1, setDataState1] = useState<number[]>([1]);
  const [dataState2, setDataState2] = useState<number[]>([1]);
  const [dataState3, setDataState3] = useState<number[]>([1]);
  const [dataState4, setDataState4] = useState<number[]>([1]);
  const [dataState5, setDataState5] = useState<number[]>([1]);
  const [dataState6, setDataState6] = useState<number[]>([1]);
  const [dataState7, setDataState7] = useState<number[]>([1]);
  const [dataState8, setDataState8] = useState<number[]>([1]);
  const [dataState9, setDataState9] = useState<number[]>([1]);
  const [dataState10, setDataState10] = useState<number[]>([1]);

  function handleClick() {
    const json = {
      aspek_penilaian_1: {
        mahasiswa_1: dataState1[0],
        mahasiswa_2: dataState2[0],
        mahasiswa_3: dataState3[0],
        mahasiswa_4: dataState4[0],
        mahasiswa_5: dataState5[0],
        mahasiswa_6: dataState6[0],
        mahasiswa_7: dataState7[0],
        mahasiswa_8: dataState8[0],
        mahasiswa_9: dataState9[0],
        mahasiswa_10: dataState10[0],
      },
      aspek_penilaian_2: {
        mahasiswa_1: dataState1[1],
        mahasiswa_2: dataState2[1],
        mahasiswa_3: dataState3[1],
        mahasiswa_4: dataState4[1],
        mahasiswa_5: dataState5[1],
        mahasiswa_6: dataState6[1],
        mahasiswa_7: dataState7[1],
        mahasiswa_8: dataState8[1],
        mahasiswa_9: dataState9[1],
        mahasiswa_10: dataState10[1],
      },
      aspek_penilaian_3: {
        mahasiswa_1: dataState1[2],
        mahasiswa_2: dataState2[2],
        mahasiswa_3: dataState3[2],
        mahasiswa_4: dataState4[2],
        mahasiswa_5: dataState5[2],
        mahasiswa_6: dataState6[2],
        mahasiswa_7: dataState7[2],
        mahasiswa_8: dataState8[2],
        mahasiswa_9: dataState9[2],
        mahasiswa_10: dataState10[2],
      },
      aspek_penilaian_4: {
        mahasiswa_1: dataState1[3],
        mahasiswa_2: dataState2[3],
        mahasiswa_3: dataState3[3],
        mahasiswa_4: dataState4[3],
        mahasiswa_5: dataState5[3],
        mahasiswa_6: dataState6[3],
        mahasiswa_7: dataState7[3],
        mahasiswa_8: dataState8[3],
        mahasiswa_9: dataState9[3],
        mahasiswa_10: dataState10[3],
      },
    };
    //! output dalam bentuk json
    console.log(json);
  }

  return (
    <div>
      <table className="w-full mt-10 border-collapse">
        <HeaderTable />
        <tbody>
          <Mahasiswa nama="Mahasiswa 1" getData={setDataState1} />
          <Mahasiswa nama="Mahasiswa 2" getData={setDataState2} />
          <Mahasiswa nama="Mahasiswa 3" getData={setDataState3} />
          <Mahasiswa nama="Mahasiswa 4" getData={setDataState4} />
          <Mahasiswa nama="Mahasiswa 5" getData={setDataState5} />
          <Mahasiswa nama="Mahasiswa 6" getData={setDataState6} />
          <Mahasiswa nama="Mahasiswa 7" getData={setDataState7} />
          <Mahasiswa nama="Mahasiswa 8" getData={setDataState8} />
          <Mahasiswa nama="Mahasiswa 9" getData={setDataState9} />
          <Mahasiswa nama="Mahasiswa 10" getData={setDataState10} />
        </tbody>
      </table>
      <div className="flex justify-end mt-10">
        <button className="px-4 py-2 text-white bg-black rounded" onClick={handleClick}>
          Simpan
        </button>
      </div>
    </div>
  );
};

export default Home;
