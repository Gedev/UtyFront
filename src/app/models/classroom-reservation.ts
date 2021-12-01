export interface ClassroomReservation {
  id: number,
  user: {
    username: string,
    lastname: string,
    firstname: string,
  },
  equipment: {
    projector: boolean,
    whiteboard : string,
  }
}
