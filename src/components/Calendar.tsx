import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

export default function Calendar() {
  const [selected, setSelected] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected || !timeSlot) return;

    const appointmentData = {
      date: format(selected, 'yyyy-MM-dd'),
      time: timeSlot,
    };

    // Here you would integrate with your backend API
    console.log('Appointment requested:', appointmentData);
  };

  return (
    <section id="calendar" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Agenda una Cita</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              locale={es}
              className="border rounded-lg p-4"
            />
          </div>
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Horario Disponible
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="">Selecciona un horario</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                disabled={!selected || !timeSlot}
              >
                Agendar Cita
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}