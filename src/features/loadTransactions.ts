import getTransactions from 'api/getTransactions';

const loadTransactions = async (publicKey: string) => {
  const transactions = await getTransactions(publicKey);

  return transactions;
};

export default loadTransactions;
