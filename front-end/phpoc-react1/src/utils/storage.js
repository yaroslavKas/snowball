const setLocalStorage = (key, value) => {
  let val = value;
  if (typeof val === 'object') {
    try {
      val = JSON.stringify(val)
    } catch (err) {
      console.error('Set Local Storage', err)
    }
  }
  localStorage.setItem(key, val);
};

const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    return data
  }
};

const delLocalStorage = (key) => {
  localStorage.removeItem(key)
};

export {setLocalStorage, getLocalStorage, delLocalStorage}