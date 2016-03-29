import React from 'react';
import ReactDOM from 'react-dom';

class SuperImage extends React.Component {
  render() {
    return(
      <div>
        <image src="./images/baiabaia.jpeg" alt="Baiabaia" className="" />
      </div>
    );
  }
}
ReactDOM.render(
  <SuperImage />,
  document.getElementsById('content')
);

export default SuperImage;
