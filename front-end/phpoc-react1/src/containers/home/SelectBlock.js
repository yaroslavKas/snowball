import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

class SelectBlock extends React.Component {

  state = {
    options: [],
    selectedOption: null,
  };

  componentWillMount() {
    this.setOptions(this.props)
  }

  setOptions = (props) => {
    const options = [];
    let selectedOption = null;
    if (props.values && props.values.length > 0) {
      props.values.map((item, index) => {
        options.push({value: item, label: props.labels[index]});
        return item;
      })
    }
    if (options.length > 0) {
      selectedOption = options[0]
    }
    this.setState({options, selectedOption})
  };

  handleChange = (selectedOption) => {
    this.setState({selectedOption});
  };

  render() {
    const {selectedOption, options} = this.state;
    return (
      <div className="test-select-item">
        <h5 className="item_0">{this.props.title}</h5>
        <div className="item-1">
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            placeholder={this.props.type}
          />
        </div>
        <div className="item-2">
          {selectedOption && <span>{selectedOption.value}</span>}
        </div>
      </div>
    )
  }
}

SelectBlock.propTypes = {
  // values: PropTypes.array,
  // labels: PropTypes.array,
  type: PropTypes.string,
  title: PropTypes.string,
};

export default SelectBlock;