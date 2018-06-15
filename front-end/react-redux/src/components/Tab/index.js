import React from 'react';
import TabTitle from './components/TabTitles';
import uniqueHash from '../../utils/uniqueHash';


class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabId: 1,
    }
  }

  handlerChangeId = (tabId) => {
    console.log(this.state.tabId)
    this.setState({
      tabId
    })
  };

  render() {

    const {
      amountTitle
    } = this.props;

    return (
      <div className="tab">
        <ul>
          {amountTitle.map((item) => {
            return (
              <li
                key={uniqueHash()}
                onClick={() => this.handlerChangeId(item.id)}
              >{item.name}</li>
            )

          })}
        </ul>

        {/*<Tabs*/}

        {/*/>*/}
      </div>
    )
  }
}

export default Tab;