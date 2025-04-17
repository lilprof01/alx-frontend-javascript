import ClassRoom from './0-classroom';

/**
 * Creates array of ClassRooms with specific sizes.
 * @returns An array of ClassRooms.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
