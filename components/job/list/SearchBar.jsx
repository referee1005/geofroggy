import React, { useEffect } from 'react'
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Slider,
  Chip,
  Stack,
  Box,
  Divider
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Input from '../../reusable/Input'
import searchSVG from '../../../public/images/job/Search.svg'
import { Clear } from '@mui/icons-material'

function valuetext (value) {
  return `$${value}`
}

function SearchBar ({ positions, tags, onChangeQuery }) {
  // const [salary, setSalary] = React.useState([0, 1000])
  const [query, setQuery] = React.useState({
    'tags[]': [],
    keyword: null,
    salary: [0, 5000],
    'positions[]': [],
    per_page: 10,
    page_no: 1
  })

  useEffect(() => {
    // submit()
    onChangeQuery(query)
  }, [query])

  const handleChangeSalary = (event, newValue) => {
    setQuery({ ...query, salary: newValue })
  }

  const changeTags = value => {
    if (!query['tags[]'].includes(value))
      setQuery({ ...query, 'tags[]': [...query['tags[]'], value] })
    else
      setQuery({
        ...query,
        'tags[]': query['tags[]'].filter(item => item !== value)
      })
  }

  return (
    <div className='mb-16 bg-white rounded-xl px-2 2xl:px-4 py-8 '>
      <div>
        <div className='px-0 2xl:px-4'>
          <Input
            type='text'
            startIconSrc={searchSVG}
            placeholder={'Search Jobs'}
            onChange={e => setQuery({ ...query, keyword: e.target.value })}
          />
        </div>
        <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
          <AccordionSummary
            aria-controls='panel1-content'
            id='panel1-header'
            expandIcon={<ExpandMoreIcon />}
          >
            Job Positions
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup className='pl-0 2xl:pl-4 '>
              {positions &&
                positions.map(item => (
                  <FormControlLabel
                    key={item.id}
                    control={
                      <Checkbox
                        color='black'
                        onChange={e => {
                          if (e.target.checked)
                            setQuery({
                              ...query,
                              'positions[]': [
                                ...query['positions[]'],
                                item.name
                              ]
                            })
                          else
                            setQuery({
                              ...query,
                              'positions[]': query['positions[]'].filter(
                                ele => ele !== item.name
                              )
                            })
                        }}
                      />
                    }
                    label={item.name}
                  />
                ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
          <AccordionSummary
            aria-controls='panel1-content'
            id='panel1-header'
            expandIcon={<ExpandMoreIcon />}
            // sx={{ padding: 0 }}
          >
            Salary
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              getAriaValueText={valuetext}
              value={query.salary}
              valueLabelDisplay='auto'
              sx={{
                color: '#00ad1c', // Change the slider's primary color
                '& .MuiSlider-thumb': {
                  backgroundColor: 'thumbColor' // Custom thumb color
                },
                '& .MuiSlider-rail': {
                  backgroundColor: 'railColor' // Custom rail color
                },
                '& .MuiSlider-track': {
                  backgroundColor: '#00ad1c' // Custom track color
                }
              }}
              min={0}
              max={10000}
              onChange={handleChangeSalary}
              marks={query.salary.map(item => ({
                value: item,
                label: '$' + item
              }))}
            />
          </AccordionDetails>
        </Accordion>
        <Divider />
        <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
          <AccordionSummary
            aria-controls='panel1-content'
            id='panel1-header'
            expandIcon={<ExpandMoreIcon />}
          >
            Tags
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1 // Adds vertical spacing between rows
              }}
            >
              {tags &&
                tags.map((item, index) => (
                  <div
                    onClick={() => {
                      changeTags(item.slug)
                    }}
                  >
                    <Chip
                      sx={{
                        backgroundColor: query['tags[]'].includes(item.slug)
                          ? '#8CC63E'
                          : '',
                        color: query['tags[]'].includes(item.slug)
                          ? 'white'
                          : ''
                      }}
                      key={item.slug} // Ensure a unique key for each tag
                      label={item.name}
                      deleteIcon={
                        query['tags[]'].includes(item.slug) ? (
                          <Clear style={{ color: 'white' }} />
                        ) : (
                          <></>
                        )
                      }
                      onDelete={() => {
                        changeTags(item.slug)
                      }}
                      clickable
                    />
                  </div>
                ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default SearchBar
