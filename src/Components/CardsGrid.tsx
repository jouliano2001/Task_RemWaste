import React, { useEffect, useState } from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import { fetchSkipOptions, type SkipOption } from '../Services/skipService';
import four from '../assets/4-yarder-skip.jpg'
import six from '../assets/6-yarder-skip.jpg'
import eight from '../assets/8-yarder-skip.jpg'
import ten from '../assets/10-yarder-skip.jpg'
import twelve from '../assets/12-yarder-skip.jpg'
import fourteen from '../assets/14-yarder-skip.jpg'
import sixteen from '../assets/16-yarder-skip.jpg'
import twenty from '../assets/20-yarder-skip.jpg'
import forty from '../assets/40-yarder-skip.jpg'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

function CardsGrid() {
  const [skips, setSkips] = useState<SkipOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkip, setSelectedSkip] = useState<SkipOption | null>(null)

  const sizeToImageMap: Record<number, string> = {
  4: four,
  6: six,
  8: eight,
  10: ten,
  12: twelve,
  14: fourteen,
  16: sixteen,
  20: twenty,
  40: forty,
}

  useEffect(() => {
    const loadSkips = async () => {
      try {
        const data = await fetchSkipOptions();
        setSkips(data);
      } catch (error) {
        console.error('Failed to load skips:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  if (loading) return <div className="text-center py-10">Loading skip options...</div>;

  return (
    <BackgroundGradientAnimation>
      <div className='flex flex-col items-center mt-20'>
        <p className='text-3xl font-bold text-white'>Choose Your Skip Size</p>
        <p className='text-xl text-white'>Select the skip size that best suits your needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20">
        {skips.map((skip) => (
          <CardContainer key={skip.id} className="inter-var">
            <CardBody className="bg-neutral-900 relative group/card border border-neutral-700 w-full h-auto rounded-xl p-6">
              <CardItem translateZ="50" className="text-xl font-bold text-white">
                {skip.size} yd³ Skip
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-400 text-sm max-w-sm mt-2"
              >
                Hire: {skip.hire_period_days} days<br />
                Price: £{(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2)}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={sizeToImageMap[skip.size]}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`Skip ${skip.size}`}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={() => setSelectedSkip(skip)}
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold cursor-pointer"
                >
                  Select This Skip →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {selectedSkip && (
        <div className="fixed inset-0 z-50 bg-[#000000bd] flex items-center justify-center backdrop-blur-sm h-screen w-screen">
          <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-8 max-w-md w-full text-white shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Skip Receipt</h2>
            <img
              src={sizeToImageMap[selectedSkip.size]}
              alt={`Skip ${selectedSkip.size}`}
              className="rounded-xl mb-4 h-48 w-full object-cover"
            />
            <p><strong>Size:</strong> {selectedSkip.size} yd³</p>
            <p><strong>Hire Period:</strong> {selectedSkip.hire_period_days} days</p>
            <p><strong>Price:</strong> £{selectedSkip.price_before_vat.toFixed(2)}</p>
            <p><strong>VAT:</strong> {selectedSkip.vat}%</p>
            <p className="mt-2"><strong>Total Price:</strong> £{(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)).toFixed(2)}</p>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setSelectedSkip(null)}
                className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => alert("Proceeding to checkout...")}
                className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </BackgroundGradientAnimation>
  )
}

export default CardsGrid