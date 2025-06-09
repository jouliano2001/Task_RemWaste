import { useState } from 'react'

const steps = [
  "Postcode",
  "Waste Type",
  "Select Skip",
  "Permit Check",
  "Choose Date",
  "Payment"
];

function ProcessBar() {
  const [currentStep, setCurrentStep] = useState(2);

  const isClickable = (index: number) => index <= currentStep;

  return (
    <div className="flex items-center justify-center gap-4 px-4 py-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <button
            onClick={() => isClickable(index) && setCurrentStep(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200
              ${
                index === currentStep
                  ? 'bg-[#ff4d6d] text-white shadow-md'
                  : index < currentStep
                  ? 'bg-[#ffa5b5] text-white hover:bg-[#ff7f94]'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }
            `}
            disabled={!isClickable(index)}
          >
            {step}
          </button>
          {index < steps.length - 1 && (
            <div className="w-6 h-1 bg-gray-500 mx-2 rounded" />
          )}
        </div>
      ))}
    </div>
  )
}

export default ProcessBar
