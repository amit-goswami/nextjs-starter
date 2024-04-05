import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnText: string | React.ReactNode
  className?: string
  disable?: boolean
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  btnText,
  disable = false,
  className = 'rounded-full px-6 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit disabled:text-gray-400 disabled:cursor-not-allowed dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-700',
  onClick,
  ...props
}) => {
  return React.createElement(
    'button',
    {
      className,
      onClick,
      disabled: disable,
      ...props
    },
    btnText
  )
}
