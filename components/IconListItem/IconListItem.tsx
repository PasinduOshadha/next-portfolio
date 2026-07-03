import Link from 'next/link'
import { DynamicIcon } from 'lucide-react/dynamic'

interface IconListItemProps {
  icon: string
  url: string
}

function IconListItem(props: IconListItemProps) {
    const {icon, url} = props;

  return (
    <Link href={url} target='_blank' rel='noopener noreferrer'>
        <DynamicIcon name={icon as never} />
    </Link>
  )
}

export default IconListItem
