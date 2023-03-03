import { Transaction } from "sequelize";
import { sequelize } from "./connections";

async function makeTransaction<T>(
  operation: (transaction: Transaction) => Promise<T>
): Promise<T> {
  let result: T;
  const transaction = await sequelize.transaction();
  try {
    result = await operation(transaction);
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
  return result;
}

export default makeTransaction;
