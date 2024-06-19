import { generateUniqueId } from "./helper";

it("Get predefined unique ID", () => {
   //arrange
   const myID = '1234567890';

   //act
   const actualID = generateUniqueId(myID);

   //assert
   expect(actualID).toEqual(myID);
});

it ("Get generated unique ID", () => {
   const actualID = generateUniqueId();
   expect(actualID).toBeDefined();
})