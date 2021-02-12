export function getMultipleSymbolsPrice (coins, currency) {
  const coi = coins.join(',')
  const curr = currency.join(',')

  return fetch(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coi}&tsyms=${curr}`,
    {
      method: 'GET',
      headers: {
        authorization: 'Apikey 4fcea8772bc5fffe81acaf6d4d1bddda94395933c5a3f329366eb70ea5ae89ba'
      }
    }
  ).then(res => res.json())
}
