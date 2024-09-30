/**
 * Fetches a character by ID from an external API
 * @param {string} id - The unique identifier of the character to fetch
 * @returns {Promise<Object>} A promise that resolves to the character object if found, or rejects with an error
 */
export const fetchGetCharacter = async (id: string) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_GET_PERSON_URL.replace(":id", id)
    );

    const character = await response.json();

    if (response.status !== 200) {
      return Promise.reject(new Error(character.message));
    }
    console.log(character)

    if (character.detail === "Not found") {
      return Promise.reject(new Error("Character not found"));
    }

    return character;
  } catch (error) {
    return Promise.reject(error);
  }
};