import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

                //state.sections from directory reducer
const Directory = ({ sectionProps }) => (
    <div className='directory-menu'>
        {
          sectionProps.map(({id, ...sectionProps}) => <MenuItem key={id} {...sectionProps} />)
        }
      </div>
)
         
const mapStateToProps = createStructuredSelector({
  sectionProps: selectDirectorySections
});       


export default connect(mapStateToProps)(Directory); 