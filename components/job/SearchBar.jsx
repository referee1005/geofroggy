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
import Input from '../reusable/Input'
import searchSVG from '../../public/images/job/Search.svg'
import { Clear } from '@mui/icons-material'
import { fetchJobResultsRequest } from '@/actions/job'
import { useDispatch } from 'react-redux'

function valuetext (value) {
  return `$${value}`
}

function SearchBar ({ options }) {
  // const [salary, setSalary] = React.useState([0, 1000])
  const [query, setQuery] = React.useState({
    tags: [],
    query: null,
    salary: [],
    positions: []
  })
  const dispatch = useDispatch()

  useEffect(() => {
    if (options.salary)
      setQuery({ ...query, salary: [options.salary.min, options.salary.max] })
  }, [options])

  useEffect(() => {
    submit()
  }, [query])
  const handleChangeSalary = (event, newValue) => {
    setQuery({ ...query, salary: newValue })
  }

  const changeTags = index => {
    if (!query.tags.includes(index))
      setQuery({ ...query, tags: [...query.tags, index] })
    else
      setQuery({
        ...query,
        tags: query.tags.filter(item => item !== index)
      })
  }
  const submit = () => {
    dispatch(fetchJobResultsRequest(query))
  }
  return (
    <div className='mb-16 bg-white rounded-xl h-screen px-4 py-8 '>
      <div>
        <div className='px-4'>
          <Input
            type='text'
            startIconSrc={searchSVG}
            placeholder={'Search Jobs'}
            onChange={e => setQuery({ ...query, query: e })}
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
          <AccordionDetails sx={{ paddingLeft: 4 }}>
            <FormGroup>
              {options.positions &&
                options.positions.map(item => (
                  <FormControlLabel
                    key={item}
                    control={
                      <Checkbox
                        color='black'
                        onChange={e => {
                          if (e.target.checked)
                            setQuery({
                              ...query,
                              positions: [...query.positions, item]
                            })
                          else
                            setQuery({
                              ...query,
                              positions: query.filter(ele => ele !== item)
                            })
                        }}
                      />
                    }
                    label={item}
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
            {options.salary && (
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
                min={options.salary.min}
                max={options.salary.max}
                onChange={handleChangeSalary}
                marks={query.salary.map(item => ({
                  value: item,
                  label: '$' + item
                }))}
              />
            )}
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
              {options.tags &&
                options.tags.map((item, index) => (
                  <div
                    onClick={() => {
                      changeTags(index)
                    }}
                  >
                    <Chip
                      sx={{
                        backgroundColor: query.tags.includes(index)
                          ? '#8CC63E'
                          : '',
                        color: query.tags.includes(index) ? 'white' : ''
                      }}
                      key={item} // Ensure a unique key for each tag
                      label={item}
                      deleteIcon={
                        query.tags.includes(index) ? (
                          <Clear style={{ color: 'white' }} />
                        ) : (
                          <></>
                        )
                      }
                      onDelete={() => {
                        changeTags(index)
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
