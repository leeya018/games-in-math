import dbConnect from "./dbConnect";

// export const getGoalsFilter = async (commandType, startDate, endDate) => {
//   const filter = {
//     createdAt: { $gte: startDate, $lte: endDate },
//     ...(commandType !== "all" && { commandType }),
//   };
//   try {
//     await dbConnect();
//     const res = await Goal.find(filter);
//     return res;
//   } catch (error) {
//     throw error;
//   }
// };
