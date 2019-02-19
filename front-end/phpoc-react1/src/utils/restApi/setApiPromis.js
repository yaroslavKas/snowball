const setApiPromise = (type) => {
  const types = {
    pending: 'pending',
    rejected: 'rejected',
    success: 'success'
  };

  const defaultReturn = {
    isPending: false,
    isRejected: false,
    isSuccess: false,
  };

  if(!type)
    return defaultReturn;

  if (type !== types[type]) {
    console.error(`Type must be pending ==> isPending,  rejected ==> isRejected, success ==> Success ${types}`);
    return defaultReturn
  }
  return {
    isPending: (type === 'pending'),
    isRejected: (type === 'rejected'),
    isSuccess: (type === 'success'),
  };
};


export {setApiPromise};