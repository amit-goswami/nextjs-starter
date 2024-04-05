import { useState } from 'react'
import { Text } from '@/components/atoms/text'
import { Container } from '@/components/atoms/container'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'

type FileUploadProps = {
  name?: string
  label?: string
  labelRequired?: boolean
  className?: string
  disabled?: boolean
  maxSize?: number
  acceptedFormats?: string[]
  initialValue?: File | null
  onChange?: (file: File | null) => void
}

export const FileUpload = ({
  name = 'fileUpload',
  label = '',
  labelRequired = false,
  className = '',
  disabled = false,
  maxSize = 1024 * 1024 * 5,
  acceptedFormats = ['image/jpeg', 'image/png'],
  initialValue = null,
  onChange = () => {}
}: FileUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(initialValue)
  const [previewURL, setPreviewURL] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    setSelectedFile(file)
    setPreviewURL(null)
    setError(null)
    if (!file) return
    if (maxSize && file.size > maxSize) {
      setError(`File size exceeds ${maxSize / 1024 / 1024}MB`)
      setSelectedFile(null)
      return
    }
    if (acceptedFormats && !acceptedFormats.includes(file.type)) {
      setError(`Unsupported file format`)
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewURL(reader.result as string)
    }
    reader.readAsDataURL(file)
    onChange(file)
  }

  return (
    <Container className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        {labelRequired && <span className="text-red-500"> * </span>}
      </label>
      <Container className="mt-2">
        <input
          type="file"
          id={name}
          name={name}
          className="hidden"
          onChange={handleFileChange}
          disabled={disabled}
        />
        <label
          htmlFor={name}
          className="rounded-full flex items-center gap-2 justify-center mx-0 px-6 py-0 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-900/20 duration-200"
        >
          <Text as="p">Upload File</Text>
          <ArrowUpCircleIcon className="w-5 h-5" />
        </label>
      </Container>
      {error && (
        <Container className="mt-0 text-red-500">
          <span>{error}</span>
        </Container>
      )}
      {selectedFile && (
        <Container className="mt-2">
          <img
            src={previewURL || ''}
            alt="Preview"
            className="max-w-full h-auto"
          />
          <p>Selected file: {selectedFile.name}</p>
        </Container>
      )}
    </Container>
  )
}
