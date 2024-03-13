type Pet = {
  id: number;
  nombre: string;
  raza: string;
  isAdopted: boolean;
};

export const listPets: Pet[] = [
  {
    id: 98467,
    nombre: 'Sancho',
    raza: 'Pastor Aleman',
    isAdopted: true,
    dueño: 'Laura',
  },
  {
    id: 93512,
    nombre: 'Lua',
    raza: 'Caniche',
    isAdopted: false,
    dueño: 'David',
  },
  {
    id: 83548,
    nombre: 'Koa',
    raza: 'Beagle',
    isAdopted: true,
    dueño: 'Lucas',
  },
  {
    id: 72403,
    nombre: 'Jue',
    raza: 'Caniche',
    isAdopted: false,
    dueño: 'David',
  },
];
