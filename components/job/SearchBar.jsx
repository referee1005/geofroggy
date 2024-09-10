import React from 'react'
import { Chip } from '@mui/material'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
function SearchBar ({ data }) {
  return (
    <div className='container-custom mb-16'>
      <div>
        {/* <CheckBox label='Senior Ambassador' /> */}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color='black' />}
            label='Required'
          />
        </FormGroup>
      </div>
    </div>
  )
}

export default SearchBar
