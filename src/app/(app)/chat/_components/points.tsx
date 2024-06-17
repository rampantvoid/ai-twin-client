import { StepProp } from "./props";

export const Points = (props: StepProp) => {
  return (
    <div className="h-full flex flex-col items-center justify-between 2xl:px-32 2xl:pb-24 px-4">
      <div className="h-full flex items-center justify-between w-full">
        <div className="flex flex-col w-full items-center">
          <img src="/assets/health.svg" alt="" className="w-20 h-20" />
          <div>
            <h3 className="text-xl font-bold mb-3 mt-12">
              Behavioral <br />
              Attributes
            </h3>

            <ul className="text-xs text-gray-600 ">
              <li>Activity Patterns</li>
              <li>Consumption Habits</li>
              <li>Social Interactions</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col w-full items-center">
          <img src="/assets/faces.svg" alt="" className="w-20 h-20" />
          <div>
            <h3 className="text-xl font-bold mb-3 mt-12">
              Cognitive and
              <br />
              Emotional Attributes
            </h3>

            <ul className="text-xs text-gray-600 ">
              <li>Decision-Making Patterns,</li>
              <li>Emotional responses,</li>
              <li>learning and Adaption</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col w-full items-center">
          <img src="/assets/history.svg" alt="" className="w-20 h-20" />
          <div>
            <h3 className="text-xl font-bold mb-3 mt-12">
              Historical <br /> Data
            </h3>

            <ul className="text-xs text-gray-600 ">
              <li>Medical History</li>
              <li>Personal History</li>
              <li>Transactional History</li>
            </ul>
          </div>
        </div>
      </div>

      <button
        className="mt-auto px-6 py-2 border bg-white border-black rounded-md ml-auto"
        onClick={() => props.handleNext()}
      >
        Next
      </button>
    </div>
  );
};
