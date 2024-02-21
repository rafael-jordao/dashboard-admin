import { FaDog } from 'react-icons/fa';

interface DogCardProps {
  name: string;
  breed: string;
  weight: number,
  age: number;
}

const DogCard = ({ name, breed, weight, age }: DogCardProps) => {
  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <FaDog size={24} />
      </div>
      <p className="text-gray-600">{breed}</p>
      <p className="text-gray-600">{weight} kg</p>
      <p className="text-gray-600">{age} anos</p>
    </div>
  );
};

export default DogCard;