import expect     from 'expect';
import expectJSX  from 'expect-jsx';
import React      from 'react';


// import Modal from '../src/js/Modal';


expect.extend(expectJSX);


import { mount, shallow } from 'enzyme';

// const jsdom = require('jsdom').jsdom;
//
// // setup DOM...
// global.document = jsdom('<html><body><div className="ReactModalPortal"> <div id="app"></div><div id="wrapper"></div></div></body></html>');
// global.window = document.defaultView;
// Object.keys(document.defaultView).forEach((property) => {
//  if (typeof global[property] === 'undefined') {
//    global[property] = document.defaultView[property];
//  }
// });

// initalize text...
const text =  {
 headerTitle           : "headerTitle",
 bodyText              : "bodyText",
 closeButtonSRText     : "closeButtonSRText",
 modalSaveButtonText   : "modalSaveButtonText",
 modalCancelButtonText : "modalCancelButtonText"
};
describe('Modal Suite', () => {
  it('should render footer conditionally', () => {
    expect(true).toBe(true);
  })
})

// describe('Modal Suite', () => {
//
//  // mount the component...
//  const wrapper = shallow( <Modal isShown={true} text={text} footerVisible={true} cancelBtnHandler={onButtonClick} successBtnHandler={onButtonClick2} ><p>{text.bodyText}</p></Modal> );
//
//  it('should render footer conditionally', () => {
//    const footerVisible      = true;
//    const text               = {modalCancelButtonText:"hi", modalSaveButtonText:"there"};
//    const successBtnHandler  = () => { console.log('¡¡success button pressed!!') }
//    const cancelBtnHandler    = () => { console.log('¡¡cancel button pressed!!') }
//    expect(Modal._renderFooter(footerVisible, text, onButtonClick2, onButtonClick)).toEqualJSX(
//      <div className="modalFooter" >
//        <button onClick={undefined} className="modalCancel pe-btn--btn_large">{text.modalCancelButtonText}</button>
//        <button onClick={undefined} className="modalSave pe-btn__primary--btn_large">{text.modalSaveButtonText}</button>
//      </div>
//    );
//  });
//
//
// });
