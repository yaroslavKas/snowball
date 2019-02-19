import React from 'react';
import PropTypes from 'prop-types';
import SelectBlock from './SelectBlock';

class Home extends React.Component {

  render(){
    const {comboBox} = this.props;
    return (
      <div>
        <div className="test-select-wr">
          <div className="test-select">
            {
              comboBox.map((item) => {
                return (
                  <SelectBlock
                    key={item.title}
                    values={item.values}
                    labels={item.labels}
                    title={item.title}
                    type={item.type}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  comboBox: PropTypes.array,
};

export default Home;