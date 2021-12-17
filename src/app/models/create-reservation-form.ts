export class CreateReservationForm {
  roomTypeId: number | undefined;
  date: string | undefined | null;
  startTime: string | undefined;
  endTime: string | undefined;
  size: number | undefined;
  roomEquipment: number[] | any;
}
