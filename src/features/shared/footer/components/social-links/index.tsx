import { Text } from '@/components/atoms/text'

type SocialLinkProps = {
  href: string
  svg: React.ReactNode
  label: string
}

export const SocialLinks = ({ href, svg, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    className="text-gray-900 hover:text-[#f68a1e] ms-5"
  >
    {svg}
    <Text className="sr-only">{label}</Text>
  </a>
)
