"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface MahasiswaProps {
  nama: string;
  getData: React.Dispatch<React.SetStateAction<number[]>>;
}

const Mahasiswa: React.FC<MahasiswaProps> = ({ nama, getData }) => {
  const [aspek1Value, setAspek1Value] = useState<number>(1);
  const [aspek2Value, setAspek2Value] = useState<number>(1);
  const [aspek3Value, setAspek3Value] = useState<number>(1);
  const [aspek4Value, setAspek4Value] = useState<number>(1);

  const handleAspek1Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value);
    setAspek1Value(newValue);
  };

  const handleAspek2Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value);
    setAspek2Value(newValue);
  };

  const handleAspek3Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value);
    setAspek3Value(newValue);
  };

  const handleAspek4Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value);
    setAspek4Value(newValue);
  };

  useEffect(() => {
    getData([aspek1Value, aspek2Value, aspek3Value, aspek4Value]);
  }, [aspek1Value, aspek2Value, aspek3Value, aspek4Value, getData]);

  return (
    <tr>
      <td className="px-4 py-2">
        <Image src="/assets/images/img.png" alt="Foto Profil" className="object-fill w-12 rounded-full h-9" width={100} height={100} />
      </td>
      <td className="px-4 py-2 text-center">{nama}</td>
      <td className="px-4 py-2 text-center">
        <DropDown value={aspek1Value} onChange={handleAspek1Change} />
      </td>
      <td className="px-4 py-2 text-center">
        <DropDown value={aspek2Value} onChange={handleAspek2Change} />
      </td>
      <td className="px-4 py-2 text-center">
        <DropDown value={aspek3Value} onChange={handleAspek3Change} />
      </td>
      <td className="px-4 py-2 text-center">
        <DropDown value={aspek4Value} onChange={handleAspek4Change} />
      </td>
    </tr>
  );
};

interface DropDownProps {
  value?: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown: React.FC<DropDownProps> = ({ value, onChange }) => {
  const options = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <select className="p-1 border border-gray-300 rounded" value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Mahasiswa;
