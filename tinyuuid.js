/**
 * Created by Aravind Kumar Vemula on 07-06-2023.
 * Length-Controlled UUID Generator
 */

/**
 * Takes a length for a UUID and create it.
 */
export function TinyUUID(length){
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let tinnyuuid = "";

  if(length === undefined){
    length = 26
  }

  /**
   * Creating the uuid
   */
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    tinnyuuid += characters[randomIndex];
  }

  return tinnyuuid;
};
