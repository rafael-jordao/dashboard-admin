import DogCard from "../components/DogCard";

const dogs = [
  { name: 'Max', breed: 'Labrador Retriever', weight: 25, age: 10 },
  { name: 'Bailey', breed: 'Golden Retriever', weight: 28, age: 9 },
  { name: 'Daisy', breed: 'Beagle', weight: 10, age: 8 },
  { name: 'Charlie', breed: 'Poodle', weight: 6, age: 12 },
  { name: 'Rocky', breed: 'Boxer', weight: 30, age: 7 },
  { name: 'Lucy', breed: 'Dachshund', weight: 7, age: 11 },
  { name: 'Bella', breed: 'Yorkshire Terrier', weight: 3, age: 14 },
  { name: 'Peanut', breed: 'Chihuahua', weight: 2, age: 9 },
  { name: 'Gizmo', breed: 'Shih Tzu', weight: 5, age: 6 },
];

export default function Dashboard() {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-lg mb-5">Agendamentos</h2>
        <div className="flex overflow-x-auto space-x-4 no-scrollbar">
          {dogs.map((dog, index) => (
            <DogCard key={index} {...dog} />
          ))}
        </div>
      </div>
    </div>
  );
}