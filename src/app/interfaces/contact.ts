export interface Contact {
  id: string,
  /** Nombre del contacto */
  firstName: string,
  lastName: string,
  address: string
  email: string,
  image: string,
  number: string,
  company: string
  isFavourite?: boolean //Es opcional (?) //BORRARLO
}