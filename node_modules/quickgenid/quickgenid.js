/**
 * Created by Aravind Kumar Vemula on 07-06-2023.
 * Length-Controlled UUID Generator
 */

/**
 * Takes a length for a UUID and create it.
 */
export function QuickGenID(length){
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let quickgenid = "";

  if(length === undefined){
    length = 26
  }

  /**
   * Creating the uuid
   */
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    quickgenid += characters[randomIndex];
  }

  return quickgenid;
};
