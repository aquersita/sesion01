import { API_CONFIG, type Plate } from "../types";

interface PlateCardProps {
  plate: Plate;
  
}
const PlatesCard = ({ plate } : PlateCardProps) => {
  return (
<div>
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-gray-100 group">
        <div>
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={`${API_CONFIG.BASE_URL}${plate.imagen}`} alt={plate.nombre} />
            <div className="absolute top-4 right-4 bg-white backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600">
                {plate.categoria}
            </div>
        </div>
    </div>
    <div className="p-6">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">
                {plate.nombre}
            </h3>
            <span className="">
                {plate.calorias}
            </span>
        </div>
        <div className="space-y-2 ">
            <p className="text-xs font-semibold text-gray-500">
                {/* Ingredientes:  */}
                {plate.ingredientes.map((ingrediente, index) => (
                  <span key={index} className="text-orange-700 bg-orange-50 rounded-md border border-orange-100">
                    {ingrediente}
                  </span>
                ))}
            </p>
        </div>
    </div>
</div>
  )
}

export default PlatesCard