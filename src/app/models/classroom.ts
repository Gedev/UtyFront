export interface Classroom {
  id: number,
  room_num: number,
  equipment: {
    projector: boolean,
    whiteboard : boolean,
  }
}
