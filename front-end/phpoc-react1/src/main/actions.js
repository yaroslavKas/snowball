import axios from 'axios';
import XLSX from 'xlsx';
import xlsxProtocol from '../files/protocol.xlsx'
import at from './at';

const createArray = (xlsx) => {
  let result = {};
  Object.keys(xlsx).map((item) => {
    // console.log(item)
    if (item === 'Sheets') {
      // console.log(xlsx[item])
      result = Object.keys(xlsx[item].Hoja1).reduce((object, item2) => {
        const obj = object;
        let fkr = item2.split('');
        const col = fkr[0];
        fkr.shift();
        fkr = fkr.join('');
        // console.log(fkr)

        if (!obj[fkr]) {
          obj[fkr] = []
        }
        obj[fkr].push({col, value: xlsx[item].Hoja1[item2].w || null});
        return obj;
      }, {});
    }
    return null
  });
  return result;
};


const getComboBoxes = (obj) => {
  const result = [];
  Object.keys(obj).map((variable) => {
    const item = obj[variable];
    if (item[7]) {
      if(item[7].value === 'ComboBox' || item[7].value === 'TextBox:ComboBox')
      result.push({type: item[7].value, values: item[4].value.split(':'), labels: item[3].value.split(':'), title: item[0].value})
    }
    return variable;
  });
  return result
};

const getXml = () => {
  return dispatch => {
    return axios({
      method: 'get',
      params: {},
      url: xlsxProtocol,
      responseType: 'arraybuffer',
      headers: {
        'Content-type': 'application/xml'
      }
    })
      .then((res) => {
        // console.log(res, XLSX)

        const data = new Uint8Array(res.data);
        // var workbook = XLSX.read(data, {type:"array"});

        const xlsxReady = XLSX.read(data, {type: 'buffer'});

        // console.log(xlsxReady);

        const parsingToObj = createArray(xlsxReady);

        // console.log(parsingToObj)

        const comboBoxes = getComboBoxes(parsingToObj);
        dispatch({type: at.SET_COMBO_BOX, data: comboBoxes});
        // console.log(comboBoxes)
      })
      .catch((err) => {
        console.error(err);
      })
  }
};

export {getXml}