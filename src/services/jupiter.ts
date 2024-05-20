export const getPrice = async (mintAddress: string): Promise<number> => {
    const url = `https://price.jup.ag/v4/price?ids=${mintAddress}`;
  
    return fetch(url)
        .then((res) => res.json())
        .then((data) => {
            return data.data[mintAddress].price;
        });
};
  
export const getQuote = async (
    inputMint: string,
    outputMint: string,
    amount: number
) => {
    // const url = `https://quote-api.jup.ag/v6/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}&excludeDexes=${excludeDexes.join(
    //   ','
    // )}`;
    const url = `https://quote-api.jup.ag/v6/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}`;
  
    return fetch(url).then(async (res) => {
        const data = await res.json();
    
        if (data.error) {
            throw new Error(data.error);
        }
    
        return data;
    });
};
  
export const getSwapTransaction = async (
    { quoteResponse, payer } :
    {
        quoteResponse: string,
        payer: any
    }
) => {
    const url = `https://quote-api.jup.ag/v6/swap`;
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            quoteResponse,
            userPublicKey: payer.publicKey,
        }),
    };

    return fetch(url, options).then((res) => res.json());
};
  