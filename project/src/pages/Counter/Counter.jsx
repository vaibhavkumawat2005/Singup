import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../features/counter/counterSlice";
import Navbar from '../../components/Navbar';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-3xl font-bold mb-6">Counter</h1>
          <div className="text-6xl font-bold mb-8">{count}</div>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => dispatch(increment())}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch(decrement())}
              disabled={count === 0}
              className={`px-6 py-3 text-white rounded-lg ${
                count === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch(reset())}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;