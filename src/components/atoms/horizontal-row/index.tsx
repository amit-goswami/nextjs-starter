import React, { ReactNode } from 'react'

interface HorizontalRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  style?: React.CSSProperties
  id?: string
  onClick?: () => void
}

export const HorizontalRow = ({
  children,
  className = 'border-t border-gray-300 my-4',
  style,
  id,
  ...props
}: HorizontalRowProps) => {
  return React.createElement('hr', { ...props, style, id, className }, children)
}
