'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  Image,
} from '@heroui/react';
import { useState } from 'react';
import { SearchIcon } from 'lucide-react';

const countries = [
  { name: 'الأردن', code: '+962', flag: 'https://flagcdn.com/w40/jo.png' },
  { name: 'السعودية', code: '+966', flag: 'https://flagcdn.com/w40/sa.png' },
  { name: 'الإمارات', code: '+971', flag: 'https://flagcdn.com/w40/ae.png' },
  { name: 'قطر', code: '+974', flag: 'https://flagcdn.com/w40/qa.png' },
  { name: 'مصر', code: '+20', flag: 'https://flagcdn.com/w40/eg.png' },
  { name: 'البحرين', code: '+973', flag: 'https://flagcdn.com/w40/bh.png' },
  { name: 'الكويت', code: '+965', flag: 'https://flagcdn.com/w40/kw.png' },
  { name: 'لبنان', code: '+961', flag: 'https://flagcdn.com/w40/lb.png' },
  { name: 'العراق', code: '+964', flag: 'https://flagcdn.com/w40/iq.png' },
  { name: 'المغرب', code: '+212', flag: 'https://flagcdn.com/w40/ma.png' },
];

export default function CountryDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(''); // 👈 الدولة المختارة

  const filtered = countries.filter(
    (c) => c.name.includes(search) || c.code.includes(search)
  );

  const handleSelect = (country) => {
    setSelected(country); // حفظ الدولة المختارة
    setIsOpen(false); // إغلاق drawer
  };

  return (
    <>
      {/* زر اختيار الدولة */}
      <div
        onClick={() => setIsOpen(true)}
        className="w-24 gap-2 flex items-center justify-center bg-[#f2f2f2] rounded-md border-[#dee2e6] border cursor-pointer"
      >
        {selected ? (
          <>
            <Image src={selected.flag} alt="" className="w-6 h-4 rounded-sm" />
            <span>{selected.code}</span>
          </>
        ) : (
          'اختر الدولة'
        )}
      </div>

      {/* Drawer */}
      <Drawer
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        placement="right"
        size="sm"
        className="rtl"
      >
        <DrawerContent className="p-0">
          <DrawerHeader className="text-xl font-bold">
            النداء الدولي
          </DrawerHeader>

          <DrawerBody className="p-0">
            <div className="p-4">
              <Input
                placeholder="البحث"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                startContent={<SearchIcon size={18} />}
                classNames={{
                  input: 'text-right',
                }}
              />
            </div>

            <div className="max-h-[70vh] overflow-y-auto">
              {filtered.map((country, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(country)}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition text-right"
                >
                  <span className="text-gray-700 font-medium">
                    {country.code}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="text-gray-900">{country.name}</span>
                    <Image
                      alt={country.name}
                      src={country.flag}
                      className="w-6 h-4 rounded-sm border"
                    />
                  </div>
                </button>
              ))}
            </div>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
