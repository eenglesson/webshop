'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

type AccordionProps = {
  data: Record<string, any>; // The object containing all data
  menu: Array<{ id: number; name: string; key: string }>;
  extra?: Record<string, string[]>; // Extra content mapped by key
};

export default function Accordion({ data, menu, extra }: AccordionProps) {
  const [activeDiv, setActiveDiv] = useState<number | null>(null);

  const toggleDiv = (divId: number) => {
    setActiveDiv(activeDiv === divId ? null : divId);
  };

  return (
    <section className='flex flex-col gap-8'>
      <aside>
        {menu.map((item) => (
          <div
            key={item.id}
            className='border-b hover:border-black cursor-pointer overflow-hidden py-6 transition-colors duration-300'
            onClick={() => toggleDiv(item.id)}
          >
            <div className='flex items-center justify-between'>
              <h3 className='text-h6 md:text-h5 font-normal'>{item.name}</h3>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: activeDiv === item.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowDown size={22} />
              </motion.div>
            </div>
            <AnimatePresence>
              {activeDiv === item.id &&
                (data[item.key] || extra?.[item.key]) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <aside className='flex flex-col gap-3 pt-4'>
                      {/* Render data[item.key] */}
                      {data[item.key] &&
                        (Array.isArray(data[item.key]) ? (
                          data[item.key].map((entry: string, index: number) => (
                            <p
                              key={index}
                              className='text-small text-mutedText'
                            >
                              {entry}
                            </p>
                          ))
                        ) : (
                          <p className='text-small text-mutedText'>
                            {data[item.key]}
                          </p>
                        ))}

                      {/* Render extra[item.key] */}
                      {extra?.[item.key] &&
                        extra[item.key].map((entry, index) => (
                          <p
                            key={`extra-${index}`}
                            className='text-small text-mutedText'
                          >
                            {entry}
                          </p>
                        ))}
                    </aside>
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
        ))}
      </aside>
    </section>
  );
}
