import Joi from 'joi'
import trekDetailService from '../../trek-planner.service'
import { Container } from '@/components/atoms/container'
import { ITrekDetail } from '../../trek-planner.interface'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { FormSearchDropdown } from '@/components/organisms/form/form-search'
import { Button } from '@/components/atoms/button'
import { FormDateRangeInput } from '@/components/organisms/form/form-date-range'

type TrekPlannerBookNowProps = {
  tabsState?: ITrekDetail
  handleChangeTabs?: (index: number) => void
}

const parseDate = (date: string) => {
  const parsedDate = new Date(date)
  const month = parsedDate.getMonth() + 1
  const day = parsedDate.getDate()
  const year = parsedDate.getFullYear()
  return `${month}/${day}/${year}`
}

const bookTrekValidationSchema = Joi.object({
  source_location: Joi.string().required(),
  destination_location: Joi.string().required(),
  contact_number: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  trek_name: Joi.string().required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  payable_amount: Joi.number().required()
})

export const TrekPlannerBookNow = ({
  tabsState,
  handleChangeTabs
}: TrekPlannerBookNowProps) => {
  const today = new Date().toISOString().split('T')[0]
  if (!tabsState) return null

  const initialFormData = {
    source_location: '',
    destination_location: '',
    contact_number: '',
    email: '',
    trek_name: tabsState?.trek.trek_name || '',
    payable_amount: tabsState?.trek.price || ''
  }

  const getSearchedCitiesList = async (query: string) => {
    return trekDetailService.getSearchedCities(query)
  }

  const handleSubmit = (data: Record<string, string | number | boolean>) => {
    const createTrekRequestPayload = {
      trek_req: {
        source_location: data.source_location,
        destination_location: data.destination_location,
        contact_number: data.contact_number,
        email: data.email,
        start_date: parseDate(data.start_date as string),
        end_date: parseDate(data.end_date as string),
        trek: {
          trek_id: tabsState.trek.trek_id,
          trek_name: tabsState.trek.trek_name
        }
      }
    }
    console.log(createTrekRequestPayload)
  }

  return (
    <Container className="-mt-4">
      <Form
        validationSchema={bookTrekValidationSchema}
        initialValues={{
          ...initialFormData
        }}
        getFormData={(data) => handleSubmit(data)}
        className="space-y-2"
      >
        <FormSearchDropdown
          label="Start Point"
          name="source_location"
          getQuery={(query) => getSearchedCitiesList(query)}
        />
        <FormSearchDropdown
          label="Destination City"
          name="destination_location"
          getQuery={(query) => getSearchedCitiesList(query)}
        />
        <FormInput label="Trek Name" name="trek_name" disabled />
        <FormInput label="Contact Number" name="contact_number" />
        <FormInput label="Email" name="email" />
        <FormDateRangeInput
          label="Start Date"
          name="start_date"
          minDate={today}
        />
        <FormDateRangeInput label="End Date" name="end_date" minDate={today} />
        <FormInput label="Payable Amount" name="payable_amount" disabled />
        <Container className="mt-4">
          <Button type="submit" btnText="Book Now" />
        </Container>
      </Form>
    </Container>
  )
}
