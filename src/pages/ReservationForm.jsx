import React, { useState } from 'react';
import { useGlobal } from '../provider/GlobalProvider';

const ReservationForm = () => {
  const [form, setForm] = useState({
    plate: '',
    owner: '',
    apartmentNumber: '',
    block: '',
    model: '',
    color: '',
    parkingSpot: '',
  });

  const { reservations, setReservations } = useGlobal();

  const addReservation = (reservation) => {
    setReservations(reservations.map(data => {
      if(reservation.parkingSpot == data.parkingSpot){
        return {...reservation, reserved: true}
      }else{
        return data
      }
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReservation(form);
    console.log(form);
    alert("Cadastro realizado com sucesso!")
    setForm({
      plate: '',
      owner: '',
      apartmentNumber: '',
      block: '',
      model: '',
      color: '',
      parkingSpot: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="plate" value={form.plate} onChange={handleChange} placeholder="Placa do veículo" required />
      <input name="owner" value={form.owner} onChange={handleChange} placeholder="Nome do proprietário" required />
      <input name="apartmentNumber" value={form.apartmentNumber} onChange={handleChange} placeholder="Número do apartamento" required />
      <input name="block" value={form.block} onChange={handleChange} placeholder="Bloco do apartamento" required />
      <input name="model" value={form.model} onChange={handleChange} placeholder="Modelo do veículo" required />
      <input name="color" value={form.color} onChange={handleChange} placeholder="Cor do veículo" required />
      <select name="parkingSpot" value={form.parkingSpot} onChange={handleChange} placeholder="Número da vaga" required >\
        <option>Número da vaga</option>
        {reservations.map(({parkingSpot, reserved}) => {
          return (
            <option value={parkingSpot} disabled={reserved} className='parkingSpotOptions'>
              {parkingSpot} {reserved && "🚗"}
            </option>
          )
        })}
      </select>
      <button type="submit">Registrar Reserva</button>
    </form>
  );
};

export default ReservationForm;
